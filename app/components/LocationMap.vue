<template>
  <section aria-labelledby="location-map">
    <h2 id="location-map">{{ t('heading') }}</h2>

    <div>
      <a
        :href="googleMapsDirectionsUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ t('getDirections') }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: 'local' })
const config = useRuntimeConfig()
const business = config.public.business

const googleMapsDirectionsUrl = computed(() => {
  const address = `${business.address.street.replace(/ /g, '+')},+${business.address.postalCode}+${business.address.city},+${business.address.region}`
  return `https://www.google.com/maps/dir//${address}/@${business.geo.latitude},${business.geo.longitude},17z?hl=${locale.value}`
})
</script>

<i18n lang="json">
{
  "es": {
    "heading": "Ubicación",
    "getDirections": "Cómo llegar"
  },
  "en": {
    "heading": "Location",
    "getDirections": "Get directions"
  },
  "ru": {
    "heading": "Расположение",
    "getDirections": "Как добраться"
  }
}
</i18n>
