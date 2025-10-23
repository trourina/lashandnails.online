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

      <!-- Nail Services -->
      <section aria-labelledby="services">
        <h2 id="services" class="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
          {{ t("services.heading") }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article
            v-for="(service, index) in nailServices"
            :key="index"
            class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 class="font-display text-xl font-semibold text-gray-900 mb-3">
              {{ service.name }}
            </h3>
            <p class="text-gray-600">
              {{ service.description }}
            </p>
          </article>
        </div>
      </section>

      <!-- Design Options -->
      <section aria-labelledby="designs">
        <h2 id="designs" class="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
          {{ t("designs.heading") }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article
            v-for="(design, index) in designOptions"
            :key="index"
            class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 class="font-display text-xl font-semibold text-gray-900 mb-3">
              {{ design.name }}
            </h3>
            <p class="text-gray-600">
              {{ design.description }}
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
const serviceData = getServiceBySlug("/services/nail-design")!;

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

const nailServices = computed(() => [
  {
    name: t("services.items.manicure.name"),
    description: t("services.items.manicure.description"),
  },
  {
    name: t("services.items.pedicure.name"),
    description: t("services.items.pedicure.description"),
  },
  {
    name: t("services.items.gel.name"),
    description: t("services.items.gel.description"),
  },
  {
    name: t("services.items.acrylic.name"),
    description: t("services.items.acrylic.description"),
  },
]);

const designOptions = computed(() => [
  {
    name: t("designs.items.french.name"),
    description: t("designs.items.french.description"),
  },
  {
    name: t("designs.items.ombre.name"),
    description: t("designs.items.ombre.description"),
  },
  {
    name: t("designs.items.custom.name"),
    description: t("designs.items.custom.description"),
  },
]);

const benefits = computed(() => [
  t("benefits.items.0"),
  t("benefits.items.1"),
  t("benefits.items.2"),
  t("benefits.items.3"),
  t("benefits.items.4"),
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
  "/services/nail-design",
  () => t("seoTitle"),
  () => t("seoDescription")
);
</script>

<i18n lang="json">
{
  "es": {
    "title": "Diseño de Uñas",
    "subtitle": "Manicura, pedicura y nail art profesional para uñas perfectas",
    "seoTitle": "Diseño de Uñas | Lash & Nails Santa Pola",
    "seoDescription": "Diseño de uñas profesional en Santa Pola - Manicura, pedicura y nail art personalizado",
    "breadcrumb": {
      "home": "Inicio",
      "services": "Servicios",
      "current": "Diseño de Uñas"
    },
    "overview": {
      "heading": "Descripción General",
      "description": "Nuestros servicios de diseño de uñas combinan técnica profesional con creatividad para ofrecerte uñas perfectas. Desde manicura clásica hasta diseños personalizados de nail art, trabajamos con productos de alta calidad para resultados duraderos y saludables."
    },
    "pricing": {
      "heading": "Precios y Servicios",
      "offers": {
        "0": {
          "name": "Manicura Clásica",
          "description": "Manicura tradicional con esmalte"
        },
        "1": {
          "name": "Manicura de Gel",
          "description": "Manicura con esmalte de gel de larga duración"
        },
        "2": {
          "name": "Diseño de Uñas",
          "description": "Diseño de uñas creativo con diseños personalizados"
        },
        "3": {
          "name": "Pedicura",
          "description": "Tratamiento completo de pedicura"
        }
      }
    },
    "services": {
      "heading": "Servicios de Uñas",
      "items": {
        "manicure": {
          "name": "Manicura",
          "description": "Cuidado completo de manos y uñas con limado, cutículas, pulido y esmaltado profesional."
        },
        "pedicure": {
          "name": "Pedicura",
          "description": "Tratamiento completo para pies incluyendo exfoliación, hidratación y esmaltado."
        },
        "gel": {
          "name": "Uñas de Gel",
          "description": "Esmaltado de gel con brillo duradero de hasta 3 semanas sin descascararse."
        },
        "acrylic": {
          "name": "Uñas Acrílicas",
          "description": "Extensiones de uñas acrílicas resistentes y personalizables en forma y longitud."
        }
      }
    },
    "designs": {
      "heading": "Opciones de Diseño",
      "items": {
        "french": {
          "name": "Francesa",
          "description": "Diseño clásico y elegante con puntas blancas, perfecto para cualquier ocasión."
        },
        "ombre": {
          "name": "Ombré",
          "description": "Degradado suave de colores para un look moderno y sofisticado."
        },
        "custom": {
          "name": "Diseño Personalizado",
          "description": "Nail art único creado según tus preferencias - flores, geométricos, glitter y más."
        }
      }
    },
    "benefits": {
      "heading": "Beneficios",
      "items": [
        "Uñas perfectas y bien cuidadas que duran semanas",
        "Productos de alta calidad seguros para tus uñas",
        "Diseños personalizados adaptados a tu estilo",
        "Técnicas profesionales que respetan la salud de tus uñas",
        "Amplia gama de colores y acabados disponibles"
      ]
    },
    "aftercare": {
      "heading": "Cuidados Posteriores",
      "tips": [
        "Usa guantes al realizar tareas domésticas con químicos",
        "Aplica aceite de cutículas regularmente para mantener la hidratación",
        "Evita usar tus uñas como herramientas",
        "Acude a rellenos cada 2-3 semanas para uñas de gel o acrílicas",
        "Mantén tus uñas limpias y secas para prevenir infecciones"
      ]
    },
    "cta": {
      "heading": "¿Lista para lucir unas uñas perfectas?",
      "subtitle": "Reserva tu cita para diseño de uñas",
      "button": "Reservar por WhatsApp",
      "pricing": "Ver Precios",
      "message": "Hola, me gustaría reservar una cita para diseño de uñas."
    }
  },
  "en": {
    "title": "Nail Design",
    "subtitle": "Professional manicure, pedicure and nail art for perfect nails",
    "seoTitle": "Nail Design | Lash & Nails Santa Pola",
    "seoDescription": "Professional nail design in Santa Pola - Manicure, pedicure and custom nail art",
    "breadcrumb": {
      "home": "Home",
      "services": "Services",
      "current": "Nail Design"
    },
    "overview": {
      "heading": "Overview",
      "description": "Our nail design services combine professional technique with creativity to give you perfect nails. From classic manicure to custom nail art designs, we work with high-quality products for lasting and healthy results."
    },
    "pricing": {
      "heading": "Pricing & Services",
      "offers": {
        "0": {
          "name": "Classic Manicure",
          "description": "Traditional manicure with polish"
        },
        "1": {
          "name": "Gel Manicure",
          "description": "Long-lasting gel polish manicure"
        },
        "2": {
          "name": "Nail Art Design",
          "description": "Creative nail art with custom designs"
        },
        "3": {
          "name": "Pedicure",
          "description": "Complete pedicure treatment"
        }
      }
    },
    "services": {
      "heading": "Nail Services",
      "items": {
        "manicure": {
          "name": "Manicure",
          "description": "Complete hand and nail care with filing, cuticle work, buffing and professional polish."
        },
        "pedicure": {
          "name": "Pedicure",
          "description": "Complete foot treatment including exfoliation, hydration and polish application."
        },
        "gel": {
          "name": "Gel Nails",
          "description": "Gel polish with lasting shine for up to 3 weeks without chipping."
        },
        "acrylic": {
          "name": "Acrylic Nails",
          "description": "Strong acrylic nail extensions customizable in shape and length."
        }
      }
    },
    "designs": {
      "heading": "Design Options",
      "items": {
        "french": {
          "name": "French",
          "description": "Classic and elegant design with white tips, perfect for any occasion."
        },
        "ombre": {
          "name": "Ombré",
          "description": "Smooth color gradient for a modern and sophisticated look."
        },
        "custom": {
          "name": "Custom Design",
          "description": "Unique nail art created to your preferences - florals, geometric, glitter and more."
        }
      }
    },
    "benefits": {
      "heading": "Benefits",
      "items": [
        "Perfect, well-maintained nails that last for weeks",
        "High-quality products safe for your nails",
        "Custom designs tailored to your style",
        "Professional techniques that respect nail health",
        "Wide range of colors and finishes available"
      ]
    },
    "aftercare": {
      "heading": "Aftercare",
      "tips": [
        "Wear gloves when doing household tasks with chemicals",
        "Apply cuticle oil regularly to maintain hydration",
        "Avoid using your nails as tools",
        "Get refills every 2-3 weeks for gel or acrylic nails",
        "Keep your nails clean and dry to prevent infections"
      ]
    },
    "cta": {
      "heading": "Ready for perfect nails?",
      "subtitle": "Book your appointment for nail design",
      "button": "Book via WhatsApp",
      "pricing": "View Pricing",
      "message": "Hello, I would like to book an appointment for nail design."
    }
  },
  "ru": {
    "title": "Дизайн ногтей",
    "subtitle": "Профессиональный маникюр, педикюр и нейл-арт для идеальных ногтей",
    "seoTitle": "Дизайн ногтей | Lash & Nails Santa Pola",
    "seoDescription": "Профессиональный дизайн ногтей в Санта-Пола - Маникюр, педикюр и индивидуальный нейл-арт",
    "breadcrumb": {
      "home": "Главная",
      "services": "Услуги",
      "current": "Дизайн ногтей"
    },
    "overview": {
      "heading": "Обзор",
      "description": "Наши услуги дизайна ногтей сочетают профессиональную технику с креативностью, чтобы подарить вам идеальные ногти. От классического маникюра до индивидуального нейл-арта, мы работаем с высококачественными продуктами для долговечных и здоровых результатов."
    },
    "pricing": {
      "heading": "Цены и услуги",
      "offers": {
        "0": {
          "name": "Классический маникюр",
          "description": "Традиционный маникюр с лаком"
        },
        "1": {
          "name": "Гель-лак маникюр",
          "description": "Долговечный маникюр с гель-лаком"
        },
        "2": {
          "name": "Дизайн ногтей",
          "description": "Креативный нейл-арт с индивидуальным дизайном"
        },
        "3": {
          "name": "Педикюр",
          "description": "Полная процедура педикюра"
        }
      }
    },
    "services": {
      "heading": "Услуги для ногтей",
      "items": {
        "manicure": {
          "name": "Маникюр",
          "description": "Полный уход за руками и ногтями с подпиливанием, обработкой кутикулы, полировкой и профессиональным покрытием."
        },
        "pedicure": {
          "name": "Педикюр",
          "description": "Полная процедура для ног включая скрабирование, увлажнение и нанесение покрытия."
        },
        "gel": {
          "name": "Гель-лак",
          "description": "Гель-лаковое покрытие с долговечным блеском до 3 недель без сколов."
        },
        "acrylic": {
          "name": "Акриловые ногти",
          "description": "Прочные акриловые наращенные ногти с возможностью выбора формы и длины."
        }
      }
    },
    "designs": {
      "heading": "Варианты дизайна",
      "items": {
        "french": {
          "name": "Французский",
          "description": "Классический и элегантный дизайн с белыми кончиками, идеально для любого случая."
        },
        "ombre": {
          "name": "Омбре",
          "description": "Плавный переход цветов для современного и утонченного вида."
        },
        "custom": {
          "name": "Индивидуальный дизайн",
          "description": "Уникальный нейл-арт созданный по вашим предпочтениям - цветы, геометрия, блестки и многое другое."
        }
      }
    },
    "benefits": {
      "heading": "Преимущества",
      "items": [
        "Идеальные, ухоженные ногти, которые держатся неделями",
        "Высококачественные продукты, безопасные для ваших ногтей",
        "Индивидуальные дизайны, адаптированные к вашему стилю",
        "Профессиональные техники, которые уважают здоровье ногтей",
        "Широкий выбор цветов и покрытий"
      ]
    },
    "aftercare": {
      "heading": "Последующий уход",
      "tips": [
        "Надевайте перчатки при выполнении домашних дел с химикатами",
        "Регулярно наносите масло для кутикулы для поддержания увлажнения",
        "Избегайте использования ногтей в качестве инструментов",
        "Записывайтесь на коррекцию каждые 2-3 недели для гель-лака или акрила",
        "Держите ногти чистыми и сухими для предотвращения инфекций"
      ]
    },
    "cta": {
      "heading": "Готовы к идеальным ногтям?",
      "subtitle": "Запишитесь на дизайн ногтей",
      "button": "Записаться через WhatsApp",
      "pricing": "Посмотреть цены",
      "message": "Здравствуйте, я хочу записаться на дизайн ногтей."
    }
  }
}
</i18n>
