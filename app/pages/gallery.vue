<template>
  <div>
    <Hero :title="t('title')" :subtitle="t('subtitle')" />

    <section class="container mx-auto px-4 py-12">
      <!-- Header -->
      <div class="mb-8">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ t("headerTitle") }}
        </h2>
        <p class="text-gray-600 max-w-2xl">
          {{ t("headerDescription") }}
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap gap-3 mb-8">
        <button
          @click="handleFilterChange('all')"
          :class="[
            'px-6 py-2 rounded-full text-sm font-medium transition-all',
            activeFilter === 'all'
              ? 'bg-[#6B5B52] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ t("filters.all") }}
        </button>
        <button
          @click="handleFilterChange('lashes')"
          :class="[
            'px-6 py-2 rounded-full text-sm font-medium transition-all',
            activeFilter === 'lashes'
              ? 'bg-[#6B5B52] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ t("categories.lashes") }}
        </button>
        <button
          @click="handleFilterChange('manicure')"
          :class="[
            'px-6 py-2 rounded-full text-sm font-medium transition-all',
            activeFilter === 'manicure'
              ? 'bg-[#6B5B52] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ t("categories.manicure") }}
        </button>
        <button
          @click="handleFilterChange('brows')"
          :class="[
            'px-6 py-2 rounded-full text-sm font-medium transition-all',
            activeFilter === 'brows'
              ? 'bg-[#6B5B52] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ t("categories.brows") }}
        </button>
        <button
          @click="handleFilterChange('pedicure')"
          :class="[
            'px-6 py-2 rounded-full text-sm font-medium transition-all',
            activeFilter === 'pedicure'
              ? 'bg-[#6B5B52] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ t("categories.pedicure") }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(image, index) in filteredImages"
          :key="index"
          class="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
          @click="openLightbox(index)"
        >
          <!-- Image or placeholder -->
          <div
            v-if="image.isPlaceholder"
            class="absolute inset-0 bg-gradient-to-br from-[#E8D5C4] to-[#D4C4B4]"
          >
            <!-- Placeholder shimmer effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />

            <!-- Coming soon text -->
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-white/60 text-sm font-medium">{{ t("placeholder") }}</span>
            </div>
          </div>
          <img
            v-else
            :src="image.src"
            :alt="image.alt"
            class="w-full h-full object-cover"
            loading="lazy"
          />

          <!-- Hover overlay -->
          <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
            <svg
              class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>

          <!-- Category badge -->
          <div
            v-if="!image.isPlaceholder"
            class="absolute top-3 left-3 bg-[#6B5B52] text-white text-xs px-3 py-1 rounded-full font-medium"
          >
            {{ t(`categories.${image.category}`) }}
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Lightbox ref="lightboxRef" :images="lightboxImages" @close="onLightboxClose" />
  </div>
</template>

<script setup lang="ts">
interface GalleryImage {
  src: string
  alt: string
  caption?: string
  category: 'lashes' | 'manicure' | 'pedicure' | 'brows'
  isPlaceholder?: boolean
}

const { t, locale } = useI18n({ useScope: "local" });
const config = useRuntimeConfig();
const business = config.public.business;
const { trackGalleryInteraction } = useAnalytics();

const activeFilter = ref<string>("all");
const lightboxRef = ref<InstanceType<typeof Lightbox> | null>(null);

// Sample gallery images (mix of placeholders - ready for real images)
const galleryImages = ref<GalleryImage[]>([
  // Placeholder images - replace with real images
  { src: '/images/placeholder.jpg', alt: t('placeholder'), category: 'lashes', isPlaceholder: true },
  { src: '/images/placeholder.jpg', alt: t('placeholder'), category: 'lashes', isPlaceholder: true },
  { src: '/images/placeholder.jpg', alt: t('placeholder'), category: 'manicure', isPlaceholder: true },
  { src: '/images/placeholder.jpg', alt: t('placeholder'), category: 'manicure', isPlaceholder: true },
  { src: '/images/placeholder.jpg', alt: t('placeholder'), category: 'brows', isPlaceholder: true },
  { src: '/images/placeholder.jpg', alt: t('placeholder'), category: 'brows', isPlaceholder: true },
  { src: '/images/placeholder.jpg', alt: t('placeholder'), category: 'pedicure', isPlaceholder: true },
  { src: '/images/placeholder.jpg', alt: t('placeholder'), category: 'manicure', isPlaceholder: true },
  { src: '/images/placeholder.jpg', alt: t('placeholder'), category: 'lashes', isPlaceholder: true },
])

// Filter images based on active filter
const filteredImages = computed(() => {
  if (activeFilter.value === 'all') {
    return galleryImages.value
  }
  return galleryImages.value.filter(img => img.category === activeFilter.value)
})

// Prepare images for lightbox (all filtered images for now, including placeholders)
const lightboxImages = computed(() => {
  return filteredImages.value.map(img => ({
    src: img.src,
    alt: img.alt,
    caption: img.caption,
  }))
})

const openLightbox = (index: number) => {
  // Track lightbox open
  const image = filteredImages.value[index]
  trackGalleryInteraction('open_lightbox', image?.category)

  // Open lightbox with the clicked image index
  lightboxRef.value?.open(index)
}

const onLightboxClose = () => {
  // Optional: handle lightbox close event
}

const handleFilterChange = (filter: string) => {
  activeFilter.value = filter
  trackGalleryInteraction('filter_change', filter)
}

useSeoMeta({
  title: () => t("seoTitle"),
  description: () => t("seoDescription"),
  ogTitle: () => t("seoTitle"),
  ogDescription: () => t("seoDescription"),
  ogType: "website",
  ogLocale: () =>
    locale.value === "es" ? "es_ES" : locale.value === "ru" ? "ru_RU" : "en_US",
});

useSchemaOrg([
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: business.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: () => t("title"),
      },
    ],
  },
  {
    "@type": "CollectionPage",
    name: () => t("seoTitle"),
    description: () => t("seoDescription"),
  },
  {
    "@type": "ImageGallery",
    name: () => t("seoTitle"),
    description: () => t("seoDescription"),
    about: {
      "@type": "LocalBusiness",
      name: business.name,
    },
  },
]);
</script>

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
</style>

<i18n lang="json">
{
  "es": {
    "title": "Galería",
    "subtitle": "Descubre nuestros trabajos y transformaciones",
    "headerTitle": "Exploremos Toda La Colección",
    "headerDescription": "Explora nuestra colección de trabajos de belleza profesionales. Cada imagen representa nuestro compromiso con la calidad y el estilo.",
    "seoTitle": "Galería | Lash & Nails Santa Pola",
    "seoDescription": "Descubre nuestros trabajos de belleza - Fotos de extensiones de pestañas, diseño de uñas y transformaciones",
    "filters": {
      "all": "Todos"
    },
    "categories": {
      "lashes": "Pestañas",
      "manicure": "Manicura",
      "pedicure": "Pedicura",
      "brows": "Cejas"
    },
    "placeholder": "Próximamente"
  },
  "en": {
    "title": "Gallery",
    "subtitle": "Discover our work and transformations",
    "headerTitle": "Let's Explore All The Collection",
    "headerDescription": "Explore our collection of professional beauty work. Each image represents our commitment to quality and style.",
    "seoTitle": "Gallery | Lash & Nails Santa Pola",
    "seoDescription": "Discover our beauty work - Photos of lash extensions, nail designs and transformations",
    "filters": {
      "all": "All"
    },
    "categories": {
      "lashes": "Lashes",
      "manicure": "Manicure",
      "pedicure": "Pedicure",
      "brows": "Brows"
    },
    "placeholder": "Coming Soon"
  },
  "ru": {
    "title": "Галерея",
    "subtitle": "Откройте для себя наши работы и преображения",
    "headerTitle": "Давайте Изучим Всю Коллекцию",
    "headerDescription": "Изучите нашу коллекцию профессиональных работ по красоте. Каждое изображение отражает наше стремление к качеству и стилю.",
    "seoTitle": "Галерея | Lash & Nails Santa Pola",
    "seoDescription": "Откройте для себя наши работы - Фото наращивания ресниц, дизайна ногтей и преображений",
    "filters": {
      "all": "Все"
    },
    "categories": {
      "lashes": "Ресницы",
      "manicure": "Маникюр",
      "pedicure": "Педикюр",
      "brows": "Брови"
    },
    "placeholder": "Скоро"
  }
}
</i18n>
