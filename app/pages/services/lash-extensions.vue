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

    <section aria-labelledby="techniques">
      <h2 id="techniques">{{ t('techniques.heading') }}</h2>
      <div class="technique-grid">
        <article v-for="(technique, index) in techniques" :key="index" class="technique-card">
          <h3>{{ technique.name }}</h3>
          <p>{{ technique.description }}</p>
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

const techniques = computed(() => [
  {
    name: t('techniques.items.classic.name'),
    description: t('techniques.items.classic.description'),
  },
  {
    name: t('techniques.items.volume.name'),
    description: t('techniques.items.volume.description'),
  },
  {
    name: t('techniques.items.hybrid.name'),
    description: t('techniques.items.hybrid.description'),
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

.technique-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.technique-card {
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 12px;
  transition: transform 0.2s, border-color 0.2s;
}

.technique-card:hover {
  transform: translateY(-4px);
  border-color: #667eea;
}

.technique-card p {
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
    "title": "Extensiones de Pestañas",
    "subtitle": "Mirada natural y voluminosa con técnicas avanzadas de extensión de pestañas",
    "seoTitle": "Extensiones de Pestañas | Lash & Nails Santa Pola",
    "seoDescription": "Extensiones de pestañas profesionales en Santa Pola - Mirada natural y voluminosa con técnicas avanzadas",
    "overview": {
      "heading": "Descripción General",
      "description": "Las extensiones de pestañas son una forma segura y efectiva de realzar tu mirada de forma natural. Aplicamos pestañas sintéticas de alta calidad, pestaña por pestaña, para crear el volumen y longitud que deseas. El resultado es una mirada más abierta y expresiva que dura semanas."
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
    "overview": {
      "heading": "Overview",
      "description": "Lash extensions are a safe and effective way to enhance your look naturally. We apply high-quality synthetic lashes, lash by lash, to create the volume and length you desire. The result is a more open and expressive look that lasts for weeks."
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
    "overview": {
      "heading": "Обзор",
      "description": "Наращивание ресниц - это безопасный и эффективный способ подчеркнуть ваш взгляд естественным образом. Мы наносим высококачественные синтетические ресницы, ресничка за ресничкой, чтобы создать желаемый объем и длину. Результат - более открытый и выразительный взгляд, который держится неделями."
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
