# Review Action Items

Based on technical + marketing review (Feb 2026).

## Already Done

- [x] Fix memory leak in HeroGrid `setInterval` (no `clearInterval`)
- [x] Switch default locale from EN to ES (nuxt.config, i18n.config, site.defaultLocale)
- [x] Fix header language dropdown z-index overlap with hero
- [x] Add Sanity CMS integration + migrate all pages to Sanity-first
- [x] Replace 4-category featured services with 6 individual best-sellers
- [x] Fix podology "desde" prices to locale-neutral format
- [x] Fix Footer.vue stray double-quote (resolved during Sanity migration rewrite)
- [x] Fix ReviewsSection.vue reactivity — now uses `computed()` with Sanity data
- [x] Fix gallery.vue reactivity — now uses `computed()` with Sanity data
- [x] Shimmer CSS duplication reduced — FeaturedServices rewritten without shimmer (only HeroGrid remains)

---

## Technical Bugs (Must Fix)

- [x] **Header.vue** — language dropdown doesn't close on outside click. Added VueUse `onClickOutside` handler

## Architecture Issues (Should Fix)

- [x] **contact.vue** — removed duplicate LocalBusiness schema (already defined globally via `schemaOrg.identity`)
- [x] **Footer.vue** — social URLs now pulled from `useSiteSettings()` instead of hardcoded
- [x] **Breadcrumbs** (`useServicePageSchema.ts`) — "Home"/"Services" now use `t("breadcrumb.home")` / `t("breadcrumb.services")`
- [x] **useAnalytics.ts** — switched from raw `window.gtag` to `useScriptGoogleAnalytics()` proxy (events queued until script loads)
- [x] **ogLocale** — extracted to `useOgLocale()` composable, replaced in all 13 pages
- [x] **Button.vue** — added `nofollow` prop (default `true`), social links can now use `:nofollow="false"`

## Performance

- [x] ~~**Shimmer CSS**~~ — reduced from 3 to 1 (only HeroGrid.vue). Could still move to `main.css` but low priority
- [x] **PWA manifest** — added 192x192 and 512x512 icon references to `site.webmanifest`

## Dependencies

- [x] `npm audit` — 0 vulnerabilities found
- [x] `@nuxtjs/sitemap` — keeping as explicit dep (also included via `@nuxtjs/seo`, but harmless to keep)

---

## Marketing / Content

### Priority 1 — Immediate Impact (Free)

- [ ] **Cookie consent banner** — GA4 loads in production; add a simple consent banner (load GA4 only after consent) to comply with GDPR/LSSI
- [x] **Keep cookie policy page** — page exists at `/cookie-policy`
- [x] **Replace placeholder reviews** — replaced 3 placeholders (Emily Thompson, Sofía López, Rachel Johnson) with real Google reviews (Majo, Tatiana G., D. Rune) in ES/EN/RU
- [x] **Add real photos** — 18 real photos uploaded to Sanity gallery (8 manicure, 4 pedicure, 3 lashes, 3 brows)
- [x] **Google Business Profile** — live and configured

### Priority 2 — Quick Wins

- [ ] **Referral card** — print "Bring a friend, both get 10%" cards (~15 EUR for 250 on Vistaprint)
- [ ] **Google review QR code** — print and place at reception desk + hand out after appointments
- [ ] **WhatsApp follow-up** — after each appointment, send review request with direct Google review link
- [ ] **WhatsApp Status** — post a photo of today's work daily (free reach to all client contacts)
- [x] **Fix booking page styling** — restyled to Tailwind with rounded cards, icons, site brand colors

### Priority 3 — Growth

- [ ] **Instagram Reels** — 3/week: before/after, process time-lapse, client reaction. Hashtags: #santapola #extensionespestañas #manicurasantapola #costablanca
- [ ] **Russian expat communities** — join Costa Blanca Russian Facebook/Telegram groups. Post occasionally in Russian on Instagram (1 in 4 posts)
- [x] **Google review link on site** — added 5-star badge with Google review link in hero section (`g.page/r/CSnzBqO8436ZEAE/review`)
- [x] **Hero copy** — changed to "Your Perfect Look Starts Here" with service-focused subtitle
- [x] **Header CTA** — replaced "Contact Us" with gold "Book Now" → WhatsApp button
- [ ] **First-visit offer** — 10% off or complimentary add-on for new clients

### Priority 4 — Later

- [ ] Blog / SEO content — "How long do lash extensions last?", aftercare guides, trend posts
- [ ] Location-specific content for Elche, Guardamar, Alicante (long-tail local SEO)
- [ ] Facebook/Meta Pixel for Instagram retargeting (only after photos + reviews are solid)
- [ ] Booking software (Booksy/Fresha) — only when turning away clients due to volume
- [ ] Staff/team section on about page with real names and photos

---

## What NOT to Spend Money On

- Facebook/Instagram ads (not yet — need photos and reviews first)
- SEO agencies (300-500 EUR/month for less than the above)
- Professional photography (phone photos are fine to start)
- Booking software commissions (WhatsApp is fine at current volume)
