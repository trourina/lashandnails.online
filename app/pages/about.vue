<template>
  <section>
    <header>
      <Typo is="h1" variant="h1">{{ t("title") }}</Typo>
      <p class="page-subtitle">{{ t("subtitle") }}</p>
    </header>

    <section aria-labelledby="story">
      <h2 id="story">{{ t("story.heading") }}</h2>
      <div class="story-content">
        <p v-for="(paragraph, index) in storyParagraphs" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </section>

    <section aria-labelledby="philosophy">
      <h2 id="philosophy">{{ t("philosophy.heading") }}</h2>
      <p class="philosophy-text">{{ t("philosophy.description") }}</p>
    </section>

    <section aria-labelledby="expertise">
      <h2 id="expertise">{{ t("expertise.heading") }}</h2>
      <div class="expertise-grid">
        <article
          v-for="(item, index) in expertiseItems"
          :key="index"
          class="expertise-card"
        >
          <div class="expertise-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </article>
      </div>
    </section>

    <section aria-labelledby="values">
      <h2 id="values">{{ t("values.heading") }}</h2>
      <ul class="values-list">
        <li v-for="(value, index) in values" :key="index">
          <strong>{{ value.title }}</strong>
          <p>{{ value.description }}</p>
        </li>
      </ul>
    </section>

    <section class="cta-section">
      <h2>{{ t("cta.heading") }}</h2>
      <p>{{ t("cta.subtitle") }}</p>
      <div class="cta-buttons">
        <Button
          :href="`https://wa.me/${business.phone.replace(/\+/g, '')}?text=${encodeURIComponent(t('cta.message'))}`"
        >
          {{ t("cta.button") }}
        </Button>
        <Button to="/services">
          {{ t("cta.services") }}
        </Button>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n({ useScope: "local" });
const config = useRuntimeConfig();
const business = config.public.business;

const storyParagraphs = computed(() => [
  t("story.paragraphs.0"),
  t("story.paragraphs.1"),
  t("story.paragraphs.2"),
]);

const expertiseItems = computed(() => [
  {
    icon: "🎓",
    title: t("expertise.items.certified.title"),
    description: t("expertise.items.certified.description"),
  },
  {
    icon: "⏰",
    title: t("expertise.items.experience.title"),
    description: t("expertise.items.experience.description"),
  },
  {
    icon: "🌟",
    title: t("expertise.items.quality.title"),
    description: t("expertise.items.quality.description"),
  },
]);

const values = computed(() => [
  {
    title: t("values.items.excellence.title"),
    description: t("values.items.excellence.description"),
  },
  {
    title: t("values.items.personalized.title"),
    description: t("values.items.personalized.description"),
  },
  {
    title: t("values.items.comfort.title"),
    description: t("values.items.comfort.description"),
  },
  {
    title: t("values.items.trust.title"),
    description: t("values.items.trust.description"),
  },
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

useSchemaOrg([
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: business.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: () => t("title"),
      },
    ],
  },
  {
    "@type": "AboutPage",
    name: () => t("seoTitle"),
    description: () => t("seoDescription"),
  },
]);
</script>

<style scoped>
h1,
h2,
h3 {
  font-family: "Prata", serif;
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

h2 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  margin-bottom: 1.5rem;
}

h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.story-content p {
  color: #ccc;
  line-height: 1.8;
  font-size: 1.125rem;
  max-width: 800px;
  margin-bottom: 1.5rem;
}

.philosophy-text {
  color: #ccc;
  line-height: 1.8;
  font-size: 1.125rem;
  max-width: 800px;
  font-style: italic;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.expertise-card {
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 12px;
  transition: transform 0.2s, border-color 0.2s;
  text-align: center;
}

.expertise-card:hover {
  transform: translateY(-4px);
  border-color: #667eea;
}

.expertise-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.expertise-card p {
  color: #999;
  line-height: 1.6;
}

.values-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0 0;
  max-width: 800px;
}

.values-list li {
  padding: 1.5rem 0;
  border-bottom: 1px solid #333;
}

.values-list li:last-child {
  border-bottom: none;
}

.values-list strong {
  display: block;
  color: #667eea;
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
}

.values-list p {
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
    "title": "Sobre Nosotros",
    "subtitle": "Tu destino de belleza en Santa Pola",
    "seoTitle": "Sobre Nosotros | Lash & Nails Santa Pola",
    "seoDescription": "Conoce nuestro salón de belleza en Santa Pola - Profesionales dedicados a tu belleza y bienestar",
    "story": {
      "heading": "Nuestra Historia",
      "paragraphs": [
        "Lash & Nails nació de una pasión por hacer que cada persona se sienta hermosa y segura de sí misma. Ubicados en el corazón de Santa Pola, hemos creado un espacio donde la belleza se encuentra con la profesionalidad y el cuidado personalizado.",
        "Con años de experiencia en el sector de la belleza, nuestra misión es ofrecer tratamientos de alta calidad que realcen tu belleza natural. Nos especializamos en extensiones de pestañas, diseño de uñas y tratamientos faciales, utilizando siempre productos premium y técnicas avanzadas.",
        "Cada cliente es único para nosotros. Por eso, dedicamos tiempo a entender tus necesidades y deseos, creando un plan de belleza personalizado que se adapte perfectamente a ti. Tu satisfacción y confianza son nuestra mayor recompensa."
      ]
    },
    "philosophy": {
      "heading": "Nuestra Filosofía",
      "description": "Creemos que la belleza es un arte que combina técnica, pasión y atención al detalle. No solo ofrecemos servicios de belleza, creamos experiencias que te hacen sentir especial. Cada tratamiento es una oportunidad para mimarte y resaltar tu belleza única."
    },
    "expertise": {
      "heading": "Nuestra Experiencia",
      "items": {
        "certified": {
          "title": "Profesionales Certificados",
          "description": "Formación continua en las últimas técnicas y tendencias de belleza"
        },
        "experience": {
          "title": "Años de Experiencia",
          "description": "Miles de clientes satisfechas que confían en nuestros servicios"
        },
        "quality": {
          "title": "Productos Premium",
          "description": "Solo utilizamos productos de alta calidad, seguros y duraderos"
        }
      }
    },
    "values": {
      "heading": "Nuestros Valores",
      "items": {
        "excellence": {
          "title": "Excelencia",
          "description": "Nos esforzamos por superar tus expectativas en cada visita, ofreciendo resultados impecables."
        },
        "personalized": {
          "title": "Atención Personalizada",
          "description": "Cada cliente recibe un trato único y cuidadoso, adaptado a sus necesidades específicas."
        },
        "comfort": {
          "title": "Ambiente Acogedor",
          "description": "Hemos creado un espacio relajante donde puedes desconectar y disfrutar de tu momento de belleza."
        },
        "trust": {
          "title": "Confianza y Transparencia",
          "description": "Te asesoramos honestamente sobre los mejores tratamientos para ti, sin sorpresas."
        }
      }
    },
    "cta": {
      "heading": "¿Lista para conocernos?",
      "subtitle": "Reserva tu primera cita y descubre la diferencia",
      "button": "Reservar por WhatsApp",
      "services": "Ver Servicios",
      "message": "Hola, me gustaría reservar una cita."
    }
  },
  "en": {
    "title": "About Us",
    "subtitle": "Your beauty destination in Santa Pola",
    "seoTitle": "About Us | Lash & Nails Santa Pola",
    "seoDescription": "Learn about our beauty salon in Santa Pola - Professionals dedicated to your beauty and wellness",
    "story": {
      "heading": "Our Story",
      "paragraphs": [
        "Lash & Nails was born from a passion for making every person feel beautiful and confident. Located in the heart of Santa Pola, we've created a space where beauty meets professionalism and personalized care.",
        "With years of experience in the beauty industry, our mission is to offer high-quality treatments that enhance your natural beauty. We specialize in lash extensions, nail design, and facial treatments, always using premium products and advanced techniques.",
        "Every client is unique to us. That's why we take the time to understand your needs and desires, creating a personalized beauty plan that fits you perfectly. Your satisfaction and confidence are our greatest reward."
      ]
    },
    "philosophy": {
      "heading": "Our Philosophy",
      "description": "We believe that beauty is an art that combines technique, passion, and attention to detail. We don't just offer beauty services, we create experiences that make you feel special. Every treatment is an opportunity to pamper you and highlight your unique beauty."
    },
    "expertise": {
      "heading": "Our Expertise",
      "items": {
        "certified": {
          "title": "Certified Professionals",
          "description": "Continuous training in the latest beauty techniques and trends"
        },
        "experience": {
          "title": "Years of Experience",
          "description": "Thousands of satisfied clients who trust our services"
        },
        "quality": {
          "title": "Premium Products",
          "description": "We only use high-quality, safe, and long-lasting products"
        }
      }
    },
    "values": {
      "heading": "Our Values",
      "items": {
        "excellence": {
          "title": "Excellence",
          "description": "We strive to exceed your expectations on every visit, delivering impeccable results."
        },
        "personalized": {
          "title": "Personalized Attention",
          "description": "Every client receives unique and careful treatment, tailored to their specific needs."
        },
        "comfort": {
          "title": "Welcoming Environment",
          "description": "We've created a relaxing space where you can disconnect and enjoy your beauty moment."
        },
        "trust": {
          "title": "Trust and Transparency",
          "description": "We honestly advise you on the best treatments for you, with no surprises."
        }
      }
    },
    "cta": {
      "heading": "Ready to meet us?",
      "subtitle": "Book your first appointment and discover the difference",
      "button": "Book via WhatsApp",
      "services": "View Services",
      "message": "Hello, I would like to book an appointment."
    }
  },
  "ru": {
    "title": "О нас",
    "subtitle": "Ваш салон красоты в Санта-Пола",
    "seoTitle": "О нас | Lash & Nails Santa Pola",
    "seoDescription": "Узнайте о нашем салоне красоты в Санта-Пола - Профессионалы, посвятившие себя вашей красоте и благополучию",
    "story": {
      "heading": "Наша история",
      "paragraphs": [
        "Lash & Nails родился из страсти делать каждого человека красивым и уверенным в себе. Расположенный в самом центре Санта-Пола, мы создали пространство, где красота сочетается с профессионализмом и индивидуальным подходом.",
        "С многолетним опытом работы в индустрии красоты, наша миссия - предлагать высококачественные процедуры, которые подчеркивают вашу естественную красоту. Мы специализируемся на наращивании ресниц, дизайне ногтей и процедурах для лица, всегда используя премиальные продукты и передовые техники.",
        "Каждый клиент уникален для нас. Поэтому мы уделяем время тому, чтобы понять ваши потребности и желания, создавая персонализированный план красоты, который идеально вам подходит. Ваше удовлетворение и уверенность - наша главная награда."
      ]
    },
    "philosophy": {
      "heading": "Наша философия",
      "description": "Мы верим, что красота - это искусство, которое сочетает технику, страсть и внимание к деталям. Мы не просто предлагаем услуги красоты, мы создаем впечатления, которые заставляют вас чувствовать себя особенными. Каждая процедура - это возможность побаловать вас и подчеркнуть вашу уникальную красоту."
    },
    "expertise": {
      "heading": "Наш опыт",
      "items": {
        "certified": {
          "title": "Сертифицированные специалисты",
          "description": "Постоянное обучение новейшим техникам и трендам красоты"
        },
        "experience": {
          "title": "Годы опыта",
          "description": "Тысячи довольных клиентов, которые доверяют нашим услугам"
        },
        "quality": {
          "title": "Премиальные продукты",
          "description": "Мы используем только высококачественные, безопасные и долговечные продукты"
        }
      }
    },
    "values": {
      "heading": "Наши ценности",
      "items": {
        "excellence": {
          "title": "Превосходство",
          "description": "Мы стремимся превзойти ваши ожидания при каждом посещении, обеспечивая безупречные результаты."
        },
        "personalized": {
          "title": "Индивидуальный подход",
          "description": "Каждый клиент получает уникальное и внимательное обслуживание, адаптированное к его конкретным потребностям."
        },
        "comfort": {
          "title": "Уютная атмосфера",
          "description": "Мы создали расслабляющее пространство, где вы можете отключиться и насладиться моментом красоты."
        },
        "trust": {
          "title": "Доверие и прозрачность",
          "description": "Мы честно консультируем вас о лучших процедурах для вас, без сюрпризов."
        }
      }
    },
    "cta": {
      "heading": "Готовы познакомиться с нами?",
      "subtitle": "Запишитесь на первый прием и почувствуйте разницу",
      "button": "Записаться через WhatsApp",
      "services": "Посмотреть услуги",
      "message": "Здравствуйте, я хочу записаться на прием."
    }
  }
}
</i18n>
