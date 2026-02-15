<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center space-y-4">
      <h1 class="font-display text-2xl font-bold text-gray-900">Sanity Studio</h1>
      <p class="text-gray-600">Redirecting to content management studio...</p>
      <a
        :href="studioUrl"
        class="inline-block bg-[#6B5B52] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5A4A42] transition-colors"
      >
        Open Studio
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

useSeoMeta({
  robots: "noindex, nofollow",
});

const studioUrl = "https://lashandnails.sanity.studio";

if (import.meta.client) {
  window.location.href = studioUrl;
}
</script>
