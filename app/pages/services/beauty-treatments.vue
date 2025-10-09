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
    "title": "Tratamientos de Belleza",
    "seoTitle": "Tratamientos de Belleza | Lash & Nails Santa Pola",
    "seoDescription": "Tratamientos de belleza profesionales en Santa Pola - Cuidado facial, depilación y más"
  },
  "en": {
    "title": "Beauty Treatments",
    "seoTitle": "Beauty Treatments | Lash & Nails Santa Pola",
    "seoDescription": "Professional beauty treatments in Santa Pola - Facial care, waxing and more"
  },
  "ru": {
    "title": "Косметические процедуры",
    "seoTitle": "Косметические процедуры | Lash & Nails Santa Pola",
    "seoDescription": "Профессиональные косметические процедуры в Санта-Пола - Уход за лицом, депиляция и многое другое"
  }
}
</i18n>
