<script setup lang="ts">
const { t } = useI18n({ useScope: "local" });

// Placeholder testimonials - can be replaced with real data later
const testimonials = [
  {
    id: 1,
    quote: t("testimonials.1.quote"),
    title: t("testimonials.1.title"),
    name: t("testimonials.1.name"),
    image: "/images/placeholder-avatar.jpg",
  },
  {
    id: 2,
    quote: t("testimonials.2.quote"),
    title: t("testimonials.2.title"),
    name: t("testimonials.2.name"),
    image: "/images/placeholder-avatar.jpg",
  },
  {
    id: 3,
    quote: t("testimonials.3.quote"),
    title: t("testimonials.3.title"),
    name: t("testimonials.3.name"),
    image: "/images/placeholder-avatar.jpg",
  },
  {
    id: 4,
    quote: t("testimonials.4.quote"),
    title: t("testimonials.4.title"),
    name: t("testimonials.4.name"),
    image: "/images/placeholder-avatar.jpg",
  },
  {
    id: 5,
    quote: t("testimonials.5.quote"),
    title: t("testimonials.5.title"),
    name: t("testimonials.5.name"),
    image: "/images/placeholder-avatar.jpg",
  },
  {
    id: 6,
    quote: t("testimonials.6.quote"),
    title: t("testimonials.6.title"),
    name: t("testimonials.6.name"),
    image: "/images/placeholder-avatar.jpg",
  },
];
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ t("sectionTitle") }}
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          {{ t("sectionDescription") }}
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
        >
          <!-- Quote -->
          <p class="text-gray-600 text-sm leading-relaxed mb-6 text-center">
            {{ testimonial.quote }}
          </p>

          <!-- Title -->
          <h3 class="font-display text-gray-900 font-semibold text-center mb-6">
            {{ testimonial.title }}
          </h3>

          <!-- Client Info -->
          <div class="flex flex-col items-center">
            <!-- Avatar -->
            <div
              class="w-20 h-20 rounded-full bg-gradient-to-br from-[#E8D5C4] to-[#D4C4B4] mb-4 flex items-center justify-center overflow-hidden"
            >
              <div class="w-16 h-16 rounded-full bg-white/50" />
            </div>

            <!-- Name -->
            <p class="text-gray-900 font-medium">{{ testimonial.name }}</p>
            <!-- Label -->
            <p class="text-gray-500 text-sm">{{ t("clientLabel") }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "en": {
    "sectionTitle": "What Our Clients Say",
    "sectionDescription": "Read testimonials from our satisfied clients who love our beauty services",
    "clientLabel": "Our Client",
    "testimonials": {
      "1": {
        "quote": "Amazing service! The lash extensions look so natural and beautiful. I've received so many compliments. Highly recommend!",
        "title": "Outstanding Support",
        "name": "Emily Thompson"
      },
      "2": {
        "quote": "Professional and talented team. My nails have never looked better. The attention to detail is incredible!",
        "title": "Improved Productivity",
        "name": "Benjamin Reed"
      },
      "3": {
        "quote": "I always leave feeling pampered and beautiful. The atmosphere is relaxing and the staff is wonderful!",
        "title": "Highly Recommend",
        "name": "Rachel Johnson"
      },
      "4": {
        "quote": "Best beauty salon in Santa Pola! The quality of work is exceptional and prices are very reasonable.",
        "title": "Great Service",
        "name": "Elizabeth Davis"
      },
      "5": {
        "quote": "Clean, professional, and friendly. My go-to place for all beauty treatments. Worth every penny!",
        "title": "High Quality",
        "name": "Amara Liu"
      },
      "6": {
        "quote": "The lash lift and tint exceeded my expectations. I'll definitely be coming back regularly!",
        "title": "Worth To Buy",
        "name": "Anna Martinez"
      }
    }
  },
  "es": {
    "sectionTitle": "Lo Que Dicen Nuestros Clientes",
    "sectionDescription": "Lee testimonios de nuestros clientes satisfechos que aman nuestros servicios de belleza",
    "clientLabel": "Nuestro Cliente",
    "testimonials": {
      "1": {
        "quote": "¡Servicio increíble! Las extensiones de pestañas se ven tan naturales y hermosas. He recibido muchos cumplidos. ¡Muy recomendado!",
        "title": "Soporte Excepcional",
        "name": "Emily Thompson"
      },
      "2": {
        "quote": "Equipo profesional y talentoso. Mis uñas nunca se han visto mejor. ¡La atención al detalle es increíble!",
        "title": "Productividad Mejorada",
        "name": "Benjamin Reed"
      },
      "3": {
        "quote": "Siempre salgo sintiéndome mimada y hermosa. ¡El ambiente es relajante y el personal es maravilloso!",
        "title": "Muy Recomendado",
        "name": "Rachel Johnson"
      },
      "4": {
        "quote": "¡Mejor salón de belleza en Santa Pola! La calidad del trabajo es excepcional y los precios son muy razonables.",
        "title": "Excelente Servicio",
        "name": "Elizabeth Davis"
      },
      "5": {
        "quote": "Limpio, profesional y amigable. Mi lugar favorito para todos los tratamientos de belleza. ¡Vale cada centavo!",
        "title": "Alta Calidad",
        "name": "Amara Liu"
      },
      "6": {
        "quote": "¡El lifting de pestañas superó mis expectativas! ¡Definitivamente volveré regularmente!",
        "title": "Vale La Pena",
        "name": "Anna Martinez"
      }
    }
  },
  "ru": {
    "sectionTitle": "Что Говорят Наши Клиенты",
    "sectionDescription": "Читайте отзывы наших довольных клиентов, которые любят наши услуги красоты",
    "clientLabel": "Наш Клиент",
    "testimonials": {
      "1": {
        "quote": "Потрясающий сервис! Наращивание ресниц выглядит так естественно и красиво. Я получила так много комплиментов. Очень рекомендую!",
        "title": "Выдающаяся Поддержка",
        "name": "Эмили Томпсон"
      },
      "2": {
        "quote": "Профессиональная и талантливая команда. Мои ногти никогда не выглядели лучше. Внимание к деталям невероятное!",
        "title": "Улучшенная Продуктивность",
        "name": "Бенджамин Рид"
      },
      "3": {
        "quote": "Я всегда ухожу с чувством заботы и красоты. Атмосфера расслабляющая, а персонал замечательный!",
        "title": "Очень Рекомендую",
        "name": "Рейчел Джонсон"
      },
      "4": {
        "quote": "Лучший салон красоты в Санта-Поле! Качество работы исключительное, а цены очень разумные.",
        "title": "Отличный Сервис",
        "name": "Элизабет Дэвис"
      },
      "5": {
        "quote": "Чисто, профессионально и дружелюбно. Мое любимое место для всех косметических процедур. Стоит каждой копейки!",
        "title": "Высокое Качество",
        "name": "Амара Лю"
      },
      "6": {
        "quote": "Ламинирование ресниц превзошло мои ожидания. Я определенно буду возвращаться регулярно!",
        "title": "Стоит Покупки",
        "name": "Анна Мартинес"
      }
    }
  }
}
</i18n>
