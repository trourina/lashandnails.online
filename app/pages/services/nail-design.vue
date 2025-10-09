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
