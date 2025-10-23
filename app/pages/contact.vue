<template>
  <div>
    <Hero :title="t('title')" :subtitle="t('subtitle')" />

    <!-- Contact Info Cards -->
    <section class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <!-- Phone -->
        <div class="bg-gray-50 rounded-3xl p-8 text-center">
          <div class="w-16 h-16 bg-[#6B5B52] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 class="font-display font-semibold text-gray-900 mb-2">{{ t("contact.phone.title") }}</h3>
          <a :href="`tel:${business.phone}`" class="text-gray-600 hover:text-[#6B5B52] transition-colors">
            {{ business.phone }}
          </a>
        </div>

        <!-- Email -->
        <div class="bg-gray-50 rounded-3xl p-8 text-center">
          <div class="w-16 h-16 bg-[#6B5B52] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="font-display font-semibold text-gray-900 mb-2">{{ t("contact.email.title") }}</h3>
          <a href="mailto:info@lashandnails.online" class="text-gray-600 hover:text-[#6B5B52] transition-colors">
            info@lashandnails.online
          </a>
        </div>

        <!-- Location -->
        <div class="bg-gray-50 rounded-3xl p-8 text-center">
          <div class="w-16 h-16 bg-[#6B5B52] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="font-display font-semibold text-gray-900 mb-2">{{ t("contact.location.title") }}</h3>
          <p class="text-gray-600">{{ business.address.street }}<br>{{ business.address.city }}</p>
        </div>

        <!-- Hours -->
        <div class="bg-gray-50 rounded-3xl p-8 text-center">
          <div class="w-16 h-16 bg-[#6B5B52] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="font-display font-semibold text-gray-900 mb-2">{{ t("contact.hours.title") }}</h3>
          <p class="text-gray-600">{{ t("contact.hours.weekdays") }}<br>{{ t("contact.hours.saturday") }}</p>
        </div>
      </div>

      <!-- Map -->
      <div class="mb-16">
        <LocationMap />
      </div>

      <!-- FAQ Section -->
      <FAQSection />
    </section>
  </div>
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

useSchemaOrg([
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: business.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: () => t("title"),
      },
    ],
  },
  {
    "@type": "ContactPage",
    name: () => t("seoTitle"),
    description: () => t("seoDescription"),
  },
  {
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description,
    image: `${business.url}/logo.png`,
    logo: `${business.url}/logo.png`,
    url: business.url,
    telephone: business.phone,
    priceRange: business.priceRange,
    paymentAccepted: business.paymentAccepted,
    sameAs: [business.social.facebook, business.social.instagram],
    areaServed: [
      { "@type": "City", name: "Santa Pola" },
      { "@type": "City", name: "Elche" },
      { "@type": "City", name: "Guardamar del Segura" },
      { "@type": "City", name: "Alicante" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "12",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: business.hours.weekdays.opens,
        closes: business.hours.weekdays.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: business.hours.saturday.opens,
        closes: business.hours.saturday.closes,
      },
    ],
  },
  {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: () => t("faq.q1.question"),
        acceptedAnswer: {
          "@type": "Answer",
          text: () => t("faq.q1.answer"),
        },
      },
      {
        "@type": "Question",
        name: () => t("faq.q2.question"),
        acceptedAnswer: {
          "@type": "Answer",
          text: () => t("faq.q2.answer"),
        },
      },
      {
        "@type": "Question",
        name: () => t("faq.q3.question"),
        acceptedAnswer: {
          "@type": "Answer",
          text: () => t("faq.q3.answer"),
        },
      },
      {
        "@type": "Question",
        name: () => t("faq.q4.question"),
        acceptedAnswer: {
          "@type": "Answer",
          text: () => t("faq.q4.answer"),
        },
      },
    ],
  },
]);
</script>

<i18n lang="json">
{
  "es": {
    "title": "Contacto",
    "subtitle": "Visítanos o contáctanos por teléfono, WhatsApp o Telegram",
    "seoTitle": "Contacto | Lash & Nails Santa Pola",
    "seoDescription": "Contáctanos - Carrer Major, 8, Santa Pola - Teléfono, horario y ubicación de nuestro salón de belleza",
    "contact": {
      "phone": {
        "title": "Llámanos"
      },
      "email": {
        "title": "Envíanos un Email"
      },
      "location": {
        "title": "Ubicación"
      },
      "hours": {
        "title": "Horario",
        "weekdays": "Lun - Vie: 09:30 - 20:00",
        "saturday": "Sáb: 10:00 - 14:00"
      }
    },
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
    "contact": {
      "phone": {
        "title": "Call Us"
      },
      "email": {
        "title": "Send Us Email"
      },
      "location": {
        "title": "Location"
      },
      "hours": {
        "title": "Work Hours",
        "weekdays": "Mon - Fri: 09:30 - 20:00",
        "saturday": "Sat: 10:00 - 14:00"
      }
    },
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
    "contact": {
      "phone": {
        "title": "Позвоните Нам"
      },
      "email": {
        "title": "Напишите Email"
      },
      "location": {
        "title": "Расположение"
      },
      "hours": {
        "title": "Часы Работы",
        "weekdays": "Пн - Пт: 09:30 - 20:00",
        "saturday": "Сб: 10:00 - 14:00"
      }
    },
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
