<script setup lang="ts">
const { locale } = useI18n();
const settings = useSiteSettings();

// Fetch testimonials from Sanity
const { data: sanityTestimonials } = useFetchTestimonials();

// Fetch homepage labels from Sanity
const { data: homePage } = await useFetchHomePage();
const s = (field: Parameters<typeof getLocalized>[0]) => getLocalized(field, locale.value);

const reviews = computed(() => {
  if (!sanityTestimonials.value?.length) return [];
  return sanityTestimonials.value.map((item, index) => ({
    id: index + 1,
    quote: getLocalized(item.quote, locale.value),
    title: getLocalized(item.title, locale.value),
    name: item.clientName,
    rating: item.rating || 5,
  }));
});
</script>

<template>
  <section id="reviews" class="py-16 bg-white">
    <div class="container mx-auto px-4 relative">
      <DecorCircle color="cream" size="xl" top="-1rem" left="-2rem" />
      <DecorCircle color="brown" size="lg" bottom="6rem" right="-1.5rem" />
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {{ s(homePage?.reviewsTitle) }}
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          {{ s(homePage?.reviewsDescription) }}
        </p>
      </div>

      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="bg-gray-50 rounded-2xl p-8 flex flex-col text-left"
        >
          <!-- Client Name -->
          <p class="text-gray-900 font-semibold">{{ review.name }}</p>

          <!-- Service -->
          <p class="text-gray-500 text-sm mb-3">{{ review.title }}</p>

          <!-- Stars -->
          <div class="flex gap-0.5 mb-4">
            <svg
              v-for="i in review.rating"
              :key="i"
              class="w-4 h-4 text-[#FFC107] fill-current"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <!-- Quote -->
          <p class="text-gray-600 text-sm leading-relaxed">"{{ review.quote }}"</p>
        </div>
      </div>

      <!-- Review CTA Banner -->
      <div class="mt-12 max-w-6xl mx-auto bg-[#6B5B52] rounded-2xl p-8 text-center text-white">
        <div class="flex justify-center gap-0.5 mb-3">
          <svg
            v-for="i in 5"
            :key="i"
            class="w-5 h-5 text-[#FFC107] fill-current"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
        <a
          :href="settings.googleReviewUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-[#FFC107] text-[#4A3A32] hover:bg-[#FFB300] px-6 py-3 rounded-full font-semibold transition-all"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          {{ s(homePage?.reviewsCtaButton) }}
        </a>
      </div>
    </div>
  </section>
</template>
