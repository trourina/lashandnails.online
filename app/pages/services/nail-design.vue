<template>
  <main>
    <header>
      <h1>{{ t('title') }}</h1>
      <p class="page-subtitle">{{ t('subtitle') }}</p>
    </header>

    <section aria-labelledby="overview">
      <h2 id="overview">{{ t('overview.heading') }}</h2>
      <p class="section-description">{{ t('overview.description') }}</p>
    </section>

    <section aria-labelledby="services">
      <h2 id="services">{{ t('services.heading') }}</h2>
      <div class="service-grid">
        <article v-for="(service, index) in nailServices" :key="index" class="service-card">
          <h3>{{ service.name }}</h3>
          <p>{{ service.description }}</p>
        </article>
      </div>
    </section>

    <section aria-labelledby="designs">
      <h2 id="designs">{{ t('designs.heading') }}</h2>
      <div class="design-grid">
        <article v-for="(design, index) in designOptions" :key="index" class="design-card">
          <h3>{{ design.name }}</h3>
          <p>{{ design.description }}</p>
        </article>
      </div>
    </section>

    <section aria-labelledby="benefits">
      <h2 id="benefits">{{ t('benefits.heading') }}</h2>
      <ul class="benefits-list">
        <li v-for="(benefit, index) in benefits" :key="index">
          {{ benefit }}
        </li>
      </ul>
    </section>

    <section aria-labelledby="aftercare">
      <h2 id="aftercare">{{ t('aftercare.heading') }}</h2>
      <ul class="aftercare-list">
        <li v-for="(tip, index) in aftercareTips" :key="index">
          {{ tip }}
        </li>
      </ul>
    </section>

    <section class="cta-section">
      <h2>{{ t('cta.heading') }}</h2>
      <p>{{ t('cta.subtitle') }}</p>
      <div class="cta-buttons">
        <a
          :href="`https://wa.me/${business.phone.replace(/\+/g, '')}?text=${encodeURIComponent(t('cta.message'))}`"
          target="_blank"
          rel="noopener noreferrer nofollow"
          class="cta-button primary"
        >
          {{ t('cta.button') }}
        </a>
        <NuxtLink :to="localePath('/pricing')" class="cta-button secondary">
          {{ t('cta.pricing') }}
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: 'local' })
const localePath = useLocalePath()
const config = useRuntimeConfig()
const business = config.public.business

const nailServices = computed(() => [
  {
    name: t('services.items.manicure.name'),
    description: t('services.items.manicure.description'),
  },
  {
    name: t('services.items.pedicure.name'),
    description: t('services.items.pedicure.description'),
  },
  {
    name: t('services.items.gel.name'),
    description: t('services.items.gel.description'),
  },
  {
    name: t('services.items.acrylic.name'),
    description: t('services.items.acrylic.description'),
  },
])

const designOptions = computed(() => [
  {
    name: t('designs.items.french.name'),
    description: t('designs.items.french.description'),
  },
  {
    name: t('designs.items.ombre.name'),
    description: t('designs.items.ombre.description'),
  },
  {
    name: t('designs.items.custom.name'),
    description: t('designs.items.custom.description'),
  },
])

const benefits = computed(() => [
  t('benefits.items.0'),
  t('benefits.items.1'),
  t('benefits.items.2'),
  t('benefits.items.3'),
  t('benefits.items.4'),
])

const aftercareTips = computed(() => [
  t('aftercare.tips.0'),
  t('aftercare.tips.1'),
  t('aftercare.tips.2'),
  t('aftercare.tips.3'),
  t('aftercare.tips.4'),
])

useSeoMeta({
  title: () => t('seoTitle'),
  description: () => t('seoDescription'),
  ogTitle: () => t('seoTitle'),
  ogDescription: () => t('seoDescription'),
  ogType: 'website',
  ogLocale: () => locale.value === 'es' ? 'es_ES' : locale.value === 'ru' ? 'ru_RU' : 'en_US',
})

useSchemaOrg([
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: business.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${business.url}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: () => t('title'),
      },
    ],
  },
  {
    '@type': 'Service',
    serviceType: () => t('title'),
    provider: {
      '@type': 'LocalBusiness',
      name: business.name,
    },
    areaServed: [
      { '@type': 'City', name: 'Santa Pola' },
      { '@type': 'City', name: 'Elche' },
      { '@type': 'City', name: 'Guardamar del Segura' },
      { '@type': 'City', name: 'Alicante' },
    ],
    description: () => t('overview.description'),
  },
])
</script>

<style scoped>
h1,
h2,
h3 {
  font-family: 'Prata', serif;
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

.service-grid,
.design-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card,
.design-card {
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 12px;
  transition: transform 0.2s, border-color 0.2s;
}

.service-card:hover,
.design-card:hover {
  transform: translateY(-4px);
  border-color: #667eea;
}

.service-card p,
.design-card p {
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
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: 600;
  font-size: 1.5rem;
}

.aftercare-list li::before {
  content: '•';
  position: absolute;
  left: 0.5rem;
  color: #667eea;
  font-weight: 600;
  font-size: 1.5rem;
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

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  font-size: 1.125rem;
}

.cta-button.primary {
  background: white;
  color: #667eea;
}

.cta-button.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>

<i18n lang="json">
{
  "es": {
    "title": "Diseño de Uñas",
    "subtitle": "Manicura, pedicura y nail art profesional para uñas perfectas",
    "seoTitle": "Diseño de Uñas | Lash & Nails Santa Pola",
    "seoDescription": "Diseño de uñas profesional en Santa Pola - Manicura, pedicura y nail art personalizado",
    "overview": {
      "heading": "Descripción General",
      "description": "Nuestros servicios de diseño de uñas combinan técnica profesional con creatividad para ofrecerte uñas perfectas. Desde manicura clásica hasta diseños personalizados de nail art, trabajamos con productos de alta calidad para resultados duraderos y saludables."
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
    "overview": {
      "heading": "Overview",
      "description": "Our nail design services combine professional technique with creativity to give you perfect nails. From classic manicure to custom nail art designs, we work with high-quality products for lasting and healthy results."
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
    "overview": {
      "heading": "Обзор",
      "description": "Наши услуги дизайна ногтей сочетают профессиональную технику с креативностью, чтобы подарить вам идеальные ногти. От классического маникюра до индивидуального нейл-арта, мы работаем с высококачественными продуктами для долговечных и здоровых результатов."
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
