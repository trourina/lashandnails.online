<script setup lang="ts">
import { SERVICES_DATA } from '../../config/services.config'

const { t } = useI18n({ useScope: "local" });
const localePath = useLocalePath();

// Get the minimum price for each service from the config
const getMinPrice = (serviceId: string) => {
  const service = SERVICES_DATA.find(s => s.id === serviceId)
  if (!service || !service.offers.length) return '0'

  const prices = service.offers.map(offer => parseFloat(offer.price))
  const minPrice = Math.min(...prices)
  return minPrice.toString()
}

// Featured services - using actual data from services config
const services = computed(() => [
  {
    id: 1,
    serviceId: 'lash-extensions',
    name: t("services.1.name"),
    description: t("services.1.description"),
    price: `${t('from')} €${getMinPrice('lash-extensions')}`,
    rating: 5,
    image: "/images/placeholder-service.jpg",
    link: "/services/lash-extensions",
  },
  {
    id: 2,
    serviceId: 'nail-design',
    name: t("services.2.name"),
    description: t("services.2.description"),
    price: `${t('from')} €${getMinPrice('nail-design')}`,
    rating: 5,
    image: "/images/placeholder-service.jpg",
    link: "/services/nail-design",
  },
  {
    id: 3,
    serviceId: 'lash-extensions',
    name: t("services.3.name"),
    description: t("services.3.description"),
    price: `${t('from')} €${getMinPrice('lash-extensions')}`,
    rating: 5,
    image: "/images/placeholder-service.jpg",
    link: "/services/lash-extensions",
  },
  {
    id: 4,
    serviceId: 'nail-design',
    name: t("services.4.name"),
    description: t("services.4.description"),
    price: `${t('from')} €${getMinPrice('nail-design')}`,
    rating: 5,
    image: "/images/placeholder-service.jpg",
    link: "/services/nail-design",
  },
  {
    id: 5,
    serviceId: 'beauty-treatments',
    name: t("services.5.name"),
    description: t("services.5.description"),
    price: `${t('from')} €${getMinPrice('beauty-treatments')}`,
    rating: 5,
    image: "/images/placeholder-service.jpg",
    link: "/services/beauty-treatments",
  },
  {
    id: 6,
    serviceId: 'beauty-treatments',
    name: t("services.6.name"),
    description: t("services.6.description"),
    price: `${t('from')} €${getMinPrice('beauty-treatments')}`,
    rating: 5,
    image: "/images/placeholder-service.jpg",
    link: "/services/beauty-treatments",
  },
])
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="flex items-center justify-between mb-8">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900">
          {{ t("title") }}
        </h2>
        <NuxtLink
          :to="localePath('/pricing')"
          class="px-6 py-2 border-2 border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:border-[#6B5B52] hover:text-[#6B5B52] transition-all"
        >
          {{ t("seeMore") }}
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
            <!-- Placeholder shimmer -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
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
              <span class="text-sm font-medium text-gray-900">{{
                service.rating
              }}</span>
            </div>

            <!-- Favorite Icon -->
            <button
              class="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <svg
                class="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

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
            <p class="text-sm text-gray-500 mb-3">
              {{ service.description }}
            </p>
            <p class="text-xl font-bold text-[#6B5B52]">
              {{ service.price }}
            </p>
          </div>
        </NuxtLink>
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
</style>

<i18n lang="json">
{
  "en": {
    "title": "Best Selling Services",
    "seeMore": "See More",
    "from": "from",
    "services": {
      "1": {
        "name": "Classic Lash Extensions",
        "description": "By Lash & Nails Santa Pola"
      },
      "2": {
        "name": "Manicure with Coating",
        "description": "By Lash & Nails Santa Pola"
      },
      "3": {
        "name": "Lash Lamination",
        "description": "By Lash & Nails Santa Pola"
      },
      "4": {
        "name": "French Manicure",
        "description": "By Lash & Nails Santa Pola"
      },
      "5": {
        "name": "Brow Micropigmentation",
        "description": "By Lash & Nails Santa Pola"
      },
      "6": {
        "name": "Brow Lamination",
        "description": "By Lash & Nails Santa Pola"
      }
    }
  },
  "es": {
    "title": "Servicios Más Vendidos",
    "seeMore": "Ver Más",
    "from": "desde",
    "services": {
      "1": {
        "name": "Extensiones de Pestañas Clásicas",
        "description": "Por Lash & Nails Santa Pola"
      },
      "2": {
        "name": "Manicura con Esmaltado",
        "description": "Por Lash & Nails Santa Pola"
      },
      "3": {
        "name": "Laminación de Pestañas",
        "description": "Por Lash & Nails Santa Pola"
      },
      "4": {
        "name": "Manicura Francesa",
        "description": "Por Lash & Nails Santa Pola"
      },
      "5": {
        "name": "Micropigmentación de Cejas",
        "description": "Por Lash & Nails Santa Pola"
      },
      "6": {
        "name": "Laminación de Cejas",
        "description": "Por Lash & Nails Santa Pola"
      }
    }
  },
  "ru": {
    "title": "Самые Популярные Услуги",
    "seeMore": "Показать Еще",
    "from": "от",
    "services": {
      "1": {
        "name": "Классическое Наращивание Ресниц",
        "description": "От Lash & Nails Santa Pola"
      },
      "2": {
        "name": "Маникюр с Покрытием",
        "description": "От Lash & Nails Santa Pola"
      },
      "3": {
        "name": "Ламинирование Ресниц",
        "description": "От Lash & Nails Santa Pola"
      },
      "4": {
        "name": "Французский Маникюр",
        "description": "От Lash & Nails Santa Pola"
      },
      "5": {
        "name": "Микропигментация Бровей",
        "description": "От Lash & Nails Santa Pola"
      },
      "6": {
        "name": "Ламинирование Бровей",
        "description": "От Lash & Nails Santa Pola"
      }
    }
  }
}
</i18n>
