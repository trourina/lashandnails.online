# Implementation Checklist - lashandnails.online

A systematic, step-by-step implementation plan for the beauty salon website.

---

## Phase 0: Foundation Setup ✅

- [x] Initialize Nuxt 4 project
- [x] Add TypeScript support
- [x] Install and configure @nuxtjs/i18n (ES/EN)
- [x] Configure i18n with local `<i18n>` blocks for tree-shaking
- [x] Install and configure @nuxtjs/sitemap
- [x] Configure @nuxt/scripts module
- [x] Configure @nuxt/fonts module
- [x] Create basic translation files (i18n/locales/)
- [x] Install Tailwind CSS v4 via Vite plugin
- [x] Document technical requirements
- [x] Create sitemap structure document

---

## Phase 1: Styling & Design System

### 1.1 Tailwind CSS Setup ✅
- [x] Install Tailwind CSS v4 and dependencies
- [x] Configure Tailwind via Vite plugin in `nuxt.config.ts`
- [x] Using default Tailwind theme (no custom config needed)
- [x] Verified Tailwind classes work in components

### 1.2 Design Tokens
- [ ] Choose and configure fonts (@nuxt/fonts)
  - [ ] Primary font (body text) - use default or add if needed
  - [ ] Display font (headings) - use default or add if needed
- [ ] Create reusable button components if needed

### 1.3 Base Components
- [x] Create layout components
  - [x] `layouts/default.vue` - main layout with header/main/footer
  - [x] `components/MainNavigation.vue` - navigation menu
  - [ ] `components/AppFooter.vue` - footer
  - [ ] `components/LanguageSwitcher.vue` - i18n toggle
- [ ] Create UI components
  - [ ] `components/ui/Button.vue` - primary/secondary variants
  - [ ] `components/ui/Container.vue` - max-width wrapper
  - [ ] `components/ui/Card.vue` - content cards
  - [ ] `components/ui/Section.vue` - page sections

---

## Phase 2: Core Pages Structure

### 2.1 Setup Pages Directory ✅
- [x] Create `app/pages/` directory (Nuxt 4 structure)
- [x] Update `app.vue` to use `<NuxtLayout>` and `<NuxtPage />`
- [x] Add canonical tags to all pages
- [x] Configure locale-aware canonical URLs

### 2.2 Home Page
- [x] Create `pages/index.vue` with basic structure and local i18n
- [x] Add canonical tag and SEO meta tags
- [ ] Build hero section
  - [ ] Large heading with salon name
  - [ ] Subtitle/tagline
  - [ ] Primary CTA (Book Now button)
  - [ ] Hero image or before/after slider
- [ ] Services overview section (3 cards)
  - [ ] Lash extensions card
  - [ ] Nail design card
  - [ ] Beauty treatments card
- [ ] Featured gallery section
  - [ ] 6-8 best portfolio images
  - [ ] Link to full gallery
- [ ] Reviews/testimonials section
  - [ ] Display 3-4 customer reviews
  - [ ] Star ratings
- [ ] Location highlight
  - [ ] "Find us in Santa Pola" section
  - [ ] Quick contact info
- [ ] CTA section
  - [ ] Final "Book Now" prompt

### 2.3 Services Pages
- [x] Create `pages/services/index.vue` with basic structure, i18n, and canonical
- [x] Create `pages/services/lash-extensions.vue` with basic structure, i18n, and canonical
  - [ ] Service description
  - [ ] Techniques offered (classic, volume, mega volume)
  - [ ] Pricing table
  - [ ] Before/after gallery
  - [ ] FAQ section
  - [ ] Booking CTA
- [x] Create `pages/services/nail-design.vue` with basic structure, i18n, and canonical
  - [ ] Service description (gel, acrylics, nail art)
  - [ ] Design inspiration gallery
  - [ ] Pricing
  - [ ] FAQ section
  - [ ] Booking CTA
- [x] Create `pages/services/beauty-treatments.vue` with basic structure, i18n, and canonical
  - [ ] Service description (facials, skincare)
  - [ ] Services list
  - [ ] Pricing
  - [ ] Booking CTA

### 2.4 Gallery Page
- [x] Create `pages/gallery.vue` with basic structure, i18n, and canonical
- [ ] Implement image grid/masonry layout
- [ ] Add category filters (All, Lashes, Nails, Beauty)
- [ ] Implement lightbox/modal for full-size images
- [ ] Add lazy loading for images
- [ ] Include "Book Similar Look" CTA

### 2.5 About Page
- [x] Create `pages/about.vue` with basic structure, i18n, and canonical
- [ ] Studio story section
- [ ] Team member profiles
  - [ ] Photos
  - [ ] Names and roles
  - [ ] Specializations
  - [ ] Languages spoken
- [ ] Studio photos
- [ ] Quality & hygiene standards section
- [ ] Certifications/credentials

### 2.6 Contact Page
- [x] Create `pages/contact.vue` with basic structure, i18n, and canonical
- [ ] Contact information display
  - [ ] Address with landmarks
  - [ ] Phone (click-to-call)
  - [ ] Email
  - [ ] WhatsApp button
  - [ ] Opening hours
- [ ] Google Maps embed
- [ ] Contact form (build in Phase 3)
- [ ] Tourist-friendly directions

### 2.7 Booking Page
- [x] Create `pages/booking.vue` with basic structure, i18n, and canonical
- [ ] Placeholder for booking system integration
- [ ] Alternative contact options (WhatsApp, phone)
- [ ] Service selection form
- [ ] Terms and cancellation policy

### 2.8 Legal Pages
- [ ] Create `pages/privacy.vue` - Privacy Policy
- [ ] Create `pages/terms.vue` - Terms & Conditions
- [ ] GDPR compliance text

---

## Phase 3: Interactive Features

### 3.1 Contact Form
- [ ] Create `components/ContactForm.vue`
- [ ] Form fields:
  - [ ] Name (required)
  - [ ] Email (required, validated)
  - [ ] Phone (optional)
  - [ ] Service interest (dropdown)
  - [ ] Message (required)
- [ ] Client-side validation
- [ ] Server-side API endpoint (`server/api/contact.post.ts`)
- [ ] Email service integration (SendGrid, Resend, or Nodemailer)
- [ ] Success/error message handling
- [ ] Loading state during submission

### 3.2 Image Gallery Component
- [ ] Create `components/Gallery.vue`
- [ ] Implement responsive grid
- [ ] Category filtering
- [ ] Lightbox/modal functionality
- [ ] Keyboard navigation (arrows, ESC)
- [ ] Touch/swipe support for mobile
- [ ] Image preloading

### 3.3 Before/After Slider
- [ ] Create `components/BeforeAfterSlider.vue`
- [ ] Drag/slide functionality
- [ ] Touch support
- [ ] Use for hero section and service pages

### 3.4 WhatsApp Integration
- [ ] Create `components/WhatsAppButton.vue` floating action button
- [ ] Format WhatsApp link: `https://wa.me/34XXXXXXXXX`
- [ ] Add to all pages (via layout)
- [ ] Mobile-optimized positioning
- [ ] Add WhatsApp number to environment variables

---

## Phase 4: Third-Party Integrations

### 4.1 Google Maps
- [ ] Get Google Maps API key
- [ ] Add API key to `.env`
- [ ] Configure @nuxt/scripts for Google Maps
- [ ] Implement map on contact page
- [ ] Add business location marker
- [ ] Test clickable directions

### 4.2 Google Analytics 4
- [ ] Create GA4 property
- [ ] Get measurement ID
- [ ] Add to `.env`
- [ ] Configure @nuxt/scripts for GA4
- [ ] Set up event tracking:
  - [ ] Page views
  - [ ] CTA button clicks (Book Now, Call, WhatsApp)
  - [ ] Form submissions
  - [ ] Service page visits
  - [ ] Gallery interactions

### 4.3 Instagram Feed (Optional)
- [ ] Explore Instagram API options
- [ ] Get access token
- [ ] Create `components/InstagramFeed.vue`
- [ ] Display latest posts on homepage
- [ ] Link to Instagram profile

### 4.4 Google Business Profile Integration
- [ ] Embed Google reviews widget
- [ ] Add "Reserve with Google" if using compatible booking system

---

## Phase 5: SEO Optimization

### 5.1 Meta Tags & SEO
- [ ] Create SEO composable or plugin
- [x] Add canonical URLs to all pages (with locale awareness)
- [ ] Add unique meta titles for all pages
- [ ] Add unique meta descriptions for all pages
- [ ] Configure Open Graph tags
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image (create social share images)
  - [x] og:url (on homepage)
- [ ] Configure Twitter Card tags
- [ ] Configure hreflang tags (ES/EN)

### 5.2 Structured Data (Schema.org)
- [ ] Create Schema.org JSON-LD component
- [ ] Implement LocalBusiness schema
  - [ ] Name, address, phone
  - [ ] Geo coordinates
  - [ ] Opening hours
  - [ ] Price range
  - [ ] Images
- [ ] Add to homepage
- [ ] Test with Google Rich Results Test

### 5.3 Sitemap & Robots
- [ ] Verify sitemap.xml generation works
- [ ] Test multilingual sitemap (ES/EN URLs)
- [ ] Create/verify `robots.txt` in `public/`
- [ ] Submit sitemap to Google Search Console

### 5.4 Performance Optimization
- [ ] Optimize all images (JPEG, 80-85% quality)
- [ ] Create responsive image sizes (thumbs/medium/full)
- [ ] Implement lazy loading for images
- [ ] Test with Lighthouse (target >90 score)
- [ ] Optimize font loading (preload critical fonts)
- [ ] Enable compression (Brotli/Gzip via Vercel)

---

## Phase 6: Content Population

### 6.1 Translations
- [ ] Complete `i18n/locales/es.json` with all content keys
- [ ] Complete `i18n/locales/en.json` with all translations
- [ ] Test language switching on all pages
- [ ] Verify SEO-friendly translated URLs

### 6.2 Images
- [ ] Collect high-quality photos from salon
  - [ ] Lash extension work (10-15 photos)
  - [ ] Nail design work (15-20 photos)
  - [ ] Beauty treatments (5-10 photos)
  - [ ] Team photos (individual + group)
  - [ ] Studio interior/exterior
- [ ] Optimize all images
- [ ] Organize in `/public/images/` structure
- [ ] Add proper alt text for accessibility

### 6.3 Service Information
- [ ] Write detailed service descriptions (ES/EN)
- [ ] Create pricing tables
- [ ] Write FAQ content for each service
- [ ] Gather customer testimonials/reviews

### 6.4 Business Information
- [ ] Finalize contact details
  - [ ] Address
  - [ ] Phone number
  - [ ] WhatsApp number
  - [ ] Email
  - [ ] Opening hours
- [ ] Write About Us story
- [ ] Prepare team member bios
- [ ] Privacy Policy content
- [ ] Terms & Conditions content

---

## Phase 7: Security & Privacy

### 7.1 SSL & Security Headers
- [ ] Verify SSL certificate on Vercel
- [ ] Configure security headers in `nuxt.config.ts`
  - [ ] X-Frame-Options
  - [ ] X-Content-Type-Options
  - [ ] X-XSS-Protection
  - [ ] Strict-Transport-Security

### 7.2 GDPR Compliance
- [ ] Install cookie consent library (e.g., @nuxtjs/google-analytics with consent mode)
- [ ] Create cookie consent banner
- [ ] Add cookie preferences management
- [ ] Update Privacy Policy with data processing info
- [ ] Implement analytics opt-out

### 7.3 Form Security
- [ ] Add CSRF protection to contact form
- [ ] Implement rate limiting on API endpoints
- [ ] Sanitize form inputs (server-side)
- [ ] Add email validation

---

## Phase 8: Testing & QA

### 8.1 Browser Testing
- [ ] Test on Chrome (desktop + mobile)
- [ ] Test on Safari (iOS + macOS)
- [ ] Test on Firefox (desktop)
- [ ] Test on Edge (desktop)
- [ ] Test on Samsung Internet (Android)

### 8.2 Device Testing
- [ ] Test on iPhone (Safari)
- [ ] Test on Android phone (Chrome)
- [ ] Test on iPad/tablet
- [ ] Test on desktop (1920px+)
- [ ] Test on laptop (1366px)

### 8.3 Functionality Testing
- [ ] Test all navigation links
- [ ] Test language switching
- [ ] Test contact form submission
- [ ] Test WhatsApp click-to-chat
- [ ] Test click-to-call on mobile
- [ ] Test Google Maps directions
- [ ] Test image gallery/lightbox
- [ ] Test all CTAs (Book Now buttons)

### 8.4 Performance Testing
- [ ] Run Lighthouse audit (all pages)
- [ ] Test on slow 3G connection
- [ ] Verify images load properly
- [ ] Check Time to Interactive
- [ ] Verify no console errors

### 8.5 SEO Testing
- [ ] Verify all meta tags present
- [ ] Test structured data with Google Rich Results
- [ ] Verify sitemap.xml accessible
- [ ] Check robots.txt
- [ ] Verify hreflang tags
- [ ] Test social share preview (Facebook, Twitter)

### 8.6 Accessibility Testing
- [ ] Run Lighthouse accessibility audit
- [ ] Test with keyboard navigation
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Verify color contrast ratios
- [ ] Check alt text on all images
- [ ] Verify form labels

---

## Phase 9: Deployment & Launch

### 9.1 Pre-Launch Setup
- [ ] Configure domain (lashandnails.online)
- [ ] Point domain to Vercel
- [ ] Verify SSL certificate active
- [ ] Set up environment variables in Vercel
- [ ] Configure production build settings

### 9.2 Google Business Profile
- [ ] Create/claim Google Business Profile
- [ ] Add all business information
- [ ] Upload photos (100+ recommended)
- [ ] Add services and pricing
- [ ] Set up messaging
- [ ] Request initial reviews from customers

### 9.3 Analytics & Monitoring Setup
- [ ] Verify GA4 tracking works in production
- [ ] Set up Google Search Console
- [ ] Submit sitemap to Search Console
- [ ] Set up uptime monitoring (UptimeRobot)
- [ ] Configure error tracking (optional: Sentry)

### 9.4 Launch Checklist
- [ ] Final content review (typos, translations)
- [ ] Final image optimization check
- [ ] Test all forms in production
- [ ] Verify all external links work
- [ ] Test email delivery from contact form
- [ ] Verify Google Maps works
- [ ] Test WhatsApp links
- [ ] Verify Analytics tracking
- [ ] Check mobile responsiveness
- [ ] Final Lighthouse audit

### 9.5 Go Live
- [ ] Deploy to production
- [ ] Verify site loads at lashandnails.online
- [ ] Test from multiple devices
- [ ] Monitor for errors (first 24 hours)
- [ ] Announce launch on social media

---

## Phase 10: Post-Launch Optimization

### 10.1 Marketing Integration (Week 1-2)
- [ ] Set up Facebook Pixel (if running ads)
- [ ] Configure Google Ads conversion tracking (if using)
- [ ] Link Instagram to website
- [ ] Add website link to all social profiles
- [ ] Update email signature with website link

### 10.2 Content Updates (Ongoing)
- [ ] Add new gallery images weekly
- [ ] Update special offers monthly
- [ ] Request and respond to Google reviews
- [ ] Monitor and reply to contact form submissions

### 10.3 Analytics Review (Monthly)
- [ ] Review Google Analytics data
- [ ] Check most visited pages
- [ ] Review conversion rates (form submissions, clicks)
- [ ] Check Google Search Console performance
- [ ] Identify and fix any broken links
- [ ] Monitor site speed

### 10.4 Booking System Integration (Future)
- [ ] Research booking platforms (Fresha, Treatwell, Booksy)
- [ ] Choose platform
- [ ] Integrate booking widget
- [ ] Test booking flow
- [ ] Update booking page

### 10.5 Additional Languages (Future)
- [ ] Add Polish translation (pl.json)
- [ ] Add Russian translation (ru.json)
- [ ] Update i18n config
- [ ] Test all pages in new languages
- [ ] Update sitemap

### 10.6 Blog/Tips Section (Future - Optional)
- [ ] Create blog pages structure
- [ ] Write initial blog posts
  - [ ] Lash care guide
  - [ ] Nail care tips
  - [ ] Seasonal beauty trends
- [ ] Implement blog listing/detail pages
- [ ] Add to sitemap

---

## Priority Levels

### P0 - Critical (Must have for launch)
- Tailwind CSS setup
- Core pages (Home, Services, Contact)
- Mobile responsive design
- Contact form
- Google Maps
- Basic SEO (meta tags, sitemap)
- SSL & hosting
- Spanish + English translations

### P1 - High (Launch week)
- Gallery page with real images
- About page
- WhatsApp integration
- Google Analytics
- Google Business Profile setup
- Performance optimization
- Structured data

### P2 - Medium (Post-launch, Month 1)
- Instagram feed
- Reviews section
- Cookie consent
- Booking system integration
- Additional content (blog)

### P3 - Low (Nice to have, Month 2+)
- Polish/Russian translations
- Advanced analytics dashboards
- A/B testing
- Live chat widget
- Newsletter subscription

---

## Notes

- Focus on **mobile-first** development (majority of beauty salon traffic is mobile)
- Prioritize **WhatsApp integration** (very popular in Spain for business communication)
- Keep design **clean and visual** (beauty industry is visual-first)
- Ensure **fast load times** (users will bounce if site is slow)
- Make **booking/contact CTAs prominent** (primary conversion goal)

---

## Estimated Timeline

- **Phase 1-2**: 1-2 weeks (Design system + Core pages)
- **Phase 3-4**: 1 week (Interactive features + Integrations)
- **Phase 5-6**: 3-5 days (SEO + Content)
- **Phase 7-8**: 3-5 days (Security + Testing)
- **Phase 9**: 2-3 days (Deployment + Launch)

**Total estimated time**: 3-4 weeks for MVP launch

**Post-launch ongoing**: Content updates, analytics monitoring, optimization
