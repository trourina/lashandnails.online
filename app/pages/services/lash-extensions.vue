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
