<template>
  <div>
    <Hero :title="t('title')" :subtitle="t('subtitle')" />

    <!-- Services Grid -->
    <section aria-labelledby="services-list" class="py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="service in services"
            :key="service.slug"
            class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
          >
            <!-- Image Placeholder -->
            <div
              class="relative aspect-[4/3] bg-gradient-to-br from-[#E8D5C4] to-[#D4C4B4] overflow-hidden"
            >
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
              />
              <div
                class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"
              />
            </div>

            <!-- Content -->
            <div class="p-6">
              <h2 class="font-display text-2xl font-bold text-gray-900 mb-3">
                {{ service.title }}
              </h2>
              <p class="text-gray-600 mb-4 leading-relaxed">
                {{ service.description }}
              </p>

              <!-- Features List -->
              <ul class="space-y-2 mb-6">
                <li
                  v-for="(feature, index) in service.features"
                  :key="index"
                  class="flex items-start text-sm text-gray-700"
                >
                  <svg
                    class="w-5 h-5 text-[#6B5B52] flex-shrink-0 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <!-- CTA Button -->
              <NuxtLink
                :to="localePath(`/services/${service.slug}`)"
                class="inline-flex items-center justify-center w-full px-6 py-3 bg-[#6B5B52] text-white font-semibold rounded-full hover:bg-[#5A4A42] transition-colors group"
              >
                {{ t("learnMore") }}
                <svg
                  class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <CTASection
      :heading="t('cta.heading')"
      :subtitle="t('cta.subtitle')"
      :message="t('cta.message')"
      :primary-button="t('cta.button')"
      :secondary-button="t('cta.pricing')"
    />
  </div>
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

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: "local" });
const config = useRuntimeConfig();
const business = config.public.business;
const localePath = useLocalePath();

const services = computed(() => [
  {
    slug: "lash-extensions",
    title: t("services.lashes.title"),
    description: t("services.lashes.description"),
    features: [
      t("services.lashes.features.0"),
      t("services.lashes.features.1"),
      t("services.lashes.features.2"),
      t("services.lashes.features.3"),
    ],
  },
  {
    slug: "nail-design",
    title: t("services.nails.title"),
    description: t("services.nails.description"),
    features: [
      t("services.nails.features.0"),
      t("services.nails.features.1"),
      t("services.nails.features.2"),
      t("services.nails.features.3"),
    ],
  },
  {
    slug: "beauty-treatments",
    title: t("services.treatments.title"),
    description: t("services.treatments.description"),
    features: [
      t("services.treatments.features.0"),
      t("services.treatments.features.1"),
      t("services.treatments.features.2"),
      t("services.treatments.features.3"),
    ],
  },
]);

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
    about: {
      "@type": "Thing",
      name: () => t("title"),
    },
  },
]);
</script>

<i18n lang="json">
{
  "es": {
    "title": "Nuestros Servicios",
    "subtitle": "Servicios profesionales de belleza en Santa Pola - Calidad, experiencia y atención personalizada",
    "seoTitle": "Nuestros Servicios | Lash & Nails Santa Pola",
    "seoDescription": "Descubre nuestros servicios de belleza: extensiones de pestañas, diseño de uñas y tratamientos de belleza en Santa Pola",
    "breadcrumb": {
      "home": "Inicio",
      "current": "Servicios"
    },
    "learnMore": "Ver detalles",
    "services": {
      "lashes": {
        "title": "Extensiones de Pestañas",
        "description": "Realza tu mirada con extensiones de pestañas profesionales. Técnicas avanzadas para un look natural y duradero.",
        "features": [
          "Efecto volumen o natural",
          "Pestañas de alta calidad",
          "Aplicación personalizada",
          "Duración 3-4 semanas"
        ]
      },
      "nails": {
        "title": "Diseño de Uñas",
        "description": "Manicura y pedicura profesional con diseños personalizados. Tus uñas perfectas para cualquier ocasión.",
        "features": [
          "Manicura y pedicura",
          "Nail art personalizado",
          "Gel y acrílico",
          "Cuidado completo de uñas"
        ]
      },
      "treatments": {
        "title": "Tratamientos de Belleza",
        "description": "Cuidados faciales y corporales profesionales para realzar tu belleza natural.",
        "features": [
          "Diseño y cuidado de cejas",
          "Micropigmentación",
          "Tratamientos faciales",
          "Depilación profesional"
        ]
      }
    },
    "cta": {
      "heading": "¿Lista para reservar?",
      "subtitle": "Reserva tu cita hoy y déjanos cuidar de tu belleza",
      "button": "Reservar por WhatsApp",
      "pricing": "Ver Precios",
      "message": "Hola, me gustaría reservar una cita para un servicio."
    }
  },
  "en": {
    "title": "Our Services",
    "subtitle": "Professional beauty services in Santa Pola - Quality, experience and personalized attention",
    "seoTitle": "Our Services | Lash & Nails Santa Pola",
    "seoDescription": "Discover our beauty services: lash extensions, nail design and beauty treatments in Santa Pola",
    "breadcrumb": {
      "home": "Home",
      "current": "Services"
    },
    "learnMore": "View details",
    "services": {
      "lashes": {
        "title": "Lash Extensions",
        "description": "Enhance your look with professional lash extensions. Advanced techniques for a natural and long-lasting look.",
        "features": [
          "Volume or natural effect",
          "High-quality lashes",
          "Personalized application",
          "Lasts 3-4 weeks"
        ]
      },
      "nails": {
        "title": "Nail Design",
        "description": "Professional manicure and pedicure with custom designs. Perfect nails for any occasion.",
        "features": [
          "Manicure and pedicure",
          "Custom nail art",
          "Gel and acrylic",
          "Complete nail care"
        ]
      },
      "treatments": {
        "title": "Beauty Treatments",
        "description": "Professional facial and body care to enhance your natural beauty.",
        "features": [
          "Brow design and care",
          "Micropigmentation",
          "Facial treatments",
          "Professional waxing"
        ]
      }
    },
    "cta": {
      "heading": "Ready to book?",
      "subtitle": "Book your appointment today and let us take care of your beauty",
      "button": "Book via WhatsApp",
      "pricing": "View Pricing",
      "message": "Hello, I would like to book an appointment for a service."
    }
  },
  "ru": {
    "title": "Наши услуги",
    "subtitle": "Профессиональные услуги красоты в Санта-Пола - Качество, опыт и индивидуальный подход",
    "seoTitle": "Наши услуги | Lash & Nails Santa Pola",
    "seoDescription": "Откройте для себя наши услуги красоты: наращивание ресниц, дизайн ногтей и косметические процедуры в Санта-Пола",
    "breadcrumb": {
      "home": "Главная",
      "current": "Услуги"
    },
    "learnMore": "Подробнее",
    "services": {
      "lashes": {
        "title": "Наращивание ресниц",
        "description": "Подчеркните свой взгляд профессиональным наращиванием ресниц. Передовые техники для естественного и долговечного результата.",
        "features": [
          "Объемный или натуральный эффект",
          "Высококачественные ресницы",
          "Индивидуальное нанесение",
          "Держится 3-4 недели"
        ]
      },
      "nails": {
        "title": "Дизайн ногтей",
        "description": "Профессиональный маникюр и педикюр с индивидуальным дизайном. Идеальные ногти для любого случая.",
        "features": [
          "Маникюр и педикюр",
          "Индивидуальный нейл-арт",
          "Гель и акрил",
          "Полный уход за ногтями"
        ]
      },
      "treatments": {
        "title": "Косметические процедуры",
        "description": "Профессиональный уход за лицом и телом для подчеркивания вашей естественной красоты.",
        "features": [
          "Дизайн и уход за бровями",
          "Микропигментация",
          "Процедуры для лица",
          "Профессиональная депиляция"
        ]
      }
    },
    "cta": {
      "heading": "Готовы записаться?",
      "subtitle": "Запишитесь сегодня и позвольте нам позаботиться о вашей красоте",
      "button": "Записаться через WhatsApp",
      "pricing": "Посмотреть цены",
      "message": "Здравствуйте, я хочу записаться на процедуру."
    }
  }
}
</i18n>
