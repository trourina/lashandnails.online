<template>
  <div>
    <Hero :title="t('title')" :subtitle="t('subtitle')" />

    <!-- Services Grid -->
    <section aria-labelledby="services-list" class="py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    slug: "manicure",
    title: t("services.manicure.title"),
    description: t("services.manicure.description"),
    features: [
      t("services.manicure.features.0"),
      t("services.manicure.features.1"),
      t("services.manicure.features.2"),
      t("services.manicure.features.3"),
    ],
  },
  {
    slug: "pedicure",
    title: t("services.pedicure.title"),
    description: t("services.pedicure.description"),
    features: [
      t("services.pedicure.features.0"),
      t("services.pedicure.features.1"),
      t("services.pedicure.features.2"),
      t("services.pedicure.features.3"),
    ],
  },
  {
    slug: "brows",
    title: t("services.brows.title"),
    description: t("services.brows.description"),
    features: [
      t("services.brows.features.0"),
      t("services.brows.features.1"),
      t("services.brows.features.2"),
      t("services.brows.features.3"),
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
      "manicure": {
        "title": "Manicura",
        "description": "Servicios profesionales de manicura con productos premium para uñas bellas y saludables.",
        "features": [
          "Manicura higiénica y con gel",
          "Diseño único personalizado - flores, geometría, brillos y más",
          "Fortalecimiento y extensión de uñas con gel",
          "Cosméticos alemanes Baehr e instrumentos esterilizados"
        ]
      },
      "pedicure": {
        "title": "Pedicura",
        "description": "Servicios profesionales de pedicura para pies saludables y hermosos.",
        "features": [
          "Tratamiento completo de dedos y planta del pie",
          "Pedicura con esmaltado gel",
          "Cosméticos alemanes Pedibaehr",
          "Todos los instrumentos esterilizados"
        ]
      },
      "brows": {
        "title": "Cejas",
        "description": "Diseño profesional de cejas, tinte y laminación para cejas perfectas.",
        "features": [
          "Tinte de cejas",
          "Tinte + corrección",
          "Laminación de cejas",
          "Micropigmentación"
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
      "manicure": {
        "title": "Manicure",
        "description": "Professional manicure services with premium products for beautiful, healthy nails.",
        "features": [
          "Hygienic and gel manicure",
          "Unique custom design - flowers, geometry, glitter and more",
          "Gel nail strengthening and extension",
          "German Baehr cosmetics and sterilized instruments"
        ]
      },
      "pedicure": {
        "title": "Pedicure",
        "description": "Professional pedicure services for healthy, beautiful feet.",
        "features": [
          "Complete toe and foot sole treatment",
          "Pedicure with gel polish",
          "German Pedibaehr cosmetics",
          "All instruments sterilized"
        ]
      },
      "brows": {
        "title": "Brows",
        "description": "Professional brow design, tinting and lamination for perfect brows.",
        "features": [
          "Brow tinting",
          "Tinting + correction",
          "Brow lamination",
          "Micropigmentation"
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
      "manicure": {
        "title": "Маникюр",
        "description": "Профессиональные услуги маникюра с премиальными продуктами для красивых и здоровых ногтей.",
        "features": [
          "Гигиенический и гель-маникюр",
          "Уникальный персональный дизайн - цветы, геометрия, блестки и многое другое",
          "Укрепление и наращивание ногтей гелем",
          "Немецкая косметика Baehr и стерилизованные инструменты"
        ]
      },
      "pedicure": {
        "title": "Педикюр",
        "description": "Профессиональные услуги педикюра для здоровых и красивых ног.",
        "features": [
          "Полная обработка пальцев и стопы",
          "Педикюр с гель-лаком",
          "Немецкая косметика Pedibaehr",
          "Все инструменты стерилизованы"
        ]
      },
      "brows": {
        "title": "Брови",
        "description": "Профессиональный дизайн бровей, окрашивание и ламинирование для идеальных бровей.",
        "features": [
          "Окрашивание бровей",
          "Окрашивание + коррекция",
          "Ламинирование бровей",
          "Микропигментирование"
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
