# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nuxt 4 website for **Lash & Nails Santa Pola**, a beauty salon in Santa Pola, Spain. Multilingual (EN/ES/RU) with full SEO optimization for local search.

## Commands

```bash
npm run dev          # Dev server at localhost:3000
npm run build        # Production build
npm run generate     # Static site generation
npm run preview      # Preview production build
```

No test framework configured. Linting via `@nuxt/eslint` (config in `eslint.config.mjs`).

## Key Technologies

Nuxt 4.1.3, Vue 3 (Composition API), TypeScript, Tailwind CSS v4 (via Vite plugin), @nuxtjs/i18n, @nuxtjs/seo, @nuxt/scripts, @nuxt/fonts, @nuxtjs/sanity, @nuxt/image

## Architecture

### Data Sources (priority order)

1. **Sanity CMS** (project `4dsh8g5u`) — All page content, gallery images, service pricing, testimonials, FAQs, hero images, site settings. Managed via Sanity Studio at `lashandnails.sanity.studio`. All pages and components fetch Sanity data first and fall back to `<i18n>` blocks if empty.

2. **`config/business.config.ts`** — Build-time business data (geo coordinates, Schema.org properties, URL). Exports `BUSINESS`, `OPENING_HOURS_SPECIFICATION`, `POTENTIAL_ACTIONS`. Runtime business data (phone, address, hours, social) comes from `useSiteSettings()` composable which fetches from Sanity `siteSettings` with `business.config.ts` fallback.

3. **`config/services.config.ts`** — Service definitions with prices in EUR (fallback when Sanity is empty). Exports `SERVICES_DATA`, `SERVICES_SCHEMA`, `getServiceBySlug()`, `getServiceSchemaBySlug()`.

### Sanity CMS (`schemas/`)

- **Object schemas**: `localizedString` (en/es/ru), `localizedText`, `seoFields`
- **Document schemas**: `galleryImage`, `heroImage`, `service`, `testimonial`, `faqItem`, `siteSettings`, `homePage`, `aboutPage`, `servicesOverviewPage`, `pricingPage`, `bookingPage`, `contactPage`, `legalPage`
- **Singletons**: `siteSettings`, `homePage`, `aboutPage`, `servicesOverviewPage`, `pricingPage`, `bookingPage`, `contactPage` (fixed `_id`)
- **List documents**: `legalPage` (3 instances: `privacy-policy`, `cookie-policy`, `legal-notice`)
- Studio config: `sanity.config.ts` (Russian locale, structured sidebar with singleton + list grouping)
- Local studio: `npx sanity dev` → `localhost:3333`
- Deploy studio: `npx sanity deploy`
- Seed script: `SANITY_TOKEN=... npx tsx scripts/seed-pages.ts`
- `/admin` route redirects to hosted studio

### Composables (`app/composables/`)

- **`useSanityData.ts`** — GROQ queries + locale-aware field extraction. Exports `useFetchGalleryImages()`, `useFetchHeroImages()`, `useFetchService(slug)`, `useFetchAllServices()`, `useFetchTestimonials()`, `useFetchFAQs()`, `useFetchSiteSettings()`, `useFetchHomePage()`, `useFetchAboutPage()`, `useFetchServicesOverview()`, `useFetchPricingPage()`, `useFetchBookingPage()`, `useFetchContactPage()`, `useFetchLegalPage(slug)`, `getLocalized(field, locale)`
- **`useSiteSettings()`** — Unified site settings composable. Fetches from Sanity `siteSettings`, falls back to `business.config.ts`. Returns reactive object with phone, email, telegram, address, hours, social.
- **`useServicePageSchema(slug, pageTitle, seoDescription)`** — Adds WebPage + BreadcrumbList + Service Schema.org markup to service pages
- **`useAnalytics()`** — GA4 event tracking wrapper (trackWhatsAppClick, trackPhoneClick, trackServiceView, trackBookingIntent, etc.)

### Component Patterns

- **`Typo.vue`** — Typography component with variant prop (h1-h6, p, span, lead). Uses `font-display` for headings.
- **`Button.vue`** — Smart button that auto-resolves to `NuxtLink` (internal `to`), `<a>` (external `href`), or `<button>`. Adds `nofollow` for external links.
- **`Lightbox.vue`** — Image lightbox using `defineExpose()` to expose `open()/close()` methods to parent via template ref.
- **`PricingTable.vue`** — Flexible pricing table accepting categories with offers, optional CTAs and links per category.
- **`Header.vue`** — Main header with desktop nav, mobile menu, and language switcher (not `MainNavigation.vue`, which appears unused).

### Service Page Pattern

All service pages (`app/pages/services/*.vue`) follow this structure:
Hero → Breadcrumb → Overview → Pricing → Techniques → Benefits → Process → Aftercare → CTA

Each uses:
- `useServicePageSchema()` composable for structured data
- `translatedOffers` — Sanity-first pricing via `useFetchService(slug)`, falls back to `services.config.ts`
- Local `<i18n>` block for page content (overview, techniques, benefits, process, aftercare, CTA)

### Styling

Tailwind CSS v4 configured via Vite plugin (no standalone tailwind.config). Custom theme in `app/assets/css/main.css`:
- Display font: "Noto Serif Display" (via `--font-display`)
- Colors: Primary brown `#6B5B52`, accent gold `#FFC107`, cream `#E8D5C4`
- "Prata" font from Google Fonts registered in `nuxt.config.ts`

## i18n — Critical Rules

**MUST use `t()` from `useI18n()`, NOT `$t()` for per-component translations.**

```vue
<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })

useSeoMeta({
  title: () => t('seoTitle'),           // Functions for reactivity
  description: () => t('seoDescription'),
  ogTitle: () => t('seoTitle'),
  ogDescription: () => t('seoDescription'),
})
</script>

<i18n lang="json">
{
  "es": { "seoTitle": "...", "seoDescription": "..." },
  "en": { "seoTitle": "...", "seoDescription": "..." },
  "ru": { "seoTitle": "...", "seoDescription": "..." }
}
</i18n>
```

- Strategy: `prefix` — all routes are `/en/`, `/es/`, `/ru/`
- **Local `<i18n>` blocks** for page/component content (tree-shaking)
- **Global translations** (`i18n/locales/*.json`) only for nav, common UI, footer
- Fallback locale: English

## SEO Rules

- Canonical URLs and hreflang tags are **auto-generated** — do NOT add manually
- Sitemap and robots.txt are auto-generated
- Use `useSeoMeta()` with **reactive functions** `() => t('key')` for localized meta
- Schema.org LocalBusiness identity configured globally in `nuxt.config.ts`
- GA4 (`G-0SKWWBRJC4`) loaded in production only via `@nuxt/scripts`

## Business Info Update Checklist

When changing business details, update via Sanity Studio (siteSettings document). Fallback values in:
1. `config/business.config.ts` (build-time fallback for geo, Schema.org, URL)
2. `public/site.webmanifest` (PWA app name)

## Sanity CMS

- **Project ID**: `4dsh8g5u` | **Dataset**: `production`
- Env vars in `.env` (gitignored) — see `.env.example`
- Module: `@nuxtjs/sanity` in `nuxt.config.ts` with `@nuxt/image` (Sanity provider)
- All pages and components use Sanity-first pattern: fetch CMS data → fall back to `<i18n>` blocks
- Use `getLocalized(field, locale)` helper to extract current locale from `{ en, es, ru }` objects
- Page pattern: `const { data: pageData } = useFetchXxxPage()` → `s(pageData.value?.field) || t("fallback")`
- Components use `useSiteSettings()` for phone, address, hours, social (not `useRuntimeConfig().public.business`)
