<template>
  <div>
    <Hero :title="t('gallery.title')" :subtitle="t('gallery.subtitle')" />

    <section class="container mx-auto px-4 py-12">
      <!-- Header -->
      <div class="relative mb-8">
        <DecorCircle color="cream" size="xl" top="-1.5rem" left="-2rem" />
        <h2
          class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          {{ t("gallery.headerTitle") }}
        </h2>
        <p class="text-gray-600 max-w-2xl">
          {{ t("gallery.headerDescription") }}
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
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
          ]"
        >
          {{ t("gallery.filterAll") }}
        </button>
        <button
          @click="handleFilterChange('lashes')"
          :class="[
            'px-6 py-2 rounded-full text-sm font-medium transition-all',
            activeFilter === 'lashes'
              ? 'bg-[#6B5B52] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
          ]"
        >
          {{ t("gallery.lashes") }}
        </button>
        <button
          @click="handleFilterChange('manicure')"
          :class="[
            'px-6 py-2 rounded-full text-sm font-medium transition-all',
            activeFilter === 'manicure'
              ? 'bg-[#6B5B52] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
          ]"
        >
          {{ t("gallery.manicure") }}
        </button>
        <button
          @click="handleFilterChange('brows')"
          :class="[
            'px-6 py-2 rounded-full text-sm font-medium transition-all',
            activeFilter === 'brows'
              ? 'bg-[#6B5B52] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
          ]"
        >
          {{ t("gallery.brows") }}
        </button>
        <button
          @click="handleFilterChange('pedicure')"
          :class="[
            'px-6 py-2 rounded-full text-sm font-medium transition-all',
            activeFilter === 'pedicure'
              ? 'bg-[#6B5B52] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
          ]"
        >
          {{ t("gallery.pedicure") }}
        </button>
      </div>

      <!-- Gallery Grid -->
      <div class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <DecorCircle color="gold" size="lg" bottom="-1rem" right="-1rem" />
        <DecorCircle color="brown" size="md" top="3rem" left="-1rem" />
        <div
          v-for="(image, index) in filteredImages"
          :key="image.id"
          class="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
          @click="openLightbox(index)"
        >
          <NuxtImg
            v-if="image.sanityRef"
            provider="sanity"
            :src="image.sanityRef"
            :alt="image.alt"
            width="600"
            height="600"
            fit="crop"
            class="w-full h-full object-cover"
            loading="lazy"
            :data-sanity="encodeDataAttribute?.([image.origIdx, 'image'])"
          />

          <!-- Hover overlay -->
          <div
            class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center"
          >
            <svg
              class="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </div>

          <!-- Category badge -->
          <div
            class="absolute top-3 left-3 bg-white text-[#6B5B52] text-xs px-3 py-1 rounded-full font-medium"
          >
            {{ t(`gallery.${image.category}`) }}
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Lightbox
      ref="lightboxRef"
      :images="lightboxImages"
      @close="onLightboxClose"
    />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const config = useRuntimeConfig();
const business = config.public.business;
const { trackGalleryInteraction } = useAnalytics();

const activeFilter = ref<string>("all");
const lightboxRef = ref<{ open: (index: number) => void; close: () => void } | null>(null);

// Fetch gallery images from Sanity
const { data: sanityImages, encodeDataAttribute } = await useFetchGalleryImages();

interface NormalizedImage {
  id: string;
  sanityRef: string | null;
  alt: string;
  caption?: string;
  category: string;
  origIdx: number;
}

const galleryImages = computed<NormalizedImage[]>(() =>
  sanityImages.value?.map((img, index) => ({
    id: img._id,
    sanityRef: img.image?.asset?._ref || null,
    alt: getLocalized(img.alt, locale.value) || t("gallery.placeholder"),
    caption: getLocalized(img.caption, locale.value),
    category: stegaClean(img.category),
    origIdx: index,
  })) ?? []
);

// Filter images based on active filter
const filteredImages = computed(() => {
  if (activeFilter.value === "all") {
    return galleryImages.value;
  }
  return galleryImages.value.filter(
    (img) => img.category === activeFilter.value
  );
});

// Prepare images for lightbox
const lightboxImages = computed(() => {
  return filteredImages.value.map((img) => ({
    src: img.sanityRef
      ? `https://cdn.sanity.io/images/${config.public.sanity?.projectId || "4dsh8g5u"}/${config.public.sanity?.dataset || "production"}/${img.sanityRef.replace("image-", "").replace("-jpg", ".jpg").replace("-png", ".png").replace("-webp", ".webp")}`
      : "",
    alt: img.alt,
    caption: img.caption,
  }));
});

const openLightbox = (index: number) => {
  const image = filteredImages.value[index];
  trackGalleryInteraction("open_lightbox", image?.category);
  lightboxRef.value?.open(index);
};

const onLightboxClose = () => {};

const handleFilterChange = (filter: string) => {
  activeFilter.value = filter;
  trackGalleryInteraction("filter_change", filter);
};

useSeoMeta({
  title: () => t("gallery.seoTitle"),
  description: () => t("gallery.seoDescription"),
  ogTitle: () => t("gallery.seoTitle"),
  ogDescription: () => t("gallery.seoDescription"),
  ogType: "website",
  ogLocale: useOgLocale(),
});

useSchemaOrg([
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: () => t("breadcrumb.home"),
        item: business.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: () => t("gallery.title"),
      },
    ],
  },
  {
    "@type": "CollectionPage",
    name: () => t("gallery.seoTitle"),
    description: () => t("gallery.seoDescription"),
  },
  {
    "@type": "ImageGallery",
    name: () => t("gallery.seoTitle"),
    description: () => t("gallery.seoDescription"),
    about: {
      "@type": "LocalBusiness",
      name: business.name,
    },
  },
]);
</script>
