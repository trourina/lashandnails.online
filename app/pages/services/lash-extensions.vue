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

      <!-- Techniques -->
      <section aria-labelledby="techniques">
        <h2 id="techniques" class="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
          {{ t("techniques.heading") }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article
            v-for="(technique, index) in techniques"
            :key="index"
            class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 class="font-display text-xl font-semibold text-gray-900 mb-3">
              {{ technique.name }}
            </h3>
            <p class="text-gray-600">
              {{ technique.description }}
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
const serviceData = getServiceBySlug("/services/lash-extensions")!;

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

const techniques = computed(() => [
  {
    name: t("techniques.items.classic.name"),
    description: t("techniques.items.classic.description"),
  },
  {
    name: t("techniques.items.volume.name"),
    description: t("techniques.items.volume.description"),
  },
  {
    name: t("techniques.items.hybrid.name"),
    description: t("techniques.items.hybrid.description"),
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
  "/services/lash-extensions",
  () => t("seoTitle"),
  () => t("seoDescription")
);
</script>


<i18n lang="json">
{
  "es": {
    "title": "Extensiones de Pestañas",
    "subtitle": "Mirada natural y voluminosa con técnicas avanzadas de extensión de pestañas",
    "seoTitle": "Extensiones de Pestañas | Lash & Nails Santa Pola",
    "seoDescription": "Extensiones de pestañas profesionales en Santa Pola - Mirada natural y voluminosa con técnicas avanzadas",
    "breadcrumb": {
      "home": "Inicio",
      "services": "Servicios",
      "current": "Extensiones de Pestañas"
    },
    "overview": {
      "heading": "Descripción General",
      "description": "Las extensiones de pestañas son una forma segura y efectiva de realzar tu mirada de forma natural. Aplicamos pestañas sintéticas de alta calidad, pestaña por pestaña, para crear el volumen y longitud que deseas. El resultado es una mirada más abierta y expresiva que dura semanas."
    },
    "pricing": {
      "heading": "Precios y Servicios",
      "offers": {
        "0": {
          "name": "Extensiones de Pestañas Clásicas",
          "description": "Extensiones de pestañas de aspecto natural para elegancia diaria"
        },
        "1": {
          "name": "Extensiones de Pestañas Volumen",
          "description": "Pestañas más llenas y dramáticas con técnica de volumen"
        },
        "2": {
          "name": "Extensiones de Pestañas Híbridas",
          "description": "Equilibrio perfecto entre clásico y volumen"
        },
        "3": {
          "name": "Relleno de Pestañas (2-3 semanas)",
          "description": "Relleno de mantenimiento para extensiones existentes"
        }
      }
    },
    "techniques": {
      "heading": "Técnicas Disponibles",
      "items": {
        "classic": {
          "name": "Clásica",
          "description": "Una extensión por pestaña natural. Resultado elegante y natural, perfecto para el día a día."
        },
        "volume": {
          "name": "Volumen",
          "description": "Múltiples extensiones finas por pestaña. Máximo volumen y densidad para un look dramático."
        },
        "hybrid": {
          "name": "Híbrida",
          "description": "Combinación de técnica clásica y volumen. Balance perfecto entre natural y voluminoso."
        }
      }
    },
    "benefits": {
      "heading": "Beneficios",
      "items": [
        "Mirada más abierta y expresiva sin necesidad de maquillaje",
        "Duración de 3-4 semanas con cuidado adecuado",
        "Resistentes al agua y actividades diarias",
        "Personalizables en longitud, grosor y curvatura",
        "Ahorro de tiempo en tu rutina diaria de maquillaje"
      ]
    },
    "process": {
      "heading": "Proceso de Aplicación",
      "steps": [
        {
          "title": "Consulta",
          "description": "Evaluamos tus pestañas naturales y discutimos el look que deseas conseguir."
        },
        {
          "title": "Preparación",
          "description": "Limpiamos y preparamos tus pestañas naturales para la aplicación."
        },
        {
          "title": "Aplicación",
          "description": "Aplicamos cada extensión individualmente con adhesivo profesional de larga duración."
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
        "Evita mojar las pestañas durante las primeras 24 horas",
        "No uses productos a base de aceite cerca de los ojos",
        "Cepilla tus pestañas suavemente cada día con un cepillo especial",
        "Evita frotar o tirar de las extensiones",
        "Agenda rellenos cada 2-3 semanas para mantener el volumen"
      ]
    },
    "cta": {
      "heading": "¿Lista para transformar tu mirada?",
      "subtitle": "Reserva tu cita para extensiones de pestañas",
      "button": "Reservar por WhatsApp",
      "pricing": "Ver Precios",
      "message": "Hola, me gustaría reservar una cita para extensiones de pestañas."
    }
  },
  "en": {
    "title": "Lash Extensions",
    "subtitle": "Natural and voluminous look with advanced lash extension techniques",
    "seoTitle": "Lash Extensions | Lash & Nails Santa Pola",
    "seoDescription": "Professional lash extensions in Santa Pola - Natural and voluminous look with advanced techniques",
    "breadcrumb": {
      "home": "Home",
      "services": "Services",
      "current": "Lash Extensions"
    },
    "overview": {
      "heading": "Overview",
      "description": "Lash extensions are a safe and effective way to enhance your look naturally. We apply high-quality synthetic lashes, lash by lash, to create the volume and length you desire. The result is a more open and expressive look that lasts for weeks."
    },
    "pricing": {
      "heading": "Pricing & Services",
      "offers": {
        "0": {
          "name": "Classic Lash Extensions",
          "description": "Natural-looking lash extensions for everyday elegance"
        },
        "1": {
          "name": "Volume Lash Extensions",
          "description": "Fuller, dramatic lashes with volume technique"
        },
        "2": {
          "name": "Hybrid Lash Extensions",
          "description": "Perfect balance between classic and volume"
        },
        "3": {
          "name": "Lash Fill (2-3 weeks)",
          "description": "Maintenance fill for existing lash extensions"
        }
      }
    },
    "techniques": {
      "heading": "Available Techniques",
      "items": {
        "classic": {
          "name": "Classic",
          "description": "One extension per natural lash. Elegant and natural result, perfect for everyday wear."
        },
        "volume": {
          "name": "Volume",
          "description": "Multiple thin extensions per lash. Maximum volume and density for a dramatic look."
        },
        "hybrid": {
          "name": "Hybrid",
          "description": "Combination of classic and volume technique. Perfect balance between natural and voluminous."
        }
      }
    },
    "benefits": {
      "heading": "Benefits",
      "items": [
        "More open and expressive look without makeup",
        "Lasts 3-4 weeks with proper care",
        "Water-resistant and suitable for daily activities",
        "Customizable in length, thickness and curl",
        "Save time on your daily makeup routine"
      ]
    },
    "process": {
      "heading": "Application Process",
      "steps": [
        {
          "title": "Consultation",
          "description": "We assess your natural lashes and discuss the look you want to achieve."
        },
        {
          "title": "Preparation",
          "description": "We clean and prepare your natural lashes for application."
        },
        {
          "title": "Application",
          "description": "We apply each extension individually with professional long-lasting adhesive."
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
        "Avoid getting lashes wet for the first 24 hours",
        "Don't use oil-based products near your eyes",
        "Gently brush your lashes daily with a special brush",
        "Avoid rubbing or pulling the extensions",
        "Schedule refills every 2-3 weeks to maintain volume"
      ]
    },
    "cta": {
      "heading": "Ready to transform your look?",
      "subtitle": "Book your appointment for lash extensions",
      "button": "Book via WhatsApp",
      "pricing": "View Pricing",
      "message": "Hello, I would like to book an appointment for lash extensions."
    }
  },
  "ru": {
    "title": "Наращивание ресниц",
    "subtitle": "Естественный и объемный взгляд с передовыми техниками наращивания ресниц",
    "seoTitle": "Наращивание ресниц | Lash & Nails Santa Pola",
    "seoDescription": "Профессиональное наращивание ресниц в Санта-Пола - Естественный и объемный взгляд с передовыми техниками",
    "breadcrumb": {
      "home": "Главная",
      "services": "Услуги",
      "current": "Наращивание ресниц"
    },
    "overview": {
      "heading": "Обзор",
      "description": "Наращивание ресниц - это безопасный и эффективный способ подчеркнуть ваш взгляд естественным образом. Мы наносим высококачественные синтетические ресницы, ресничка за ресничкой, чтобы создать желаемый объем и длину. Результат - более открытый и выразительный взгляд, который держится неделями."
    },
    "pricing": {
      "heading": "Цены и услуги",
      "offers": {
        "0": {
          "name": "Классическое наращивание ресниц",
          "description": "Естественные ресницы для повседневной элегантности"
        },
        "1": {
          "name": "Объемное наращивание ресниц",
          "description": "Более полные, драматичные ресницы с объемной техникой"
        },
        "2": {
          "name": "Гибридное наращивание ресниц",
          "description": "Идеальный баланс между классикой и объемом"
        },
        "3": {
          "name": "Коррекция ресниц (2-3 недели)",
          "description": "Поддерживающая коррекция существующих наращенных ресниц"
        }
      }
    },
    "techniques": {
      "heading": "Доступные техники",
      "items": {
        "classic": {
          "name": "Классическая",
          "description": "Одна ресничка на натуральную ресницу. Элегантный и естественный результат, идеально для повседневной носки."
        },
        "volume": {
          "name": "Объемная",
          "description": "Несколько тонких ресничек на одну ресницу. Максимальный объем и густота для драматического эффекта."
        },
        "hybrid": {
          "name": "Гибридная",
          "description": "Комбинация классической и объемной техники. Идеальный баланс между естественным и объемным."
        }
      }
    },
    "benefits": {
      "heading": "Преимущества",
      "items": [
        "Более открытый и выразительный взгляд без макияжа",
        "Держится 3-4 недели при правильном уходе",
        "Водостойкие и подходят для ежедневных занятий",
        "Настраиваемые по длине, толщине и изгибу",
        "Экономия времени на ежедневный макияж"
      ]
    },
    "process": {
      "heading": "Процесс нанесения",
      "steps": [
        {
          "title": "Консультация",
          "description": "Оцениваем ваши натуральные ресницы и обсуждаем желаемый результат."
        },
        {
          "title": "Подготовка",
          "description": "Очищаем и подготавливаем ваши натуральные ресницы к нанесению."
        },
        {
          "title": "Нанесение",
          "description": "Наносим каждую ресничку индивидуально с профессиональным долговечным клеем."
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
        "Избегайте намокания ресниц в течение первых 24 часов",
        "Не используйте продукты на масляной основе возле глаз",
        "Аккуратно расчесывайте ресницы каждый день специальной щеточкой",
        "Избегайте трения или вытягивания нарощенных ресниц",
        "Записывайтесь на коррекцию каждые 2-3 недели для поддержания объема"
      ]
    },
    "cta": {
      "heading": "Готовы преобразить свой взгляд?",
      "subtitle": "Запишитесь на наращивание ресниц",
      "button": "Записаться через WhatsApp",
      "pricing": "Посмотреть цены",
      "message": "Здравствуйте, я хочу записаться на наращивание ресниц."
    }
  }
}
</i18n>
