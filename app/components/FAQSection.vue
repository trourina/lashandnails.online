<template>
  <section aria-labelledby="faq-heading">
    <h2 id="faq-heading">{{ t('heading') }}</h2>

    <dl class="space-y-4">
      <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-700 pb-4">
        <dt class="font-semibold text-lg mb-2">{{ faq.question }}</dt>
        <dd class="text-gray-300">{{ faq.answer }}</dd>
      </div>
    </dl>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })

const faqs = computed(() => [
  {
    question: t('q1.question'),
    answer: t('q1.answer'),
  },
  {
    question: t('q2.question'),
    answer: t('q2.answer'),
  },
  {
    question: t('q3.question'),
    answer: t('q3.answer'),
  },
  {
    question: t('q4.question'),
    answer: t('q4.answer'),
  },
])
</script>

<i18n lang="json">
{
  "es": {
    "heading": "Preguntas frecuentes",
    "q1": {
      "question": "¿Dónde está ubicado Lash & Nails Santa Pola?",
      "answer": "Estamos ubicados en Carrer Major, 8, 03130 Santa Pola, Alicante, España."
    },
    "q2": {
      "question": "¿Cuál es el horario de atención?",
      "answer": "Estamos abiertos de lunes a viernes de 09:30 a 20:00 y los sábados de 10:00 a 14:00. Cerramos los domingos."
    },
    "q3": {
      "question": "¿Cómo puedo hacer una cita?",
      "answer": "Puedes llamarnos al +34604316778, enviarnos un mensaje por WhatsApp o contactarnos por Telegram (Irina_STS)."
    },
    "q4": {
      "question": "¿A qué zonas dan servicio?",
      "answer": "Damos servicio a Santa Pola, Elche, Guardamar del Segura, Alicante y zonas cercanas."
    }
  },
  "en": {
    "heading": "Frequently Asked Questions",
    "q1": {
      "question": "Where is Lash & Nails Santa Pola located?",
      "answer": "We are located at Carrer Major, 8, 03130 Santa Pola, Alicante, Spain."
    },
    "q2": {
      "question": "What are your opening hours?",
      "answer": "We are open Monday to Friday from 09:30 to 20:00 and Saturday from 10:00 to 14:00. We are closed on Sundays."
    },
    "q3": {
      "question": "How can I make an appointment?",
      "answer": "You can call us at +34604316778, send us a WhatsApp message, or contact us on Telegram (Irina_STS)."
    },
    "q4": {
      "question": "What areas do you serve?",
      "answer": "We serve Santa Pola, Elche, Guardamar del Segura, Alicante, and surrounding areas."
    }
  },
  "ru": {
    "heading": "Часто задаваемые вопросы",
    "q1": {
      "question": "Где находится Lash & Nails Santa Pola?",
      "answer": "Мы находимся по адресу Carrer Major, 8, 03130 Santa Pola, Alicante, Испания."
    },
    "q2": {
      "question": "Какие у вас часы работы?",
      "answer": "Мы работаем с понедельника по пятницу с 09:30 до 20:00 и в субботу с 10:00 до 14:00. Воскресенье - выходной."
    },
    "q3": {
      "question": "Как записаться на прием?",
      "answer": "Вы можете позвонить нам по телефону +34604316778, отправить сообщение в WhatsApp или связаться через Telegram (Irina_STS)."
    },
    "q4": {
      "question": "Какие районы вы обслуживаете?",
      "answer": "Мы обслуживаем Santa Pola, Elche, Guardamar del Segura, Alicante и прилегающие районы."
    }
  }
}
</i18n>
