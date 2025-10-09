<template>
  <div>
    <Typo is="h1" variant="h1">{{ t('title') }}</Typo>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })

useSeoMeta({
  title: () => t('seoTitle'),
  description: () => t('seoDescription'),
  ogTitle: () => t('seoTitle'),
  ogDescription: () => t('seoDescription'),
})
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
