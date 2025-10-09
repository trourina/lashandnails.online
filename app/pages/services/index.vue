<template>
  <main>
    <header>
      <h1>{{ t('title') }}</h1>
      <p class="page-subtitle">{{ t('subtitle') }}</p>
    </header>

    <section aria-labelledby="services-list" class="services-section">
      <div class="services-grid">
        <article v-for="service in services" :key="service.slug" class="service-card">
          <div class="service-icon">{{ service.icon }}</div>
          <h2>{{ service.title }}</h2>
          <p class="service-description">{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="(feature, index) in service.features" :key="index">
              {{ feature }}
            </li>
          </ul>
          <NuxtLink :to="localePath(`/services/${service.slug}`)" class="service-cta">
            {{ t('learnMore') }}
          </NuxtLink>
        </article>
      </div>
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

const services = computed(() => [
  {
    slug: 'lash-extensions',
    icon: '👁️',
    title: t('services.lashes.title'),
    description: t('services.lashes.description'),
    features: [
      t('services.lashes.features.0'),
      t('services.lashes.features.1'),
      t('services.lashes.features.2'),
      t('services.lashes.features.3'),
    ],
  },
  {
    slug: 'nail-design',
    icon: '💅',
    title: t('services.nails.title'),
    description: t('services.nails.description'),
    features: [
      t('services.nails.features.0'),
      t('services.nails.features.1'),
      t('services.nails.features.2'),
      t('services.nails.features.3'),
    ],
  },
  {
    slug: 'beauty-treatments',
    icon: '✨',
    title: t('services.treatments.title'),
    description: t('services.treatments.description'),
    features: [
      t('services.treatments.features.0'),
      t('services.treatments.features.1'),
      t('services.treatments.features.2'),
      t('services.treatments.features.3'),
    ],
  },
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
        name: () => t('title'),
      },
    ],
  },
  {
    '@type': 'CollectionPage',
    name: () => t('seoTitle'),
    description: () => t('seoDescription'),
    about: {
      '@type': 'Thing',
      name: () => t('title'),
    },
  },
])
</script>

<style scoped>
h1,
h2 {
  font-family: 'Prata', serif;
}

h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  color: #999;
  margin-bottom: 3rem;
  max-width: 800px;
}

.services-section {
  margin-bottom: 4rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.service-card {
  padding: 2.5rem 2rem;
  border: 1px solid #333;
  border-radius: 12px;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: #667eea;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.2);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.service-card h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.service-description {
  color: #999;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex-grow: 1;
}

.service-features li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #ccc;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: 600;
}

.service-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: 2px solid #667eea;
  border-radius: 8px;
  transition: all 0.2s;
  align-self: flex-start;
}

.service-cta::after {
  content: '→';
  transition: transform 0.2s;
}

.service-cta:hover {
  background: #667eea;
  transform: translateX(4px);
}

.service-cta:hover::after {
  transform: translateX(4px);
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
    "title": "Nuestros Servicios",
    "subtitle": "Servicios profesionales de belleza en Santa Pola - Calidad, experiencia y atención personalizada",
    "seoTitle": "Nuestros Servicios | Lash & Nails Santa Pola",
    "seoDescription": "Descubre nuestros servicios de belleza: extensiones de pestañas, diseño de uñas y tratamientos de belleza en Santa Pola",
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
