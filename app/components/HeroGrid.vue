<script setup lang="ts">
const { t } = useI18n({ useScope: "local" });
const config = useRuntimeConfig();
const business = config.public.business;
const { trackWhatsAppClick } = useAnalytics();

const handleWhatsAppClick = () => {
  trackWhatsAppClick("hero_grid");
};

// Static grid images - 4 services
const gridImages = [
  {
    id: 1,
    image: "/images/placeholder-service.jpg",
    alt: "Lash Extensions",
    category: "lashes",
  },
  {
    id: 2,
    image: "/images/placeholder-service.jpg",
    alt: "Nail Design",
    category: "nails",
  },
  {
    id: 3,
    image: "/images/placeholder-service.jpg",
    alt: "Brow Treatments",
    category: "brows",
  },
  {
    id: 4,
    image: "/images/placeholder-service.jpg",
    alt: "Beauty Treatments",
    category: "treatments",
  },
];

// Track which service is currently featured (large)
const activeService = ref(1);

// Rotate through services every 4 seconds
onMounted(() => {
  setInterval(() => {
    activeService.value =
      activeService.value === 4 ? 1 : activeService.value + 1;
  }, 4000);
});
</script>

<template>
  <section
    class="bg-gradient-to-br from-[#6B5B52] to-[#8B7565] text-white -mt-24 py-32 px-4"
  >
    <div class="container mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Text Content -->
        <div class="text-left space-y-6">
          <h1
            class="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            {{ t("title") }}
          </h1>

          <p class="text-xl md:text-2xl text-white/90">
            {{ t("subtitle") }}
          </p>

          <p class="text-lg text-white/80 max-w-xl">
            {{ t("description") }}
          </p>

          <!-- WhatsApp CTA Button -->
          <div class="pt-4">
            <Button
              :href="`https://wa.me/${business.phone.replace(
                /\+/g,
                ''
              )}?text=${encodeURIComponent(t('ctaMessage'))}`"
              class="bg-white text-[#6B5B52] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-lg transition-all inline-flex items-center gap-2"
              @click="handleWhatsAppClick"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                />
              </svg>
              {{ t("ctaPrimary") }}
            </Button>
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
            />

            <!-- Category badge -->
            <div
              class="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#6B5B52] text-xs px-3 py-1 rounded-full font-medium z-10"
            >
              {{ t(`categories.${item.category}`) }}
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
  width: calc((100% - 2rem) / 3);
  height: calc((100% - 2rem) / 3);
}

.animated-grid:has(.grid-item-1.featured) .grid-item-3 {
  left: calc((100% - 2rem) / 3 * 2 + 2rem);
  top: calc((100% - 2rem) / 3 + 1rem);
  width: calc((100% - 2rem) / 3);
  height: calc((100% - 2rem) / 3);
}

.animated-grid:has(.grid-item-1.featured) .grid-item-4 {
  left: 0;
  top: calc((100% - 2rem) / 3 * 2 + 2rem);
  width: 100%;
  height: calc((100% - 2rem) / 3);
}

/* === WHEN SERVICE 2 IS ACTIVE (Nails - top-right 2x2) === */
.animated-grid:has(.grid-item-2.featured) .grid-item-1 {
  left: 0;
  top: 0;
  width: calc((100% - 2rem) / 3);
  height: calc((100% - 2rem) / 3);
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
  top: calc((100% - 2rem) / 3 + 1rem);
  width: calc((100% - 2rem) / 3);
  height: calc((100% - 2rem) / 3);
}

.animated-grid:has(.grid-item-2.featured) .grid-item-4 {
  left: 0;
  top: calc((100% - 2rem) / 3 * 2 + 2rem);
  width: 100%;
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
  width: calc((100% - 2rem) / 3);
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
  top: 0;
  width: calc((100% - 2rem) / 3);
  height: 100%;
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

<i18n lang="json">
{
  "es": {
    "title": "Salón de Belleza en Santa Pola",
    "subtitle": "Expertos en extensiones de pestañas, diseño de uñas y tratamientos de belleza",
    "description": "Descubre la mejor experiencia de belleza con nuestros servicios profesionales. Calidad, higiene y atención personalizada en cada visita.",
    "ctaPrimary": "Reservar por WhatsApp",
    "ctaMessage": "Hola, me gustaría reservar una cita.",
    "categories": {
      "lashes": "Pestañas",
      "nails": "Uñas",
      "brows": "Cejas",
      "treatments": "Tratamientos"
    }
  },
  "en": {
    "title": "Beauty Salon in Santa Pola",
    "subtitle": "Experts in lash extensions, nail design and beauty treatments",
    "description": "Discover the best beauty experience with our professional services. Quality, hygiene and personalized attention in every visit.",
    "ctaPrimary": "Book via WhatsApp",
    "ctaMessage": "Hello, I would like to book an appointment.",
    "categories": {
      "lashes": "Lashes",
      "nails": "Nails",
      "brows": "Brows",
      "treatments": "Treatments"
    }
  },
  "ru": {
    "title": "Салон красоты в Санта-Пола",
    "subtitle": "Эксперты в наращивании ресниц, дизайне ногтей и косметических процедурах",
    "description": "Откройте для себя лучший опыт красоты с нашими профессиональными услугами. Качество, гигиена и индивидуальный подход в каждом визите.",
    "ctaPrimary": "Записаться через WhatsApp",
    "ctaMessage": "Здравствуйте, я хочу записаться на прием.",
    "categories": {
      "lashes": "Ресницы",
      "nails": "Ногти",
      "brows": "Брови",
      "treatments": "Процедуры"
    }
  }
}
</i18n>
