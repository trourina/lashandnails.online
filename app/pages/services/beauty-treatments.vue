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

      <!-- Treatments -->
      <section aria-labelledby="treatments">
        <h2 id="treatments" class="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
          {{ t("treatments.heading") }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article
            v-for="(treatment, index) in treatmentList"
            :key="index"
            class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 class="font-display text-xl font-semibold text-gray-900 mb-3">
              {{ treatment.name }}
            </h3>
            <p class="text-gray-600">
              {{ treatment.description }}
            </p>
          </article>
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
const serviceData = getServiceBySlug("/services/beauty-treatments")!;

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

const treatmentList = computed(() => [
  {
    name: t("treatments.items.brows.name"),
    description: t("treatments.items.brows.description"),
  },
  {
    name: t("treatments.items.microblading.name"),
    description: t("treatments.items.microblading.description"),
  },
  {
    name: t("treatments.items.facial.name"),
    description: t("treatments.items.facial.description"),
  },
  {
    name: t("treatments.items.waxing.name"),
    description: t("treatments.items.waxing.description"),
  },
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
  "/services/beauty-treatments",
  () => t("seoTitle"),
  () => t("seoDescription")
);
</script>

<style scoped>
h1,
h2,
h3 {
  font-family: "Prata", serif;
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 1.5rem;
}

h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.page-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  color: #999;
  margin-bottom: 3rem;
  max-width: 800px;
}

section {
  margin-bottom: 4rem;
}

.section-description {
  color: #ccc;
  line-height: 1.8;
  font-size: 1.125rem;
  max-width: 800px;
}

.treatment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.treatment-card {
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 12px;
  transition: transform 0.2s, border-color 0.2s;
}

.treatment-card:hover {
  transform: translateY(-4px);
  border-color: #667eea;
}

.treatment-card p {
  color: #999;
  line-height: 1.6;
}

.benefits-list,
.aftercare-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;
  max-width: 800px;
}

.benefits-list li,
.aftercare-list li {
  padding: 1rem 0 1rem 2.5rem;
  position: relative;
  color: #ccc;
  border-bottom: 1px solid #333;
}

.benefits-list li:last-child,
.aftercare-list li:last-child {
  border-bottom: none;
}

.benefits-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: 600;
  font-size: 1.5rem;
}

.aftercare-list li::before {
  content: "•";
  position: absolute;
  left: 0.5rem;
  color: #667eea;
  font-weight: 600;
  font-size: 1.5rem;
}

.process-list {
  list-style: none;
  counter-reset: step-counter;
  padding: 0;
  margin: 2rem 0 0 0;
  max-width: 800px;
}

.process-list li {
  counter-increment: step-counter;
  padding: 1.5rem 0 1.5rem 3.5rem;
  position: relative;
  border-bottom: 1px solid #333;
}

.process-list li:last-child {
  border-bottom: none;
}

.process-list li::before {
  content: counter(step-counter);
  position: absolute;
  left: 0;
  top: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background: #667eea;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
}

.process-list li strong {
  display: block;
  margin-bottom: 0.5rem;
  color: white;
}

.process-list li p {
  color: #999;
  margin: 0;
  line-height: 1.6;
}

.cta-section {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  text-align: center;
  margin-top: 4rem;
}

.cta-section h2 {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  color: white;
}

.cta-section p {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>

<i18n lang="json">
{
  "es": {
    "title": "Tratamientos de Belleza",
    "subtitle": "Cuidados faciales y corporales profesionales para realzar tu belleza natural",
    "seoTitle": "Tratamientos de Belleza | Lash & Nails Santa Pola",
    "seoDescription": "Tratamientos de belleza profesionales en Santa Pola - Cuidado facial, depilación y más",
    "breadcrumb": {
      "home": "Inicio",
      "services": "Servicios",
      "current": "Tratamientos de Belleza"
    },
    "overview": {
      "heading": "Descripción General",
      "description": "Nuestros tratamientos de belleza están diseñados para realzar tu belleza natural con técnicas profesionales y productos de primera calidad. Desde el cuidado de cejas hasta tratamientos faciales especializados, cada servicio está personalizado para tus necesidades."
    },
    "pricing": {
      "heading": "Precios y Servicios",
      "offers": {
        "0": {
          "name": "Diseño y Tinte de Cejas",
          "description": "Diseño y tintado profesional de cejas"
        },
        "1": {
          "name": "Depilación Facial",
          "description": "Depilación suave de vello facial"
        },
        "2": {
          "name": "Microdermoabrasión",
          "description": "Tratamiento de resurfacing cutáneo para piel suave y radiante"
        },
        "3": {
          "name": "Tratamiento Facial",
          "description": "Limpieza profunda e hidratación facial"
        }
      }
    },
    "treatments": {
      "heading": "Tratamientos Disponibles",
      "items": {
        "brows": {
          "name": "Diseño de Cejas",
          "description": "Diseño profesional de cejas con depilación, tinte y perfilado para enmarcar perfectamente tu rostro."
        },
        "microblading": {
          "name": "Micropigmentación",
          "description": "Técnica semi-permanente para cejas perfectas y naturales que duran de 1 a 3 años."
        },
        "facial": {
          "name": "Tratamientos Faciales",
          "description": "Cuidados faciales personalizados: limpieza profunda, hidratación, anti-edad y tratamientos específicos."
        },
        "waxing": {
          "name": "Depilación",
          "description": "Depilación profesional con cera para rostro y cuerpo con productos suaves para la piel."
        }
      }
    },
    "benefits": {
      "heading": "Beneficios",
      "items": [
        "Realza tu belleza natural de forma profesional",
        "Resultados duraderos con técnicas avanzadas",
        "Productos de alta calidad seguros para tu piel",
        "Tratamientos personalizados según tu tipo de piel",
        "Profesionales experimentados y certificados"
      ]
    },
    "process": {
      "heading": "Proceso del Tratamiento",
      "steps": [
        {
          "title": "Consulta Inicial",
          "description": "Evaluamos tu piel y necesidades específicas para recomendar el tratamiento ideal."
        },
        {
          "title": "Preparación",
          "description": "Preparamos la zona a tratar con limpieza y productos específicos."
        },
        {
          "title": "Tratamiento",
          "description": "Aplicamos el tratamiento seleccionado con técnicas profesionales y productos de calidad."
        },
        {
          "title": "Cuidados Post-Tratamiento",
          "description": "Te orientamos sobre los cuidados necesarios para mantener los resultados."
        }
      ]
    },
    "aftercare": {
      "heading": "Cuidados Posteriores",
      "tips": [
        "Evita la exposición solar directa durante las primeras 24-48 horas",
        "No uses maquillaje en la zona tratada durante 24 horas",
        "Aplica los productos recomendados según indicaciones",
        "Mantén la zona limpia y seca según instrucciones",
        "Agenda citas de mantenimiento según el tipo de tratamiento"
      ]
    },
    "cta": {
      "heading": "¿Lista para realzar tu belleza?",
      "subtitle": "Reserva tu cita para tratamientos de belleza",
      "button": "Reservar por WhatsApp",
      "pricing": "Ver Precios",
      "message": "Hola, me gustaría reservar una cita para tratamientos de belleza."
    }
  },
  "en": {
    "title": "Beauty Treatments",
    "subtitle": "Professional facial and body care to enhance your natural beauty",
    "seoTitle": "Beauty Treatments | Lash & Nails Santa Pola",
    "seoDescription": "Professional beauty treatments in Santa Pola - Facial care, waxing and more",
    "breadcrumb": {
      "home": "Home",
      "services": "Services",
      "current": "Beauty Treatments"
    },
    "overview": {
      "heading": "Overview",
      "description": "Our beauty treatments are designed to enhance your natural beauty with professional techniques and premium products. From brow care to specialized facial treatments, each service is personalized to your needs."
    },
    "pricing": {
      "heading": "Pricing & Services",
      "offers": {
        "0": {
          "name": "Eyebrow Design & Tinting",
          "description": "Professional eyebrow shaping and tinting"
        },
        "1": {
          "name": "Facial Waxing",
          "description": "Gentle facial hair removal"
        },
        "2": {
          "name": "Microdermabrasion",
          "description": "Skin resurfacing treatment for smooth, radiant skin"
        },
        "3": {
          "name": "Facial Treatment",
          "description": "Deep cleansing and hydrating facial"
        }
      }
    },
    "treatments": {
      "heading": "Available Treatments",
      "items": {
        "brows": {
          "name": "Brow Design",
          "description": "Professional brow design with waxing, tinting and shaping to perfectly frame your face."
        },
        "microblading": {
          "name": "Micropigmentation",
          "description": "Semi-permanent technique for perfect, natural-looking brows that last 1-3 years."
        },
        "facial": {
          "name": "Facial Treatments",
          "description": "Personalized facial care: deep cleansing, hydration, anti-aging and specific treatments."
        },
        "waxing": {
          "name": "Waxing",
          "description": "Professional waxing for face and body with gentle, skin-safe products."
        }
      }
    },
    "benefits": {
      "heading": "Benefits",
      "items": [
        "Enhance your natural beauty professionally",
        "Long-lasting results with advanced techniques",
        "High-quality products safe for your skin",
        "Personalized treatments for your skin type",
        "Experienced and certified professionals"
      ]
    },
    "process": {
      "heading": "Treatment Process",
      "steps": [
        {
          "title": "Initial Consultation",
          "description": "We assess your skin and specific needs to recommend the ideal treatment."
        },
        {
          "title": "Preparation",
          "description": "We prepare the treatment area with cleansing and specific products."
        },
        {
          "title": "Treatment",
          "description": "We apply the selected treatment with professional techniques and quality products."
        },
        {
          "title": "Post-Treatment Care",
          "description": "We guide you on the necessary care to maintain results."
        }
      ]
    },
    "aftercare": {
      "heading": "Aftercare",
      "tips": [
        "Avoid direct sun exposure for the first 24-48 hours",
        "Don't use makeup on the treated area for 24 hours",
        "Apply recommended products as instructed",
        "Keep the area clean and dry as instructed",
        "Schedule maintenance appointments based on treatment type"
      ]
    },
    "cta": {
      "heading": "Ready to enhance your beauty?",
      "subtitle": "Book your appointment for beauty treatments",
      "button": "Book via WhatsApp",
      "pricing": "View Pricing",
      "message": "Hello, I would like to book an appointment for beauty treatments."
    }
  },
  "ru": {
    "title": "Косметические процедуры",
    "subtitle": "Профессиональный уход за лицом и телом для подчеркивания вашей естественной красоты",
    "seoTitle": "Косметические процедуры | Lash & Nails Santa Pola",
    "seoDescription": "Профессиональные косметические процедуры в Санта-Пола - Уход за лицом, депиляция и многое другое",
    "breadcrumb": {
      "home": "Главная",
      "services": "Услуги",
      "current": "Косметические процедуры"
    },
    "overview": {
      "heading": "Обзор",
      "description": "Наши косметические процедуры разработаны для подчеркивания вашей естественной красоты с помощью профессиональных техник и премиальных продуктов. От ухода за бровями до специализированных процедур для лица, каждая услуга персонализирована под ваши потребности."
    },
    "pricing": {
      "heading": "Цены и услуги",
      "offers": {
        "0": {
          "name": "Дизайн и окрашивание бровей",
          "description": "Профессиональное оформление и окрашивание бровей"
        },
        "1": {
          "name": "Депиляция лица",
          "description": "Бережное удаление волос на лице"
        },
        "2": {
          "name": "Микродермабразия",
          "description": "Процедура шлифовки кожи для гладкой, сияющей кожи"
        },
        "3": {
          "name": "Процедура для лица",
          "description": "Глубокая чистка и увлажнение лица"
        }
      }
    },
    "treatments": {
      "heading": "Доступные процедуры",
      "items": {
        "brows": {
          "name": "Дизайн бровей",
          "description": "Профессиональный дизайн бровей с депиляцией, окрашиванием и формированием для идеального обрамления лица."
        },
        "microblading": {
          "name": "Микропигментация",
          "description": "Полуперманентная техника для идеальных естественных бровей, которые держатся 1-3 года."
        },
        "facial": {
          "name": "Процедуры для лица",
          "description": "Персонализированный уход за лицом: глубокая чистка, увлажнение, антивозрастные и специальные процедуры."
        },
        "waxing": {
          "name": "Депиляция",
          "description": "Профессиональная восковая депиляция лица и тела с мягкими, безопасными для кожи продуктами."
        }
      }
    },
    "benefits": {
      "heading": "Преимущества",
      "items": [
        "Профессиональное подчеркивание вашей естественной красоты",
        "Долговечные результаты с передовыми техниками",
        "Высококачественные продукты, безопасные для вашей кожи",
        "Персонализированные процедуры для вашего типа кожи",
        "Опытные и сертифицированные специалисты"
      ]
    },
    "process": {
      "heading": "Процесс процедуры",
      "steps": [
        {
          "title": "Начальная консультация",
          "description": "Оцениваем вашу кожу и конкретные потребности для рекомендации идеальной процедуры."
        },
        {
          "title": "Подготовка",
          "description": "Подготавливаем зону обработки с очищением и специальными продуктами."
        },
        {
          "title": "Процедура",
          "description": "Применяем выбранную процедуру с профессиональными техниками и качественными продуктами."
        },
        {
          "title": "Уход после процедуры",
          "description": "Консультируем по необходимому уходу для поддержания результатов."
        }
      ]
    },
    "aftercare": {
      "heading": "Последующий уход",
      "tips": [
        "Избегайте прямого солнечного воздействия в течение первых 24-48 часов",
        "Не используйте макияж на обработанной области в течение 24 часов",
        "Применяйте рекомендованные продукты согласно инструкциям",
        "Держите область чистой и сухой согласно инструкциям",
        "Записывайтесь на поддерживающие визиты в зависимости от типа процедуры"
      ]
    },
    "cta": {
      "heading": "Готовы подчеркнуть свою красоту?",
      "subtitle": "Запишитесь на косметические процедуры",
      "button": "Записаться через WhatsApp",
      "pricing": "Посмотреть цены",
      "message": "Здравствуйте, я хочу записаться на косметические процедуры."
    }
  }
}
</i18n>
