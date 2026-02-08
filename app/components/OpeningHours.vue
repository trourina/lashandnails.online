<template>
  <section aria-labelledby="opening-hours">
    <h2 id="opening-hours">{{ t('openingHours.heading') }}</h2>

    <dl>
      <div>
        <dt>{{ t('openingHours.weekdays') }}</dt>
        <dd>
          <time :datetime="settings.hours.weekdays.opens">{{ settings.hours.weekdays.opens }}</time> -
          <time :datetime="settings.hours.weekdays.closes">{{ settings.hours.weekdays.closes }}</time>
        </dd>
      </div>

      <div>
        <dt>{{ t('openingHours.saturday') }}</dt>
        <dd>
          <time :datetime="settings.hours.saturday.opens">{{ settings.hours.saturday.opens }}</time> -
          <time :datetime="settings.hours.saturday.closes">{{ settings.hours.saturday.closes }}</time>
        </dd>
      </div>

      <div>
        <dt>{{ t('openingHours.sunday') }}</dt>
        <dd>{{ t('openingHours.closed') }}</dd>
      </div>
    </dl>

    <p>{{ t('openingHours.holidayNote') }}</p>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
const settings = useSiteSettings()
</script>
