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
        name: 'Services',
        item: `${business.url}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: () => t('title'),
      },
    ],
  },
  {
    '@type': 'Service',
    serviceType: () => t('title'),
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
    },
    areaServed: [
      { '@type': 'City', name: 'Santa Pola' },
      { '@type': 'City', name: 'Elche' },
      { '@type': 'City', name: 'Guardamar del Segura' },
      { '@type': 'City', name: 'Alicante' },
    ],
  },
])
</script>

<i18n lang="json">
{
  "es": {
    "title": "Diseño de Uñas",
    "seoTitle": "Diseño de Uñas | Lash & Nails Santa Pola",
    "seoDescription": "Diseño de uñas profesional en Santa Pola - Manicura, pedicura y nail art personalizado"
  },
  "en": {
    "title": "Nail Design",
    "seoTitle": "Nail Design | Lash & Nails Santa Pola",
    "seoDescription": "Professional nail design in Santa Pola - Manicure, pedicure and custom nail art"
  },
  "ru": {
    "title": "Дизайн ногтей",
    "seoTitle": "Дизайн ногтей | Lash & Nails Santa Pola",
    "seoDescription": "Профессиональный дизайн ногтей в Санта-Пола - Маникюр, педикюр и индивидуальный нейл-арт"
  }
}
</i18n>
