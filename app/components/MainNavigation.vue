<template>
  <nav>
    <NuxtLink :to="localePath('/')">{{ t("nav.home") }}</NuxtLink>
    <NuxtLink :to="localePath('/services')">{{ t("nav.services") }}</NuxtLink>
    <NuxtLink :to="localePath('/pricing')">{{ t("nav.pricing") }}</NuxtLink>
    <NuxtLink :to="localePath('/gallery')">{{ t("nav.gallery") }}</NuxtLink>
    <NuxtLink :to="localePath('/about')">{{ t("nav.about") }}</NuxtLink>
    <NuxtLink :to="localePath('/contact')">{{ t("nav.contact") }}</NuxtLink>
    <NuxtLink :to="localePath('/booking')">{{ t("nav.booking") }}</NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();
</script>
