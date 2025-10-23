<template>
  <section>
    <Hero show-cta />
    <FeaturedServices />
    <ReviewsSection />
    <FAQSection />
    <CTASection />
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: "local" });
const config = useRuntimeConfig();
const business = config.public.business;

useSeoMeta({
  title: () => t("seoTitle"),
  description: () => t("seoDescription"),
  ogTitle: () => t("seoTitle"),
  ogDescription: () => t("seoDescription"),
  ogType: "website",
  ogLocale: () =>
    locale.value === "es" ? "es_ES" : locale.value === "ru" ? "ru_RU" : "en_US",
});

// Home page schema - inherits from global identity, only adds WebPage specifics
// inLanguage is automatically set by Nuxt I18n integration
useSchemaOrg([
  {
    "@type": "WebPage",
    "@id": `${business.url}/#webpage`,
    name: () => t("seoTitle"),
    description: () => t("seoDescription"),
    isPartOf: {
      "@id": `${business.url}/#website`,
    },
  },
]);
</script>

<i18n lang="json">
{
  "es": {
    "seoTitle": "Salón de Belleza en Santa Pola | Lash & Nails",
    "seoDescription": "Salón de belleza profesional en Santa Pola - Extensiones de pestañas, diseño de uñas y tratamientos de belleza. Reserva tu cita por WhatsApp."
  },
  "en": {
    "seoTitle": "Beauty Salon in Santa Pola | Lash & Nails",
    "seoDescription": "Professional beauty salon in Santa Pola - Lash extensions, nail design and beauty treatments. Book your appointment via WhatsApp."
  },
  "ru": {
    "seoTitle": "Салон красоты в Санта-Пола | Lash & Nails",
    "seoDescription": "Профессиональный салон красоты в Санта-Пола - Наращивание ресниц, дизайн ногтей и косметические процедуры. Запишитесь через WhatsApp."
  }
}
</i18n>
