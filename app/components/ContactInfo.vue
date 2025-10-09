<template>
  <section aria-labelledby="contact-methods">
    <h2 id="contact-methods">{{ t('heading') }}</h2>

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
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const config = useRuntimeConfig()
const business = config.public.business
</script>

<i18n lang="json">
{
  "es": {
    "heading": "Cómo contactarnos",
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
    }
  },
  "en": {
    "heading": "How to contact us",
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
    }
  },
  "ru": {
    "heading": "Как с нами связаться",
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
    }
  }
}
</i18n>
