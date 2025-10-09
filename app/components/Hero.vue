<template>
  <section class="hero">
    <h1>{{ t("heading") }}</h1>
    <p class="hero-subtitle">{{ t("subtitle") }}</p>
    <div class="hero-cta">
      <Button
        :href="`https://wa.me/${business.phone.replace(
          /\+/g,
          ''
        )}?text=${encodeURIComponent(t('ctaMessage'))}`"
      >
        {{ t("ctaPrimary") }}
      </Button>
      <Button to="/pricing">
        {{ t("ctaSecondary") }}
      </Button>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: "local" });
const config = useRuntimeConfig();
const business = config.public.business;
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 1rem;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-family: "Prata", serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  color: #999;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

<i18n lang="json">
{
  "es": {
    "heading": "Salón de Belleza en Santa Pola",
    "subtitle": "Extensiones de pestañas, diseño de uñas y tratamientos de belleza profesionales",
    "ctaPrimary": "Reservar por WhatsApp",
    "ctaSecondary": "Ver Precios",
    "ctaMessage": "Hola, me gustaría reservar una cita."
  },
  "en": {
    "heading": "Beauty Salon in Santa Pola",
    "subtitle": "Professional lash extensions, nail design and beauty treatments",
    "ctaPrimary": "Book via WhatsApp",
    "ctaSecondary": "View Pricing",
    "ctaMessage": "Hello, I would like to book an appointment."
  },
  "ru": {
    "heading": "Салон красоты в Санта-Пола",
    "subtitle": "Профессиональное наращивание ресниц, дизайн ногтей и косметические процедуры",
    "ctaPrimary": "Записаться через WhatsApp",
    "ctaSecondary": "Посмотреть цены",
    "ctaMessage": "Здравствуйте, я хочу записаться на прием."
  }
}
</i18n>
