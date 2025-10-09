<template>
  <div>
    <Typo is="h1" variant="h1">{{ t("title") }}</Typo>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local'
});

useSeoMeta({
  title: () => t('seoTitle'),
  description: () => t('seoDescription'),
  ogTitle: () => t('seoTitle'),
  ogDescription: () => t('seoDescription'),
});
</script>

<i18n lang="json">
{
  "es": {
    "title": "Salón de Belleza en Santa Pola",
    "seoTitle": "Salón de Belleza en Santa Pola | Lash & Nails",
    "seoDescription": "Salón de belleza profesional en Santa Pola - Extensiones de pestañas, diseño de uñas y tratamientos de belleza"
  },
  "en": {
    "title": "Beauty Salon in Santa Pola",
    "seoTitle": "Beauty Salon in Santa Pola | Lash & Nails",
    "seoDescription": "Professional beauty salon in Santa Pola - Lash extensions, nail design, and beauty treatments"
  },
  "ru": {
    "title": "Салон красоты в Санта-Пола",
    "seoTitle": "Салон красоты в Санта-Пола | Lash & Nails",
    "seoDescription": "Профессиональный салон красоты в Санта-Пола - Наращивание ресниц, дизайн ногтей и косметические процедуры"
  }
}
</i18n>
