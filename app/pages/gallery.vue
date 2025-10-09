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
    "title": "Galería",
    "seoTitle": "Galería | Lash & Nails Santa Pola",
    "seoDescription": "Descubre nuestros trabajos de belleza - Fotos de extensiones de pestañas, diseño de uñas y transformaciones"
  },
  "en": {
    "title": "Gallery",
    "seoTitle": "Gallery | Lash & Nails Santa Pola",
    "seoDescription": "Discover our beauty work - Photos of lash extensions, nail designs and transformations"
  },
  "ru": {
    "title": "Галерея",
    "seoTitle": "Галерея | Lash & Nails Santa Pola",
    "seoDescription": "Откройте для себя наши работы - Фото наращивания ресниц, дизайна ногтей и преображений"
  }
}
</i18n>
