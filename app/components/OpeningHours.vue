<template>
  <section aria-labelledby="opening-hours">
    <h2 id="opening-hours">{{ t('heading') }}</h2>

    <dl>
      <div>
        <dt>{{ t('weekdays') }}</dt>
        <dd>
          <time :datetime="business.hours.weekdays.opens">{{ business.hours.weekdays.opens }}</time> -
          <time :datetime="business.hours.weekdays.closes">{{ business.hours.weekdays.closes }}</time>
        </dd>
      </div>

      <div>
        <dt>{{ t('saturday') }}</dt>
        <dd>
          <time :datetime="business.hours.saturday.opens">{{ business.hours.saturday.opens }}</time> -
          <time :datetime="business.hours.saturday.closes">{{ business.hours.saturday.closes }}</time>
        </dd>
      </div>

      <div>
        <dt>{{ t('sunday') }}</dt>
        <dd>{{ t('closed') }}</dd>
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
    "heading": "Horario de atención",
    "weekdays": "Lunes a Viernes",
    "saturday": "Sábado",
    "sunday": "Domingo",
    "closed": "Cerrado"
  },
  "en": {
    "heading": "Opening hours",
    "weekdays": "Monday to Friday",
    "saturday": "Saturday",
    "sunday": "Sunday",
    "closed": "Closed"
  },
  "ru": {
    "heading": "Часы работы",
    "weekdays": "Понедельник - Пятница",
    "saturday": "Суббота",
    "sunday": "Воскресенье",
    "closed": "Закрыто"
  }
}
</i18n>
