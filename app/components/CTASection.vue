<template>
  <section class="cta-section">
    <div class="cta-content">
      <h2>{{ t('heading') }}</h2>
      <p>{{ t('subtitle') }}</p>
      <div class="cta-buttons">
        <Button
          :href="`https://wa.me/${business.phone.replace(/\+/g, '')}?text=${encodeURIComponent(t('message'))}`"
        >
          {{ t('cta') }}
        </Button>
        <Button :href="`tel:${business.phone}`">
          {{ t('phone') }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const config = useRuntimeConfig()
const business = config.public.business
</script>

<style scoped>
.cta-section {
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 4rem 0;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  font-family: 'Prata', serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  color: white;
}

p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

<i18n lang="json">
{
  "es": {
    "heading": "¿Lista para tu transformación?",
    "subtitle": "Reserva tu cita hoy y descubre tu mejor versión",
    "cta": "Reservar por WhatsApp",
    "phone": "Llamar ahora",
    "message": "Hola, me gustaría reservar una cita."
  },
  "en": {
    "heading": "Ready for your transformation?",
    "subtitle": "Book your appointment today and discover your best version",
    "cta": "Book via WhatsApp",
    "phone": "Call now",
    "message": "Hello, I would like to book an appointment."
  },
  "ru": {
    "heading": "Готовы к преображению?",
    "subtitle": "Запишитесь на прием сегодня и откройте для себя лучшую версию себя",
    "cta": "Записаться через WhatsApp",
    "phone": "Позвонить сейчас",
    "message": "Здравствуйте, я хочу записаться на прием."
  }
}
</i18n>
