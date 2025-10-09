<template>
  <main>
    <header>
      <h1>{{ t('title') }}</h1>
      <p>{{ t('subtitle') }}</p>
    </header>

    <ContactInfo />
    <OpeningHours />
    <LocationMap />
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
    '@type': 'ContactPage',
    name: () => t('seoTitle'),
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
    "title": "Contacto",
    "subtitle": "Visítanos o contáctanos por teléfono, WhatsApp o Telegram",
    "seoTitle": "Contacto | Lash & Nails Santa Pola",
    "seoDescription": "Contáctanos - Carrer Major, 8, Santa Pola - Teléfono, horario y ubicación de nuestro salón de belleza"
  },
  "en": {
    "title": "Contact",
    "subtitle": "Visit us or contact us by phone, WhatsApp or Telegram",
    "seoTitle": "Contact | Lash & Nails Santa Pola",
    "seoDescription": "Contact us - Carrer Major, 8, Santa Pola - Phone, hours and location of our beauty salon"
  },
  "ru": {
    "title": "Контакты",
    "subtitle": "Посетите нас или свяжитесь по телефону, WhatsApp или Telegram",
    "seoTitle": "Контакты | Lash & Nails Santa Pola",
    "seoDescription": "Свяжитесь с нами - Carrer Major, 8, Santa Pola - Телефон, часы работы и расположение нашего салона красоты"
  }
}
</i18n>
