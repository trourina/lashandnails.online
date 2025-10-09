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
