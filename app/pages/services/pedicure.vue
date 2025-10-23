<template>
  <div class="min-h-screen bg-gray-50">
    <Hero :title="t('title')" :subtitle="t('subtitle')" />

    <div class="container mx-auto max-w-5xl px-4 py-12 space-y-16">
      <Breadcrumb :items="breadcrumbs" />
      <!-- Overview -->
      <section aria-labelledby="overview" class="bg-white rounded-2xl p-8 shadow-sm">
        <h2 id="overview" class="font-display text-3xl font-bold text-gray-900 mb-4">
          {{ t("overview.heading") }}
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          {{ t("overview.description") }}
        </p>
      </section>

      <!-- Pricing Section -->
      <section aria-labelledby="pricing" class="bg-white rounded-2xl p-8 shadow-sm">
        <h2 id="pricing" class="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
          {{ t("pricing.heading") }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(offer, index) in translatedOffers"
            :key="index"
            class="border-2 border-gray-200 rounded-xl p-6 hover:border-[#6B5B52] hover:shadow-md transition-all"
          >
            <h3 class="font-display text-xl font-semibold text-gray-900 mb-2">
              {{ offer.name }}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              {{ offer.description }}
            </p>
            <div class="flex items-baseline">
              <span class="text-3xl font-bold text-[#6B5B52]">€{{ offer.price }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits -->
      <section aria-labelledby="benefits" class="bg-white rounded-2xl p-8 shadow-sm">
        <h2 id="benefits" class="font-display text-3xl font-bold text-gray-900 mb-6">
          {{ t("benefits.heading") }}
        </h2>
        <ul class="space-y-3">
          <li v-for="(benefit, index) in benefits" :key="index" class="flex items-start">
            <svg class="w-6 h-6 text-[#6B5B52] flex-shrink-0 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-700 text-lg">{{ benefit }}</span>
          </li>
        </ul>
      </section>

      <!-- Process -->
      <section aria-labelledby="process">
        <h2 id="process" class="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
          {{ t("process.heading") }}
        </h2>
        <ol class="space-y-6">
          <li v-for="(step, index) in processSteps" :key="index" class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 bg-[#6B5B52] text-white rounded-full flex items-center justify-center font-bold">
              {{ index + 1 }}
            </div>
            <div class="flex-1 bg-white rounded-xl p-6 shadow-sm">
              <strong class="font-display text-xl text-gray-900 block mb-2">{{ step.title }}</strong>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </section>

      <!-- Aftercare -->
      <section aria-labelledby="aftercare" class="bg-white rounded-2xl p-8 shadow-sm">
        <h2 id="aftercare" class="font-display text-3xl font-bold text-gray-900 mb-6">
          {{ t("aftercare.heading") }}
        </h2>
        <ul class="space-y-3">
          <li v-for="(tip, index) in aftercareTips" :key="index" class="flex items-start">
            <svg class="w-6 h-6 text-[#6B5B52] flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-gray-700">{{ tip }}</span>
          </li>
        </ul>
      </section>
    </div>

    <CTASection
      :heading="t('cta.heading')"
      :subtitle="t('cta.subtitle')"
      :message="t('cta.message')"
      :primary-button="t('cta.button')"
      :secondary-button="t('cta.pricing')"
    />
  </div>
</template>

<script setup lang="ts">
import { getServiceBySlug } from "../../../config/services.config";

const { t, locale } = useI18n({ useScope: "local" });
const config = useRuntimeConfig();
const business = config.public.business;

// Get service data from centralized config
const serviceData = getServiceBySlug("/services/pedicure")!;

// Create translated offers based on current locale
const translatedOffers = computed(() => {
  return serviceData.offers.map((offer, index) => ({
    name: t(`pricing.offers.${index}.name`),
    description: t(`pricing.offers.${index}.description`),
    price: offer.price,
  }));
});

// Breadcrumb items
const breadcrumbs = computed(() => [
  { label: t("breadcrumb.home"), to: "/" },
  { label: t("breadcrumb.services"), to: "/services" },
  { label: t("breadcrumb.current") },
]);

const benefits = computed(() => [
  t("benefits.items.0"),
  t("benefits.items.1"),
  t("benefits.items.2"),
  t("benefits.items.3"),
  t("benefits.items.4"),
]);

const processSteps = computed(() => [
  {
    title: t("process.steps.0.title"),
    description: t("process.steps.0.description"),
  },
  {
    title: t("process.steps.1.title"),
    description: t("process.steps.1.description"),
  },
  {
    title: t("process.steps.2.title"),
    description: t("process.steps.2.description"),
  },
  {
    title: t("process.steps.3.title"),
    description: t("process.steps.3.description"),
  },
]);

const aftercareTips = computed(() => [
  t("aftercare.tips.0"),
  t("aftercare.tips.1"),
  t("aftercare.tips.2"),
  t("aftercare.tips.3"),
  t("aftercare.tips.4"),
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

// Add service page schema using composable
useServicePageSchema(
  "/services/pedicure",
  () => t("seoTitle"),
  () => t("seoDescription")
);
</script>


<i18n lang="json">
{
  "es": {
    "title": "Pedicura",
    "subtitle": "Servicios profesionales de pedicura para pies saludables y hermosos",
    "seoTitle": "Pedicura | Lash & Nails Santa Pola",
    "seoDescription": "Pedicura profesional en Santa Pola - Cuidado de pies con productos premium para resultados duraderos",
    "breadcrumb": {
      "home": "Inicio",
      "services": "Servicios",
      "current": "Pedicura"
    },
    "overview": {
      "heading": "Descripción General",
      "description": "Nuestros servicios de pedicura combinan técnicas profesionales con productos de alta calidad para mantener tus pies perfectos, saludables y relajados. Desde la pedicura higiénica hasta tratamientos spa especializados, cada servicio está diseñado para ofrecerte resultados duraderos y una experiencia rejuvenecedora."
    },
    "pricing": {
      "heading": "Precios y Servicios",
      "offers": {
        "0": {
          "name": "Pedicura Higiénica (Mujer)",
          "description": "Tratamiento completo de pedicura"
        },
        "1": {
          "name": "Pedicura con Esmaltado",
          "description": "Pedicura con esmalte gel"
        },
        "2": {
          "name": "Pedicura para Hombres",
          "description": "Cuidado profesional de pies para hombres"
        },
        "3": {
          "name": "Cuidado Spa de Pies",
          "description": "Tratamiento spa relajante para pies"
        }
      }
    },
    "benefits": {
      "heading": "Beneficios",
      "items": [
        "Pies suaves y saludables con cuidado profesional",
        "Esmaltado duradero que resiste hasta 3 semanas",
        "Todos los instrumentos pasan por todas las etapas de esterilización",
        "Cosméticos profesionales alemanes Pedibaehr para el cuidado de pies",
        "Previene problemas comunes de los pies"
      ]
    },
    "process": {
      "heading": "Proceso del Servicio",
      "steps": [
        {
          "title": "Tratamiento de dedos",
          "description": "Tratamiento completo de los dedos con eliminación de cutícula y piel endurecida."
        },
        {
          "title": "Tratamiento de planta del pie",
          "description": "Procesamiento de la planta del pie con eliminación de zonas endurecidas de la piel."
        },
        {
          "title": "Hidratación profesional",
          "description": "Hidratación de la piel con productos profesionales alemanes Pedibaehr."
        },
        {
          "title": "Acabado con gel",
          "description": "Aplicación de esmalte gel de larga duración."
        }
      ]
    },
    "aftercare": {
      "heading": "Cuidados Posteriores",
      "tips": [
        "Mantén los pies secos durante las primeras 2 horas",
        "Usa zapatos abiertos el primer día para evitar manchas",
        "Hidrata tus pies diariamente con crema",
        "Usa calcetines de algodón para mantener la hidratación",
        "Regresa cada 3-4 semanas para mantener pies saludables"
      ]
    },
    "cta": {
      "heading": "¿Lista para unos pies perfectos?",
      "subtitle": "Reserva tu cita para pedicura",
      "button": "Reservar por WhatsApp",
      "pricing": "Ver Precios",
      "message": "Hola, me gustaría reservar una cita para pedicura."
    }
  },
  "en": {
    "title": "Pedicure",
    "subtitle": "Professional pedicure services for healthy, beautiful feet",
    "seoTitle": "Pedicure | Lash & Nails Santa Pola",
    "seoDescription": "Professional pedicure in Santa Pola - Foot care with premium products for lasting results",
    "breadcrumb": {
      "home": "Home",
      "services": "Services",
      "current": "Pedicure"
    },
    "overview": {
      "heading": "Overview",
      "description": "Our pedicure services combine professional techniques with high-quality products to keep your feet perfect, healthy and relaxed. From hygienic pedicure to specialized spa treatments, each service is designed to offer lasting results and a rejuvenating experience."
    },
    "pricing": {
      "heading": "Pricing & Services",
      "offers": {
        "0": {
          "name": "Hygienic Pedicure (Women)",
          "description": "Complete pedicure treatment"
        },
        "1": {
          "name": "Pedicure with Coating",
          "description": "Pedicure with gel polish"
        },
        "2": {
          "name": "Men's Pedicure",
          "description": "Professional foot care for men"
        },
        "3": {
          "name": "Spa Foot Care",
          "description": "Relaxing spa treatment for feet"
        }
      }
    },
    "benefits": {
      "heading": "Benefits",
      "items": [
        "Soft and healthy feet with professional care",
        "Long-lasting polish that resists up to 3 weeks",
        "All instruments undergo all stages of sterilization",
        "Professional German Pedibaehr cosmetics for foot care",
        "Prevents common foot problems"
      ]
    },
    "process": {
      "heading": "Service Process",
      "steps": [
        {
          "title": "Toe treatment",
          "description": "Complete toe treatment with cuticle and hardened skin removal."
        },
        {
          "title": "Foot sole treatment",
          "description": "Processing of the foot sole with removal of hardened skin areas."
        },
        {
          "title": "Professional moisturizing",
          "description": "Skin moisturizing with professional German Pedibaehr products."
        },
        {
          "title": "Gel polish finish",
          "description": "Application of long-lasting gel polish."
        }
      ]
    },
    "aftercare": {
      "heading": "Aftercare",
      "tips": [
        "Keep feet dry for the first 2 hours",
        "Wear open-toed shoes the first day to avoid smudging",
        "Moisturize your feet daily with cream",
        "Use cotton socks to maintain hydration",
        "Return every 3-4 weeks to maintain healthy feet"
      ]
    },
    "cta": {
      "heading": "Ready for perfect feet?",
      "subtitle": "Book your appointment for pedicure",
      "button": "Book via WhatsApp",
      "pricing": "View Pricing",
      "message": "Hello, I would like to book an appointment for pedicure."
    }
  },
  "ru": {
    "title": "Педикюр",
    "subtitle": "Профессиональные услуги педикюра для здоровых и красивых ног",
    "seoTitle": "Педикюр | Lash & Nails Santa Pola",
    "seoDescription": "Профессиональный педикюр в Санта-Пола - Уход за ногами с премиальными продуктами для длительных результатов",
    "breadcrumb": {
      "home": "Главная",
      "services": "Услуги",
      "current": "Педикюр"
    },
    "overview": {
      "heading": "Обзор",
      "description": "Наши услуги педикюра сочетают профессиональные техники с высококачественными продуктами, чтобы ваши ноги оставались идеальными, здоровыми и расслабленными. От гигиенического педикюра до специализированных spa-процедур - каждая услуга разработана для длительных результатов и омолаживающего опыта."
    },
    "pricing": {
      "heading": "Цены и услуги",
      "offers": {
        "0": {
          "name": "Гигиенический педикюр (Женский)",
          "description": "Полный курс педикюра"
        },
        "1": {
          "name": "Педикюр с покрытием",
          "description": "Педикюр с гель-лаком"
        },
        "2": {
          "name": "Мужской педикюр",
          "description": "Профессиональный уход за ногами для мужчин"
        },
        "3": {
          "name": "Спа-уход за ногами",
          "description": "Расслабляющая спа-процедура для ног"
        }
      }
    },
    "benefits": {
      "heading": "Преимущества",
      "items": [
        "Мягкие и здоровые ноги с профессиональным уходом",
        "Долговечное покрытие, которое держится до 3 недель",
        "Все инструменты проходят все этапы стерилизации",
        "Профессиональная немецкая косметика Pedibaehr для ухода за ногами",
        "Предотвращает распространенные проблемы с ногами"
      ]
    },
    "process": {
      "heading": "Процесс услуги",
      "steps": [
        {
          "title": "Обработка пальцев",
          "description": "Полная обработка пальцев ног с удалением кутикулы и огрубевшей кожи."
        },
        {
          "title": "Обработка стопы",
          "description": "Обработка стопы с удалением твердых участков кожи."
        },
        {
          "title": "Профессиональное увлажнение",
          "description": "Увлажнение кожи профессиональными немецкими средствами Pedibaehr."
        },
        {
          "title": "Покрытие гель-лаком",
          "description": "Нанесение стойкого гель-лака."
        }
      ]
    },
    "aftercare": {
      "heading": "Последующий уход",
      "tips": [
        "Держите ноги сухими в течение первых 2 часов",
        "Носите открытую обувь в первый день, чтобы избежать размазывания",
        "Увлажняйте ноги ежедневно кремом",
        "Используйте хлопковые носки для поддержания увлажнения",
        "Возвращайтесь каждые 3-4 недели для поддержания здоровых ног"
      ]
    },
    "cta": {
      "heading": "Готовы к идеальным ногам?",
      "subtitle": "Запишитесь на педикюр",
      "button": "Записаться через WhatsApp",
      "pricing": "Посмотреть цены",
      "message": "Здравствуйте, я хочу записаться на педикюр."
    }
  }
}
</i18n>
