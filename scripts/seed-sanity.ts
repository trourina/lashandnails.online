/**
 * Seed Sanity CMS with existing site data.
 * Run: npx tsx scripts/seed-sanity.ts
 */
import { createClient } from "@sanity/client";
import { readFileSync } from "fs";
import { basename, extname } from "path";

const client = createClient({
  projectId: "4dsh8g5u",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

if (!process.env.SANITY_TOKEN) {
  console.error(
    "Missing SANITY_TOKEN. Create one at https://www.sanity.io/manage/project/4dsh8g5u/api#tokens"
  );
  console.error('Then run: SANITY_TOKEN="skXXXX..." npx tsx scripts/seed-sanity.ts');
  process.exit(1);
}

// ─── Upload image helper ────────────────────────────────────────────

async function uploadImage(filePath: string): Promise<string> {
  const buffer = readFileSync(filePath);
  const ext = extname(filePath).slice(1);
  const asset = await client.assets.upload("image", buffer, {
    filename: basename(filePath),
    contentType: `image/${ext === "jpg" ? "jpeg" : ext}`,
  });
  console.log(`  Uploaded: ${basename(filePath)} → ${asset._id}`);
  return asset._id;
}

// ─── Hero images ────────────────────────────────────────────────────

async function seedHeroImages() {
  console.log("\n📸 Seeding hero images...");

  const heroes = [
    { file: "public/hero/manicure.jpg", category: "manicure", alt: { en: "Manicure", es: "Manicura", ru: "Маникюр" } },
    { file: "public/hero/pedicure.jpg", category: "pedicure", alt: { en: "Pedicure", es: "Pedicura", ru: "Педикюр" } },
    { file: "public/hero/lashes.jpg", category: "lashes", alt: { en: "Lash Extensions", es: "Extensiones de pestañas", ru: "Наращивание ресниц" } },
    { file: "public/hero/brows.jpg", category: "brows", alt: { en: "Brows", es: "Cejas", ru: "Брови" } },
  ];

  for (let i = 0; i < heroes.length; i++) {
    const h = heroes[i];
    const assetId = await uploadImage(h.file);
    await client.create({
      _type: "heroImage",
      image: { _type: "image", asset: { _type: "reference", _ref: assetId } },
      alt: h.alt,
      category: h.category,
      order: i + 1,
    });
    console.log(`  Created heroImage: ${h.category}`);
  }
}

// ─── Gallery images ─────────────────────────────────────────────────

async function seedGalleryImages() {
  console.log("\n🖼️  Seeding gallery images...");

  const galleries = [
    // Manicure (9 images)
    ...Array.from({ length: 9 }, (_, i) => ({
      file: `public/gallery/manicure/large/${i + 1}.jpg`,
      category: "manicure",
      alt: { en: `Manicure work ${i + 1}`, es: `Trabajo de manicura ${i + 1}`, ru: `Работа маникюр ${i + 1}` },
    })),
    // Pedicure (4 images)
    ...Array.from({ length: 4 }, (_, i) => ({
      file: `public/gallery/pedicure/large/${i + 1}.jpg`,
      category: "pedicure",
      alt: { en: `Pedicure work ${i + 1}`, es: `Trabajo de pedicura ${i + 1}`, ru: `Работа педикюр ${i + 1}` },
    })),
    // Lashes — placeholder (reuse manicure images for now)
    ...Array.from({ length: 3 }, (_, i) => ({
      file: `public/gallery/manicure/large/${i + 1}.jpg`,
      category: "lashes",
      alt: { en: `Lash extensions ${i + 1}`, es: `Extensiones de pestañas ${i + 1}`, ru: `Наращивание ресниц ${i + 1}` },
    })),
    // Brows — placeholder (reuse pedicure images for now)
    ...Array.from({ length: 3 }, (_, i) => ({
      file: `public/gallery/pedicure/large/${i + 1}.jpg`,
      category: "brows",
      alt: { en: `Brow design ${i + 1}`, es: `Diseño de cejas ${i + 1}`, ru: `Дизайн бровей ${i + 1}` },
    })),
  ];

  let order = 1;
  for (const g of galleries) {
    try {
      const assetId = await uploadImage(g.file);
      await client.create({
        _type: "galleryImage",
        image: { _type: "image", asset: { _type: "reference", _ref: assetId } },
        alt: g.alt,
        category: g.category,
        order: order++,
      });
      console.log(`  Created galleryImage: ${g.category} #${order - 1}`);
    } catch (e: any) {
      console.warn(`  Skipped ${g.file}: ${e.message}`);
    }
  }
}

// ─── Services ───────────────────────────────────────────────────────

async function seedServices() {
  console.log("\n💅 Seeding services...");

  const services = [
    {
      slug: "lash-extensions",
      title: { en: "Lash Extensions", es: "Extensiones de Pestañas", ru: "Наращивание ресниц" },
      subtitle: { en: "Natural and voluminous look with advanced techniques", es: "Mirada natural y voluminosa con técnicas avanzadas", ru: "Естественный и объемный взгляд с передовыми техниками" },
      description: { en: "Lash extensions are a safe and effective way to enhance your look naturally.", es: "Las extensiones de pestañas son una forma segura y efectiva de realzar tu mirada.", ru: "Наращивание ресниц - безопасный и эффективный способ подчеркнуть ваш взгляд." },
      category: "lashes",
      offers: [
        { name: { en: "Classic Extensions", es: "Extensiones Clásicas", ru: "Классическое наращивание" }, description: { en: "Natural-looking lash extensions (1.5-2 hours)", es: "Extensiones de pestañas de aspecto natural", ru: "Естественные ресницы для повседневной элегантности" }, price: "35" },
        { name: { en: "2D Extensions", es: "Extensiones 2D", ru: "2D наращивание" }, description: { en: "Volume lash extensions for fuller look", es: "Extensiones de volumen para un look más lleno", ru: "Объемное наращивание для более полного вида" }, price: "40" },
        { name: { en: "3D Extensions", es: "Extensiones 3D", ru: "3D наращивание" }, description: { en: "Maximum volume and dramatic effect", es: "Máximo volumen y efecto dramático", ru: "Максимальный объем и драматический эффект" }, price: "45" },
        { name: { en: "Lash Tinting", es: "Tinte de Pestañas", ru: "Окрашивание ресниц" }, description: { en: "Enhance your natural lashes with tinting", es: "Realza tus pestañas naturales con tinte", ru: "Подчеркните свои натуральные ресницы окрашиванием" }, price: "10" },
        { name: { en: "Lash Lamination", es: "Laminación de Pestañas", ru: "Ламинирование ресниц" }, description: { en: "Lamination with tinting for lifted lashes", es: "Laminación con tinte para pestañas levantadas", ru: "Ламинирование с окрашиванием для поднятых ресниц" }, price: "35" },
      ],
      order: 1,
    },
    {
      slug: "manicure",
      title: { en: "Manicure", es: "Manicura", ru: "Маникюр" },
      subtitle: { en: "Professional manicure services with premium products", es: "Servicios profesionales de manicura con productos premium", ru: "Профессиональные услуги маникюра с премиальными продуктами" },
      description: { en: "Our manicure services combine professional techniques with high-quality products.", es: "Nuestros servicios de manicura combinan técnicas profesionales con productos de alta calidad.", ru: "Наши услуги маникюра сочетают профессиональные техники с высококачественными продуктами." },
      category: "manicure",
      offers: [
        { name: { en: "Hygienic Manicure (Women)", es: "Manicura Higiénica (Mujer)", ru: "Гигиенический маникюр (Женский)" }, description: { en: "Basic manicure with nail care", es: "Manicura básica con cuidado de uñas", ru: "Базовый маникюр с уходом за ногтями" }, price: "20" },
        { name: { en: "Manicure with Coating", es: "Manicura con Esmaltado", ru: "Маникюр с покрытием" }, description: { en: "Manicure with gel polish", es: "Manicura con esmalte gel", ru: "Маникюр с гель-лаком" }, price: "35" },
        { name: { en: "French Manicure", es: "Manicura Francesa", ru: "Французский маникюр" }, description: { en: "Classic French manicure style", es: "Estilo clásico de manicura francesa", ru: "Классический стиль французского маникюра" }, price: "45" },
        { name: { en: "Men's Manicure", es: "Manicura para Hombres", ru: "Мужской маникюр" }, description: { en: "Professional nail care for men", es: "Cuidado profesional de uñas para hombres", ru: "Профессиональный уход за ногтями для мужчин" }, price: "25" },
        { name: { en: "Gel Extension", es: "Extensión con Gel", ru: "Наращивание гелем" }, description: { en: "Nail extension with gel", es: "Extensión de uñas con gel", ru: "Наращивание ногтей гелем" }, price: "60" },
      ],
      order: 2,
    },
    {
      slug: "pedicure",
      title: { en: "Pedicure", es: "Pedicura", ru: "Педикюр" },
      subtitle: { en: "Professional pedicure services for healthy, beautiful feet", es: "Servicios profesionales de pedicura para pies saludables", ru: "Профессиональные услуги педикюра для здоровых и красивых ног" },
      description: { en: "Our pedicure services combine professional techniques with high-quality products.", es: "Nuestros servicios de pedicura combinan técnicas profesionales con productos de alta calidad.", ru: "Наши услуги педикюра сочетают профессиональные техники с высококачественными продуктами." },
      category: "pedicure",
      offers: [
        { name: { en: "Hygienic Pedicure (Women)", es: "Pedicura Higiénica (Mujer)", ru: "Гигиенический педикюр (Женский)" }, description: { en: "Complete pedicure treatment", es: "Tratamiento completo de pedicura", ru: "Полный курс педикюра" }, price: "45" },
        { name: { en: "Pedicure with Coating", es: "Pedicura con Esmaltado", ru: "Педикюр с покрытием" }, description: { en: "Pedicure with gel polish", es: "Pedicura con esmalte gel", ru: "Педикюр с гель-лаком" }, price: "55" },
        { name: { en: "Men's Pedicure", es: "Pedicura para Hombres", ru: "Мужской педикюр" }, description: { en: "Professional foot care for men", es: "Cuidado profesional de pies para hombres", ru: "Профессиональный уход за ногами для мужчин" }, price: "50" },
        { name: { en: "Spa Foot Care", es: "Cuidado Spa de Pies", ru: "Спа-уход за ногами" }, description: { en: "Relaxing spa treatment for feet", es: "Tratamiento spa relajante para pies", ru: "Расслабляющая спа-процедура для ног" }, price: "20" },
      ],
      order: 3,
    },
    {
      slug: "brows",
      title: { en: "Brows", es: "Cejas", ru: "Брови" },
      subtitle: { en: "Professional brow shaping, tinting and lamination", es: "Diseño profesional de cejas, tinte y laminación", ru: "Профессиональный дизайн, окрашивание и ламинирование бровей" },
      description: { en: "Our brow services are designed to enhance your look with professional techniques.", es: "Nuestros servicios de cejas están diseñados para realzar tu mirada.", ru: "Наши услуги по бровям разработаны для улучшения вашего образа." },
      category: "brows",
      offers: [
        { name: { en: "Brow Tinting", es: "Tinte de Cejas", ru: "Окрашивание бровей" }, description: { en: "Professional brow tinting", es: "Tinte profesional de cejas", ru: "Профессиональное окрашивание бровей" }, price: "10" },
        { name: { en: "Tinting + Correction", es: "Tinte + Corrección", ru: "Окрашивание + коррекция" }, description: { en: "Brow shaping and tinting", es: "Diseño y tinte de cejas", ru: "Оформление и окрашивание бровей" }, price: "15" },
        { name: { en: "Brow Lamination", es: "Laminación de Cejas", ru: "Ламинирование бровей" }, description: { en: "Lamination with correction and tinting", es: "Laminación con corrección y tinte", ru: "Ламинирование с коррекцией и окрашиванием" }, price: "35" },
        { name: { en: "Brow Micropigmentation", es: "Micropigmentación de Cejas", ru: "Микропигментирование бровей" }, description: { en: "Semi-permanent brow micropigmentation", es: "Micropigmentación semipermanente de cejas", ru: "Полуперманентное микропигментирование бровей" }, price: "120" },
      ],
      order: 4,
    },
  ];

  for (const svc of services) {
    const offerDocs = svc.offers.map((o) => ({
      _type: "offer",
      _key: Math.random().toString(36).slice(2, 10),
      name: o.name,
      description: o.description,
      price: o.price,
    }));

    await client.create({
      _type: "service",
      slug: { _type: "slug", current: svc.slug },
      title: svc.title,
      subtitle: svc.subtitle,
      description: svc.description,
      category: svc.category,
      offers: offerDocs,
      order: svc.order,
    });
    console.log(`  Created service: ${svc.slug}`);
  }
}

// ─── Testimonials ───────────────────────────────────────────────────

async function seedTestimonials() {
  console.log("\n⭐ Seeding testimonials...");

  const testimonials = [
    {
      clientName: "Emily Thompson",
      title: { en: "Outstanding Support", es: "Soporte Excepcional", ru: "Выдающаяся Поддержка" },
      quote: {
        en: "Absolutely love my lash extensions! They look so natural and last for weeks. The team is professional and the salon is always clean.",
        es: "¡Me encantan mis extensiones de pestañas! Se ven tan naturales y duran semanas. El equipo es profesional y el salón siempre está limpio.",
        ru: "Обожаю свои наращенные ресницы! Они выглядят так естественно и держатся неделями. Команда профессиональная, а салон всегда чистый.",
      },
      rating: 5,
      order: 1,
    },
    {
      clientName: "Benjamin Reed",
      title: { en: "Improved Productivity", es: "Productividad Mejorada", ru: "Улучшенная Продуктивность" },
      quote: {
        en: "Best nail salon in Santa Pola! The designs are creative and the quality is exceptional. I always leave feeling beautiful and confident.",
        es: "¡Mejor salón de uñas en Santa Pola! Los diseños son creativos y la calidad es excepcional. Siempre salgo sintiéndome hermosa y segura.",
        ru: "Лучший салон ногтей в Санта-Поле! Дизайны креативные, а качество исключительное. Я всегда ухожу, чувствуя себя красивой и уверенной.",
      },
      rating: 5,
      order: 2,
    },
    {
      clientName: "Rachel Johnson",
      title: { en: "Highly Recommend", es: "Muy Recomendado", ru: "Очень Рекомендую" },
      quote: {
        en: "I highly recommend this salon to everyone! The atmosphere is relaxing, staff is friendly, and results are always perfect.",
        es: "¡Recomiendo este salón a todos! El ambiente es relajante, el personal es amable y los resultados son siempre perfectos.",
        ru: "Я настоятельно рекомендую этот салон всем! Атмосфера расслабляющая, персонал дружелюбный, а результаты всегда идеальные.",
      },
      rating: 5,
      order: 3,
    },
  ];

  for (const t of testimonials) {
    await client.create({ _type: "testimonial", ...t });
    console.log(`  Created testimonial: ${t.clientName}`);
  }
}

// ─── FAQ ────────────────────────────────────────────────────────────

async function seedFAQs() {
  console.log("\n❓ Seeding FAQs...");

  const faqs = [
    {
      question: { en: "Where is Lash & Nails Santa Pola located?", es: "¿Dónde está ubicado Lash & Nails Santa Pola?", ru: "Где находится Lash & Nails Santa Pola?" },
      answer: { en: "We are located at Carrer Major, 8, 03130 Santa Pola, Alicante, Spain.", es: "Estamos ubicados en Carrer Major, 8, 03130 Santa Pola, Alicante, España.", ru: "Мы находимся по адресу Carrer Major, 8, 03130 Santa Pola, Alicante, Испания." },
      order: 1,
    },
    {
      question: { en: "What are your opening hours?", es: "¿Cuál es el horario de atención?", ru: "Какие у вас часы работы?" },
      answer: { en: "We are open Monday to Friday from 09:30 to 20:00 and Saturday from 10:00 to 14:00. We are closed on Sundays.", es: "Estamos abiertos de lunes a viernes de 09:30 a 20:00 y los sábados de 10:00 a 14:00. Cerramos los domingos.", ru: "Мы работаем с понедельника по пятницу с 09:30 до 20:00 и в субботу с 10:00 до 14:00. Воскресенье - выходной." },
      order: 2,
    },
    {
      question: { en: "How can I make an appointment?", es: "¿Cómo puedo hacer una cita?", ru: "Как записаться на прием?" },
      answer: { en: "You can call us at +34604316778, send us a WhatsApp message, or contact us on Telegram (Irina_STS).", es: "Puedes llamarnos al +34604316778, enviarnos un mensaje por WhatsApp o contactarnos por Telegram (Irina_STS).", ru: "Вы можете позвонить нам по телефону +34604316778, отправить сообщение в WhatsApp или связаться через Telegram (Irina_STS)." },
      order: 3,
    },
    {
      question: { en: "What areas do you serve?", es: "¿A qué zonas dan servicio?", ru: "Какие районы вы обслуживаете?" },
      answer: { en: "We serve Santa Pola, Elche, Guardamar del Segura, Alicante, and surrounding areas.", es: "Damos servicio a Santa Pola, Elche, Guardamar del Segura, Alicante y zonas cercanas.", ru: "Мы обслуживаем Santa Pola, Elche, Guardamar del Segura, Alicante и прилегающие районы." },
      order: 4,
    },
  ];

  for (const f of faqs) {
    await client.create({ _type: "faqItem", ...f });
    console.log(`  Created FAQ: ${f.question.en.slice(0, 40)}...`);
  }
}

// ─── Main ───────────────────────────────────────────────────────────

async function main() {
  console.log("🚀 Seeding Sanity CMS...\n");

  await seedHeroImages();
  await seedGalleryImages();
  await seedServices();
  await seedTestimonials();
  await seedFAQs();

  console.log("\n✅ Done! All content seeded.");
}

main().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
