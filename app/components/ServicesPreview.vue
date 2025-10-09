<template>
  <section aria-labelledby="services-preview">
    <h2 id="services-preview">{{ t('heading') }}</h2>
    <p class="section-subtitle">{{ t('subtitle') }}</p>

    <div class="services-grid">
      <article v-for="service in services" :key="service.slug" class="service-card">
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        <NuxtLink :to="localePath(`/services/${service.slug}`)" class="service-link">
          {{ t('learnMore') }}
        </NuxtLink>
      </article>
    </div>

    <div class="services-cta">
      <NuxtLink :to="localePath('/pricing')" class="view-all">
        {{ t('viewAll') }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n({ useScope: 'local' })
const localePath = useLocalePath()

const services = computed(() => [
  {
    slug: 'lash-extensions',
    title: t('services.lashes.title'),
    description: t('services.lashes.description'),
  },
  {
    slug: 'nail-design',
    title: t('services.nails.title'),
    description: t('services.nails.description'),
  },
  {
    slug: 'beauty-treatments',
    title: t('services.treatments.title'),
    description: t('services.treatments.description'),
  },
])
</script>

<style scoped>
section {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-family: 'Prata', serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  color: #999;
  margin-bottom: 3rem;
  font-size: 1.125rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.service-card {
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 12px;
  transition: transform 0.2s, border-color 0.2s;
}

.service-card:hover {
  transform: translateY(-4px);
  border-color: #667eea;
}

.service-card h3 {
  font-family: 'Prata', serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.service-card p {
  color: #999;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.service-link::after {
  content: '→';
  transition: transform 0.2s;
}

.service-link:hover::after {
  transform: translateX(4px);
}

.services-cta {
  text-align: center;
}

.view-all {
  display: inline-block;
  padding: 1rem 2rem;
  background: transparent;
  color: white;
  border: 2px solid #667eea;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s;
}

.view-all:hover {
  background: #667eea;
  transform: translateY(-2px);
}
</style>

<i18n lang="json">
{
  "es": {
    "heading": "Nuestros Servicios",
    "subtitle": "Tratamientos profesionales de belleza en Santa Pola",
    "learnMore": "Más información",
    "viewAll": "Ver todos los servicios",
    "services": {
      "lashes": {
        "title": "Extensiones de Pestañas",
        "description": "Mirada natural y voluminosa con técnicas avanzadas de extensión de pestañas"
      },
      "nails": {
        "title": "Diseño de Uñas",
        "description": "Manicura, pedicura y nail art personalizado para lucir unas uñas perfectas"
      },
      "treatments": {
        "title": "Tratamientos de Belleza",
        "description": "Cejas, micropigmentación y tratamientos faciales profesionales"
      }
    }
  },
  "en": {
    "heading": "Our Services",
    "subtitle": "Professional beauty treatments in Santa Pola",
    "learnMore": "Learn more",
    "viewAll": "View all services",
    "services": {
      "lashes": {
        "title": "Lash Extensions",
        "description": "Natural and voluminous look with advanced lash extension techniques"
      },
      "nails": {
        "title": "Nail Design",
        "description": "Manicure, pedicure and custom nail art for perfect nails"
      },
      "treatments": {
        "title": "Beauty Treatments",
        "description": "Brows, micropigmentation and professional facial treatments"
      }
    }
  },
  "ru": {
    "heading": "Наши услуги",
    "subtitle": "Профессиональные косметические процедуры в Санта-Пола",
    "learnMore": "Подробнее",
    "viewAll": "Посмотреть все услуги",
    "services": {
      "lashes": {
        "title": "Наращивание ресниц",
        "description": "Естественный и объемный взгляд с передовыми техниками наращивания ресниц"
      },
      "nails": {
        "title": "Дизайн ногтей",
        "description": "Маникюр, педикюр и индивидуальный нейл-арт для идеальных ногтей"
      },
      "treatments": {
        "title": "Косметические процедуры",
        "description": "Брови, микропигментация и профессиональные процедуры для лица"
      }
    }
  }
}
</i18n>
