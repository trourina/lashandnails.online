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
    "title": "Nuestros Servicios",
    "seoTitle": "Nuestros Servicios | Lash & Nails Santa Pola",
    "seoDescription": "Descubre nuestros servicios de belleza: extensiones de pestañas, diseño de uñas y tratamientos de belleza en Santa Pola"
  },
  "en": {
    "title": "Our Services",
    "seoTitle": "Our Services | Lash & Nails Santa Pola",
    "seoDescription": "Discover our beauty services: lash extensions, nail design and beauty treatments in Santa Pola"
  },
  "ru": {
    "title": "Наши услуги",
    "seoTitle": "Наши услуги | Lash & Nails Santa Pola",
    "seoDescription": "Откройте для себя наши услуги красоты: наращивание ресниц, дизайн ногтей и косметические процедуры в Санта-Пола"
  }
}
</i18n>
