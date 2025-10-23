# Google Analytics 4 Setup & Testing Guide

## Overview

Google Analytics 4 (GA4) has been fully integrated into the lashandnails.online website using Nuxt Scripts module. This document covers the setup, tracked events, and testing procedures.

## Configuration

### Environment Variables

GA4 is configured via environment variable:

```bash
NUXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-0SKWWBRJC4
```

**Files:**
- `.env.example` - Template with variable structure
- `nuxt.config.ts` - Configuration that reads from environment

### Nuxt Configuration

The GA4 tracking script is automatically loaded via `@nuxt/scripts` module:

```typescript
// nuxt.config.ts
scripts: {
  registry: {
    googleAnalytics: {
      id: process.env.NUXT_PUBLIC_GOOGLE_ANALYTICS_ID || 'G-0SKWWBRJC4',
    },
  },
}
```

**Benefits:**
- Works in both development and production
- Auto-loads GA4 script with optimal performance
- Supports consent mode and privacy features
- Provides `window.gtag` function for event tracking

## Analytics Composable

Created a reusable composable at `app/composables/useAnalytics.ts` for consistent event tracking across the application.

### Available Methods

```typescript
const {
  trackEvent,              // Generic event tracking
  trackWhatsAppClick,      // WhatsApp button clicks
  trackPhoneClick,         // Phone call clicks
  trackServiceView,        // Service page views
  trackBookingIntent,      // Booking CTA clicks
  trackFormSubmit,         // Form submissions
  trackGalleryInteraction, // Gallery filters & lightbox
  trackNavigation          // Internal navigation
} = useAnalytics()
```

## Tracked Events

### 1. WhatsApp Click Events

**Event Name:** `whatsapp_click`

**Locations:**
- Hero section (homepage)
- CTA sections (all pages)
- Service pages
- Contact page

**Parameters:**
```javascript
{
  button_location: 'hero' | 'cta_section' | 'service_page',
  conversion_type: 'contact'
}
```

### 2. Phone Click Events

**Event Name:** `phone_click`

**Locations:**
- CTA sections with phone CTAs
- Contact page
- Booking page

**Parameters:**
```javascript
{
  button_location: 'cta_section' | 'contact_page',
  conversion_type: 'contact'
}
```

### 3. Navigation Events

**Event Name:** `navigation`

**Locations:**
- Hero section (View Pricing button)
- Service cards
- Navigation menu

**Parameters:**
```javascript
{
  destination: '/pricing' | '/services/...',
  from: 'hero' | 'service_card' | 'nav'
}
```

### 4. Gallery Interactions

**Event Name:** `gallery_interaction`

**Locations:**
- Gallery page filter buttons
- Lightbox open/close

**Parameters:**
```javascript
{
  interaction_type: 'filter_change' | 'open_lightbox',
  category: 'all' | 'lashes' | 'nails' | 'brows' | 'treatments'
}
```

### 5. Service Views (Future)

**Event Name:** `view_service`

**Parameters:**
```javascript
{
  service_name: 'Lash Extensions' | 'Nail Design' | 'Beauty Treatments',
  content_type: 'service'
}
```

### 6. Form Submissions (Future - when contact form added)

**Event Name:** `form_submit`

**Parameters:**
```javascript
{
  form_name: 'contact_form',
  success: true | false,
  conversion_type: 'lead'
}
```

## Tracking Implementation

### Hero Component (`app/components/Hero.vue`)

```vue
<script setup>
const { trackWhatsAppClick, trackNavigation } = useAnalytics()

const handleWhatsAppClick = () => {
  trackWhatsAppClick('hero')
}

const handlePricingClick = () => {
  trackNavigation('/pricing', 'hero')
}
</script>

<template>
  <Button @click="handleWhatsAppClick">Book via WhatsApp</Button>
  <Button @click="handlePricingClick">View Pricing</Button>
</template>
```

### CTASection Component (`app/components/CTASection.vue`)

```vue
<script setup>
const { trackWhatsAppClick, trackPhoneClick } = useAnalytics()

const handleWhatsAppClick = () => {
  trackWhatsAppClick('cta_section')
}

const handleSecondaryClick = () => {
  if (props.secondaryButtonLink.startsWith('tel:')) {
    trackPhoneClick('cta_section')
  }
}
</script>
```

### Gallery Page (`app/pages/gallery.vue`)

```vue
<script setup>
const { trackGalleryInteraction } = useAnalytics()

const openLightbox = (index: number) => {
  const image = filteredImages.value[index]
  trackGalleryInteraction('open_lightbox', image?.category)
  lightboxRef.value?.open(index)
}

const handleFilterChange = (filter: string) => {
  activeFilter.value = filter
  trackGalleryInteraction('filter_change', filter)
}
</script>
```

## Testing GA4 Tracking

### Method 1: Browser Console (Development)

1. Open the website: http://localhost:3001/en
2. Open browser DevTools (F12)
3. Go to Console tab
4. Click any tracked button (WhatsApp, pricing, etc.)
5. Type in console:
   ```javascript
   window.gtag
   ```
   If it shows a function, GA4 is loaded

### Method 2: GA4 DebugView (Real-time)

**Setup:**
1. Install Google Analytics Debugger Chrome extension
2. Or add `?debug_mode=true` to URL

**Steps:**
1. Go to [Google Analytics](https://analytics.google.com)
2. Select your property (G-0SKWWBRJC4)
3. Navigate to: **Reports → Realtime → DebugView**
4. Open website and click tracked buttons
5. Watch events appear in real-time with full parameters

### Method 3: Network Tab (Verify Requests)

1. Open DevTools → Network tab
2. Filter by "analytics" or "collect"
3. Click tracked buttons
4. Look for requests to `https://www.google-analytics.com/g/collect`
5. Click on request → Payload → see event parameters

### Method 4: GA4 Tag Assistant

1. Install [Tag Assistant](https://tagassistant.google.com/)
2. Connect to your site
3. Verify GA4 tag is firing
4. Test each tracked event
5. See real-time validation

## Verification Checklist

- [ ] GA4 script loads on all pages
- [ ] Hero WhatsApp button tracks event
- [ ] Hero View Pricing button tracks event
- [ ] CTA section WhatsApp button tracks event
- [ ] Gallery filter changes track events
- [ ] Gallery lightbox opens track events
- [ ] All events include correct parameters
- [ ] Events appear in GA4 DebugView
- [ ] No console errors related to gtag

## Key Conversion Events to Monitor

These events represent user actions that indicate booking intent:

1. **whatsapp_click** - Primary conversion action
2. **phone_click** - Secondary conversion action
3. **booking_intent** - CTA button clicks
4. **form_submit** - Contact form submissions (future)
5. **navigation** to /pricing or /booking - Intent signals

## GA4 Reports to Set Up

### 1. Conversions Setup

In GA4, mark these events as conversions:
- `whatsapp_click`
- `phone_click`
- `form_submit` (when implemented)

### 2. Custom Reports

**Lead Sources Report:**
- Dimension: `button_location`
- Metric: Event count
- Filter: `whatsapp_click` OR `phone_click`

**Service Interest Report:**
- Dimension: `service_name`
- Metric: Page views + `view_service` events

**Gallery Engagement Report:**
- Dimension: `category`
- Metric: `gallery_interaction` count
- Secondary dimension: `interaction_type`

## Production Deployment

### Vercel Environment Variables

When deploying to Vercel, add environment variable:

1. Go to Vercel Dashboard
2. Select project: lashandnails.online
3. Go to Settings → Environment Variables
4. Add:
   - Name: `NUXT_PUBLIC_GOOGLE_ANALYTICS_ID`
   - Value: `G-0SKWWBRJC4`
   - Environment: Production, Preview, Development

### Domain Verification

1. Verify domain in Google Search Console
2. Link Search Console to GA4 property
3. Enable enhanced measurement in GA4 settings

## Privacy & Compliance

### GDPR Considerations

Currently implemented:
- GA4 script loads by default (standard practice)

**Future enhancements needed:**
- [ ] Add cookie consent banner
- [ ] Implement consent mode v2
- [ ] Add opt-out functionality
- [ ] Update privacy policy

### Data Retention

Default GA4 settings:
- Event data retention: 2 months (free tier)
- Can be extended to 14 months

## Troubleshooting

### GA4 Not Loading

**Issue:** `window.gtag is not a function`

**Solution:**
1. Check `nuxt.config.ts` scripts configuration
2. Verify environment variable is set
3. Clear browser cache
4. Restart dev server

### Events Not Appearing

**Issue:** Clicks don't show in DebugView

**Solution:**
1. Verify GA4 measurement ID is correct
2. Check browser console for errors
3. Ensure `@nuxt/scripts` module is installed
4. Test in incognito mode (extensions may block)

### Wrong Parameters

**Issue:** Event shows but parameters are missing/wrong

**Solution:**
1. Check composable function calls
2. Verify parameter names match GA4 naming conventions
3. Test with DebugView to see actual payload

## Next Steps

1. ✅ GA4 tracking code implemented
2. ✅ Core conversion events tracked
3. ⏳ Test in production after deployment
4. ⏳ Set up custom reports in GA4
5. ⏳ Mark conversion events
6. ⏳ Add cookie consent (Phase 7)
7. ⏳ Implement consent mode v2
8. ⏳ Monitor data for 2-4 weeks
9. ⏳ Optimize based on user behavior

## Resources

- [GA4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [Nuxt Scripts Module](https://scripts.nuxt.com/)
- [GA4 Event Reference](https://developers.google.com/analytics/devguides/collection/ga4/reference/events)
- [DebugView Guide](https://support.google.com/analytics/answer/7201382)
