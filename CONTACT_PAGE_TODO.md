# Contact Page TODO

Current SEO Score: **88/100**

## ✅ Completed

- [x] Semantic HTML structure (`<main>`, `<section>`, `<dl>`, `<address>`, `<time>`)
- [x] Complete schema.org markup (ContactPage + LocalBusiness)
- [x] Full NAP data (Name, Address, Phone)
- [x] Geo coordinates for local SEO
- [x] Opening hours in structured data
- [x] Localized meta tags (title, description, ogLocale)
- [x] DRY component architecture (ContactInfo, OpeningHours, LocationMap)
- [x] Auto-generated canonical URLs via @nuxtjs/seo
- [x] Social media profiles (sameAs: Facebook, Instagram)
- [x] Geographic targeting (areaServed: Santa Pola, Elche, Guardamar, Alicante)
- [x] Hreflang tags via useLocaleHead()
- [x] Google Maps iframe with verified business location
- [x] FAQ schema (4 questions in ES/EN/RU)
- [x] Aggregate rating (5.0 stars, 12 reviews)
- [x] Holiday closure notice

## 🚀 Critical SEO Improvements (Quick Wins to 95+)

### 1. Add Breadcrumb Schema
**Priority: HIGH | Impact: HIGH**
- Add BreadcrumbList schema to contact page
- Shows navigation path in Google search results
- Improves click-through rate from SERPs

```typescript
{
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: business.url },
    { '@type': 'ListItem', position: 2, name: 'Contact' }
  ]
}
```

### 2. Make FAQ Section Visible
**Priority: HIGH | Impact: HIGH**
- Currently FAQ only exists in schema.org markup
- Create `<FAQSection />` component
- Display 4 FAQ questions with semantic HTML (`<details>`, `<summary>`)
- Improves user experience and time on page

### 3. Add Payment Methods
**Priority: MEDIUM | Impact: MEDIUM**
- Add `paymentAccepted` to LocalBusiness schema
- Options: Cash, Credit Card, Debit Card, etc.
- Add to runtimeConfig in nuxt.config.ts

```typescript
paymentAccepted: ['Cash', 'Credit Card', 'Debit Card']
```

### 4. Add Real Logo/Images
**Priority: HIGH | Impact: HIGH**
- Replace `/logo.png` placeholder with actual logo
- Add to `public/` directory
- Update schema.org image/logo properties
- Recommended size: 800x800px (1:1 ratio)

### 5. Add Open Graph Images
**Priority: MEDIUM | Impact: MEDIUM**
- Create/add OG image for social sharing (1200x630px)
- Add to useSeoMeta:
  ```typescript
  ogImage: '/og-contact.png',
  twitterCard: 'summary_large_image'
  ```

## 🎨 UX & Design Improvements

### 6. Style the Contact Page
**Priority: HIGH | Impact: HIGH**
- Currently inherits black background from layout
- Add proper spacing, colors, typography
- Style contact methods as cards
- Make WhatsApp/Telegram buttons prominent (green/blue)
- Add hover states and transitions

### 7. Mobile Optimization
**Priority: HIGH | Impact: HIGH**
- Make phone/WhatsApp/Telegram tap-friendly
- Larger touch targets (min 44x44px)
- Stack components vertically on mobile
- Test iframe responsiveness

### 8. Business Hours "Open Now" Indicator
**Priority: MEDIUM | Impact: MEDIUM**
- Add computed property to check if currently open
- Display green "Open Now" or red "Closed" badge
- Show next opening time if closed
- Update dynamically (no page refresh needed)

### 9. Call-to-Action Hierarchy
**Priority: MEDIUM | Impact: MEDIUM**
- Primary CTA: WhatsApp (most conversions)
- Secondary: Phone call
- Tertiary: Telegram
- Style accordingly with button sizes/colors

## 📄 Content Enhancements

### 10. Services Preview
**Priority: LOW | Impact: MEDIUM**
- Add "Our Services" section
- Link to /pricing or /services
- 3-4 featured services with icons

### 11. Show Real Reviews
**Priority: MEDIUM | Impact: HIGH**
- Display 2-3 actual Google reviews
- Use Review schema markup
- Adds social proof and trust
- Can pull from Google My Business API

### 12. Photo Gallery Teaser
**Priority: LOW | Impact: MEDIUM**
- Show 3-6 work examples
- Link to /gallery page
- Visual proof of quality

### 13. Expand FAQ
**Priority: LOW | Impact: LOW**
- Add more questions:
  - "Do you accept walk-ins?"
  - "What payment methods do you accept?"
  - "Do you have parking?"
  - "How long does a lash extension appointment take?"

## 🔧 Technical Improvements

### 14. Loading States
**Priority: LOW | Impact: LOW**
- Add skeleton loader for Google Maps iframe
- Prevent layout shift during load

### 15. Error Handling
**Priority: LOW | Impact: LOW**
- Fallback if Google Maps fails to load
- Show static map image as backup

### 16. Accessibility Audit
**Priority: MEDIUM | Impact: MEDIUM**
- Test with screen reader
- Ensure all interactive elements are keyboard accessible
- Add ARIA labels where needed
- Check color contrast ratios

### 17. Performance
**Priority: MEDIUM | Impact: MEDIUM**
- Optimize images (WebP format)
- Add proper width/height to prevent CLS
- Lazy load below-the-fold content
- Minimize CSS/JS bundle size

## 🌐 Site-Wide Improvements

### 18. Apply Contact Page SEO to All Pages
**Priority: HIGH | Impact: VERY HIGH**
- Index page (/)
- Services page (/services)
- Pricing page (/pricing) - ✅ Already has good structure
- Gallery page (/gallery)
- About page (/about)
- Booking page (/booking)

Each needs:
- Localized SEO metadata
- Breadcrumb schema
- Proper h1 hierarchy
- Schema.org markup

### 19. Create Footer Component
**Priority: MEDIUM | Impact: MEDIUM**
- Add to default.vue layout
- Include contact info, hours, social links
- Add "Organization" schema markup
- Link to privacy policy, terms of service

### 20. Add Structured Data Testing
**Priority: MEDIUM | Impact: MEDIUM**
- Test with Google Rich Results Test
- Validate all schema.org markup
- Fix any warnings/errors

## 📊 Tracking & Analytics

### 21. Add Google Analytics / Tag Manager
**Priority: MEDIUM | Impact: MEDIUM**
- Track user behavior
- Monitor conversion events (WhatsApp clicks, calls)
- Set up goals

### 22. Add Google Search Console
**Priority: HIGH | Impact: HIGH**
- Submit sitemap
- Monitor indexing status
- Track search performance
- Fix crawl errors

## 🎯 Conversion Optimization

### 23. A/B Test CTA Placement
**Priority: LOW | Impact: MEDIUM**
- Test different button colors
- Test CTA text variations
- Monitor which contact method gets most clicks

### 24. Add WhatsApp Chat Widget
**Priority: LOW | Impact: MEDIUM**
- Floating WhatsApp button
- Sticky on scroll
- Higher conversion rate than static link

## 🔮 Future Enhancements

### 25. Online Booking Integration
**Priority: MEDIUM | Impact: VERY HIGH**
- Integrate booking system (Calendly, Acuity, custom)
- Reduce friction for appointments
- 24/7 booking availability

### 26. Multi-language Content Strategy
**Priority: LOW | Impact: MEDIUM**
- Currently i18n infrastructure is ready
- Ensure all new content is translated
- Consider adding Polish (PL) for expat community

### 27. Blog/News Section
**Priority: LOW | Impact: MEDIUM**
- Beauty tips, trends, care instructions
- SEO content marketing
- Keep site fresh for Google

---

## Priority Matrix

| Task | Priority | Impact | Effort | Do Next? |
|------|----------|--------|--------|----------|
| Breadcrumb schema | HIGH | HIGH | LOW | ✅ YES |
| Visible FAQ section | HIGH | HIGH | MEDIUM | ✅ YES |
| Real logo/images | HIGH | HIGH | LOW | ✅ YES |
| Payment methods | MEDIUM | MEDIUM | LOW | ✅ YES |
| Style contact page | HIGH | HIGH | MEDIUM | 🔄 SOON |
| OG images | MEDIUM | MEDIUM | LOW | 🔄 SOON |
| Apply SEO to all pages | HIGH | VERY HIGH | HIGH | 🔄 AFTER |

**Recommended Next Steps:**
1. Add breadcrumb schema (5 min)
2. Add payment methods to config (2 min)
3. Create visible FAQ component (15 min)
4. Add real logo (5 min - once you have the file)

**Expected SEO Score after quick wins: 95/100** 🎯
