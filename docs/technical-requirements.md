# Technical Requirements - lashandnails.online

## Technology Stack

### Core Framework
- **Nuxt 4.1.3** (Vue 3.5.22)
  - SSR/SSG for SEO optimization
  - File-based routing
  - Auto-imports
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Utility-first styling
- **Nuxt Modules**:
  - `@nuxtjs/tailwindcss` - Tailwind integration
  - `@nuxt/eslint` - Code quality
  - `@nuxt/fonts` - Font optimization
  - `@nuxt/scripts` - Third-party scripts (Google Maps, analytics)

---

## Must-Have Technical Features

### 1. Performance
- **Target Metrics**:
  - First Contentful Paint: < 1.5s
  - Largest Contentful Paint: < 2.5s
  - Time to Interactive: < 3s
  - Lighthouse Score: > 90

- **Implementation**:
  - Image optimization (JPEG compressed at 80-85% quality)
  - Lazy loading for images and components
  - Code splitting by route
  - Critical CSS inlining (Tailwind CSS v4)
  - Font preloading
  - CDN for static assets
  - Minification and compression (Brotli/Gzip)
  - Aggressive browser caching for JPEG images

### 2. SEO & Discoverability

#### Meta Tags & Schema
```typescript
// Each page needs:
- Unique <title> (50-60 chars)
- Meta description (150-160 chars)
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags
- Canonical URLs
- Hreflang tags for multilingual
```

#### Structured Data (Schema.org)
```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Lash and Nails Online",
  "image": "...",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "Santa Pola",
    "addressRegion": "Alicante",
    "postalCode": "...",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "...",
    "longitude": "..."
  },
  "url": "https://lashandnails.online",
  "telephone": "+34...",
  "priceRange": "$$",
  "openingHoursSpecification": [...],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "..."
  }
}
```

#### Technical SEO
- Sitemap.xml generation
- Robots.txt configuration
- Clean URL structure
- 301 redirects for language switching
- Mobile-friendly (responsive design)
- SSL certificate (HTTPS)
- Fast server response time

### 3. Internationalization (i18n)

#### Languages
1. **Spanish (es)** - Default
2. **English (en)**
3. **Polish (pl)** - Optional
4. **Russian (ru)** - Optional

#### Implementation Strategy
```
Option A: Path-based
- lashandnails.online/ (es - default)
- lashandnails.online/en/
- lashandnails.online/pl/

Option B: Subdomain (if multiple languages)
- lashandnails.online (es)
- en.lashandnails.online
- pl.lashandnails.online
```

#### i18n Module
- Use `@nuxtjs/i18n` module
- Language switcher in header/footer
- Browser language detection
- Store language preference in localStorage/cookie
- Hreflang tags for each language version
- Translate URLs (SEO-friendly slugs)

```typescript
// nuxt.config.ts
i18n: {
  locales: [
    { code: 'es', iso: 'es-ES', file: 'es.json', name: 'Español' },
    { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
    { code: 'ru', iso: 'ru-RU', file: 'ru.json', name: 'Русский' }
  ],
  defaultLocale: 'es',
  strategy: 'prefix_except_default'
}
```

### 4. Mobile-First Design

#### Responsive Breakpoints (Tailwind CSS v4)
```css
/* Mobile-first approach - Tailwind default breakpoints */
- sm: 640px   (large mobile)
- md: 768px   (tablet)
- lg: 1024px  (desktop)
- xl: 1280px  (large desktop)
- 2xl: 1536px (extra large)

/* Custom breakpoints can be added in tailwind.config if needed */
```

#### Mobile Features
- Touch-friendly UI (min 44px tap targets)
- Swipeable image galleries
- Sticky mobile header
- Bottom navigation/CTA bar
- Hamburger menu
- Click-to-call buttons
- WhatsApp floating action button
- Fast mobile load time

### 5. Third-Party Integrations

#### Google Services
```typescript
// Google Maps
- Embedded map on contact page
- Clickable directions
- Business location marker
- Using @nuxt/scripts for optimization

// Google Analytics 4
- Page views
- Event tracking (clicks, form submissions)
- Conversion tracking

// Google Tag Manager (optional)
- Centralized tag management

// Google Business Profile
- Reviews widget integration
- "Reserve with Google" (if booking system supports)
```

#### Social Media
```typescript
// Instagram
- Feed integration (@nuxt/scripts or API)
- Embed latest posts on homepage
- Link to profile

// Facebook
- Page plugin (optional)
- Meta Pixel for ads tracking

// WhatsApp Business
- Click-to-chat button: https://wa.me/34XXXXXXXXX
- Floating action button (mobile)
- "Message us" CTA
```

#### Booking System Integration
**Options to evaluate**:
1. **Fresha** - Free for salons, commission on new customers
2. **Treatwell** - Largest EU beauty marketplace
3. **Booksy** - Popular for nail salons
4. **Custom form** - Fallback with WhatsApp/email notifications

**Requirements**:
- Embed booking widget
- Service selection
- Date/time picker
- Customer details form
- Confirmation emails
- Calendar sync

### 6. Analytics & Tracking

#### Core Metrics
```typescript
// Page tracking
- Page views by URL
- Language distribution
- Device type (mobile/desktop/tablet)
- Geographic location
- Bounce rate
- Time on page

// Event tracking
- CTA clicks ("Book Now", "Call", "WhatsApp")
- Form submissions
- Booking widget interactions
- Instagram profile clicks
- Gallery image views
- Service page visits

// Conversions
- Booking completions
- Contact form submissions
- Phone number clicks
- WhatsApp clicks
- Review link clicks
```

#### Tools
- Google Analytics 4
- Google Search Console
- Facebook Pixel (for ads)
- Hotjar/Microsoft Clarity (heatmaps - optional)

### 7. Security & Privacy

#### Security
- SSL/TLS certificate (HTTPS)
- Security headers:
  ```
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Strict-Transport-Security: max-age=31536000
  ```
- CSRF protection on forms
- Rate limiting on contact forms
- Input validation & sanitization
- Secure headers via Nuxt config

#### Privacy (GDPR Compliance)
- Cookie consent banner
- Privacy Policy page
- Terms & Conditions page
- Data processing disclosure
- Cookie settings management
- Google Analytics anonymization

**Required**:
```typescript
// Cookie consent module
- @nuxtjs/google-analytics with consent mode
- Cookie categories: Essential, Analytics, Marketing
- Opt-in before tracking (EU law)
```

### 8. Forms & Contact

#### Contact Form
```typescript
// Fields
- Name (required)
- Email (required, validated)
- Phone (optional)
- Service interest (dropdown)
- Preferred date/time (optional)
- Message (required)
- CAPTCHA (spam protection)

// Backend
- Form validation (client + server)
- Email service (SendGrid, Resend, Nodemailer)
- Send to: salon email
- Auto-reply to customer
- Success/error handling
```

#### Newsletter Subscription
- Email input
- GDPR consent checkbox
- Integration with email service (Mailchimp, ConvertKit, etc.)

### 9. Image Management

#### Strategy
- Store optimized JPEGs in `/public/images/`
- Manual optimization using tools (ImageOptim, TinyJPG, etc.)
- Lazy loading with native browser support or simple Vue directive
- **Format: JPEG only** (better browser caching, simpler pipeline)
- Generate multiple sizes for responsive display
- Proper alt text for accessibility

#### Organization
```
/public/images/
  /gallery/
    /lashes/
      /thumbs/     # 400px width
      /medium/     # 800px width
      /full/       # 1600px width
    /nails/
      /thumbs/
      /medium/
      /full/
    /beauty/
      /thumbs/
      /medium/
      /full/
  /team/
  /hero/
  /logos/
```

#### Optimization
- Max original size: 2000px width
- Compression: 80-85% quality (JPEG)
- Progressive JPEG encoding
- Use CDN if available (Vercel CDN handles caching)
- srcset for responsive images
- Aggressive cache headers (1 year for images)

### 10. Accessibility (WCAG 2.1 AA)

#### Requirements
- Semantic HTML (headings hierarchy)
- Alt text for all images
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast ratio > 4.5:1
- Skip to main content link
- Form labels and error messages
- Language declaration in HTML

#### Tools
- Lighthouse accessibility audit
- axe DevTools
- WAVE browser extension

---

## Development Setup

### Tailwind CSS v4 Configuration

#### Installation
```bash
npm install -D @nuxtjs/tailwindcss tailwindcss@next @tailwindcss/postcss@next
```

#### Nuxt Config
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    viewer: true // Dev-time viewer at /_tailwind/
  }
})
```

#### CSS Entry Point (Tailwind v4)
```css
/* assets/css/main.css */
@import "tailwindcss";

/* Tailwind v4 theme configuration using @theme */
@theme {
  /* Brand colors for beauty salon */
  --color-primary: #...; /* Main brand color */
  --color-secondary: #...; /* Accent color */
  --color-accent: #...; /* For CTAs */

  /* Font families */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-display: 'Playfair Display', serif;
}

/* Custom styles */
* {
  font-family: var(--font-sans);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
}

/* Custom component classes */
.btn-primary {
  @apply px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors;
}

.btn-whatsapp {
  @apply px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors;
}
```

**Note**: Tailwind v4 uses CSS-based configuration via `@theme` directive instead of `tailwind.config.ts`.

### Environment Variables
```bash
# .env
NUXT_PUBLIC_GOOGLE_MAPS_API_KEY=...
NUXT_PUBLIC_GA_MEASUREMENT_ID=...
NUXT_PUBLIC_INSTAGRAM_TOKEN=...
NUXT_PUBLIC_WHATSAPP_NUMBER=34XXXXXXXXX

# Private (server-side only)
CONTACT_EMAIL_TO=info@lashandnails.online
SENDGRID_API_KEY=...
```

### Scripts Required
```json
{
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "typecheck": "nuxt typecheck"
  }
}
```

---

## Hosting & Deployment

### Recommended Platforms
1. **Vercel** (current .vercel folder exists)
   - Automatic deployments from Git
   - Edge functions
   - SSL included
   - CDN globally distributed

2. **Netlify**
   - Similar features to Vercel
   - Form handling built-in

3. **Cloudflare Pages**
   - Fast CDN
   - Free SSL

### Deployment Strategy
- **Main branch** → Production (lashandnails.online)
- **Preview deployments** for PRs
- Auto-deploy on push to main
- Environment variables in platform settings

### Build Configuration
```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  ssr: true, // or generate: true for static
  nitro: {
    preset: 'vercel', // or 'netlify', 'cloudflare-pages'
    compressPublicAssets: true
  }
})
```

---

## Content Management

### Options

#### Option 1: Hardcoded (Simple)
- Content in Vue components
- Translation files for i18n
- Fast, no external dependencies
- Changes require redeployment

#### Option 2: Headless CMS (Flexible)
**Recommended for non-technical content updates**:

1. **Sanity.io**
   - Real-time editing
   - Image optimization built-in
   - Multilingual support
   - Free tier: 10k documents

2. **Strapi**
   - Self-hosted or cloud
   - Full control
   - REST & GraphQL API

3. **Contentful**
   - Enterprise-grade
   - Robust i18n
   - Free tier available

**Use cases for CMS**:
- Gallery images (easy to add new work)
- Service descriptions & pricing
- Blog posts
- Special offers
- Team member profiles

---

## Testing Requirements

### Manual Testing Checklist
- [ ] Test on real devices (iOS Safari, Android Chrome)
- [ ] Test all forms
- [ ] Test booking flow
- [ ] Test in all languages
- [ ] Test click-to-call/WhatsApp
- [ ] Test Google Maps navigation
- [ ] Verify analytics tracking
- [ ] Test with slow 3G connection
- [ ] Check accessibility with screen reader

### Automated Testing
```typescript
// Optional but recommended
- Lighthouse CI (performance/SEO/accessibility)
- E2E tests for critical flows (booking)
- Component tests for key components
```

---

## Browser Support

### Target Browsers
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari iOS (last 2 versions)
- Safari macOS (last 2 versions)
- Samsung Internet (last 2 versions)

### Polyfills
- Not needed for modern browsers
- Nuxt handles most automatically

---

## Monitoring & Maintenance

### Tools
1. **Google Search Console**
   - SEO health
   - Indexing status
   - Search queries

2. **Google Analytics 4**
   - Traffic monitoring
   - User behavior
   - Conversions

3. **Uptime monitoring**
   - UptimeRobot (free)
   - Pingdom
   - Vercel Analytics

4. **Error tracking** (optional)
   - Sentry
   - LogRocket

### Regular Tasks
- Monitor Google Business reviews → respond within 24h
- Update gallery with new work (weekly)
- Check analytics (weekly)
- Update special offers (monthly)
- Backup data (if using CMS)
- Update dependencies (monthly)
- Check broken links (quarterly)

---

## Phase 1 MVP (Minimum Viable Product)

### Core Pages (Spanish + English only)
- Home
- Services (3 subpages)
- Gallery
- About
- Contact

### Core Features
- Mobile responsive
- Google Maps integration
- WhatsApp click-to-chat
- Contact form
- Basic SEO (meta tags, sitemap)
- SSL
- Google Analytics
- Fast performance

### Launch Checklist
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Google Business Profile created & linked
- [ ] Google Analytics tracking
- [ ] Contact form tested
- [ ] All images optimized
- [ ] Meta tags on all pages
- [ ] Sitemap.xml submitted to Google
- [ ] Mobile tested on real devices
- [ ] Privacy policy page
- [ ] Cookie consent banner

---

## Phase 2 Enhancements (Post-Launch)

### Additional Features
- Online booking system integration
- Blog/tips section
- Newsletter subscription
- Polish + Russian languages
- Customer reviews section
- Instagram feed auto-update
- Advanced analytics dashboards
- CMS integration (if needed)
- A/B testing for CTAs
- Live chat widget

### Marketing Integrations
- Facebook Pixel
- TikTok Pixel (if doing TikTok ads)
- Google Ads conversion tracking
- Email marketing automation

---

## Budget Estimates

### Free/Included
- Nuxt framework
- Vercel hosting (free tier likely sufficient)
- Google Analytics
- Google Search Console
- SSL certificate
- WhatsApp Business

### Paid (Optional)
- Domain: ~€10-15/year
- Booking system: €0-50/month (depends on platform)
- Email service: €0-15/month (SendGrid, Resend)
- CMS: €0-20/month (Sanity free tier available)
- Premium fonts: €0-200 one-time (if needed)
- Stock photos: €0-30/month (if needed)
- Google Ads: Variable budget
- Facebook/Instagram Ads: Variable budget

**Total monthly**: €0-100 depending on features chosen

---

## Performance Budget

### Max File Sizes
- HTML: < 50KB (gzipped)
- CSS: < 50KB (gzipped)
- JS (total): < 200KB (gzipped)
- Images: < 200KB each (optimized)
- Fonts: < 100KB total

### Max Requests
- Initial page load: < 30 requests
- Full page load: < 50 requests

### Lighthouse Targets
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95
