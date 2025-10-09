<template>
  <main>
    <header>
      <h1>{{ t('title') }}</h1>
      <p>{{ t('subtitle') }}</p>
    </header>

    <section aria-labelledby="lash-gallery">
      <h2 id="lash-gallery">{{ t('categories.lashes') }}</h2>
      <div class="gallery-grid" role="list">
        <!-- Images will be added here -->
        <div class="gallery-placeholder">
          <p>{{ t('placeholder') }}</p>
        </div>
      </div>
    </section>

    <section aria-labelledby="nails-gallery">
      <h2 id="nails-gallery">{{ t('categories.nails') }}</h2>
      <div class="gallery-grid" role="list">
        <!-- Images will be added here -->
        <div class="gallery-placeholder">
          <p>{{ t('placeholder') }}</p>
        </div>
      </div>
    </section>

    <section aria-labelledby="brows-gallery">
      <h2 id="brows-gallery">{{ t('categories.brows') }}</h2>
      <div class="gallery-grid" role="list">
        <!-- Images will be added here -->
        <div class="gallery-placeholder">
          <p>{{ t('placeholder') }}</p>
        </div>
      </div>
    </section>

    <section aria-labelledby="treatments-gallery">
      <h2 id="treatments-gallery">{{ t('categories.treatments') }}</h2>
      <div class="gallery-grid" role="list">
        <!-- Images will be added here -->
        <div class="gallery-placeholder">
          <p>{{ t('placeholder') }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: 'local' })
const config = useRuntimeConfig()
const business = config.public.business

useSeoMeta({
  title: () => t('seoTitle'),
  description: () => t('seoDescription'),
  ogTitle: () => t('seoTitle'),
  ogDescription: () => t('seoDescription'),
  ogType: 'website',
  ogLocale: () => locale.value === 'es' ? 'es_ES' : locale.value === 'ru' ? 'ru_RU' : 'en_US',
})

useSchemaOrg([
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: business.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: () => t('title'),
      },
    ],
  },
  {
    '@type': 'CollectionPage',
    name: () => t('seoTitle'),
    description: () => t('seoDescription'),
  },
  {
    '@type': 'ImageGallery',
    name: () => t('seoTitle'),
    description: () => t('seoDescription'),
    about: {
      '@type': 'LocalBusiness',
      name: business.name,
    },
  },
])
</script>

<i18n lang="json">
{
  "es": {
    "title": "Galería",
    "subtitle": "Descubre nuestros trabajos y transformaciones",
    "seoTitle": "Galería | Lash & Nails Santa Pola",
    "seoDescription": "Descubre nuestros trabajos de belleza - Fotos de extensiones de pestañas, diseño de uñas y transformaciones",
    "categories": {
      "lashes": "Pestañas",
      "nails": "Uñas",
      "brows": "Cejas",
      "treatments": "Tratamientos"
    },
    "placeholder": "Las fotos se agregarán pronto"
  },
  "en": {
    "title": "Gallery",
    "subtitle": "Discover our work and transformations",
    "seoTitle": "Gallery | Lash & Nails Santa Pola",
    "seoDescription": "Discover our beauty work - Photos of lash extensions, nail designs and transformations",
    "categories": {
      "lashes": "Lashes",
      "nails": "Nails",
      "brows": "Brows",
      "treatments": "Treatments"
    },
    "placeholder": "Photos will be added soon"
  },
  "ru": {
    "title": "Галерея",
    "subtitle": "Откройте для себя наши работы и преображения",
    "seoTitle": "Галерея | Lash & Nails Santa Pola",
    "seoDescription": "Откройте для себя наши работы - Фото наращивания ресниц, дизайна ногтей и преображений",
    "categories": {
      "lashes": "Ресницы",
      "nails": "Ногти",
      "brows": "Брови",
      "treatments": "Процедуры"
    },
    "placeholder": "Фотографии будут добавлены в ближайшее время"
  }
}
</i18n>
