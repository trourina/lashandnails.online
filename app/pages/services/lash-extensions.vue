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
    "title": "Extensiones de Pestañas",
    "seoTitle": "Extensiones de Pestañas | Lash & Nails Santa Pola",
    "seoDescription": "Extensiones de pestañas profesionales en Santa Pola - Mirada natural y voluminosa con técnicas avanzadas"
  },
  "en": {
    "title": "Lash Extensions",
    "seoTitle": "Lash Extensions | Lash & Nails Santa Pola",
    "seoDescription": "Professional lash extensions in Santa Pola - Natural and voluminous look with advanced techniques"
  },
  "ru": {
    "title": "Наращивание ресниц",
    "seoTitle": "Наращивание ресниц | Lash & Nails Santa Pola",
    "seoDescription": "Профессиональное наращивание ресниц в Санта-Пола - Естественный и объемный взгляд с передовыми техниками"
  }
}
</i18n>
