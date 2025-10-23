<template>
  <div>
    <Hero :title="t('title')" :subtitle="t('subtitle')" />

    <section class="container mx-auto px-4 py-12">

    <section aria-labelledby="booking-methods">
      <h2 id="booking-methods">{{ t("methods.heading") }}</h2>

      <div class="booking-methods-grid">
        <article class="booking-method">
          <h3>{{ t("methods.whatsapp.title") }}</h3>
          <p>{{ t("methods.whatsapp.description") }}</p>
          <Button
            :href="`https://wa.me/${business.phone.replace(
              /\+/g,
              ''
            )}?text=${encodeURIComponent(t('methods.whatsapp.message'))}`"
          >
            {{ t("methods.whatsapp.cta") }}
          </Button>
        </article>

        <article class="booking-method">
          <h3>{{ t("methods.phone.title") }}</h3>
          <p>{{ t("methods.phone.description") }}</p>
          <Button :href="`tel:${business.phone}`">
            {{ t("methods.phone.cta") }}
          </Button>
        </article>
      </div>
    </section>

    <section aria-labelledby="booking-info">
      <h2 id="booking-info">{{ t("info.heading") }}</h2>

      <dl class="info-list">
        <div>
          <dt>{{ t("info.hours.label") }}</dt>
          <dd>
            {{ t("info.hours.weekdays") }}:
            <time :datetime="business.hours.weekdays.opens">{{
              business.hours.weekdays.opens
            }}</time>
            -
            <time :datetime="business.hours.weekdays.closes">{{
              business.hours.weekdays.closes
            }}</time>
            <br />
            {{ t("info.hours.saturday") }}:
            <time :datetime="business.hours.saturday.opens">{{
              business.hours.saturday.opens
            }}</time>
            -
            <time :datetime="business.hours.saturday.closes">{{
              business.hours.saturday.closes
            }}</time>
          </dd>
        </div>

        <div>
          <dt>{{ t("info.services.label") }}</dt>
          <dd>
            <NuxtLink :to="localePath('/pricing')">{{
              t("info.services.link")
            }}</NuxtLink>
          </dd>
        </div>

        <div>
          <dt>{{ t("info.location.label") }}</dt>
          <dd>
            <address>
              {{ business.address.street }}<br />
              {{ business.address.postalCode }} {{ business.address.city }}
            </address>
          </dd>
        </div>
      </dl>
    </section>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: "local" });
const localePath = useLocalePath();
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
    "@type": "WebPage",
    name: () => t("seoTitle"),
    description: () => t("seoDescription"),
  },
]);
</script>

<style scoped>
h1,
h2,
h3 {
  font-family: "Prata", serif;
}

.booking-methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.booking-method {
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 12px;
  text-align: center;
}

.booking-method h3 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.booking-method p {
  margin-bottom: 1.5rem;
  color: #999;
}

section {
  margin-bottom: 4rem;
}

h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.info-list {
  margin-top: 2rem;
}

.info-list > div {
  padding: 1.5rem 0;
  border-bottom: 1px solid #333;
}

.info-list > div:last-child {
  border-bottom: none;
}

.info-list dt {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #999;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
}

.info-list dd {
  margin: 0;
  font-size: 1.125rem;
}

.info-list a {
  color: #667eea;
  text-decoration: underline;
}

.info-list a:hover {
  color: #764ba2;
}

address {
  font-style: normal;
}
</style>

<i18n lang="json">
{
  "es": {
    "title": "Reservar Cita",
    "subtitle": "Reserva tu cita por WhatsApp o teléfono",
    "seoTitle": "Reservar Cita | Lash & Nails Santa Pola",
    "seoDescription": "Reserva tu cita en nuestro salón de belleza en Santa Pola - WhatsApp o llamada telefónica",
    "methods": {
      "heading": "Elige tu método preferido",
      "whatsapp": {
        "title": "WhatsApp",
        "description": "Envíanos un mensaje y te responderemos lo antes posible",
        "cta": "Reservar por WhatsApp",
        "message": "Hola, me gustaría reservar una cita."
      },
      "phone": {
        "title": "Teléfono",
        "description": "Llámanos directamente para reservar tu cita",
        "cta": "Llamar ahora"
      }
    },
    "info": {
      "heading": "Información útil",
      "hours": {
        "label": "Horario",
        "weekdays": "Lunes a Viernes",
        "saturday": "Sábado"
      },
      "services": {
        "label": "Servicios y precios",
        "link": "Ver todos los servicios"
      },
      "location": {
        "label": "Ubicación"
      }
    }
  },
  "en": {
    "title": "Book Appointment",
    "subtitle": "Book your appointment via WhatsApp or phone",
    "seoTitle": "Book Appointment | Lash & Nails Santa Pola",
    "seoDescription": "Book your appointment at our beauty salon in Santa Pola - WhatsApp or phone call",
    "methods": {
      "heading": "Choose your preferred method",
      "whatsapp": {
        "title": "WhatsApp",
        "description": "Send us a message and we'll get back to you as soon as possible",
        "cta": "Book via WhatsApp",
        "message": "Hello, I would like to book an appointment."
      },
      "phone": {
        "title": "Phone",
        "description": "Call us directly to book your appointment",
        "cta": "Call now"
      }
    },
    "info": {
      "heading": "Useful information",
      "hours": {
        "label": "Opening hours",
        "weekdays": "Monday to Friday",
        "saturday": "Saturday"
      },
      "services": {
        "label": "Services and pricing",
        "link": "View all services"
      },
      "location": {
        "label": "Location"
      }
    }
  },
  "ru": {
    "title": "Записаться на прием",
    "subtitle": "Запишитесь на прием через WhatsApp или по телефону",
    "seoTitle": "Записаться на прием | Lash & Nails Santa Pola",
    "seoDescription": "Запишитесь на прием в наш салон красоты в Санта-Пола - WhatsApp или звонок",
    "methods": {
      "heading": "Выберите удобный способ",
      "whatsapp": {
        "title": "WhatsApp",
        "description": "Отправьте нам сообщение, и мы ответим как можно скорее",
        "cta": "Записаться через WhatsApp",
        "message": "Здравствуйте, я хочу записаться на прием."
      },
      "phone": {
        "title": "Телефон",
        "description": "Позвоните нам напрямую, чтобы записаться на прием",
        "cta": "Позвонить сейчас"
      }
    },
    "info": {
      "heading": "Полезная информация",
      "hours": {
        "label": "Часы работы",
        "weekdays": "Понедельник - Пятница",
        "saturday": "Суббота"
      },
      "services": {
        "label": "Услуги и цены",
        "link": "Посмотреть все услуги"
      },
      "location": {
        "label": "Расположение"
      }
    }
  }
}
</i18n>
