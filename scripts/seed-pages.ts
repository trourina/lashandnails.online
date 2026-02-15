/**
 * Seed Sanity CMS with page content extracted from i18n blocks.
 * Run: SANITY_TOKEN="skXXXX..." npx tsx scripts/seed-pages.ts
 */
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "4dsh8g5u",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

if (!process.env.SANITY_TOKEN) {
  console.error(
    "Missing SANITY_TOKEN. Create one at https://www.sanity.io/manage/project/4dsh8g5u/api#tokens",
  );
  console.error('Then run: SANITY_TOKEN="skXXXX..." npx tsx scripts/seed-pages.ts');
  process.exit(1);
}

/** Generate a stable _key for array items */
function key() {
  return Math.random().toString(36).slice(2, 10);
}

// ─── Site Settings ─────────────────────────────────────────────────

async function seedSiteSettings() {
  console.log("\n⚙️  Seeding siteSettings...");
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    siteName: "Lash & Nails Santa Pola",
    siteDescription: {
      en: "Professional beauty salon in Santa Pola offering lash extensions, nail design, and beauty treatments",
      es: "Salón de belleza profesional en Santa Pola con extensiones de pestañas, diseño de uñas y tratamientos de belleza",
      ru: "Профессиональный салон красоты в Санта-Пола - наращивание ресниц, дизайн ногтей и косметические процедуры",
    },
    phone: "+34604316778",
    email: "info@lashandnails.es",
    telegram: "Irina_STS",
    street: "Carrer Major, 8",
    city: "Santa Pola",
    region: "Alicante",
    postalCode: "03130",
    country: "ES",
    weekdayOpen: "09:30",
    weekdayClose: "20:00",
    saturdayOpen: "10:00",
    saturdayClose: "14:00",
    facebook: "https://www.facebook.com/profile.php?id=61576877656154",
    instagram: "https://www.instagram.com/lash_nails.santapola",
  });
  console.log("  Created siteSettings");
}

// ─── Home Page ─────────────────────────────────────────────────────

async function seedHomePage() {
  console.log("\n🏠 Seeding homePage...");
  await client.createOrReplace({
    _id: "homePage",
    _type: "homePage",

    // Hero section
    heroTitle: {
      es: "Salón de Belleza en Santa Pola",
      en: "Beauty Salon in Santa Pola",
      ru: "Салон красоты в Санта-Пола",
    },
    heroSubtitle: {
      es: "Expertos en extensiones de pestañas, diseño de uñas y tratamientos de belleza",
      en: "Experts in lash extensions, nail design and beauty treatments",
      ru: "Эксперты в наращивании ресниц, дизайне ногтей и косметических процедурах",
    },
    heroDescription: {
      es: "Descubre la mejor experiencia de belleza con nuestros servicios profesionales. Calidad, higiene y atención personalizada en cada visita.",
      en: "Discover the best beauty experience with our professional services. Quality, hygiene and personalized attention in every visit.",
      ru: "Откройте для себя лучший опыт красоты с нашими профессиональными услугами. Качество, гигиена и индивидуальный подход в каждом визите.",
    },
    heroCtaPrimary: {
      es: "Reservar por WhatsApp",
      en: "Book via WhatsApp",
      ru: "Записаться через WhatsApp",
    },
    heroCtaMessage: {
      es: "Hola, me gustaría reservar una cita.",
      en: "Hello, I would like to book an appointment.",
      ru: "Здравствуйте, я хочу записаться на прием.",
    },
    heroCategoryLashes: { es: "Pestañas", en: "Lashes", ru: "Ресницы" },
    heroCategoryManicure: { es: "Manicura", en: "Manicure", ru: "Маникюр" },
    heroCategoryPedicure: { es: "Pedicura", en: "Pedicure", ru: "Педикюр" },
    heroCategoryBrows: { es: "Cejas", en: "Brows", ru: "Брови" },

    // Featured services section
    featuredTitle: {
      es: "Servicios Más Vendidos",
      en: "Best Selling Services",
      ru: "Самые Популярные Услуги",
    },
    featuredSeeMore: { es: "Ver Más", en: "See More", ru: "Показать Еще" },
    featuredFromLabel: { es: "desde", en: "from", ru: "от" },

    // Reviews section
    reviewsTitle: {
      es: "Todas Las Reseñas Felices",
      en: "All The Happy Reviews",
      ru: "Все Счастливые Отзывы",
    },
    reviewsDescription: {
      es: "Lee lo que nuestros clientes satisfechos dicen sobre sus transformaciones de belleza y experiencias en nuestro salón.",
      en: "Read what our satisfied clients have to say about their beauty transformations and experiences at our salon.",
      ru: "Читайте, что наши довольные клиенты говорят о своих преображениях и впечатлениях в нашем салоне.",
    },
    reviewsClientLabel: {
      es: "Nuestro Cliente",
      en: "Our Client",
      ru: "Наш Клиент",
    },

    // FAQ section
    faqHeading: {
      es: "Preguntas Frecuentes",
      en: "Frequently Asked Questions",
      ru: "Часто Задаваемые Вопросы",
    },
    faqDescription: {
      es: "¿Tienes dudas? Aquí encontrarás respuestas a las preguntas más comunes sobre nuestros servicios, ubicación y cómo reservar tu cita.",
      en: "Have questions? Here you'll find answers to the most common questions about our services, location, and how to book your appointment.",
      ru: "Есть вопросы? Здесь вы найдете ответы на самые распространенные вопросы о наших услугах, местоположении и как записаться на прием.",
    },

    // CTA section
    ctaHeading: {
      es: "¿Lista para tu transformación?",
      en: "Ready for your transformation?",
      ru: "Готовы к преображению?",
    },
    ctaSubtitle: {
      es: "Reserva tu cita hoy y descubre tu mejor versión",
      en: "Book your appointment today and discover your best version",
      ru: "Запишитесь на прием сегодня и откройте для себя лучшую версию себя",
    },
    ctaButton: {
      es: "Reservar por WhatsApp",
      en: "Book via WhatsApp",
      ru: "Записаться через WhatsApp",
    },
    ctaSecondary: {
      es: "Llamar ahora",
      en: "Call now",
      ru: "Позвонить сейчас",
    },
    ctaMessage: {
      es: "Hola, me gustaría reservar una cita.",
      en: "Hello, I would like to book an appointment.",
      ru: "Здравствуйте, я хочу записаться на прием.",
    },

    // SEO
    seo: {
      title: {
        es: "Salón de Belleza en Santa Pola | Lash & Nails",
        en: "Beauty Salon in Santa Pola | Lash & Nails",
        ru: "Салон красоты в Санта-Пола | Lash & Nails",
      },
      description: {
        es: "Salón de belleza profesional en Santa Pola - Extensiones de pestañas, diseño de uñas y tratamientos de belleza. Reserva tu cita por WhatsApp.",
        en: "Professional beauty salon in Santa Pola - Lash extensions, nail design and beauty treatments. Book your appointment via WhatsApp.",
        ru: "Профессиональный салон красоты в Санта-Пола - Наращивание ресниц, дизайн ногтей и косметические процедуры. Запишитесь через WhatsApp.",
      },
    },
  });
  console.log("  Created homePage");
}

// ─── About Page ────────────────────────────────────────────────────

async function seedAboutPage() {
  console.log("\n📖 Seeding aboutPage...");
  await client.createOrReplace({
    _id: "aboutPage",
    _type: "aboutPage",
    title: {
      es: "Sobre Nosotros",
      en: "About Us",
      ru: "О нас",
    },
    subtitle: {
      es: "Tu destino de belleza en Santa Pola",
      en: "Your beauty destination in Santa Pola",
      ru: "Ваш салон красоты в Санта-Пола",
    },
    storyHeading: {
      es: "Nuestra Historia",
      en: "Our Story",
      ru: "Наша история",
    },
    storyParagraphs: [
      {
        _type: "paragraph",
        _key: key(),
        text: {
          es: "Lash & Nails nació de una pasión por hacer que cada persona se sienta hermosa y segura de sí misma. Ubicados en el corazón de Santa Pola, hemos creado un espacio donde la belleza se encuentra con la profesionalidad y el cuidado personalizado.",
          en: "Lash & Nails was born from a passion for making every person feel beautiful and confident. Located in the heart of Santa Pola, we've created a space where beauty meets professionalism and personalized care.",
          ru: "Lash & Nails родился из страсти делать каждого человека красивым и уверенным в себе. Расположенный в самом центре Санта-Пола, мы создали пространство, где красота сочетается с профессионализмом и индивидуальным подходом.",
        },
      },
      {
        _type: "paragraph",
        _key: key(),
        text: {
          es: "Con años de experiencia en el sector de la belleza, nuestra misión es ofrecer tratamientos de alta calidad que realcen tu belleza natural. Nos especializamos en extensiones de pestañas, diseño de uñas y tratamientos faciales, utilizando siempre productos premium y técnicas avanzadas.",
          en: "With years of experience in the beauty industry, our mission is to offer high-quality treatments that enhance your natural beauty. We specialize in lash extensions, nail design, and facial treatments, always using premium products and advanced techniques.",
          ru: "С многолетним опытом работы в индустрии красоты, наша миссия - предлагать высококачественные процедуры, которые подчеркивают вашу естественную красоту. Мы специализируемся на наращивании ресниц, дизайне ногтей и процедурах для лица, всегда используя премиальные продукты и передовые техники.",
        },
      },
      {
        _type: "paragraph",
        _key: key(),
        text: {
          es: "Cada cliente es único para nosotros. Por eso, dedicamos tiempo a entender tus necesidades y deseos, creando un plan de belleza personalizado que se adapte perfectamente a ti. Tu satisfacción y confianza son nuestra mayor recompensa.",
          en: "Every client is unique to us. That's why we take the time to understand your needs and desires, creating a personalized beauty plan that fits you perfectly. Your satisfaction and confidence are our greatest reward.",
          ru: "Каждый клиент уникален для нас. Поэтому мы уделяем время тому, чтобы понять ваши потребности и желания, создавая персонализированный план красоты, который идеально вам подходит. Ваше удовлетворение и уверенность - наша главная награда.",
        },
      },
    ],
    philosophyHeading: {
      es: "Nuestra Filosofía",
      en: "Our Philosophy",
      ru: "Наша философия",
    },
    philosophyDescription: {
      es: "Creemos que la belleza es un arte que combina técnica, pasión y atención al detalle. No solo ofrecemos servicios de belleza, creamos experiencias que te hacen sentir especial. Cada tratamiento es una oportunidad para mimarte y resaltar tu belleza única.",
      en: "We believe that beauty is an art that combines technique, passion, and attention to detail. We don't just offer beauty services, we create experiences that make you feel special. Every treatment is an opportunity to pamper you and highlight your unique beauty.",
      ru: "Мы верим, что красота - это искусство, которое сочетает технику, страсть и внимание к деталям. Мы не просто предлагаем услуги красоты, мы создаем впечатления, которые заставляют вас чувствовать себя особенными. Каждая процедура - это возможность побаловать вас и подчеркнуть вашу уникальную красоту.",
    },
    expertiseHeading: {
      es: "Nuestra Experiencia",
      en: "Our Expertise",
      ru: "Наш опыт",
    },
    expertiseItems: [
      {
        _type: "expertiseItem",
        _key: key(),
        icon: "🎓",
        title: {
          es: "Profesionales Certificados",
          en: "Certified Professionals",
          ru: "Сертифицированные специалисты",
        },
        description: {
          es: "Formación continua en las últimas técnicas y tendencias de belleza",
          en: "Continuous training in the latest beauty techniques and trends",
          ru: "Постоянное обучение новейшим техникам и трендам красоты",
        },
      },
      {
        _type: "expertiseItem",
        _key: key(),
        icon: "⏰",
        title: { es: "Años de Experiencia", en: "Years of Experience", ru: "Годы опыта" },
        description: {
          es: "Miles de clientes satisfechas que confían en nuestros servicios",
          en: "Thousands of satisfied clients who trust our services",
          ru: "Тысячи довольных клиентов, которые доверяют нашим услугам",
        },
      },
      {
        _type: "expertiseItem",
        _key: key(),
        icon: "🌟",
        title: { es: "Productos Premium", en: "Premium Products", ru: "Премиальные продукты" },
        description: {
          es: "Solo utilizamos productos de alta calidad, seguros y duraderos",
          en: "We only use high-quality, safe, and long-lasting products",
          ru: "Мы используем только высококачественные, безопасные и долговечные продукты",
        },
      },
    ],
    valuesHeading: {
      es: "Nuestros Valores",
      en: "Our Values",
      ru: "Наши ценности",
    },
    valuesItems: [
      {
        _type: "valueItem",
        _key: key(),
        title: { es: "Excelencia", en: "Excellence", ru: "Превосходство" },
        description: {
          es: "Nos esforzamos por superar tus expectativas en cada visita, ofreciendo resultados impecables.",
          en: "We strive to exceed your expectations on every visit, delivering impeccable results.",
          ru: "Мы стремимся превзойти ваши ожидания при каждом посещении, обеспечивая безупречные результаты.",
        },
      },
      {
        _type: "valueItem",
        _key: key(),
        title: {
          es: "Atención Personalizada",
          en: "Personalized Attention",
          ru: "Индивидуальный подход",
        },
        description: {
          es: "Cada cliente recibe un trato único y cuidadoso, adaptado a sus necesidades específicas.",
          en: "Every client receives unique and careful treatment, tailored to their specific needs.",
          ru: "Каждый клиент получает уникальное и внимательное обслуживание, адаптированное к его конкретным потребностям.",
        },
      },
      {
        _type: "valueItem",
        _key: key(),
        title: { es: "Ambiente Acogedor", en: "Welcoming Environment", ru: "Уютная атмосфера" },
        description: {
          es: "Hemos creado un espacio relajante donde puedes desconectar y disfrutar de tu momento de belleza.",
          en: "We've created a relaxing space where you can disconnect and enjoy your beauty moment.",
          ru: "Мы создали расслабляющее пространство, где вы можете отключиться и насладиться моментом красоты.",
        },
      },
      {
        _type: "valueItem",
        _key: key(),
        title: {
          es: "Confianza y Transparencia",
          en: "Trust and Transparency",
          ru: "Доверие и прозрачность",
        },
        description: {
          es: "Te asesoramos honestamente sobre los mejores tratamientos para ti, sin sorpresas.",
          en: "We honestly advise you on the best treatments for you, with no surprises.",
          ru: "Мы честно консультируем вас о лучших процедурах для вас, без сюрпризов.",
        },
      },
    ],
    cta: {
      heading: {
        es: "¿Lista para conocernos?",
        en: "Ready to meet us?",
        ru: "Готовы познакомиться с нами?",
      },
      subtitle: {
        es: "Reserva tu primera cita y descubre la diferencia",
        en: "Book your first appointment and discover the difference",
        ru: "Запишитесь на первый прием и почувствуйте разницу",
      },
      button: {
        es: "Reservar por WhatsApp",
        en: "Book via WhatsApp",
        ru: "Записаться через WhatsApp",
      },
      services: { es: "Ver Servicios", en: "View Services", ru: "Посмотреть услуги" },
      message: {
        es: "Hola, me gustaría reservar una cita.",
        en: "Hello, I would like to book an appointment.",
        ru: "Здравствуйте, я хочу записаться на прием.",
      },
    },
    seo: {
      title: {
        es: "Sobre Nosotros | Lash & Nails Santa Pola",
        en: "About Us | Lash & Nails Santa Pola",
        ru: "О нас | Lash & Nails Santa Pola",
      },
      description: {
        es: "Conoce nuestro salón de belleza en Santa Pola - Profesionales dedicados a tu belleza y bienestar",
        en: "Learn about our beauty salon in Santa Pola - Professionals dedicated to your beauty and wellness",
        ru: "Узнайте о нашем салоне красоты в Санта-Пола - Профессионалы, посвятившие себя вашей красоте и благополучию",
      },
    },
  });
  console.log("  Created aboutPage");
}

// ─── Services Overview Page ────────────────────────────────────────

async function seedServicesOverviewPage() {
  console.log("\n💅 Seeding servicesOverviewPage...");
  await client.createOrReplace({
    _id: "servicesOverviewPage",
    _type: "servicesOverviewPage",
    title: { es: "Nuestros Servicios", en: "Our Services", ru: "Наши услуги" },
    subtitle: {
      es: "Servicios profesionales de belleza en Santa Pola - Calidad, experiencia y atención personalizada",
      en: "Professional beauty services in Santa Pola - Quality, experience and personalized attention",
      ru: "Профессиональные услуги красоты в Санта-Пола - Качество, опыт и индивидуальный подход",
    },
    serviceCards: [
      {
        _type: "serviceCard",
        _key: key(),
        slug: "lash-extensions",
        title: { es: "Extensiones de Pestañas", en: "Lash Extensions", ru: "Наращивание ресниц" },
        description: {
          es: "Realza tu mirada con extensiones de pestañas profesionales. Técnicas avanzadas para un look natural y duradero.",
          en: "Enhance your look with professional lash extensions. Advanced techniques for a natural and long-lasting look.",
          ru: "Подчеркните свой взгляд профессиональным наращиванием ресниц. Передовые техники для естественного и долговечного результата.",
        },
        features: [
          {
            _type: "feature",
            _key: key(),
            text: {
              es: "Efecto volumen o natural",
              en: "Volume or natural effect",
              ru: "Объемный или натуральный эффект",
            },
          },
          {
            _type: "feature",
            _key: key(),
            text: {
              es: "Pestañas de alta calidad",
              en: "High-quality lashes",
              ru: "Высококачественные ресницы",
            },
          },
          {
            _type: "feature",
            _key: key(),
            text: {
              es: "Aplicación personalizada",
              en: "Personalized application",
              ru: "Индивидуальное нанесение",
            },
          },
          {
            _type: "feature",
            _key: key(),
            text: { es: "Duración 3-4 semanas", en: "Lasts 3-4 weeks", ru: "Держится 3-4 недели" },
          },
        ],
      },
      {
        _type: "serviceCard",
        _key: key(),
        slug: "manicure",
        title: { es: "Manicura", en: "Manicure", ru: "Маникюр" },
        description: {
          es: "Servicios profesionales de manicura con productos premium para uñas bellas y saludables.",
          en: "Professional manicure services with premium products for beautiful, healthy nails.",
          ru: "Профессиональные услуги маникюра с премиальными продуктами для красивых и здоровых ногтей.",
        },
        features: [
          {
            _type: "feature",
            _key: key(),
            text: {
              es: "Manicura higiénica y con gel",
              en: "Hygienic and gel manicure",
              ru: "Гигиенический и гель-маникюр",
            },
          },
          {
            _type: "feature",
            _key: key(),
            text: {
              es: "Diseño único personalizado - flores, geometría, brillos y más",
              en: "Unique custom design - flowers, geometry, glitter and more",
              ru: "Уникальный персональный дизайн - цветы, геометрия, блестки и многое другое",
            },
          },
          {
            _type: "feature",
            _key: key(),
            text: {
              es: "Fortalecimiento y extensión de uñas con gel",
              en: "Gel nail strengthening and extension",
              ru: "Укрепление и наращивание ногтей гелем",
            },
          },
          {
            _type: "feature",
            _key: key(),
            text: {
              es: "Cosméticos alemanes Baehr e instrumentos esterilizados",
              en: "German Baehr cosmetics and sterilized instruments",
              ru: "Немецкая косметика Baehr и стерилизованные инструменты",
            },
          },
        ],
      },
      {
        _type: "serviceCard",
        _key: key(),
        slug: "pedicure",
        title: { es: "Pedicura", en: "Pedicure", ru: "Педикюр" },
        description: {
          es: "Servicios profesionales de pedicura para pies saludables y hermosos.",
          en: "Professional pedicure services for healthy, beautiful feet.",
          ru: "Профессиональные услуги педикюра для здоровых и красивых ног.",
        },
        features: [
          {
            _type: "feature",
            _key: key(),
            text: {
              es: "Tratamiento completo de dedos y planta del pie",
              en: "Complete toe and foot sole treatment",
              ru: "Полная обработка пальцев и стопы",
            },
          },
          {
            _type: "feature",
            _key: key(),
            text: {
              es: "Pedicura con esmaltado gel",
              en: "Pedicure with gel polish",
              ru: "Педикюр с гель-лаком",
            },
          },
          {
            _type: "feature",
            _key: key(),
            text: {
              es: "Cosméticos alemanes Pedibaehr",
              en: "German Pedibaehr cosmetics",
              ru: "Немецкая косметика Pedibaehr",
            },
          },
          {
            _type: "feature",
            _key: key(),
            text: {
              es: "Todos los instrumentos esterilizados",
              en: "All instruments sterilized",
              ru: "Все инструменты стерилизованы",
            },
          },
        ],
      },
      {
        _type: "serviceCard",
        _key: key(),
        slug: "brows",
        title: { es: "Cejas", en: "Brows", ru: "Брови" },
        description: {
          es: "Diseño profesional de cejas, tinte y laminación para cejas perfectas.",
          en: "Professional brow design, tinting and lamination for perfect brows.",
          ru: "Профессиональный дизайн бровей, окрашивание и ламинирование для идеальных бровей.",
        },
        features: [
          {
            _type: "feature",
            _key: key(),
            text: { es: "Tinte de cejas", en: "Brow tinting", ru: "Окрашивание бровей" },
          },
          {
            _type: "feature",
            _key: key(),
            text: {
              es: "Tinte + corrección",
              en: "Tinting + correction",
              ru: "Окрашивание + коррекция",
            },
          },
          {
            _type: "feature",
            _key: key(),
            text: { es: "Laminación de cejas", en: "Brow lamination", ru: "Ламинирование бровей" },
          },
          {
            _type: "feature",
            _key: key(),
            text: { es: "Micropigmentación", en: "Micropigmentation", ru: "Микропигментирование" },
          },
        ],
      },
    ],
    cta: {
      heading: { es: "¿Lista para reservar?", en: "Ready to book?", ru: "Готовы записаться?" },
      subtitle: {
        es: "Reserva tu cita hoy y déjanos cuidar de tu belleza",
        en: "Book your appointment today and let us take care of your beauty",
        ru: "Запишитесь сегодня и позвольте нам позаботиться о вашей красоте",
      },
      button: {
        es: "Reservar por WhatsApp",
        en: "Book via WhatsApp",
        ru: "Записаться через WhatsApp",
      },
      message: {
        es: "Hola, me gustaría reservar una cita para un servicio.",
        en: "Hello, I would like to book an appointment for a service.",
        ru: "Здравствуйте, я хочу записаться на процедуру.",
      },
    },
    seo: {
      title: {
        es: "Nuestros Servicios | Lash & Nails Santa Pola",
        en: "Our Services | Lash & Nails Santa Pola",
        ru: "Наши услуги | Lash & Nails Santa Pola",
      },
      description: {
        es: "Descubre nuestros servicios de belleza: extensiones de pestañas, diseño de uñas y tratamientos de belleza en Santa Pola",
        en: "Discover our beauty services: lash extensions, nail design and beauty treatments in Santa Pola",
        ru: "Откройте для себя наши услуги красоты: наращивание ресниц, дизайн ногтей и косметические процедуры в Санта-Пола",
      },
    },
  });
  console.log("  Created servicesOverviewPage");
}

// ─── Pricing Page ──────────────────────────────────────────────────

async function seedPricingPage() {
  console.log("\n💰 Seeding pricingPage...");

  const svc = (name: Record<string, string>, price: string, note?: Record<string, string>) => ({
    _type: "pricingService" as const,
    _key: key(),
    name,
    ...(note ? { note } : {}),
    price,
  });

  await client.createOrReplace({
    _id: "pricingPage",
    _type: "pricingPage",
    title: { es: "Precios", en: "Pricing", ru: "Цены" },
    subtitle: {
      es: "Descubre nuestros servicios de belleza y precios competitivos",
      en: "Discover our beauty services and competitive pricing",
      ru: "Откройте для себя наши услуги красоты и конкурентные цены",
    },
    pricingTitle: {
      es: "Nuestros Servicios y Precios",
      en: "Our Services and Pricing",
      ru: "Наши услуги и цены",
    },
    categories: [
      {
        _type: "pricingCategory",
        _key: key(),
        name: { es: "Pestañas", en: "Lashes", ru: "Ресницы" },
        services: [
          svc({ es: "Tinte de pestañas", en: "Lash tinting", ru: "Окрашивание ресниц" }, "10€"),
          svc(
            { es: "Laminación de pestañas", en: "Lash lamination", ru: "Ламинирование ресниц" },
            "35€",
            {
              es: "(laminación + tinte)",
              en: "(lamination + tinting)",
              ru: "(ламинирование + окрашивание)",
            },
          ),
          svc(
            {
              es: "Combo: laminación de pestañas + laminación de cejas",
              en: "Combo: lash lamination + brow lamination",
              ru: "Комбо: ламинирование ресниц + ламинирование бровей",
            },
            "60€",
            {
              es: "(corrección + tinte + laminación)",
              en: "(correction + tinting + lamination)",
              ru: "(коррекция + окрашивание + ламинирование)",
            },
          ),
        ],
      },
      {
        _type: "pricingCategory",
        _key: key(),
        name: { es: "Extensiones", en: "Extensions", ru: "Наращивание" },
        slug: "lash-extensions",
        cta: {
          es: "Extensiones profesionales de pestañas desde 35€. Descubre más sobre nuestros servicios de extensiones.",
          en: "Professional lash extensions from €35. Discover more about our extension services.",
          ru: "Профессиональное наращивание ресниц от 35€. Узнайте больше о наших услугах наращивания.",
        },
        services: [
          svc({ es: "Clásica", en: "Classic", ru: "Классика" }, "35€", {
            es: "(1.5-2 horas)",
            en: "(1.5-2 hours)",
            ru: "(1,5-2 часа)",
          }),
          svc({ es: "2D", en: "2D", ru: "2D" }, "40€"),
          svc({ es: "3D", en: "3D", ru: "3D" }, "45€"),
          svc({ es: "Efectos", en: "Effects", ru: "Эффекты" }, "+5€", {
            es: "(efecto mojado, rayos, efecto L, pestañas de colores)",
            en: "(wet effect, rays, L-effect, colored lashes)",
            ru: "(мокрый эффект, лучики, L-изгиб, цветные ресницы)",
          }),
          svc({ es: "Retirada de pestañas", en: "Lash removal", ru: "Снятие ресниц" }, "+5€", {
            es: "(si no se hace nueva extensión)",
            en: "(if new extension is not done)",
            ru: "(если не делается новое наращивание)",
          }),
        ],
      },
      {
        _type: "pricingCategory",
        _key: key(),
        name: { es: "Cejas", en: "Brows", ru: "Брови" },
        slug: "brows",
        cta: {
          es: "Diseño profesional de cejas desde 10€. Laminación, tinte y micropigmentación disponibles.",
          en: "Professional brow design from €10. Lamination, tinting and micropigmentation available.",
          ru: "Профессиональный дизайн бровей от 10€. Доступны ламинирование, окрашивание и микропигментация.",
        },
        services: [
          svc({ es: "Tinte de cejas", en: "Brow tinting", ru: "Окрашивание бровей" }, "10€"),
          svc(
            {
              es: "Tinte + corrección de cejas",
              en: "Tinting + brow correction",
              ru: "Окрашивание + коррекция бровей",
            },
            "15€",
          ),
          svc(
            { es: "Laminación de cejas", en: "Brow lamination", ru: "Ламинирование бровей" },
            "35€",
            {
              es: "(corrección + tinte)",
              en: "(correction + tinting)",
              ru: "(коррекция + окрашивание)",
            },
          ),
        ],
      },
      {
        _type: "pricingCategory",
        _key: key(),
        name: { es: "Micropigmentación", en: "Micropigmentation", ru: "Микропигментация" },
        services: [
          svc(
            {
              es: "Micropigmentación de cejas",
              en: "Brow micropigmentation",
              ru: "Микропигментация бровей",
            },
            "120€",
          ),
          svc(
            {
              es: "Micropigmentación de labios",
              en: "Lip micropigmentation",
              ru: "Микропигментация губ",
            },
            "120€",
          ),
          svc({ es: "Entrelíneas", en: "Interlash line", ru: "Межресничка" }, "100€"),
        ],
      },
      {
        _type: "pricingCategory",
        _key: key(),
        name: { es: "Manicura", en: "Manicure", ru: "Маникюр" },
        slug: "manicure",
        cta: {
          es: "Manicura profesional desde 20€. Gel, extensión y diseños personalizados con cosméticos alemanes Baehr.",
          en: "Professional manicure from €20. Gel, extension and custom designs with German Baehr cosmetics.",
          ru: "Профессиональный маникюр от 20€. Гель, наращивание и индивидуальные дизайны с немецкой косметикой Baehr.",
        },
        services: [
          svc(
            {
              es: "Manicura higiénica mujer",
              en: "Hygienic manicure (women)",
              ru: "Гигиенический маникюр женский",
            },
            "20€",
          ),
          svc({ es: "Manicura masculina", en: "Men's manicure", ru: "Мужской маникюр" }, "25€"),
          svc(
            {
              es: "Manicura con esmaltado",
              en: "Manicure with coating",
              ru: "Маникюр с покрытием",
            },
            "35€",
          ),
          svc({ es: "Manicura francesa", en: "French manicure", ru: "Французский маникюр" }, "45€"),
          svc(
            {
              es: "Reparación de uña rota",
              en: "Broken nail repair",
              ru: "Ремонт сломанного ногтя",
            },
            "2€",
          ),
          svc(
            { es: "Extensión con gel", en: "Gel extension", ru: "Наращивание гелевыми типсами" },
            "60€",
          ),
          svc(
            { es: "Retirada de acrílico", en: "Acrylic removal", ru: "Снятие акрилового покрытия" },
            "5€",
          ),
          svc({ es: "Spa cuidado de manos", en: "Spa hand care", ru: "Спа уход за руками" }, "15€"),
        ],
      },
      {
        _type: "pricingCategory",
        _key: key(),
        name: { es: "Pedicura", en: "Pedicure", ru: "Педикюр" },
        slug: "pedicure",
        cta: {
          es: "Pedicura profesional desde 45€. Tratamiento completo con cosméticos alemanes Pedibaehr.",
          en: "Professional pedicure from €45. Complete treatment with German Pedibaehr cosmetics.",
          ru: "Профессиональный педикюр от 45€. Полный уход с немецкой косметикой Pedibaehr.",
        },
        services: [
          svc(
            {
              es: "Pedicura higiénica mujer",
              en: "Hygienic pedicure (women)",
              ru: "Гигиенический педикюр женский",
            },
            "45€",
          ),
          svc(
            {
              es: "Pedicura con esmaltado",
              en: "Pedicure with coating",
              ru: "Педикюр с покрытием",
            },
            "55€",
          ),
          svc({ es: "Pedicura masculina", en: "Men's pedicure", ru: "Мужской педикюр" }, "50€"),
          svc({ es: "Spa cuidado de pies", en: "Spa foot care", ru: "Спа уход за ногами" }, "20€"),
        ],
      },
      {
        _type: "pricingCategory",
        _key: key(),
        name: { es: "Podología", en: "Podology", ru: "Подология" },
        services: [
          svc(
            {
              es: "Eliminación de uña encarnada",
              en: "Ingrown nail removal",
              ru: "Удаление вросшего ногтя",
            },
            "desde 10€",
          ),
          svc(
            {
              es: "Tratamiento de hiperqueratosis",
              en: "Hyperkeratosis treatment",
              ru: "Обработка гиперкератоза",
            },
            "desde 10€",
          ),
          svc(
            {
              es: "Tratamiento de onicomicosis",
              en: "Onychomycosis treatment",
              ru: "Обработка онихомикоза",
            },
            "desde 10€",
          ),
          svc(
            { es: "Tratamiento de callos", en: "Callus treatment", ru: "Обработка омозолелостей" },
            "desde 5€",
          ),
          svc(
            {
              es: "Eliminación de callo plantar",
              en: "Plantar callus removal",
              ru: "Удаление стержневой мозоли",
            },
            "10€",
          ),
          svc(
            {
              es: "Prótesis de uña",
              en: "Nail prosthesis",
              ru: "Протезирование ногтевой пластины",
            },
            "desde 5€",
          ),
          svc(
            { es: "Tratamiento de grietas", en: "Crack treatment", ru: "Обработка трещин" },
            "10€",
          ),
          svc(
            {
              es: "Instalación de hilo de titanio",
              en: "Titanium thread installation",
              ru: "Установка титановой нити",
            },
            "35€",
          ),
        ],
      },
    ],
    seo: {
      title: {
        es: "Precios | Lash & Nails Santa Pola",
        en: "Pricing | Lash & Nails Santa Pola",
        ru: "Цены | Lash & Nails Santa Pola",
      },
      description: {
        es: "Precios de servicios de belleza en Santa Pola - Extensiones de pestañas, manicura, pedicura, micropigmentación y más",
        en: "Beauty services pricing in Santa Pola - Lash extensions, manicure, pedicure, micropigmentation and more",
        ru: "Цены на услуги салона красоты в Санта-Пола - Наращивание ресниц, маникюр, педикюр, микропигментация и многое другое",
      },
    },
  });
  console.log("  Created pricingPage");
}

// ─── Booking Page ──────────────────────────────────────────────────

async function seedBookingPage() {
  console.log("\n📅 Seeding bookingPage...");
  await client.createOrReplace({
    _id: "bookingPage",
    _type: "bookingPage",
    title: { es: "Reservar Cita", en: "Book Appointment", ru: "Записаться на прием" },
    subtitle: {
      es: "Reserva tu cita por WhatsApp o teléfono",
      en: "Book your appointment via WhatsApp or phone",
      ru: "Запишитесь на прием через WhatsApp или по телефону",
    },
    methodsHeading: {
      es: "Elige tu método preferido",
      en: "Choose your preferred method",
      ru: "Выберите удобный способ",
    },
    methods: [
      {
        _type: "bookingMethod",
        _key: key(),
        key: "whatsapp",
        title: { es: "WhatsApp", en: "WhatsApp", ru: "WhatsApp" },
        description: {
          es: "Envíanos un mensaje y te responderemos lo antes posible",
          en: "Send us a message and we'll get back to you as soon as possible",
          ru: "Отправьте нам сообщение, и мы ответим как можно скорее",
        },
        cta: {
          es: "Reservar por WhatsApp",
          en: "Book via WhatsApp",
          ru: "Записаться через WhatsApp",
        },
        message: {
          es: "Hola, me gustaría reservar una cita.",
          en: "Hello, I would like to book an appointment.",
          ru: "Здравствуйте, я хочу записаться на прием.",
        },
      },
      {
        _type: "bookingMethod",
        _key: key(),
        key: "phone",
        title: { es: "Teléfono", en: "Phone", ru: "Телефон" },
        description: {
          es: "Llámanos directamente para reservar tu cita",
          en: "Call us directly to book your appointment",
          ru: "Позвоните нам напрямую, чтобы записаться на прием",
        },
        cta: { es: "Llamar ahora", en: "Call now", ru: "Позвонить сейчас" },
      },
    ],
    infoHeading: {
      es: "Información útil",
      en: "Useful information",
      ru: "Полезная информация",
    },
    infoItems: [
      {
        _type: "infoItem",
        _key: key(),
        key: "hours",
        label: { es: "Horario", en: "Opening hours", ru: "Часы работы" },
        value: {
          es: "Lunes a Viernes: 09:30 - 20:00\nSábado: 10:00 - 14:00",
          en: "Monday to Friday: 09:30 - 20:00\nSaturday: 10:00 - 14:00",
          ru: "Понедельник - Пятница: 09:30 - 20:00\nСуббота: 10:00 - 14:00",
        },
      },
      {
        _type: "infoItem",
        _key: key(),
        key: "services",
        label: { es: "Servicios y precios", en: "Services and pricing", ru: "Услуги и цены" },
        linkText: {
          es: "Ver todos los servicios",
          en: "View all services",
          ru: "Посмотреть все услуги",
        },
        linkUrl: "/pricing",
      },
      {
        _type: "infoItem",
        _key: key(),
        key: "location",
        label: { es: "Ubicación", en: "Location", ru: "Расположение" },
        value: {
          es: "Carrer Major, 8\n03130 Santa Pola",
          en: "Carrer Major, 8\n03130 Santa Pola",
          ru: "Carrer Major, 8\n03130 Santa Pola",
        },
      },
    ],
    seo: {
      title: {
        es: "Reservar Cita | Lash & Nails Santa Pola",
        en: "Book Appointment | Lash & Nails Santa Pola",
        ru: "Записаться на прием | Lash & Nails Santa Pola",
      },
      description: {
        es: "Reserva tu cita en nuestro salón de belleza en Santa Pola - WhatsApp o llamada telefónica",
        en: "Book your appointment at our beauty salon in Santa Pola - WhatsApp or phone call",
        ru: "Запишитесь на прием в наш салон красоты в Санта-Пола - WhatsApp или звонок",
      },
    },
  });
  console.log("  Created bookingPage");
}

// ─── Contact Page ──────────────────────────────────────────────────

async function seedContactPage() {
  console.log("\n📞 Seeding contactPage...");
  await client.createOrReplace({
    _id: "contactPage",
    _type: "contactPage",
    title: { es: "Contacto", en: "Contact", ru: "Контакты" },
    subtitle: {
      es: "Visítanos o contáctanos por teléfono, WhatsApp o Telegram",
      en: "Visit us or contact us by phone, WhatsApp or Telegram",
      ru: "Посетите нас или свяжитесь по телефону, WhatsApp или Telegram",
    },
    contactCards: [
      {
        _type: "contactCard",
        _key: key(),
        key: "phone",
        title: { es: "Llámanos", en: "Call Us", ru: "Позвоните Нам" },
      },
      {
        _type: "contactCard",
        _key: key(),
        key: "email",
        title: { es: "Envíanos un Email", en: "Send Us Email", ru: "Напишите Email" },
      },
      {
        _type: "contactCard",
        _key: key(),
        key: "location",
        title: { es: "Ubicación", en: "Location", ru: "Расположение" },
      },
      {
        _type: "contactCard",
        _key: key(),
        key: "hours",
        title: { es: "Horario", en: "Work Hours", ru: "Часы Работы" },
        value: {
          es: "Lun - Vie: 09:30 - 20:00\nSáb: 10:00 - 14:00",
          en: "Mon - Fri: 09:30 - 20:00\nSat: 10:00 - 14:00",
          ru: "Пн - Пт: 09:30 - 20:00\nСб: 10:00 - 14:00",
        },
      },
    ],
    faqs: [
      {
        _type: "contactFaq",
        _key: key(),
        question: {
          es: "¿Dónde está ubicado Lash & Nails Santa Pola?",
          en: "Where is Lash & Nails Santa Pola located?",
          ru: "Где находится Lash & Nails Santa Pola?",
        },
        answer: {
          es: "Estamos ubicados en Carrer Major, 8, 03130 Santa Pola, Alicante, España.",
          en: "We are located at Carrer Major, 8, 03130 Santa Pola, Alicante, Spain.",
          ru: "Мы находимся по адресу Carrer Major, 8, 03130 Santa Pola, Alicante, Испания.",
        },
      },
      {
        _type: "contactFaq",
        _key: key(),
        question: {
          es: "¿Cuál es el horario de atención?",
          en: "What are your opening hours?",
          ru: "Какие у вас часы работы?",
        },
        answer: {
          es: "Estamos abiertos de lunes a viernes de 09:30 a 20:00 y los sábados de 10:00 a 14:00. Cerramos los domingos.",
          en: "We are open Monday to Friday from 09:30 to 20:00 and Saturday from 10:00 to 14:00. We are closed on Sundays.",
          ru: "Мы работаем с понедельника по пятницу с 09:30 до 20:00 и в субботу с 10:00 до 14:00. Воскресенье - выходной.",
        },
      },
      {
        _type: "contactFaq",
        _key: key(),
        question: {
          es: "¿Cómo puedo hacer una cita?",
          en: "How can I make an appointment?",
          ru: "Как записаться на прием?",
        },
        answer: {
          es: "Puedes llamarnos al +34604316778, enviarnos un mensaje por WhatsApp o contactarnos por Telegram (Irina_STS).",
          en: "You can call us at +34604316778, send us a WhatsApp message, or contact us on Telegram (Irina_STS).",
          ru: "Вы можете позвонить нам по телефону +34604316778, отправить сообщение в WhatsApp или связаться через Telegram (Irina_STS).",
        },
      },
      {
        _type: "contactFaq",
        _key: key(),
        question: {
          es: "¿A qué zonas dan servicio?",
          en: "What areas do you serve?",
          ru: "Какие районы вы обслуживаете?",
        },
        answer: {
          es: "Damos servicio a Santa Pola, Elche, Guardamar del Segura, Alicante y zonas cercanas.",
          en: "We serve Santa Pola, Elche, Guardamar del Segura, Alicante, and surrounding areas.",
          ru: "Мы обслуживаем Santa Pola, Elche, Guardamar del Segura, Alicante и прилегающие районы.",
        },
      },
    ],
    seo: {
      title: {
        es: "Contacto | Lash & Nails Santa Pola",
        en: "Contact | Lash & Nails Santa Pola",
        ru: "Контакты | Lash & Nails Santa Pola",
      },
      description: {
        es: "Contáctanos - Carrer Major, 8, Santa Pola - Teléfono, horario y ubicación de nuestro salón de belleza",
        en: "Contact us - Carrer Major, 8, Santa Pola - Phone, hours and location of our beauty salon",
        ru: "Свяжитесь с нами - Carrer Major, 8, Santa Pola - Телефон, часы работы и расположение нашего салона красоты",
      },
    },
  });
  console.log("  Created contactPage");
}

// ─── Legal Pages ───────────────────────────────────────────────────

async function seedLegalPages() {
  console.log("\n⚖️  Seeding legal pages...");

  const sec = (
    title: Record<string, string>,
    content?: Record<string, string>,
    listItems?: Record<string, string>[],
    footer?: Record<string, string>,
  ) => ({
    _type: "legalSection" as const,
    _key: key(),
    title,
    ...(content ? { content } : {}),
    ...(listItems
      ? {
          listItems: listItems.map((text) => ({
            _type: "listItem" as const,
            _key: key(),
            text,
          })),
        }
      : {}),
    ...(footer ? { footer } : {}),
  });

  // Privacy Policy
  await client.createOrReplace({
    _id: "legalPage-privacy-policy",
    _type: "legalPage",
    slug: { _type: "slug", current: "privacy-policy" },
    title: {
      es: "Política de Privacidad",
      en: "Privacy Policy",
      ru: "Политика конфиденциальности",
    },
    subtitle: {
      es: "Cómo recopilamos, usamos y protegemos tu información personal",
      en: "How we collect, use and protect your personal information",
      ru: "Как мы собираем, используем и защищаем вашу личную информацию",
    },
    sections: [
      sec(
        { es: "Responsable del Tratamiento", en: "Data Controller", ru: "Контролер данных" },
        {
          es: "Titular: Staigis Iryna\nNIE: Y7526337S\nTipo de Actividad: Autónomo\nDirección: Carrer Major, 8, 03130 Santa Pola, Alicante, España\nEmail de contacto: info@lashandnails.es",
          en: "Owner: Staigis Iryna\nNIE: Y7526337S\nBusiness Type: Self-Employed (Autónomo)\nAddress: Carrer Major, 8, 03130 Santa Pola, Alicante, Spain\nContact Email: info@lashandnails.es",
          ru: "Владелец: Staigis Iryna\nNIE: Y7526337S\nТип деятельности: Индивидуальный предприниматель (Autónomo)\nАдрес: Carrer Major, 8, 03130 Santa Pola, Alicante, Испания\nКонтактный Email: info@lashandnails.es",
        },
      ),
      sec(
        {
          es: "Información que Recopilamos",
          en: "Information We Collect",
          ru: "Информация, которую мы собираем",
        },
        {
          es: "Recopilamos la siguiente información cuando utilizas nuestros servicios:",
          en: "We collect the following information when you use our services:",
          ru: "Мы собираем следующую информацию, когда вы пользуетесь нашими услугами:",
        },
        [
          { es: "Nombre y apellidos", en: "Name and surname", ru: "Имя и фамилия" },
          { es: "Número de teléfono", en: "Phone number", ru: "Номер телефона" },
          {
            es: "Dirección de correo electrónico",
            en: "Email address",
            ru: "Адрес электронной почты",
          },
          {
            es: "Información de navegación (a través de cookies)",
            en: "Browsing information (through cookies)",
            ru: "Информация о просмотре (через cookies)",
          },
        ],
      ),
      sec(
        { es: "Finalidad del Tratamiento", en: "Purpose of Processing", ru: "Цель обработки" },
        {
          es: "Utilizamos tu información personal para:",
          en: "We use your personal information to:",
          ru: "Мы используем вашу личную информацию для:",
        },
        [
          {
            es: "Gestionar reservas de citas y servicios",
            en: "Manage appointment and service bookings",
            ru: "Управления записями на прием и услугами",
          },
          {
            es: "Comunicarnos contigo sobre tus citas",
            en: "Communicate with you about your appointments",
            ru: "Связи с вами по поводу ваших записей",
          },
          {
            es: "Enviarte información sobre nuestros servicios (con tu consentimiento)",
            en: "Send you information about our services (with your consent)",
            ru: "Отправки информации о наших услугах (с вашего согласия)",
          },
          {
            es: "Mejorar nuestros servicios y la experiencia del usuario",
            en: "Improve our services and user experience",
            ru: "Улучшения наших услуг и пользовательского опыта",
          },
        ],
      ),
      sec(
        { es: "Base Legal", en: "Legal Basis", ru: "Правовая основа" },
        {
          es: "El tratamiento de tus datos se basa en tu consentimiento explícito al solicitar nuestros servicios y en la ejecución del contrato de prestación de servicios. También procesamos datos para cumplir con obligaciones legales.",
          en: "The processing of your data is based on your explicit consent when requesting our services and on the execution of the service provision contract. We also process data to comply with legal obligations.",
          ru: "Обработка ваших данных основана на вашем явном согласии при запросе наших услуг и на исполнении договора о предоставлении услуг. Мы также обрабатываем данные для выполнения юридических обязательств.",
        },
      ),
      sec(
        { es: "Conservación de Datos", en: "Data Retention", ru: "Хранение данных" },
        {
          es: "Conservaremos tus datos personales durante el tiempo necesario para cumplir con las finalidades para las que fueron recopilados, incluyendo cualquier obligación legal, contable o de información. Los datos de clientes se conservan durante el período de prestación de servicios y posteriormente durante los plazos legales establecidos.",
          en: "We will retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting obligations. Customer data is retained during the service provision period and subsequently for legally established periods.",
          ru: "Мы будем хранить ваши личные данные в течение времени, необходимого для выполнения целей, для которых они были собраны, включая любые юридические, бухгалтерские или отчетные обязательства. Данные клиентов хранятся в течение периода предоставления услуг и впоследствии в течение законодательно установленных сроков.",
        },
      ),
      sec(
        { es: "Tus Derechos", en: "Your Rights", ru: "Ваши права" },
        {
          es: "Conforme al RGPD, tienes derecho a:",
          en: "Under GDPR, you have the right to:",
          ru: "В соответствии с GDPR, вы имеете право на:",
        },
        [
          {
            es: "Acceder a tus datos personales",
            en: "Access your personal data",
            ru: "Доступ к вашим личным данным",
          },
          {
            es: "Rectificar datos inexactos o incompletos",
            en: "Rectify inaccurate or incomplete data",
            ru: "Исправление неточных или неполных данных",
          },
          {
            es: "Solicitar la supresión de tus datos",
            en: "Request deletion of your data",
            ru: "Запрос на удаление ваших данных",
          },
          {
            es: "Oponerte al tratamiento de tus datos",
            en: "Object to the processing of your data",
            ru: "Возражение против обработки ваших данных",
          },
          {
            es: "Solicitar la limitación del tratamiento",
            en: "Request limitation of processing",
            ru: "Запрос на ограничение обработки",
          },
          { es: "Portabilidad de tus datos", en: "Data portability", ru: "Переносимость данных" },
        ],
        {
          es: "Para ejercer estos derechos, contacta con nosotros en info@lashandnails.es",
          en: "To exercise these rights, contact us at info@lashandnails.es",
          ru: "Для осуществления этих прав свяжитесь с нами по адресу info@lashandnails.es",
        },
      ),
      sec(
        { es: "Seguridad de los Datos", en: "Data Security", ru: "Безопасность данных" },
        {
          es: "Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra acceso no autorizado, alteración, divulgación o destrucción. Todos nuestros instrumentos están esterilizados y mantenemos estrictos protocolos de higiene y seguridad.",
          en: "We implement technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All our instruments are sterilized and we maintain strict hygiene and safety protocols.",
          ru: "Мы применяем технические и организационные меры безопасности для защиты ваших личных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Все наши инструменты стерилизованы, и мы соблюдаем строгие протоколы гигиены и безопасности.",
        },
      ),
      sec(
        {
          es: "Comunicación a Terceros",
          en: "Third Party Disclosure",
          ru: "Раскрытие третьим лицам",
        },
        {
          es: "No compartimos tu información personal con terceros, excepto cuando sea necesario para la prestación del servicio o por obligación legal. Utilizamos los siguientes servicios de terceros:\n\nGoogle Analytics: Para análisis web y mejora de la experiencia del usuario",
          en: "We do not share your personal information with third parties, except when necessary for service provision or legal obligation. We use the following third-party services:\n\nGoogle Analytics: For web analytics and user experience improvement",
          ru: "Мы не передаем вашу личную информацию третьим лицам, за исключением случаев, когда это необходимо для предоставления услуги или по юридическому обязательству. Мы используем следующие сторонние сервисы:\n\nGoogle Analytics: Для веб-аналитики и улучшения пользовательского опыта",
        },
      ),
      sec(
        {
          es: "Actualizaciones de esta Política",
          en: "Updates to this Policy",
          ru: "Обновления этой политики",
        },
        {
          es: "Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web. Te recomendamos revisar esta página periódicamente.",
          en: "We may update this Privacy Policy occasionally. We will notify you of significant changes by posting the new policy on our website. We recommend reviewing this page periodically.",
          ru: "Мы можем время от времени обновлять эту Политику конфиденциальности. Мы уведомим вас о значительных изменениях, опубликовав новую политику на нашем сайте. Рекомендуем периодически проверять эту страницу.",
        },
      ),
    ],
    seo: {
      title: {
        es: "Política de Privacidad | Lash & Nails Santa Pola",
        en: "Privacy Policy | Lash & Nails Santa Pola",
        ru: "Политика конфиденциальности | Lash & Nails Santa Pola",
      },
      description: {
        es: "Política de privacidad de Lash & Nails Santa Pola - Protección de datos personales conforme al RGPD",
        en: "Privacy policy of Lash & Nails Santa Pola - Personal data protection in accordance with GDPR",
        ru: "Политика конфиденциальности Lash & Nails Santa Pola - Защита персональных данных в соответствии с GDPR",
      },
    },
  });
  console.log("  Created legalPage: privacy-policy");

  // Cookie Policy
  await client.createOrReplace({
    _id: "legalPage-cookie-policy",
    _type: "legalPage",
    slug: { _type: "slug", current: "cookie-policy" },
    title: {
      es: "Política de Cookies",
      en: "Cookie Policy",
      ru: "Политика использования файлов cookie",
    },
    subtitle: {
      es: "Información sobre las cookies que utilizamos en nuestro sitio web",
      en: "Information about the cookies we use on our website",
      ru: "Информация о файлах cookie, которые мы используем на нашем сайте",
    },
    sections: [
      sec(
        { es: "¿Qué son las Cookies?", en: "What are Cookies?", ru: "Что такое файлы cookie?" },
        {
          es: "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente y proporcionen información a los propietarios del sitio.",
          en: "Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to site owners.",
          ru: "Файлы cookie - это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении веб-сайта. Они широко используются для того, чтобы веб-сайты работали более эффективно и предоставляли информацию владельцам сайта.",
        },
      ),
      sec(
        {
          es: "Cookies que Utilizamos",
          en: "Cookies We Use",
          ru: "Используемые нами файлы cookie",
        },
        {
          es: "Cookies Analíticas: Estas cookies nos permiten reconocer y contar el número de visitantes y ver cómo se mueven por nuestro sitio web.\n\nCookies Esenciales: Estas cookies son necesarias para el funcionamiento del sitio web y no pueden ser desactivadas en nuestros sistemas.",
          en: "Analytics Cookies: These cookies allow us to recognize and count the number of visitors and see how they move around our website.\n\nEssential Cookies: These cookies are necessary for the website to function and cannot be disabled in our systems.",
          ru: "Аналитические файлы cookie: Эти файлы cookie позволяют нам распознавать и подсчитывать количество посетителей и видеть, как они перемещаются по нашему сайту.\n\nНеобходимые файлы cookie: Эти файлы cookie необходимы для работы веб-сайта и не могут быть отключены в наших системах.",
        },
      ),
      sec(
        {
          es: "Finalidad de las Cookies",
          en: "Purpose of Cookies",
          ru: "Цель использования файлов cookie",
        },
        {
          es: "Utilizamos cookies para:",
          en: "We use cookies to:",
          ru: "Мы используем файлы cookie для:",
        },
        [
          {
            es: "Recordar tus preferencias de idioma",
            en: "Remember your language preferences",
            ru: "Запоминания ваших языковых предпочтений",
          },
          {
            es: "Analizar cómo se utiliza nuestro sitio web",
            en: "Analyze how our website is used",
            ru: "Анализа использования нашего веб-сайта",
          },
          {
            es: "Mejorar la experiencia del usuario",
            en: "Improve user experience",
            ru: "Улучшения пользовательского опыта",
          },
          {
            es: "Proporcionar contenido relevante",
            en: "Provide relevant content",
            ru: "Предоставления релевантного контента",
          },
        ],
      ),
      sec(
        { es: "Cookies de Terceros", en: "Third-Party Cookies", ru: "Сторонние файлы cookie" },
        {
          es: "Algunos servicios externos que utilizamos también pueden establecer cookies en tu dispositivo. Estos servicios de terceros tienen sus propias políticas de privacidad.\n\nGoogle Analytics: https://policies.google.com/privacy",
          en: "Some external services we use may also set cookies on your device. These third-party services have their own privacy policies.\n\nGoogle Analytics: https://policies.google.com/privacy",
          ru: "Некоторые внешние сервисы, которые мы используем, также могут устанавливать файлы cookie на вашем устройстве. Эти сторонние сервисы имеют свои собственные политики конфиденциальности.\n\nGoogle Analytics: https://policies.google.com/privacy",
        },
      ),
      sec(
        {
          es: "Cómo Gestionar las Cookies",
          en: "How to Manage Cookies",
          ru: "Как управлять файлами cookie",
        },
        {
          es: "Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en tu ordenador y puedes configurar la mayoría de los navegadores para evitar que se coloquen.",
          en: "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.",
          ru: "Вы можете контролировать и/или удалять файлы cookie по своему усмотрению. Вы можете удалить все файлы cookie, которые уже есть на вашем компьютере, и настроить большинство браузеров для предотвращения их размещения.",
        },
        [
          {
            es: "Chrome: Configuración > Privacidad y seguridad > Cookies",
            en: "Chrome: Settings > Privacy and security > Cookies",
            ru: "Chrome: Настройки > Конфиденциальность и безопасность > Файлы cookie",
          },
          {
            es: "Firefox: Opciones > Privacidad y seguridad > Cookies",
            en: "Firefox: Options > Privacy and security > Cookies",
            ru: "Firefox: Настройки > Приватность и защита > Файлы cookie",
          },
          {
            es: "Safari: Preferencias > Privacidad > Cookies",
            en: "Safari: Preferences > Privacy > Cookies",
            ru: "Safari: Настройки > Конфиденциальность > Файлы cookie",
          },
          {
            es: "Edge: Configuración > Cookies y permisos del sitio",
            en: "Edge: Settings > Cookies and site permissions",
            ru: "Edge: Настройки > Файлы cookie и разрешения сайта",
          },
        ],
        {
          es: "Ten en cuenta que deshabilitar las cookies puede afectar la funcionalidad de este y muchos otros sitios web.",
          en: "Please note that disabling cookies may affect the functionality of this and many other websites.",
          ru: "Обратите внимание, что отключение файлов cookie может повлиять на функциональность этого и многих других веб-сайтов.",
        },
      ),
      sec(
        {
          es: "Actualizaciones de esta Política",
          en: "Updates to this Policy",
          ru: "Обновления этой политики",
        },
        {
          es: "Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en las cookies que utilizamos o por otros motivos operativos, legales o reglamentarios. Te recomendamos revisar esta página periódicamente.",
          en: "We may update this Cookie Policy occasionally to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. We recommend reviewing this page periodically.",
          ru: "Мы можем время от времени обновлять эту Политику использования файлов cookie, чтобы отразить изменения в используемых нами файлах cookie или по другим операционным, юридическим или нормативным причинам. Рекомендуем периодически проверять эту страницу.",
        },
      ),
      sec(
        { es: "Contacto", en: "Contact", ru: "Контакт" },
        {
          es: "Si tienes preguntas sobre nuestra Política de Cookies, contáctanos en info@lashandnails.es",
          en: "If you have questions about our Cookie Policy, contact us at info@lashandnails.es",
          ru: "Если у вас есть вопросы о нашей Политике использования файлов cookie, свяжитесь с нами по адресу info@lashandnails.es",
        },
      ),
    ],
    seo: {
      title: {
        es: "Política de Cookies | Lash & Nails Santa Pola",
        en: "Cookie Policy | Lash & Nails Santa Pola",
        ru: "Политика использования файлов cookie | Lash & Nails Santa Pola",
      },
      description: {
        es: "Política de cookies de Lash & Nails Santa Pola - Información sobre el uso de cookies",
        en: "Cookie policy of Lash & Nails Santa Pola - Information about cookie usage",
        ru: "Политика использования файлов cookie Lash & Nails Santa Pola - Информация об использовании cookie",
      },
    },
  });
  console.log("  Created legalPage: cookie-policy");

  // Legal Notice
  await client.createOrReplace({
    _id: "legalPage-legal-notice",
    _type: "legalPage",
    slug: { _type: "slug", current: "legal-notice" },
    title: {
      es: "Aviso Legal",
      en: "Legal Notice",
      ru: "Правовая информация",
    },
    subtitle: {
      es: "Información legal y condiciones de uso del sitio web",
      en: "Legal information and website terms of use",
      ru: "Юридическая информация и условия использования сайта",
    },
    sections: [
      sec(
        { es: "Información de la Empresa", en: "Company Information", ru: "Информация о компании" },
        {
          es: "Titular: Staigis Iryna\nNIE: Y7526337S\nTipo de Actividad: Autónomo\nDirección: Carrer Major, 8, 03130 Santa Pola, Alicante, España\nTeléfono: +34 604 31 67 78\nEmail: info@lashandnails.es",
          en: "Owner: Staigis Iryna\nNIE: Y7526337S\nBusiness Type: Self-Employed (Autónomo)\nAddress: Carrer Major, 8, 03130 Santa Pola, Alicante, Spain\nPhone: +34 604 31 67 78\nEmail: info@lashandnails.es",
          ru: "Владелец: Staigis Iryna\nNIE: Y7526337S\nТип деятельности: Индивидуальный предприниматель (Autónomo)\nАдрес: Carrer Major, 8, 03130 Santa Pola, Alicante, Испания\nТелефон: +34 604 31 67 78\nEmail: info@lashandnails.es",
        },
      ),
      sec(
        { es: "Objeto", en: "Purpose", ru: "Цель" },
        {
          es: "Este sitio web tiene como objetivo proporcionar información sobre los servicios de belleza ofrecidos por Lash & Nails Santa Pola, incluyendo extensiones de pestañas, manicura, pedicura y diseño de cejas. El acceso y uso de este sitio web implica la aceptación de estos términos y condiciones.",
          en: "This website aims to provide information about the beauty services offered by Lash & Nails Santa Pola, including lash extensions, manicure, pedicure, and brow design. Access and use of this website implies acceptance of these terms and conditions.",
          ru: "Этот веб-сайт предназначен для предоставления информации об услугах красоты, предлагаемых Lash & Nails Santa Pola, включая наращивание ресниц, маникюр, педикюр и дизайн бровей. Доступ и использование этого веб-сайта подразумевают принятие этих условий.",
        },
      ),
      sec(
        {
          es: "Propiedad Intelectual",
          en: "Intellectual Property",
          ru: "Интеллектуальная собственность",
        },
        {
          es: "Todos los contenidos de este sitio web, incluyendo textos, imágenes, diseños, logotipos y código fuente, son propiedad de Lash & Nails Santa Pola o de sus proveedores de contenido y están protegidos por las leyes de propiedad intelectual. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.",
          en: "All contents of this website, including texts, images, designs, logos, and source code, are property of Lash & Nails Santa Pola or its content providers and are protected by intellectual property laws. Reproduction, distribution, or modification without express authorization is prohibited.",
          ru: "Все содержимое этого веб-сайта, включая тексты, изображения, дизайн, логотипы и исходный код, являются собственностью Lash & Nails Santa Pola или его поставщиков контента и защищены законами об интеллектуальной собственности. Воспроизведение, распространение или модификация без явного разрешения запрещены.",
        },
      ),
      sec(
        {
          es: "Limitación de Responsabilidad",
          en: "Limitation of Liability",
          ru: "Ограничение ответственности",
        },
        {
          es: "Lash & Nails Santa Pola no se hace responsable de los daños o perjuicios que puedan derivarse del uso de este sitio web, interrupciones del servicio, o errores en el contenido. Nos esforzamos por mantener la información actualizada, pero no garantizamos la exactitud absoluta de todos los contenidos.",
          en: "Lash & Nails Santa Pola is not responsible for damages or losses that may arise from the use of this website, service interruptions, or errors in content. We strive to keep information up to date, but do not guarantee the absolute accuracy of all contents.",
          ru: "Lash & Nails Santa Pola не несет ответственности за ущерб или убытки, которые могут возникнуть в результате использования этого веб-сайта, перерывов в обслуживании или ошибок в содержании. Мы стремимся поддерживать информацию в актуальном состоянии, но не гарантируем абсолютную точность всего содержания.",
        },
      ),
      sec(
        { es: "Legislación Aplicable", en: "Applicable Law", ru: "Применимое законодательство" },
        {
          es: "Estas condiciones se rigen por la legislación española. Para cualquier controversia derivada del uso de este sitio web, las partes se someten a los juzgados y tribunales de Santa Pola, Alicante, España.",
          en: "These conditions are governed by Spanish legislation. For any dispute arising from the use of this website, the parties submit to the courts and tribunals of Santa Pola, Alicante, Spain.",
          ru: "Эти условия регулируются испанским законодательством. В случае любого спора, возникающего в связи с использованием этого веб-сайта, стороны подчиняются судам и трибуналам Санта-Пола, Аликанте, Испания.",
        },
      ),
    ],
    seo: {
      title: {
        es: "Aviso Legal | Lash & Nails Santa Pola",
        en: "Legal Notice | Lash & Nails Santa Pola",
        ru: "Правовая информация | Lash & Nails Santa Pola",
      },
      description: {
        es: "Información legal sobre Lash & Nails Santa Pola - Aviso legal y condiciones de uso",
        en: "Legal information about Lash & Nails Santa Pola - Legal notice and terms of use",
        ru: "Юридическая информация о Lash & Nails Santa Pola - Правовое уведомление и условия использования",
      },
    },
  });
  console.log("  Created legalPage: legal-notice");
}

// ─── Main ──────────────────────────────────────────────────────────

async function main() {
  console.log("🚀 Seeding page content to Sanity CMS...\n");

  await seedSiteSettings();
  await seedHomePage();
  await seedAboutPage();
  await seedServicesOverviewPage();
  await seedPricingPage();
  await seedBookingPage();
  await seedContactPage();
  await seedLegalPages();

  console.log("\n✅ Done! All page content seeded.");
}

main().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
