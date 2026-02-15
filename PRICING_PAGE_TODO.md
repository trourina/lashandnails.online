# Pricing Page TODO

Current SEO Score: **90/100** ✅

## ✅ Completed (2025-01-09)

### SEO & Schema

- [x] Breadcrumb schema (Home → Pricing)
- [x] WebPage schema with localized metadata
- [x] Localized ogLocale for social sharing (es_ES, ru_RU, en_US)
- [x] SEO meta tags (title, description)
- [x] Runtime config integration

### Content & Structure

- [x] Semantic PricingTable component
- [x] 7 service categories with 30+ services
- [x] Full ES/EN/RU translations
- [x] Proper pricing display with notes
- [x] Clean, accessible markup

### Categories Covered

1. **Lashes** (Pestañas/Ресницы) - 3 services
2. **Extensions** (Extensiones/Наращивание) - 5 services
3. **Brows** (Cejas/Брови) - 3 services
4. **Micropigmentation** (Micropigmentación/Микропигментация) - 3 services
5. **Manicure** (Manicura/Маникюр) - 8 services
6. **Pedicure** (Pedicura/Педикюр) - 4 services
7. **Podology** (Podología/Подология) - 8 services

## 🚀 Improvements to Reach 95+

### 1. Add Service Schema Markup

**Priority: HIGH | Impact: HIGH | Effort: MEDIUM**

Add structured data for each service category using Service schema:

```typescript
{
  '@type': 'Service',
  serviceType: 'Lash Extensions',
  provider: {
    '@type': 'LocalBusiness',
    name: business.name
  },
  areaServed: business.areaServed,
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '35',
      priceCurrency: 'EUR'
    }
  }
}
```

**Benefits:**

- Appear in Google's service listings
- Rich snippets with pricing
- Better local search visibility

### 2. Add FAQ for Pricing Questions

**Priority: MEDIUM | Impact: HIGH | Effort: LOW**

Create FAQ schema and visible component:

**Questions to add:**

- "What payment methods do you accept?" → Cash, Bizum
- "Do you offer discounts for multiple services?" → Yes, combos
- "How long does each service take?"
- "Do I need to book in advance?"
- "What's included in the price?"

### 3. Style the Pricing Page

**Priority: HIGH | Impact: HIGH | Effort: MEDIUM**

Currently uses basic PricingTable component, needs:

**Visual enhancements:**

- Category cards with gradient backgrounds
- Service icons (lash, nail, etc.)
- Highlight popular/recommended services
- Better price formatting (larger, bolder)
- Responsive grid layout
- Color coding by category

**Interactive features:**

- Expandable/collapsible categories
- Filter by service type
- Search functionality
- "Book Now" CTAs per service

### 4. Add Comparison Table

**Priority: LOW | Impact: MEDIUM | Effort: MEDIUM**

Help users choose between similar services:

| Service | Time   | Price | Best For     |
| ------- | ------ | ----- | ------------ |
| Classic | 1.5-2h | 35€   | Natural look |
| 2D      | 2-2.5h | 40€   | Volume       |
| 3D      | 2.5-3h | 45€   | Dramatic     |

### 5. Add Booking CTA

**Priority: HIGH | Impact: VERY HIGH | Effort: LOW**

Add prominent CTAs throughout:

- Sticky footer: "Book Your Appointment"
- CTA after each category
- WhatsApp quick booking button
- Link to /booking page

### 6. Add Service Duration Info

**Priority: MEDIUM | Impact: MEDIUM | Effort: LOW**

Currently only Classic Extensions shows duration. Add for all:

- Helps with booking planning
- Reduces customer questions
- Better user experience

```json
{
  "name": "Manicura higiénica mujer",
  "duration": "45 min",
  "price": "20€"
}
```

### 7. Add "From" Pricing Indicator

**Priority: LOW | Impact: LOW | Effort: LOW**

Currently some services say "desde X€" but inconsistent. Standardize:

- Mark base prices vs. add-ons
- Show price ranges where applicable
- Clear "starting at" language

## 🎨 UX Enhancements

### 8. Mobile Optimization

**Priority: HIGH | Impact: HIGH | Effort: MEDIUM**

- Ensure tables don't overflow
- Stack service cards vertically
- Larger touch targets for CTAs
- Sticky category navigation

### 9. Add Service Descriptions

**Priority: MEDIUM | Impact: MEDIUM | Effort: HIGH**

Expand beyond just names:

- What's included
- Recommended frequency
- Maintenance tips
- Before/after expectations

### 10. Add Photos

**Priority: MEDIUM | Impact: HIGH | Effort: MEDIUM**

- Category header images
- Before/after galleries per service
- Technique/process photos
- Staff photos (trust signal)

## 📊 Content Improvements

### 11. Add Packages/Combos Section

**Priority: MEDIUM | Impact: HIGH | Effort: LOW**

Promote combo deals:

- Lashes + Brows combo (already exists: 60€)
- Manicure + Pedicure package
- First-time customer specials
- Loyalty programs

### 12. Add Cancellation Policy

**Priority: LOW | Impact: MEDIUM | Effort: LOW**

Set expectations:

- Cancellation window (24h?)
- Deposit requirements
- No-show policy
- Rescheduling terms

### 13. Add Aftercare Instructions

**Priority: LOW | Impact: MEDIUM | Effort: MEDIUM**

Help services last longer:

- Lash extension care (no oil-based products)
- Nail care tips (avoid acetone)
- Micropigmentation healing process

## 🔧 Technical Improvements

### 14. Add Currency Selector

**Priority: LOW | Impact: LOW | Effort: MEDIUM**

For international visitors:

- EUR (default)
- USD
- GBP
- Auto-convert prices

### 15. Add Print Stylesheet

**Priority: LOW | Impact: LOW | Effort: LOW**

Allow users to print pricing:

- Clean, printer-friendly layout
- Remove navigation
- Page breaks between categories

### 16. Add Structured Data Testing

**Priority: MEDIUM | Impact: MEDIUM | Effort: LOW**

Validate schema.org markup:

- Google Rich Results Test
- Schema.org validator
- Fix any warnings/errors

## 🌐 Localization

### 17. Add Local Competitors Comparison

**Priority: LOW | Impact: MEDIUM | Effort: HIGH**

Show value proposition:

- "Best prices in Santa Pola"
- Quality vs. price positioning
- Why choose us section

### 18. Add Service Area Info

**Priority: LOW | Impact: LOW | Effort: LOW**

Clarify availability:

- Available in: Santa Pola, Elche, Guardamar, Alicante
- Mobile services? (if applicable)
- Home visits? (if applicable)

## 🎯 Conversion Optimization

### 19. Add Social Proof

**Priority: MEDIUM | Impact: HIGH | Effort: MEDIUM**

Build trust:

- Customer testimonials per service
- Review count and rating
- "Most popular" badges
- "Trending now" indicators

### 20. Add Limited-Time Offers

**Priority: LOW | Impact: HIGH | Effort: MEDIUM**

Create urgency:

- Seasonal promotions
- First-time customer discounts
- Referral bonuses
- Birthday specials

## 📈 Analytics & Tracking

### 21. Add Event Tracking

**Priority: MEDIUM | Impact: MEDIUM | Effort: LOW**

Track user behavior:

- Which services are viewed most
- Booking button clicks
- Time spent on page
- Scroll depth

### 22. Add A/B Testing

**Priority: LOW | Impact: MEDIUM | Effort: HIGH**

Test variations:

- Price display formats
- Category ordering
- CTA button text/color
- Layout variations

---

## Priority Matrix

| Task                 | Priority | Impact    | Effort | Do Next? |
| -------------------- | -------- | --------- | ------ | -------- |
| Add Service schema   | HIGH     | HIGH      | MEDIUM | ✅ YES   |
| Add Booking CTAs     | HIGH     | VERY HIGH | LOW    | ✅ YES   |
| Style pricing page   | HIGH     | HIGH      | MEDIUM | 🔄 SOON  |
| Add FAQ section      | MEDIUM   | HIGH      | LOW    | ✅ YES   |
| Mobile optimization  | HIGH     | HIGH      | MEDIUM | 🔄 SOON  |
| Add service photos   | MEDIUM   | HIGH      | MEDIUM | 🔄 AFTER |
| Add packages section | MEDIUM   | HIGH      | LOW    | 🔄 AFTER |

## Quick Wins (Next 30 min)

1. **Add FAQ schema + visible component** (10 min)
   - Payment methods
   - Booking process
   - Service duration

2. **Add prominent CTAs** (5 min)
   - "Book Now" button at top
   - WhatsApp floating button
   - Link to /booking page

3. **Add Service schema for top 3 categories** (15 min)
   - Lash Extensions
   - Manicure
   - Pedicure

**Expected SEO Score after quick wins: 93/100** 🎯

---

## Current State Summary

**Strengths:**

- ✅ Comprehensive service list (30+ services)
- ✅ Full multilingual support (ES/EN/RU)
- ✅ Clean, semantic structure
- ✅ Proper SEO metadata
- ✅ Breadcrumb navigation

**Weaknesses:**

- ❌ No Service schema markup
- ❌ No visible CTAs
- ❌ Minimal styling (inherits from layout)
- ❌ No photos/visuals
- ❌ No FAQ section

**Overall:** Excellent content foundation, needs visual polish and conversion optimization.

**Recommended Next Page:** Homepage (index.vue) - Foundational for SEO and conversions
