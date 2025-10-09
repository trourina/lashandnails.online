<template>
  <section aria-labelledby="location-map">
    <h2 id="location-map">{{ t("heading") }}</h2>

    <div class="aspect-video w-full max-w-3xl mx-auto mb-4">
      <iframe
        :src="`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.7!2d${business.geo.longitude}!3d${business.geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd624d0069bfd3c1%3A0x997ee3bca306f329!2sLash%26Nails!5e0!3m2!1s${locale}!2ses!4v1234567890123!5m2!1s${locale}!2ses`"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen="false"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        :title="t('mapTitle')"
      ></iframe>
    </div>

    <div class="text-center">
      <a
        :href="googleMapsDirectionsUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block underline hover:no-underline"
      >
        {{ t("getDirections") }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: "local" });
const config = useRuntimeConfig();
const business = config.public.business;

const googleMapsDirectionsUrl = computed(() => {
  return `https://www.google.com/maps/dir//${business.geo.latitude},${business.geo.longitude}/@${business.geo.latitude},${business.geo.longitude},17z?hl=${locale.value}`;
});
</script>

<i18n lang="json">
{
  "es": {
    "heading": "Ubicación",
    "getDirections": "Cómo llegar",
    "mapTitle": "Ubicación de Lash & Nails Santa Pola en Google Maps"
  },
  "en": {
    "heading": "Location",
    "getDirections": "Get directions",
    "mapTitle": "Location of Lash & Nails Santa Pola on Google Maps"
  },
  "ru": {
    "heading": "Расположение",
    "getDirections": "Как добраться",
    "mapTitle": "Расположение Lash & Nails Santa Pola на Google Maps"
  }
}
</i18n>
