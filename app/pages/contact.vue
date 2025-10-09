<template>
  <main>
    <header>
      <h1>{{ t('title') }}</h1>
      <p>{{ t('subtitle') }}</p>
    </header>

    <section aria-labelledby="contact-methods">
      <h2 id="contact-methods">{{ t('contactMethodsHeading') }}</h2>

      <dl>
        <div>
          <dt>{{ t('address.label') }}</dt>
          <dd>
            <address>
              Carrer Major, 8<br>
              03130 Santa Pola<br>
              Alicante, {{ t('address.country') }}
            </address>
          </dd>
        </div>

        <div>
          <dt>{{ t('phone.label') }}</dt>
          <dd>
            <a href="tel:+34604316778" rel="nofollow">+34 604 31 67 78</a>
          </dd>
        </div>

        <div>
          <dt>{{ t('whatsapp.label') }}</dt>
          <dd>
            <a
              :href="`https://wa.me/34604316778?text=${encodeURIComponent(t('whatsapp.message'))}`"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {{ t('whatsapp.action') }}
            </a>
          </dd>
        </div>

        <div>
          <dt>{{ t('telegram.label') }}</dt>
          <dd>
            <a
              :href="`https://t.me/Irina_STS?text=${encodeURIComponent(t('telegram.message'))}`"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {{ t('telegram.action') }}
            </a>
          </dd>
        </div>
      </dl>
    </section>

    <section aria-labelledby="opening-hours">
      <h2 id="opening-hours">{{ t('hours.heading') }}</h2>

      <dl>
        <div>
          <dt>{{ t('hours.weekdays') }}</dt>
          <dd>
            <time datetime="09:30">09:30</time> - <time datetime="20:00">20:00</time>
          </dd>
        </div>

        <div>
          <dt>{{ t('hours.saturday') }}</dt>
          <dd>
            <time datetime="10:00">10:00</time> - <time datetime="14:00">14:00</time>
          </dd>
        </div>

        <div>
          <dt>{{ t('hours.sunday') }}</dt>
          <dd>{{ t('hours.closed') }}</dd>
        </div>
      </dl>
    </section>

    <section aria-labelledby="location-map">
      <h2 id="location-map">{{ t('map.heading') }}</h2>

      <div>
        <a
          :href="googleMapsDirectionsUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t('map.getDirections') }}
        </a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: 'local' })

useSeoMeta({
  title: () => t('seoTitle'),
  description: () => t('seoDescription'),
  ogTitle: () => t('seoTitle'),
  ogDescription: () => t('seoDescription'),
  ogType: 'website',
  ogLocale: () => locale.value === 'es' ? 'es_ES' : locale.value === 'ru' ? 'ru_RU' : 'en_US',
})

useSchemaOrg([
  defineContactPage({
    name: () => t('seoTitle'),
    description: () => t('seoDescription'),
  }),
  defineLocalBusiness({
    name: 'Lash & Nails Santa Pola',
    description: 'Professional beauty salon in Santa Pola offering lash extensions, nail design, and beauty treatments',
    image: 'https://lashandnails.online/logo.png',
    logo: 'https://lashandnails.online/logo.png',
    url: 'https://lashandnails.online',
    telephone: '+34604316778',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Carrer Major, 8',
      addressLocality: 'Santa Pola',
      addressRegion: 'Alicante',
      postalCode: '03130',
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 38.1956992,
      longitude: -0.5579955,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:30',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '10:00',
        closes: '14:00',
      },
    ],
  }),
])

const googleMapsDirectionsUrl = computed(() => {
  const address = 'Carrer+Major,+8,+03130+Santa+Pola,+Alicante'
  const lang = locale.value
  return `https://www.google.com/maps/dir//${address}/@38.1942263,-0.5558291,17z?hl=${lang}`
})
</script>

<i18n lang="json">
{
  "es": {
    "title": "Contacto",
    "subtitle": "Visítanos o contáctanos por teléfono, WhatsApp o Telegram",
    "seoTitle": "Contacto | Lash & Nails Santa Pola",
    "seoDescription": "Contáctanos - Carrer Major, 8, Santa Pola - Teléfono, horario y ubicación de nuestro salón de belleza",
    "contactMethodsHeading": "Cómo contactarnos",
    "address": {
      "label": "Dirección",
      "country": "España"
    },
    "phone": {
      "label": "Teléfono"
    },
    "whatsapp": {
      "label": "WhatsApp",
      "action": "Enviar mensaje por WhatsApp",
      "message": "Hola, quiero hacer una cita."
    },
    "telegram": {
      "label": "Telegram",
      "action": "Enviar mensaje por Telegram",
      "message": "Hola, quiero hacer una cita."
    },
    "hours": {
      "heading": "Horario de atención",
      "weekdays": "Lunes a Viernes",
      "saturday": "Sábado",
      "sunday": "Domingo",
      "closed": "Cerrado"
    },
    "map": {
      "heading": "Ubicación",
      "getDirections": "Cómo llegar"
    }
  },
  "en": {
    "title": "Contact",
    "subtitle": "Visit us or contact us by phone, WhatsApp or Telegram",
    "seoTitle": "Contact | Lash & Nails Santa Pola",
    "seoDescription": "Contact us - Carrer Major, 8, Santa Pola - Phone, hours and location of our beauty salon",
    "contactMethodsHeading": "How to contact us",
    "address": {
      "label": "Address",
      "country": "Spain"
    },
    "phone": {
      "label": "Phone"
    },
    "whatsapp": {
      "label": "WhatsApp",
      "action": "Send WhatsApp message",
      "message": "Hello, I would like to make an appointment."
    },
    "telegram": {
      "label": "Telegram",
      "action": "Send Telegram message",
      "message": "Hello, I would like to make an appointment."
    },
    "hours": {
      "heading": "Opening hours",
      "weekdays": "Monday to Friday",
      "saturday": "Saturday",
      "sunday": "Sunday",
      "closed": "Closed"
    },
    "map": {
      "heading": "Location",
      "getDirections": "Get directions"
    }
  },
  "ru": {
    "title": "Контакты",
    "subtitle": "Посетите нас или свяжитесь по телефону, WhatsApp или Telegram",
    "seoTitle": "Контакты | Lash & Nails Santa Pola",
    "seoDescription": "Свяжитесь с нами - Carrer Major, 8, Santa Pola - Телефон, часы работы и расположение нашего салона красоты",
    "contactMethodsHeading": "Как с нами связаться",
    "address": {
      "label": "Адрес",
      "country": "Испания"
    },
    "phone": {
      "label": "Телефон"
    },
    "whatsapp": {
      "label": "WhatsApp",
      "action": "Отправить сообщение в WhatsApp",
      "message": "Здравствуйте, я хочу записаться на прием."
    },
    "telegram": {
      "label": "Telegram",
      "action": "Отправить сообщение в Telegram",
      "message": "Здравствуйте, я хочу записаться на прием."
    },
    "hours": {
      "heading": "Часы работы",
      "weekdays": "Понедельник - Пятница",
      "saturday": "Суббота",
      "sunday": "Воскресенье",
      "closed": "Закрыто"
    },
    "map": {
      "heading": "Расположение",
      "getDirections": "Как добраться"
    }
  }
}
</i18n>
