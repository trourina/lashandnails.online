<script setup lang="ts">
const { locale } = useI18n();
const settings = useSiteSettings();
const { trackWhatsAppClick } = useAnalytics();

const handleWhatsAppClick = () => {
  trackWhatsAppClick("hero_grid");
};

// Fetch hero images from Sanity
const { data: sanityHeroImages, encodeDataAttribute } = useFetchHeroImages();

// Fetch homepage labels from Sanity
const { data: homePage } = useFetchHomePage();
const s = (field: Parameters<typeof getLocalized>[0]) => getLocalized(field, locale.value);

const whatsappLink = computed(() =>
  `https://wa.me/${settings.value.phone.replace(/\+/g, '')}?text=${encodeURIComponent(s(homePage.value?.heroCtaMessage))}`
);

// Category label map from Sanity homePage
const categoryLabel = (cat: string) => {
  const map: Record<string, () => string> = {
    lashes: () => s(homePage.value?.heroCategoryLashes),
    manicure: () => s(homePage.value?.heroCategoryManicure),
    pedicure: () => s(homePage.value?.heroCategoryPedicure),
    brows: () => s(homePage.value?.heroCategoryBrows),
  };
  return map[cat]?.() || cat;
};

const gridImages = computed(() => {
  if (sanityHeroImages.value && sanityHeroImages.value.length >= 4) {
    return sanityHeroImages.value.slice(0, 4).map((img, index) => ({
      id: index + 1,
      image: img.image?.asset?._ref || "",
      alt: getLocalized(img.alt, locale.value) || stegaClean(img.category),
      category: stegaClean(img.category),
      origIdx: index,
    }));
  }
  return [];
});

// Track which service is currently featured (large)
const activeService = ref(1);

// Rotate through services every 4 seconds
let intervalId: ReturnType<typeof setInterval>;
onMounted(() => {
  intervalId = setInterval(() => {
    activeService.value =
      activeService.value === 4 ? 1 : activeService.value + 1;
  }, 4000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <section
    class="bg-gradient-to-br from-[#6B5B52] to-[#8B7565] text-white -mt-24 py-32 px-4 relative"
  >
    <DecorCircle color="cream" size="xl" top="3rem" left="-2rem" />
    <DecorCircle color="gold" size="lg" bottom="2rem" right="-1.5rem" />
    <DecorCircle color="brown" size="md" bottom="8rem" left="5rem" />
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Text Content -->
        <div class="text-left space-y-6">
          <h1
            class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
          >
            {{ s(homePage?.heroTitle) }}
          </h1>

          <p class="text-xl md:text-2xl text-white/90 text-balance">
            {{ s(homePage?.heroSubtitle) }}
          </p>

          <p class="text-lg text-white/80 max-w-xl">
            {{ s(homePage?.heroDescription) }}
          </p>

          <!-- WhatsApp CTA Button -->
          <div class="pt-4 space-y-4">
            <Button
              :href="whatsappLink"
              class="bg-[#FFC107] text-[#4A3A32] hover:bg-[#FFB300] px-8 py-4 rounded-full font-semibold shadow-lg transition-all inline-flex items-center gap-2"
              @click="handleWhatsAppClick"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                />
              </svg>
              {{ s(homePage?.heroCtaPrimary) }}
            </Button>

            <!-- Google Reviews Badge -->
            <a
              href="#reviews"
              class="flex items-center gap-2 text-white/90 hover:text-white transition-colors w-fit"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div class="flex items-center gap-1">
                <span class="font-semibold">5.0</span>
                <div class="flex">
                  <svg v-for="i in 5" :key="i" class="w-4 h-4 text-[#FFC107] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <span class="text-sm text-white/70">14 Google Reviews</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Right: Animated 3x3 Grid -->
        <div class="animated-grid">
          <div
            v-for="item in gridImages"
            :key="item.id"
            :class="[
              'grid-item',
              `grid-item-${item.id}`,
              { featured: activeService === item.id },
            ]"
          >
            <!-- Placeholder gradient -->
            <div
              class="absolute inset-0 bg-gradient-to-br from-[#E8D5C4] to-[#D4C4B4]"
            >
              <!-- Shimmer effect -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
              />
            </div>

            <!-- Overlay -->
            <div
              class="absolute inset-0 transition-all duration-700"
              :class="activeService === item.id ? 'bg-black/0' : 'bg-black/30'"
            >
              <NuxtImg
                v-if="item.image"
                provider="sanity"
                :src="item.image"
                :alt="item.alt"
                width="600"
                height="600"
                fit="crop"
                class="absolute inset-0 object-cover h-full w-full"
                :data-sanity="encodeDataAttribute?.([item.origIdx, 'image'])"
              />
            </div>

            <!-- Category badge -->
            <div
              class="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#6B5B52] text-xs px-3 py-1 rounded-full font-medium z-10"
            >
              {{ categoryLabel(item.category) }}
            </div>

            <!-- Featured indicator -->
            <div
              v-if="activeService === item.id"
              class="absolute inset-0 border-4 border-white/40 rounded-2xl pointer-events-none z-10"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

/* Animated Grid Layout - Using absolute positioning for smooth animations */
.animated-grid {
  position: relative;
  aspect-ratio: 1;
  width: 100%;
}

.grid-item {
  position: absolute;
  overflow: hidden;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Grid logic: 3 columns/rows with 1rem gaps between them
   Total gaps: 2 (between 3 cells)
   One cell: calc((100% - 2rem) / 3)
   Two cells: calc((100% - 2rem) / 3 * 2 + 1rem)
   Three cells: 100%
*/

/* === WHEN SERVICE 1 IS ACTIVE (Lashes - top-left 2x2) === */
.animated-grid:has(.grid-item-1.featured) .grid-item-1 {
  left: 0;
  top: 0;
  width: calc((100% - 2rem) / 3 * 2 + 1rem);
  height: calc((100% - 2rem) / 3 * 2 + 1rem);
  z-index: 10;
}

.animated-grid:has(.grid-item-1.featured) .grid-item-2 {
  left: calc((100% - 2rem) / 3 * 2 + 2rem);
  top: 0;
  width: calc((100% - 2rem) / 3 * 1 + 0rem);
  height: calc((100% - 2rem) / 3 * 2 + 1rem);
}

.animated-grid:has(.grid-item-1.featured) .grid-item-3 {
  left: 0;
  top: calc((100% - 2rem) / 3 * 2 + 2rem);
  width: calc((100% - 2rem) / 3);
  height: calc((100% - 2rem) / 3);
}

.animated-grid:has(.grid-item-1.featured) .grid-item-4 {
  left: calc((100% - 2rem) / 3 * 1 + 1rem);
  top: calc((100% - 2rem) / 3 * 2 + 2rem);
  width: calc((100% - 2rem) / 3 * 2 + 1rem);
  height: calc((100% - 2rem) / 3);
}

/* === WHEN SERVICE 2 IS ACTIVE (Nails - top-right 2x2) === */
.animated-grid:has(.grid-item-2.featured) .grid-item-1 {
  left: 0;
  top: 0;
  width: calc((100% - 2rem) / 3);
  height: calc((100% - 2rem) / 3 * 2 + 1rem);
}

.animated-grid:has(.grid-item-2.featured) .grid-item-2 {
  left: calc((100% - 2rem) / 3 + 1rem);
  top: 0;
  width: calc((100% - 2rem) / 3 * 2 + 1rem);
  height: calc((100% - 2rem) / 3 * 2 + 1rem);
  z-index: 10;
}

.animated-grid:has(.grid-item-2.featured) .grid-item-3 {
  left: 0;
  top: calc((100% - 2rem) / 3 * 2 + 2rem);
  width: calc((100% - 2rem) / 3 * 2 + 1rem);
  height: calc((100% - 2rem) / 3);
}

.animated-grid:has(.grid-item-2.featured) .grid-item-4 {
  left: calc((100% - 2rem) / 3 * 2 + 2rem);
  top: calc((100% - 2rem) / 3 * 2 + 2rem);
  width: calc((100% - 2rem) / 3 * 1 + 0rem);
  height: calc((100% - 2rem) / 3);
}

/* === WHEN SERVICE 3 IS ACTIVE (Brows - bottom-left 2x2) === */
.animated-grid:has(.grid-item-3.featured) .grid-item-1 {
  left: 0;
  top: 0;
  width: calc((100% - 2rem) / 3);
  height: calc((100% - 2rem) / 3);
}

.animated-grid:has(.grid-item-3.featured) .grid-item-2 {
  left: calc((100% - 2rem) / 3 + 1rem);
  top: 0;
  width: calc((100% - 2rem) / 3 * 2 + 1rem);
  height: calc((100% - 2rem) / 3);
}

.animated-grid:has(.grid-item-3.featured) .grid-item-3 {
  left: 0;
  top: calc((100% - 2rem) / 3 + 1rem);
  width: calc((100% - 2rem) / 3 * 2 + 1rem);
  height: calc((100% - 2rem) / 3 * 2 + 1rem);
  z-index: 10;
}

.animated-grid:has(.grid-item-3.featured) .grid-item-4 {
  left: calc((100% - 2rem) / 3 * 2 + 2rem);
  top: calc((100% - 2rem) / 3 * 1 + 1rem);
  width: calc((100% - 2rem) / 3);
  height: calc((100% - 2rem) / 3 * 2 + 1rem);
}

/* === WHEN SERVICE 4 IS ACTIVE (Treatments - bottom-right 2x2) === */
.animated-grid:has(.grid-item-4.featured) .grid-item-1 {
  left: 0;
  top: 0;
  width: calc((100% - 2rem) / 3);
  height: calc((100% - 2rem) / 3);
}

.animated-grid:has(.grid-item-4.featured) .grid-item-2 {
  left: calc((100% - 2rem) / 3 + 1rem);
  top: 0;
  width: calc((100% - 2rem) / 3 * 2 + 1rem);
  height: calc((100% - 2rem) / 3);
}

.animated-grid:has(.grid-item-4.featured) .grid-item-3 {
  left: 0;
  top: calc((100% - 2rem) / 3 + 1rem);
  width: calc((100% - 2rem) / 3);
  height: calc((100% - 2rem) / 3 * 2 + 1rem);
}

.animated-grid:has(.grid-item-4.featured) .grid-item-4 {
  left: calc((100% - 2rem) / 3 + 1rem);
  top: calc((100% - 2rem) / 3 + 1rem);
  width: calc((100% - 2rem) / 3 * 2 + 1rem);
  height: calc((100% - 2rem) / 3 * 2 + 1rem);
  z-index: 10;
}
</style>
