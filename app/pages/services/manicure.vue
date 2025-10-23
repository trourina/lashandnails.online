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
const serviceData = getServiceBySlug("/services/manicure")!;

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
  "/services/manicure",
  () => t("seoTitle"),
  () => t("seoDescription")
);
</script>


<i18n lang="json">
{
  "es": {
    "title": "Manicura",
    "subtitle": "Servicios profesionales de manicura con productos premium para uñas bellas y saludables",
    "seoTitle": "Manicura | Lash & Nails Santa Pola",
    "seoDescription": "Manicura profesional en Santa Pola - Cuidado de uñas con productos premium para resultados impecables",
    "breadcrumb": {
      "home": "Inicio",
      "services": "Servicios",
      "current": "Manicura"
    },
    "overview": {
      "heading": "Descripción General",
      "description": "Nuestros servicios de manicura combinan técnicas profesionales con productos de alta calidad para mantener tus uñas perfectas y saludables. Desde la manicura higiénica básica hasta diseños elaborados con gel, cada servicio está diseñado para ofrecerte resultados duraderos y un aspecto impecable."
    },
    "pricing": {
      "heading": "Precios y Servicios",
      "offers": {
        "0": {
          "name": "Manicura Higiénica (Mujer)",
          "description": "Manicura básica con cuidado de uñas"
        },
        "1": {
          "name": "Manicura con Esmaltado",
          "description": "Manicura con esmalte gel"
        },
        "2": {
          "name": "Manicura Francesa",
          "description": "Estilo clásico de manicura francesa"
        },
        "3": {
          "name": "Manicura para Hombres",
          "description": "Cuidado profesional de uñas para hombres"
        },
        "4": {
          "name": "Extensión con Gel",
          "description": "Extensión de uñas con gel"
        }
      }
    },
    "benefits": {
      "heading": "Beneficios",
      "items": [
        "Uñas más fuertes y saludables con cuidado profesional",
        "Esmaltado duradero que resiste hasta 3 semanas",
        "Todos los instrumentos pasan por todas las etapas de esterilización",
        "Cosméticos profesionales alemanes Baehr para el cuidado de manos",
        "Diseños personalizados según tu estilo"
      ]
    },
    "process": {
      "heading": "Proceso del Servicio",
      "steps": [
        {
          "title": "Preparación",
          "description": "Limpiamos y evaluamos el estado de tus uñas para determinar el mejor tratamiento."
        },
        {
          "title": "Cuidado de Cutículas",
          "description": "Tratamos suavemente las cutículas para un aspecto limpio y saludable."
        },
        {
          "title": "Forma y Pulido",
          "description": "Damos forma a tus uñas y las pulimos para una superficie perfecta."
        },
        {
          "title": "Aplicación",
          "description": "Aplicamos el esmalte o tratamiento elegido con técnicas profesionales."
        }
      ]
    },
    "aftercare": {
      "heading": "Cuidados Posteriores",
      "tips": [
        "Evita el contacto prolongado con agua durante las primeras 2 horas",
        "Usa guantes al hacer tareas de limpieza",
        "Hidrata tus manos y cutículas diariamente",
        "Evita usar las uñas como herramientas",
        "Regresa cada 2-3 semanas para mantener el resultado perfecto"
      ]
    },
    "cta": {
      "heading": "¿Lista para unas manos perfectas?",
      "subtitle": "Reserva tu cita para manicura",
      "button": "Reservar por WhatsApp",
      "pricing": "Ver Precios",
      "message": "Hola, me gustaría reservar una cita para manicura."
    }
  },
  "en": {
    "title": "Manicure",
    "subtitle": "Professional manicure services with premium products for beautiful, healthy nails",
    "seoTitle": "Manicure | Lash & Nails Santa Pola",
    "seoDescription": "Professional manicure in Santa Pola - Nail care with premium products for impeccable results",
    "breadcrumb": {
      "home": "Home",
      "services": "Services",
      "current": "Manicure"
    },
    "overview": {
      "heading": "Overview",
      "description": "Our manicure services combine professional techniques with high-quality products to keep your nails perfect and healthy. From basic hygienic manicure to elaborate gel designs, each service is designed to offer lasting results and a flawless appearance."
    },
    "pricing": {
      "heading": "Pricing & Services",
      "offers": {
        "0": {
          "name": "Hygienic Manicure (Women)",
          "description": "Basic manicure with nail care"
        },
        "1": {
          "name": "Manicure with Coating",
          "description": "Manicure with gel polish"
        },
        "2": {
          "name": "French Manicure",
          "description": "Classic French manicure style"
        },
        "3": {
          "name": "Men's Manicure",
          "description": "Professional nail care for men"
        },
        "4": {
          "name": "Gel Extension",
          "description": "Nail extension with gel"
        }
      }
    },
    "benefits": {
      "heading": "Benefits",
      "items": [
        "Stronger and healthier nails with professional care",
        "Long-lasting polish that resists up to 3 weeks",
        "All instruments undergo all stages of sterilization",
        "Professional German Baehr cosmetics for hand care",
        "Custom designs according to your style"
      ]
    },
    "process": {
      "heading": "Service Process",
      "steps": [
        {
          "title": "Preparation",
          "description": "We clean and assess the condition of your nails to determine the best treatment."
        },
        {
          "title": "Cuticle Care",
          "description": "We gently treat the cuticles for a clean and healthy appearance."
        },
        {
          "title": "Shape and Polish",
          "description": "We shape your nails and polish them for a perfect surface."
        },
        {
          "title": "Application",
          "description": "We apply the chosen polish or treatment with professional techniques."
        }
      ]
    },
    "aftercare": {
      "heading": "Aftercare",
      "tips": [
        "Avoid prolonged contact with water for the first 2 hours",
        "Use gloves when doing cleaning tasks",
        "Moisturize your hands and cuticles daily",
        "Avoid using nails as tools",
        "Return every 2-3 weeks to maintain the perfect result"
      ]
    },
    "cta": {
      "heading": "Ready for perfect hands?",
      "subtitle": "Book your appointment for manicure",
      "button": "Book via WhatsApp",
      "pricing": "View Pricing",
      "message": "Hello, I would like to book an appointment for manicure."
    }
  },
  "ru": {
    "title": "Маникюр",
    "subtitle": "Профессиональные услуги маникюра с премиальными продуктами для красивых и здоровых ногтей",
    "seoTitle": "Маникюр | Lash & Nails Santa Pola",
    "seoDescription": "Профессиональный маникюр в Санта-Пола - Уход за ногтями с премиальными продуктами для безупречных результатов",
    "breadcrumb": {
      "home": "Главная",
      "services": "Услуги",
      "current": "Маникюр"
    },
    "overview": {
      "heading": "Обзор",
      "description": "Наши услуги маникюра сочетают профессиональные техники с высококачественными продуктами, чтобы ваши ногти оставались идеальными и здоровыми. От базового гигиенического маникюра до сложного дизайна гелем - каждая услуга разработана для длительных результатов и безупречного внешнего вида."
    },
    "pricing": {
      "heading": "Цены и услуги",
      "offers": {
        "0": {
          "name": "Гигиенический маникюр (Женский)",
          "description": "Базовый маникюр с уходом за ногтями"
        },
        "1": {
          "name": "Маникюр с покрытием",
          "description": "Маникюр с гель-лаком"
        },
        "2": {
          "name": "Французский маникюр",
          "description": "Классический стиль французского маникюра"
        },
        "3": {
          "name": "Мужской маникюр",
          "description": "Профессиональный уход за ногтями для мужчин"
        },
        "4": {
          "name": "Наращивание гелем",
          "description": "Наращивание ногтей гелем"
        }
      }
    },
    "benefits": {
      "heading": "Преимущества",
      "items": [
        "Более крепкие и здоровые ногти с профессиональным уходом",
        "Долговечное покрытие, которое держится до 3 недель",
        "Все инструменты проходят все этапы стерилизации",
        "Профессиональная немецкая косметика Baehr для ухода за руками",
        "Индивидуальный дизайн в соответствии с вашим стилем"
      ]
    },
    "process": {
      "heading": "Процесс услуги",
      "steps": [
        {
          "title": "Подготовка",
          "description": "Очищаем и оцениваем состояние ваших ногтей для определения лучшего лечения."
        },
        {
          "title": "Уход за кутикулой",
          "description": "Аккуратно обрабатываем кутикулу для чистого и здорового вида."
        },
        {
          "title": "Форма и полировка",
          "description": "Придаем форму вашим ногтям и полируем их для идеальной поверхности."
        },
        {
          "title": "Нанесение",
          "description": "Наносим выбранный лак или средство профессиональными техниками."
        }
      ]
    },
    "aftercare": {
      "heading": "Последующий уход",
      "tips": [
        "Избегайте длительного контакта с водой в течение первых 2 часов",
        "Используйте перчатки при выполнении уборки",
        "Увлажняйте руки и кутикулу ежедневно",
        "Избегайте использования ногтей как инструментов",
        "Возвращайтесь каждые 2-3 недели для поддержания идеального результата"
      ]
    },
    "cta": {
      "heading": "Готовы к идеальным рукам?",
      "subtitle": "Запишитесь на маникюр",
      "button": "Записаться через WhatsApp",
      "pricing": "Посмотреть цены",
      "message": "Здравствуйте, я хочу записаться на маникюр."
    }
  }
}
</i18n>
