/**
 * Patch existing Sanity service documents with full page content.
 * Run: SANITY_TOKEN="sk..." npx tsx scripts/seed-service-content.ts
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
    'Missing SANITY_TOKEN. Run: SANITY_TOKEN="skXXX..." npx tsx scripts/seed-service-content.ts',
  );
  process.exit(1);
}

function key() {
  return Math.random().toString(36).slice(2, 10);
}

// ─── Lash Extensions ────────────────────────────────────────────────

const lashExtensions = {
  seo: {
    title: {
      en: "Lash Extensions | Lash & Nails Santa Pola",
      es: "Extensiones de Pestañas | Lash & Nails Santa Pola",
      ru: "Наращивание ресниц | Lash & Nails Santa Pola",
    },
    description: {
      en: "Professional lash extensions in Santa Pola - Natural and voluminous look with advanced techniques",
      es: "Extensiones de pestañas profesionales en Santa Pola - Mirada natural y voluminosa con técnicas avanzadas",
      ru: "Профессиональное наращивание ресниц в Санта-Пола - Естественный и объемный взгляд с передовыми техниками",
    },
  },
  techniques: [
    {
      _type: "technique",
      _key: key(),
      name: { en: "Classic", es: "Clásica", ru: "Классическая" },
      description: {
        en: "One extension per natural lash. Elegant and natural result, perfect for everyday wear.",
        es: "Una extensión por pestaña natural. Resultado elegante y natural, perfecto para el día a día.",
        ru: "Одна ресничка на натуральную ресницу. Элегантный и естественный результат, идеально для повседневной носки.",
      },
    },
    {
      _type: "technique",
      _key: key(),
      name: { en: "Volume", es: "Volumen", ru: "Объемная" },
      description: {
        en: "Multiple thin extensions per lash. Maximum volume and density for a dramatic look.",
        es: "Múltiples extensiones finas por pestaña. Máximo volumen y densidad para un look dramático.",
        ru: "Несколько тонких ресничек на одну ресницу. Максимальный объем и густота для драматического эффекта.",
      },
    },
    {
      _type: "technique",
      _key: key(),
      name: { en: "Hybrid", es: "Híbrida", ru: "Гибридная" },
      description: {
        en: "Combination of classic and volume technique. Perfect balance between natural and voluminous.",
        es: "Combinación de técnica clásica y volumen. Balance perfecto entre natural y voluminoso.",
        ru: "Комбинация классической и объемной техники. Идеальный баланс между естественным и объемным.",
      },
    },
  ],
  benefits: [
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "More open and expressive look without makeup",
        es: "Mirada más abierta y expresiva sin necesidad de maquillaje",
        ru: "Более открытый и выразительный взгляд без макияжа",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Lasts 3-4 weeks with proper care",
        es: "Duración de 3-4 semanas con cuidado adecuado",
        ru: "Держится 3-4 недели при правильном уходе",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Water-resistant and suitable for daily activities",
        es: "Resistentes al agua y actividades diarias",
        ru: "Водостойкие и подходят для ежедневных занятий",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Customizable in length, thickness and curl",
        es: "Personalizables en longitud, grosor y curvatura",
        ru: "Настраиваемые по длине, толщине и изгибу",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Save time on your daily makeup routine",
        es: "Ahorro de tiempo en tu rutina diaria de maquillaje",
        ru: "Экономия времени на ежедневный макияж",
      },
    },
  ],
  processSteps: [
    {
      _type: "processStep",
      _key: key(),
      title: { en: "Consultation", es: "Consulta", ru: "Консультация" },
      description: {
        en: "We assess your natural lashes and discuss the look you want to achieve.",
        es: "Evaluamos tus pestañas naturales y discutimos el look que deseas conseguir.",
        ru: "Оцениваем ваши натуральные ресницы и обсуждаем желаемый результат.",
      },
    },
    {
      _type: "processStep",
      _key: key(),
      title: { en: "Preparation", es: "Preparación", ru: "Подготовка" },
      description: {
        en: "We clean and prepare your natural lashes for application.",
        es: "Limpiamos y preparamos tus pestañas naturales para la aplicación.",
        ru: "Очищаем и подготавливаем ваши натуральные ресницы к нанесению.",
      },
    },
    {
      _type: "processStep",
      _key: key(),
      title: { en: "Application", es: "Aplicación", ru: "Нанесение" },
      description: {
        en: "We apply each extension individually with professional long-lasting adhesive.",
        es: "Aplicamos cada extensión individualmente con adhesivo profesional de larga duración.",
        ru: "Наносим каждую ресничку индивидуально с профессиональным долговечным клеем.",
      },
    },
    {
      _type: "processStep",
      _key: key(),
      title: { en: "Finishing", es: "Acabado", ru: "Завершение" },
      description: {
        en: "We review the result and give you care instructions.",
        es: "Revisamos el resultado y te damos instrucciones de cuidado.",
        ru: "Проверяем результат и даем инструкции по уходу.",
      },
    },
  ],
  aftercareTips: [
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Avoid getting lashes wet for the first 24 hours",
        es: "Evita mojar las pestañas durante las primeras 24 horas",
        ru: "Избегайте намокания ресниц в течение первых 24 часов",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Don't use oil-based products near your eyes",
        es: "No uses productos a base de aceite cerca de los ojos",
        ru: "Не используйте продукты на масляной основе возле глаз",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Gently brush your lashes daily with a special brush",
        es: "Cepilla tus pestañas suavemente cada día con un cepillo especial",
        ru: "Аккуратно расчесывайте ресницы каждый день специальной щеточкой",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Avoid rubbing or pulling the extensions",
        es: "Evita frotar o tirar de las extensiones",
        ru: "Избегайте трения или вытягивания нарощенных ресниц",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Schedule refills every 2-3 weeks to maintain volume",
        es: "Agenda rellenos cada 2-3 semanas para mantener el volumen",
        ru: "Записывайтесь на коррекцию каждые 2-3 недели для поддержания объема",
      },
    },
  ],
  cta: {
    heading: {
      en: "Ready to transform your look?",
      es: "¿Lista para transformar tu mirada?",
      ru: "Готовы преобразить свой взгляд?",
    },
    subtitle: {
      en: "Book your appointment for lash extensions",
      es: "Reserva tu cita para extensiones de pestañas",
      ru: "Запишитесь на наращивание ресниц",
    },
    button: {
      en: "Book via WhatsApp",
      es: "Reservar por WhatsApp",
      ru: "Записаться через WhatsApp",
    },
    message: {
      en: "Hello, I would like to book an appointment for lash extensions.",
      es: "Hola, me gustaría reservar una cita para extensiones de pestañas.",
      ru: "Здравствуйте, я хочу записаться на наращивание ресниц.",
    },
  },
};

// ─── Manicure ───────────────────────────────────────────────────────

const manicure = {
  seo: {
    title: {
      en: "Manicure | Lash & Nails Santa Pola",
      es: "Manicura | Lash & Nails Santa Pola",
      ru: "Маникюр | Lash & Nails Santa Pola",
    },
    description: {
      en: "Professional manicure in Santa Pola - Nail care with premium products for impeccable results",
      es: "Manicura profesional en Santa Pola - Cuidado de uñas con productos premium para resultados impecables",
      ru: "Профессиональный маникюр в Санта-Пола - Уход за ногтями с премиальными продуктами для безупречных результатов",
    },
  },
  techniques: null,
  benefits: [
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Stronger and healthier nails with professional care",
        es: "Uñas más fuertes y saludables con cuidado profesional",
        ru: "Более крепкие и здоровые ногти с профессиональным уходом",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Long-lasting polish that resists up to 3 weeks",
        es: "Esmaltado duradero que resiste hasta 3 semanas",
        ru: "Долговечное покрытие, которое держится до 3 недель",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "All instruments undergo all stages of sterilization",
        es: "Todos los instrumentos pasan por todas las etapas de esterilización",
        ru: "Все инструменты проходят все этапы стерилизации",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Professional German Baehr cosmetics for hand care",
        es: "Cosméticos profesionales alemanes Baehr para el cuidado de manos",
        ru: "Профессиональная немецкая косметика Baehr для ухода за руками",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Custom designs according to your style",
        es: "Diseños personalizados según tu estilo",
        ru: "Индивидуальный дизайн в соответствии с вашим стилем",
      },
    },
  ],
  processSteps: [
    {
      _type: "processStep",
      _key: key(),
      title: { en: "Preparation", es: "Preparación", ru: "Подготовка" },
      description: {
        en: "We clean and assess the condition of your nails to determine the best treatment.",
        es: "Limpiamos y evaluamos el estado de tus uñas para determinar el mejor tratamiento.",
        ru: "Очищаем и оцениваем состояние ваших ногтей для определения лучшего лечения.",
      },
    },
    {
      _type: "processStep",
      _key: key(),
      title: { en: "Cuticle Care", es: "Cuidado de Cutículas", ru: "Уход за кутикулой" },
      description: {
        en: "We gently treat the cuticles for a clean and healthy appearance.",
        es: "Tratamos suavemente las cutículas para un aspecto limpio y saludable.",
        ru: "Аккуратно обрабатываем кутикулу для чистого и здорового вида.",
      },
    },
    {
      _type: "processStep",
      _key: key(),
      title: { en: "Shape and Polish", es: "Forma y Pulido", ru: "Форма и полировка" },
      description: {
        en: "We shape your nails and polish them for a perfect surface.",
        es: "Damos forma a tus uñas y las pulimos para una superficie perfecta.",
        ru: "Придаем форму вашим ногтям и полируем их для идеальной поверхности.",
      },
    },
    {
      _type: "processStep",
      _key: key(),
      title: { en: "Application", es: "Aplicación", ru: "Нанесение" },
      description: {
        en: "We apply the chosen polish or treatment with professional techniques.",
        es: "Aplicamos el esmalte o tratamiento elegido con técnicas profesionales.",
        ru: "Наносим выбранный лак или средство профессиональными техниками.",
      },
    },
  ],
  aftercareTips: [
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Avoid prolonged contact with water for the first 2 hours",
        es: "Evita el contacto prolongado con agua durante las primeras 2 horas",
        ru: "Избегайте длительного контакта с водой в течение первых 2 часов",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Use gloves when doing cleaning tasks",
        es: "Usa guantes al hacer tareas de limpieza",
        ru: "Используйте перчатки при выполнении уборки",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Moisturize your hands and cuticles daily",
        es: "Hidrata tus manos y cutículas diariamente",
        ru: "Увлажняйте руки и кутикулу ежедневно",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Avoid using nails as tools",
        es: "Evita usar las uñas como herramientas",
        ru: "Избегайте использования ногтей как инструментов",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Return every 2-3 weeks to maintain the perfect result",
        es: "Regresa cada 2-3 semanas para mantener el resultado perfecto",
        ru: "Возвращайтесь каждые 2-3 недели для поддержания идеального результата",
      },
    },
  ],
  cta: {
    heading: {
      en: "Ready for perfect hands?",
      es: "¿Lista para unas manos perfectas?",
      ru: "Готовы к идеальным рукам?",
    },
    subtitle: {
      en: "Book your appointment for manicure",
      es: "Reserva tu cita para manicura",
      ru: "Запишитесь на маникюр",
    },
    button: {
      en: "Book via WhatsApp",
      es: "Reservar por WhatsApp",
      ru: "Записаться через WhatsApp",
    },
    message: {
      en: "Hello, I would like to book an appointment for manicure.",
      es: "Hola, me gustaría reservar una cita para manicura.",
      ru: "Здравствуйте, я хочу записаться на маникюр.",
    },
  },
};

// ─── Pedicure ───────────────────────────────────────────────────────

const pedicure = {
  seo: {
    title: {
      en: "Pedicure | Lash & Nails Santa Pola",
      es: "Pedicura | Lash & Nails Santa Pola",
      ru: "Педикюр | Lash & Nails Santa Pola",
    },
    description: {
      en: "Professional pedicure in Santa Pola - Foot care with premium products for lasting results",
      es: "Pedicura profesional en Santa Pola - Cuidado de pies con productos premium para resultados duraderos",
      ru: "Профессиональный педикюр в Санта-Пола - Уход за ногами с премиальными продуктами для длительных результатов",
    },
  },
  techniques: null,
  benefits: [
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Soft and healthy feet with professional care",
        es: "Pies suaves y saludables con cuidado profesional",
        ru: "Мягкие и здоровые ноги с профессиональным уходом",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Long-lasting polish that resists up to 3 weeks",
        es: "Esmaltado duradero que resiste hasta 3 semanas",
        ru: "Долговечное покрытие, которое держится до 3 недель",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "All instruments undergo all stages of sterilization",
        es: "Todos los instrumentos pasan por todas las etapas de esterilización",
        ru: "Все инструменты проходят все этапы стерилизации",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Professional German Pedibaehr cosmetics for foot care",
        es: "Cosméticos profesionales alemanes Pedibaehr para el cuidado de pies",
        ru: "Профессиональная немецкая косметика Pedibaehr для ухода за ногами",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Prevents common foot problems",
        es: "Previene problemas comunes de los pies",
        ru: "Предотвращает распространенные проблемы с ногами",
      },
    },
  ],
  processSteps: [
    {
      _type: "processStep",
      _key: key(),
      title: { en: "Toe treatment", es: "Tratamiento de dedos", ru: "Обработка пальцев" },
      description: {
        en: "Complete toe treatment with cuticle and hardened skin removal.",
        es: "Tratamiento completo de los dedos con eliminación de cutícula y piel endurecida.",
        ru: "Полная обработка пальцев ног с удалением кутикулы и огрубевшей кожи.",
      },
    },
    {
      _type: "processStep",
      _key: key(),
      title: {
        en: "Foot sole treatment",
        es: "Tratamiento de planta del pie",
        ru: "Обработка стопы",
      },
      description: {
        en: "Processing of the foot sole with removal of hardened skin areas.",
        es: "Procesamiento de la planta del pie con eliminación de zonas endurecidas de la piel.",
        ru: "Обработка стопы с удалением твердых участков кожи.",
      },
    },
    {
      _type: "processStep",
      _key: key(),
      title: {
        en: "Professional moisturizing",
        es: "Hidratación profesional",
        ru: "Профессиональное увлажнение",
      },
      description: {
        en: "Skin moisturizing with professional German Pedibaehr products.",
        es: "Hidratación de la piel con productos profesionales alemanes Pedibaehr.",
        ru: "Увлажнение кожи профессиональными немецкими средствами Pedibaehr.",
      },
    },
    {
      _type: "processStep",
      _key: key(),
      title: { en: "Gel polish finish", es: "Acabado con gel", ru: "Покрытие гель-лаком" },
      description: {
        en: "Application of long-lasting gel polish.",
        es: "Aplicación de esmalte gel de larga duración.",
        ru: "Нанесение стойкого гель-лака.",
      },
    },
  ],
  aftercareTips: [
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Keep feet dry for the first 2 hours",
        es: "Mantén los pies secos durante las primeras 2 horas",
        ru: "Держите ноги сухими в течение первых 2 часов",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Wear open-toed shoes the first day to avoid smudging",
        es: "Usa zapatos abiertos el primer día para evitar manchas",
        ru: "Носите открытую обувь в первый день, чтобы избежать размазывания",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Moisturize your feet daily with cream",
        es: "Hidrata tus pies diariamente con crema",
        ru: "Увлажняйте ноги ежедневно кремом",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Use cotton socks to maintain hydration",
        es: "Usa calcetines de algodón para mantener la hidratación",
        ru: "Используйте хлопковые носки для поддержания увлажнения",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Return every 3-4 weeks to maintain healthy feet",
        es: "Regresa cada 3-4 semanas para mantener pies saludables",
        ru: "Возвращайтесь каждые 3-4 недели для поддержания здоровых ног",
      },
    },
  ],
  cta: {
    heading: {
      en: "Ready for perfect feet?",
      es: "¿Lista para unos pies perfectos?",
      ru: "Готовы к идеальным ногам?",
    },
    subtitle: {
      en: "Book your appointment for pedicure",
      es: "Reserva tu cita para pedicura",
      ru: "Запишитесь на педикюр",
    },
    button: {
      en: "Book via WhatsApp",
      es: "Reservar por WhatsApp",
      ru: "Записаться через WhatsApp",
    },
    message: {
      en: "Hello, I would like to book an appointment for pedicure.",
      es: "Hola, me gustaría reservar una cita para pedicura.",
      ru: "Здравствуйте, я хочу записаться на педикюр.",
    },
  },
};

// ─── Brows ──────────────────────────────────────────────────────────

const brows = {
  seo: {
    title: {
      en: "Brow Design & Lamination | Lash & Nails Santa Pola",
      es: "Diseño y Laminación de Cejas | Lash & Nails Santa Pola",
      ru: "Дизайн и ламинирование бровей | Lash & Nails Santa Pola",
    },
    description: {
      en: "Professional brow design in Santa Pola - Tinting, lamination and micropigmentation for perfect brows",
      es: "Diseño profesional de cejas en Santa Pola - Tinte, laminación y micropigmentación para cejas perfectas",
      ru: "Профессиональный дизайн бровей в Санта-Пола - Окрашивание, ламинирование и микропигментирование для идеальных бровей",
    },
  },
  techniques: null,
  benefits: [
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Perfectly defined brows without daily makeup",
        es: "Cejas perfectamente definidas sin maquillaje diario",
        ru: "Идеально оформленные брови без ежедневного макияжа",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Long-lasting results for 4-6 weeks",
        es: "Resultados duraderos de 4-6 semanas",
        ru: "Долговечные результаты на 4-6 недель",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Enhances and frames your face naturally",
        es: "Realza y enmarca tu rostro naturalmente",
        ru: "Подчеркивает и обрамляет ваше лицо естественно",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Customized solutions for every brow type",
        es: "Soluciones personalizadas para cada tipo de ceja",
        ru: "Индивидуальные решения для каждого типа бровей",
      },
    },
    {
      _type: "benefit",
      _key: key(),
      text: {
        en: "Save time on your daily beauty routine",
        es: "Ahorro de tiempo en tu rutina de belleza diaria",
        ru: "Экономия времени на ежедневную процедуру красоты",
      },
    },
  ],
  processSteps: [
    {
      _type: "processStep",
      _key: key(),
      title: { en: "Consultation", es: "Consulta", ru: "Консультация" },
      description: {
        en: "We assess your natural brow shape and discuss the desired result.",
        es: "Evaluamos la forma natural de tus cejas y discutimos el resultado deseado.",
        ru: "Оцениваем естественную форму ваших бровей и обсуждаем желаемый результат.",
      },
    },
    {
      _type: "processStep",
      _key: key(),
      title: { en: "Design", es: "Diseño", ru: "Дизайн" },
      description: {
        en: "We design the perfect shape that complements your face.",
        es: "Diseñamos la forma perfecta que complementa tu rostro.",
        ru: "Разрабатываем идеальную форму, которая дополняет ваше лицо.",
      },
    },
    {
      _type: "processStep",
      _key: key(),
      title: { en: "Application", es: "Aplicación", ru: "Нанесение" },
      description: {
        en: "We apply tinting, lamination or micropigmentation according to the chosen service.",
        es: "Aplicamos el tinte, laminación o micropigmentación según el servicio elegido.",
        ru: "Применяем окрашивание, ламинирование или микропигментирование в зависимости от выбранной услуги.",
      },
    },
    {
      _type: "processStep",
      _key: key(),
      title: { en: "Finishing", es: "Acabado", ru: "Завершение" },
      description: {
        en: "We review the result and give you care instructions.",
        es: "Revisamos el resultado y te damos instrucciones de cuidado.",
        ru: "Проверяем результат и даем инструкции по уходу.",
      },
    },
  ],
  aftercareTips: [
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Avoid getting brows wet for the first 24 hours",
        es: "Evita mojar las cejas durante las primeras 24 horas",
        ru: "Избегайте намокания бровей в течение первых 24 часов",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Don't use exfoliating products on the brow area",
        es: "No uses productos exfoliantes en la zona de las cejas",
        ru: "Не используйте отшелушивающие средства в области бровей",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Apply castor oil to keep the hair healthy",
        es: "Aplica aceite de ricino para mantener el pelo saludable",
        ru: "Наносите касторовое масло для поддержания здоровья волос",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Avoid direct sun exposure for the first 48 hours",
        es: "Evita exposición solar directa las primeras 48 horas",
        ru: "Избегайте прямого солнечного воздействия в первые 48 часов",
      },
    },
    {
      _type: "aftercareTip",
      _key: key(),
      text: {
        en: "Schedule your next appointment every 4-6 weeks to maintain the result",
        es: "Agenda tu próxima cita cada 4-6 semanas para mantener el resultado",
        ru: "Записывайтесь на следующий прием каждые 4-6 недель для поддержания результата",
      },
    },
  ],
  cta: {
    heading: {
      en: "Ready for perfect brows?",
      es: "¿Lista para unas cejas perfectas?",
      ru: "Готовы к идеальным бровям?",
    },
    subtitle: {
      en: "Book your appointment for brow design",
      es: "Reserva tu cita para diseño de cejas",
      ru: "Запишитесь на дизайн бровей",
    },
    button: {
      en: "Book via WhatsApp",
      es: "Reservar por WhatsApp",
      ru: "Записаться через WhatsApp",
    },
    message: {
      en: "Hello, I would like to book an appointment for brow design.",
      es: "Hola, me gustaría reservar una cita para diseño de cejas.",
      ru: "Здравствуйте, я хочу записаться на дизайн бровей.",
    },
  },
};

// ─── Patch all services ─────────────────────────────────────────────

const patches: Record<string, typeof lashExtensions> = {
  "lash-extensions": lashExtensions,
  manicure,
  pedicure,
  brows,
};

async function main() {
  console.log("🚀 Patching services with full content...\n");

  for (const [slug, data] of Object.entries(patches)) {
    // Find the document by slug
    const doc = await client.fetch<{ _id: string } | null>(
      `*[_type == "service" && slug.current == $slug][0]{ _id }`,
      { slug },
    );

    if (!doc) {
      console.error(`  ❌ Service "${slug}" not found!`);
      continue;
    }

    await client
      .patch(doc._id)
      .set({
        seo: data.seo,
        techniques: data.techniques,
        benefits: data.benefits,
        processSteps: data.processSteps,
        aftercareTips: data.aftercareTips,
        cta: data.cta,
      })
      .commit();

    console.log(`  ✅ Patched: ${slug}`);
  }

  console.log("\n✅ Done!");
}

main().catch((err) => {
  console.error("❌ Failed:", err);
  process.exit(1);
});
