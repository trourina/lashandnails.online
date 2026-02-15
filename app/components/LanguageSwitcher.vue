<template>
  <div>
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code as 'en' | 'es' | 'ru')"
    >
      {{ locale.name }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n<unknown, "en" | "es" | "ru">();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return (locales.value as Array<{ code: string; name?: string }>).filter(
    (i) => i.code !== locale.value,
  );
});
</script>
