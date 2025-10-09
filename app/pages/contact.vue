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
              {{ business.address.street }}<br>
              {{ business.address.postalCode }} {{ business.address.city }}<br>
              {{ business.address.region }}, {{ t('address.country') }}
            </address>
          </dd>
        </div>

        <div>
          <dt>{{ t('phone.label') }}</dt>
          <dd>
            <a :href="`tel:${business.phone}`" rel="nofollow">{{ business.phone }}</a>
          </dd>
        </div>

        <div>
          <dt>{{ t('whatsapp.label') }}</dt>
          <dd>
            <a
              :href="`https://wa.me/${business.phone.replace(/\+/g, '')}?text=${encodeURIComponent(t('whatsapp.message'))}`"
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
              :href="`https://t.me/${business.telegram}?text=${encodeURIComponent(t('telegram.message'))}`"
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
            <time :datetime="business.hours.weekdays.opens">{{ business.hours.weekdays.opens }}</time> -
            <time :datetime="business.hours.weekdays.closes">{{ business.hours.weekdays.closes }}</time>
          </dd>
        </div>

        <div>
          <dt>{{ t('hours.saturday') }}</dt>
          <dd>
            <time :datetime="business.hours.saturday.opens">{{ business.hours.saturday.opens }}</time> -
            <time :datetime="business.hours.saturday.closes">{{ business.hours.saturday.closes }}</time>
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
])

const googleMapsDirectionsUrl = computed(() => {
  const address = `${business.address.street.replace(/ /g, '+')},+${business.address.postalCode}+${business.address.city},+${business.address.region}`
  return `https://www.google.com/maps/dir//${address}/@${business.geo.latitude},${business.geo.longitude},17z?hl=${locale.value}`
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
