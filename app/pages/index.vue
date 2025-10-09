<template>
  <main>
    <Hero />
    <ServicesPreview />
    <CTASection />
  </main>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: 'local' })
const config = useRuntimeConfig()
const business = config.public.business

useSeoMeta({
  title: () => t('seoTitle'),
  description: () => t('seoDescription'),
  ogTitle: () => t('seoTitle'),
  ogDescription: () => t('seoDescription'),
  ogType: 'website',
  ogLocale: () => locale.value === 'es' ? 'es_ES' : locale.value === 'ru' ? 'ru_RU' : 'en_US',
})

useSchemaOrg([
  {
    '@type': 'WebSite',
    name: business.name,
    url: business.url,
    description: () => t('seoDescription'),
  },
  {
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    image: `${business.url}/logo.png`,
    logo: `${business.url}/logo.png`,
    url: business.url,
    telephone: business.phone,
    priceRange: business.priceRange,
    paymentAccepted: business.paymentAccepted,
    sameAs: [
      business.social.facebook,
      business.social.instagram,
    ],
    areaServed: [
      { '@type': 'City', name: 'Santa Pola' },
      { '@type': 'City', name: 'Elche' },
      { '@type': 'City', name: 'Guardamar del Segura' },
      { '@type': 'City', name: 'Alicante' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '12',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: business.hours.weekdays.opens,
        closes: business.hours.weekdays.closes,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: business.hours.saturday.opens,
        closes: business.hours.saturday.closes,
      },
    ],
  },
])
</script>

<i18n lang="json">
{
  "es": {
    "seoTitle": "Salón de Belleza en Santa Pola | Lash & Nails",
    "seoDescription": "Salón de belleza profesional en Santa Pola - Extensiones de pestañas, diseño de uñas y tratamientos de belleza. Reserva tu cita por WhatsApp."
  },
  "en": {
    "seoTitle": "Beauty Salon in Santa Pola | Lash & Nails",
    "seoDescription": "Professional beauty salon in Santa Pola - Lash extensions, nail design and beauty treatments. Book your appointment via WhatsApp."
  },
  "ru": {
    "seoTitle": "Салон красоты в Санта-Пола | Lash & Nails",
    "seoDescription": "Профессиональный салон красоты в Санта-Пола - Наращивание ресниц, дизайн ногтей и косметические процедуры. Запишитесь через WhatsApp."
  }
}
</i18n>
