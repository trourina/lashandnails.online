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

    <section aria-labelledby="treatments">
      <h2 id="treatments">{{ t('treatments.heading') }}</h2>
      <div class="treatment-grid">
        <article v-for="(treatment, index) in treatmentList" :key="index" class="treatment-card">
          <h3>{{ treatment.name }}</h3>
          <p>{{ treatment.description }}</p>
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

    <section aria-labelledby="process">
      <h2 id="process">{{ t('process.heading') }}</h2>
      <ol class="process-list">
        <li v-for="(step, index) in processSteps" :key="index">
          <strong>{{ step.title }}</strong>
          <p>{{ step.description }}</p>
        </li>
      </ol>
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
        <Button
          :href="`https://wa.me/${business.phone.replace(/\+/g, '')}?text=${encodeURIComponent(t('cta.message'))}`"
        >
          {{ t('cta.button') }}
        </Button>
        <Button to="/pricing">
          {{ t('cta.pricing') }}
        </Button>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: 'local' })
const config = useRuntimeConfig()
const business = config.public.business

const treatmentList = computed(() => [
  {
    name: t('treatments.items.brows.name'),
    description: t('treatments.items.brows.description'),
  },
  {
    name: t('treatments.items.microblading.name'),
    description: t('treatments.items.microblading.description'),
  },
  {
    name: t('treatments.items.facial.name'),
    description: t('treatments.items.facial.description'),
  },
  {
    name: t('treatments.items.waxing.name'),
    description: t('treatments.items.waxing.description'),
  },
])

const benefits = computed(() => [
  t('benefits.items.0'),
  t('benefits.items.1'),
  t('benefits.items.2'),
  t('benefits.items.3'),
  t('benefits.items.4'),
])

const processSteps = computed(() => [
  {
    title: t('process.steps.0.title'),
    description: t('process.steps.0.description'),
  },
  {
    title: t('process.steps.1.title'),
    description: t('process.steps.1.description'),
  },
  {
    title: t('process.steps.2.title'),
    description: t('process.steps.2.description'),
  },
  {
    title: t('process.steps.3.title'),
    description: t('process.steps.3.description'),
  },
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
    "overview": {
      "heading": "Descripción General",
      "description": "Nuestros tratamientos de belleza están diseñados para realzar tu belleza natural con técnicas profesionales y productos de primera calidad. Desde el cuidado de cejas hasta tratamientos faciales especializados, cada servicio está personalizado para tus necesidades."
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
    "overview": {
      "heading": "Overview",
      "description": "Our beauty treatments are designed to enhance your natural beauty with professional techniques and premium products. From brow care to specialized facial treatments, each service is personalized to your needs."
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
    "overview": {
      "heading": "Обзор",
      "description": "Наши косметические процедуры разработаны для подчеркивания вашей естественной красоты с помощью профессиональных техник и премиальных продуктов. От ухода за бровями до специализированных процедур для лица, каждая услуга персонализирована под ваши потребности."
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
