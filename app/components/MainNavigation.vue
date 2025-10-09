<template>
  <nav>
    <NuxtLink :to="localePath('/')">{{ t('home') }}</NuxtLink>
    <NuxtLink :to="localePath('/services')">{{ t('services') }}</NuxtLink>
    <NuxtLink :to="localePath('/gallery')">{{ t('gallery') }}</NuxtLink>
    <NuxtLink :to="localePath('/about')">{{ t('about') }}</NuxtLink>
    <NuxtLink :to="localePath('/contact')">{{ t('contact') }}</NuxtLink>
    <NuxtLink :to="localePath('/booking')">{{ t('booking') }}</NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n({ useScope: 'local' })
</script>

<i18n lang="json">
{
  "es": {
    "home": "Inicio",
    "services": "Servicios",
    "gallery": "Galería",
    "about": "Nosotros",
    "contact": "Contacto",
    "booking": "Reservar"
  },
  "en": {
    "home": "Home",
    "services": "Services",
    "gallery": "Gallery",
    "about": "About",
    "contact": "Contact",
    "booking": "Book Now"
  },
  "ru": {
    "home": "Главная",
    "services": "Услуги",
    "gallery": "Галерея",
    "about": "О нас",
    "contact": "Контакты",
    "booking": "Записаться"
  }
}
</i18n>
