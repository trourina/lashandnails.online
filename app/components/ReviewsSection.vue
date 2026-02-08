<script setup lang="ts">
const { locale } = useI18n();

// Fetch testimonials from Sanity
const { data: sanityTestimonials } = useFetchTestimonials();

// Fetch homepage labels from Sanity
const { data: homePage } = useFetchHomePage();
const s = (field: Parameters<typeof getLocalized>[0]) => getLocalized(field, locale.value);

const reviews = computed(() => {
  if (!sanityTestimonials.value?.length) return [];
  return sanityTestimonials.value.map((item, index) => ({
    id: index + 1,
    quote: getLocalized(item.quote, locale.value),
    title: getLocalized(item.title, locale.value),
    name: item.clientName,
    avatarRef: item.avatar?.asset?._ref || null,
  }));
});
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
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
          class="bg-gray-50 rounded-2xl p-8 text-center"
        >
          <!-- Quote -->
          <p class="text-gray-600 text-sm leading-relaxed mb-6">
            {{ review.quote }}
          </p>

          <!-- Title -->
          <h3 class="font-display text-gray-900 font-semibold mb-8">
            {{ review.title }}
          </h3>

          <!-- Client Info -->
          <div class="flex flex-col items-center">
            <!-- Avatar -->
            <div
              class="w-20 h-20 rounded-full bg-gradient-to-br from-[#E8D5C4] to-[#D4C4B4] mb-4 overflow-hidden"
            >
              <NuxtImg
                v-if="review.avatarRef"
                provider="sanity"
                :src="review.avatarRef"
                :alt="review.name"
                width="80"
                height="80"
                fit="crop"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <!-- Name -->
            <p class="text-gray-900 font-medium mb-1">{{ review.name }}</p>
            <!-- Label -->
            <p class="text-gray-500 text-sm">{{ s(homePage?.reviewsClientLabel) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
