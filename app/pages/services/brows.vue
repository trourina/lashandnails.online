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
const serviceData = getServiceBySlug("/services/brows")!;

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
  "/services/brows",
  () => t("seoTitle"),
  () => t("seoDescription")
);
</script>


<i18n lang="json">
{
  "es": {
    "title": "Cejas",
    "subtitle": "Servicios profesionales de diseño, tinte y laminación de cejas para cejas perfectas",
    "seoTitle": "Diseño y Laminación de Cejas | Lash & Nails Santa Pola",
    "seoDescription": "Diseño profesional de cejas en Santa Pola - Tinte, laminación y micropigmentación para cejas perfectas",
    "breadcrumb": {
      "home": "Inicio",
      "services": "Servicios",
      "current": "Cejas"
    },
    "overview": {
      "heading": "Descripción General",
      "description": "Nuestros servicios de cejas están diseñados para realzar tu mirada con técnicas profesionales. Desde el tinte simple hasta la laminación completa y la micropigmentación semipermanente, ofrecemos soluciones personalizadas para cada tipo de ceja. El resultado son cejas perfectamente definidas que complementan tus facciones naturales."
    },
    "pricing": {
      "heading": "Precios y Servicios",
      "offers": {
        "0": {
          "name": "Tinte de Cejas",
          "description": "Tinte profesional de cejas"
        },
        "1": {
          "name": "Tinte + Corrección",
          "description": "Diseño y tinte de cejas"
        },
        "2": {
          "name": "Laminación de Cejas",
          "description": "Laminación con corrección y tinte"
        },
        "3": {
          "name": "Micropigmentación de Cejas",
          "description": "Micropigmentación semipermanente de cejas"
        }
      }
    },
    "benefits": {
      "heading": "Beneficios",
      "items": [
        "Cejas perfectamente definidas sin maquillaje diario",
        "Resultados duraderos de 4-6 semanas",
        "Realza y enmarca tu rostro naturalmente",
        "Soluciones personalizadas para cada tipo de ceja",
        "Ahorro de tiempo en tu rutina de belleza diaria"
      ]
    },
    "process": {
      "heading": "Proceso del Servicio",
      "steps": [
        {
          "title": "Consulta",
          "description": "Evaluamos la forma natural de tus cejas y discutimos el resultado deseado."
        },
        {
          "title": "Diseño",
          "description": "Diseñamos la forma perfecta que complementa tu rostro."
        },
        {
          "title": "Aplicación",
          "description": "Aplicamos el tinte, laminación o micropigmentación según el servicio elegido."
        },
        {
          "title": "Acabado",
          "description": "Revisamos el resultado y te damos instrucciones de cuidado."
        }
      ]
    },
    "aftercare": {
      "heading": "Cuidados Posteriores",
      "tips": [
        "Evita mojar las cejas durante las primeras 24 horas",
        "No uses productos exfoliantes en la zona de las cejas",
        "Aplica aceite de ricino para mantener el pelo saludable",
        "Evita exposición solar directa las primeras 48 horas",
        "Agenda tu próxima cita cada 4-6 semanas para mantener el resultado"
      ]
    },
    "cta": {
      "heading": "¿Lista para unas cejas perfectas?",
      "subtitle": "Reserva tu cita para diseño de cejas",
      "button": "Reservar por WhatsApp",
      "pricing": "Ver Precios",
      "message": "Hola, me gustaría reservar una cita para diseño de cejas."
    }
  },
  "en": {
    "title": "Brows",
    "subtitle": "Professional brow shaping, tinting and lamination services for perfect brows",
    "seoTitle": "Brow Design & Lamination | Lash & Nails Santa Pola",
    "seoDescription": "Professional brow design in Santa Pola - Tinting, lamination and micropigmentation for perfect brows",
    "breadcrumb": {
      "home": "Home",
      "services": "Services",
      "current": "Brows"
    },
    "overview": {
      "heading": "Overview",
      "description": "Our brow services are designed to enhance your look with professional techniques. From simple tinting to complete lamination and semi-permanent micropigmentation, we offer customized solutions for every brow type. The result is perfectly defined brows that complement your natural features."
    },
    "pricing": {
      "heading": "Pricing & Services",
      "offers": {
        "0": {
          "name": "Brow Tinting",
          "description": "Professional brow tinting"
        },
        "1": {
          "name": "Tinting + Correction",
          "description": "Brow shaping and tinting"
        },
        "2": {
          "name": "Brow Lamination",
          "description": "Lamination with correction and tinting"
        },
        "3": {
          "name": "Brow Micropigmentation",
          "description": "Semi-permanent brow micropigmentation"
        }
      }
    },
    "benefits": {
      "heading": "Benefits",
      "items": [
        "Perfectly defined brows without daily makeup",
        "Long-lasting results for 4-6 weeks",
        "Enhances and frames your face naturally",
        "Customized solutions for every brow type",
        "Save time on your daily beauty routine"
      ]
    },
    "process": {
      "heading": "Service Process",
      "steps": [
        {
          "title": "Consultation",
          "description": "We assess your natural brow shape and discuss the desired result."
        },
        {
          "title": "Design",
          "description": "We design the perfect shape that complements your face."
        },
        {
          "title": "Application",
          "description": "We apply tinting, lamination or micropigmentation according to the chosen service."
        },
        {
          "title": "Finishing",
          "description": "We review the result and give you care instructions."
        }
      ]
    },
    "aftercare": {
      "heading": "Aftercare",
      "tips": [
        "Avoid getting brows wet for the first 24 hours",
        "Don't use exfoliating products on the brow area",
        "Apply castor oil to keep the hair healthy",
        "Avoid direct sun exposure for the first 48 hours",
        "Schedule your next appointment every 4-6 weeks to maintain the result"
      ]
    },
    "cta": {
      "heading": "Ready for perfect brows?",
      "subtitle": "Book your appointment for brow design",
      "button": "Book via WhatsApp",
      "pricing": "View Pricing",
      "message": "Hello, I would like to book an appointment for brow design."
    }
  },
  "ru": {
    "title": "Брови",
    "subtitle": "Профессиональные услуги по дизайну, окрашиванию и ламинированию бровей для идеальных бровей",
    "seoTitle": "Дизайн и ламинирование бровей | Lash & Nails Santa Pola",
    "seoDescription": "Профессиональный дизайн бровей в Санта-Пола - Окрашивание, ламинирование и микропигментирование для идеальных бровей",
    "breadcrumb": {
      "home": "Главная",
      "services": "Услуги",
      "current": "Брови"
    },
    "overview": {
      "heading": "Обзор",
      "description": "Наши услуги по бровям разработаны для улучшения вашего образа профессиональными техниками. От простого окрашивания до полного ламинирования и полуперманентного микропигментирования - мы предлагаем индивидуальные решения для каждого типа бровей. Результат - идеально оформленные брови, которые дополняют ваши природные черты."
    },
    "pricing": {
      "heading": "Цены и услуги",
      "offers": {
        "0": {
          "name": "Окрашивание бровей",
          "description": "Профессиональное окрашивание бровей"
        },
        "1": {
          "name": "Окрашивание + коррекция",
          "description": "Оформление и окрашивание бровей"
        },
        "2": {
          "name": "Ламинирование бровей",
          "description": "Ламинирование с коррекцией и окрашиванием"
        },
        "3": {
          "name": "Микропигментирование бровей",
          "description": "Полуперманентное микропигментирование бровей"
        }
      }
    },
    "benefits": {
      "heading": "Преимущества",
      "items": [
        "Идеально оформленные брови без ежедневного макияжа",
        "Долговечные результаты на 4-6 недель",
        "Подчеркивает и обрамляет ваше лицо естественно",
        "Индивидуальные решения для каждого типа бровей",
        "Экономия времени на ежедневную процедуру красоты"
      ]
    },
    "process": {
      "heading": "Процесс услуги",
      "steps": [
        {
          "title": "Консультация",
          "description": "Оцениваем естественную форму ваших бровей и обсуждаем желаемый результат."
        },
        {
          "title": "Дизайн",
          "description": "Разрабатываем идеальную форму, которая дополняет ваше лицо."
        },
        {
          "title": "Нанесение",
          "description": "Применяем окрашивание, ламинирование или микропигментирование в зависимости от выбранной услуги."
        },
        {
          "title": "Завершение",
          "description": "Проверяем результат и даем инструкции по уходу."
        }
      ]
    },
    "aftercare": {
      "heading": "Последующий уход",
      "tips": [
        "Избегайте намокания бровей в течение первых 24 часов",
        "Не используйте отшелушивающие средства в области бровей",
        "Наносите касторовое масло для поддержания здоровья волос",
        "Избегайте прямого солнечного воздействия в первые 48 часов",
        "Записывайтесь на следующий прием каждые 4-6 недель для поддержания результата"
      ]
    },
    "cta": {
      "heading": "Готовы к идеальным бровям?",
      "subtitle": "Запишитесь на дизайн бровей",
      "button": "Записаться через WhatsApp",
      "pricing": "Посмотреть цены",
      "message": "Здравствуйте, я хочу записаться на дизайн бровей."
    }
  }
}
</i18n>
