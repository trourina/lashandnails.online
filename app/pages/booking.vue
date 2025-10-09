<template>
  <div>
    <Typo is="h1" variant="h1">{{ t('title') }}</Typo>
  </div>
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
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: business.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: () => t('title'),
      },
    ],
  },
  {
    '@type': 'WebPage',
    name: () => t('seoTitle'),
    description: () => t('seoDescription'),
  },
])
</script>

<i18n lang="json">
{
  "es": {
    "title": "Reservar Cita",
    "seoTitle": "Reservar Cita | Lash & Nails Santa Pola",
    "seoDescription": "Reserva tu cita en nuestro salón de belleza en Santa Pola - Fácil y rápido"
  },
  "en": {
    "title": "Book Appointment",
    "seoTitle": "Book Appointment | Lash & Nails Santa Pola",
    "seoDescription": "Book your appointment at our beauty salon in Santa Pola - Easy and fast"
  },
  "ru": {
    "title": "Записаться на прием",
    "seoTitle": "Записаться на прием | Lash & Nails Santa Pola",
    "seoDescription": "Запишитесь на прием в наш салон красоты в Санта-Пола - Легко и быстро"
  }
}
</i18n>
