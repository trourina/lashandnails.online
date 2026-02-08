<template>
  <NuxtLayout>
    <Hero :title="String(error?.statusCode || 404)" :subtitle="message" />

    <section class="flex flex-col items-center justify-center px-4 py-16 text-center">
      <img
        src="/404.gif"
        alt=""
        class="mb-8 w-80 rounded-2xl shadow-lg"
      >
      <Button :to="localePath('/')" class="bg-[#6B5B52] text-white hover:bg-[#8B7565] px-8 py-3 rounded-full font-semibold transition-all">
        {{ t('error.backHome') }}
      </Button>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const { t } = useI18n()
const localePath = useLocalePath()

const message = computed(() => {
  if (props.error?.statusCode === 404) {
    return t('error.notFound')
  }
  return t('error.generic')
})

useSeoMeta({
  title: () => `${props.error?.statusCode || 404} — ${t('error.notFound')}`,
  robots: 'noindex, nofollow',
})
</script>
