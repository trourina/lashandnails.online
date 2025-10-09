<template>
  <main>
    <header>
      <h1>{{ t('title') }}</h1>
      <p>{{ t('subtitle') }}</p>
    </header>

    <ContactInfo />
    <OpeningHours />
    <LocationMap />
    <FAQSection />
  </main>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: 'local' })
const config = useRuntimeConfig()
const business = config.public.business

useSeoMeta({
  title: () => t('seoTitle'),
  description: () => t('seoDescription'),
  ogTitle: () => t('seoTitle'),
  ogDescription: () => t('seoDescription'),
  ogType: 'website',
  ogLocale: () => locale.value === 'es' ? 'es_ES' : locale.value === 'ru' ? 'ru_RU' : 'en_US',
})

useSchemaOrg([
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: business.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: () => t('title'),
      },
    ],
  },
  {
    '@type': 'ContactPage',
    name: () => t('seoTitle'),
    description: () => t('seoDescription'),
  },
  {
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    image: `${business.url}/logo.png`,
    logo: `${business.url}/logo.png`,
    url: business.url,
    telephone: business.phone,
    priceRange: business.priceRange,
    paymentAccepted: business.paymentAccepted,
    sameAs: [
      business.social.facebook,
      business.social.instagram,
    ],
    areaServed: [
      { '@type': 'City', name: 'Santa Pola' },
      { '@type': 'City', name: 'Elche' },
      { '@type': 'City', name: 'Guardamar del Segura' },
      { '@type': 'City', name: 'Alicante' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '12',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: business.hours.weekdays.opens,
        closes: business.hours.weekdays.closes,
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: business.hours.saturday.opens,
        closes: business.hours.saturday.closes,
      },
    ],
  },
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: () => t('faq.q1.question'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: () => t('faq.q1.answer'),
        },
      },
      {
        '@type': 'Question',
        name: () => t('faq.q2.question'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: () => t('faq.q2.answer'),
        },
      },
      {
        '@type': 'Question',
        name: () => t('faq.q3.question'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: () => t('faq.q3.answer'),
        },
      },
      {
        '@type': 'Question',
        name: () => t('faq.q4.question'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: () => t('faq.q4.answer'),
        },
      },
    ],
  },
])
</script>

<i18n lang="json">
{
  "es": {
    "title": "Contacto",
    "subtitle": "Visítanos o contáctanos por teléfono, WhatsApp o Telegram",
    "seoTitle": "Contacto | Lash & Nails Santa Pola",
    "seoDescription": "Contáctanos - Carrer Major, 8, Santa Pola - Teléfono, horario y ubicación de nuestro salón de belleza",
    "faq": {
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
    }
  },
  "en": {
    "title": "Contact",
    "subtitle": "Visit us or contact us by phone, WhatsApp or Telegram",
    "seoTitle": "Contact | Lash & Nails Santa Pola",
    "seoDescription": "Contact us - Carrer Major, 8, Santa Pola - Phone, hours and location of our beauty salon",
    "faq": {
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
    }
  },
  "ru": {
    "title": "Контакты",
    "subtitle": "Посетите нас или свяжитесь по телефону, WhatsApp или Telegram",
    "seoTitle": "Контакты | Lash & Nails Santa Pola",
    "seoDescription": "Свяжитесь с нами - Carrer Major, 8, Santa Pola - Телефон, часы работы и расположение нашего салона красоты",
    "faq": {
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
}
</i18n>
