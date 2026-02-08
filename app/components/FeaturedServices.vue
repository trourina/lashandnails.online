<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();

const { data: homePage } = useFetchHomePage();
const s = (field: Parameters<typeof getLocalized>[0]) => getLocalized(field, locale.value);

const services = computed(() => {
  if (!homePage.value?.featuredServices?.length) return [];
  return homePage.value.featuredServices.map((item, index) => ({
    id: index,
    name: getLocalized(item.name, locale.value),
    price: item.price,
    imageRef: item.image?.asset?._ref || null,
    link: stegaClean(item.link),
  }));
});
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 relative">
      <DecorCircle color="gold" size="xl" top="-1.5rem" right="-2rem" />
      <DecorCircle color="cream" size="lg" bottom="2rem" left="-1.5rem" />
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-8">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900">
          {{ s(homePage?.featuredTitle) }}
        </h2>
        <NuxtLink
          :to="localePath('/pricing')"
          class="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:border-[#6B5B52] hover:text-[#6B5B52] transition-all"
        >
          {{ s(homePage?.featuredSeeMore) }}
        </NuxtLink>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="service in services"
          :key="service.id"
          :to="localePath(service.link)"
          class="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
        >
          <!-- Image -->
          <div
            class="relative aspect-[4/3] bg-gradient-to-br from-[#E8D5C4] to-[#D4C4B4] overflow-hidden"
          >
            <NuxtImg
              v-if="service.imageRef"
              provider="sanity"
              :src="service.imageRef"
              :alt="service.name"
              width="600"
              height="450"
              fit="crop"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />

            <!-- Rating Badge -->
            <div
              class="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1"
            >
              <svg
                class="w-4 h-4 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              <span class="text-sm font-medium text-gray-900">5</span>
            </div>

            <!-- Hover overlay -->
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"
            />
          </div>

          <!-- Content -->
          <div class="p-5">
            <h3 class="font-display text-lg font-semibold text-gray-900 mb-1">
              {{ service.name }}
            </h3>
            <p class="text-xl font-bold text-[#6B5B52]">
              {{ service.price }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
