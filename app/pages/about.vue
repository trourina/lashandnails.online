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
    '@type': 'AboutPage',
    name: () => t('seoTitle'),
    description: () => t('seoDescription'),
  },
])
</script>

<i18n lang="json">
{
  "es": {
    "title": "Sobre Nosotros",
    "seoTitle": "Sobre Nosotros | Lash & Nails Santa Pola",
    "seoDescription": "Conoce nuestro salón de belleza en Santa Pola - Profesionales dedicados a tu belleza y bienestar"
  },
  "en": {
    "title": "About Us",
    "seoTitle": "About Us | Lash & Nails Santa Pola",
    "seoDescription": "Learn about our beauty salon in Santa Pola - Professionals dedicated to your beauty and wellness"
  },
  "ru": {
    "title": "О нас",
    "seoTitle": "О нас | Lash & Nails Santa Pola",
    "seoDescription": "Узнайте о нашем салоне красоты в Санта-Пола - Профессионалы, посвятившие себя вашей красоте и благополучию"
  }
}
</i18n>
