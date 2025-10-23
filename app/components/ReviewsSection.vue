<script setup lang="ts">
const { t } = useI18n({ useScope: "local" });

const reviews = [
  {
    id: 1,
    quote: t("reviews.1.quote"),
    title: t("reviews.1.title"),
    name: t("reviews.1.name"),
  },
  {
    id: 2,
    quote: t("reviews.2.quote"),
    title: t("reviews.2.title"),
    name: t("reviews.2.name"),
  },
  {
    id: 3,
    quote: t("reviews.3.quote"),
    title: t("reviews.3.title"),
    name: t("reviews.3.name"),
  },
];
</script>

<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {{ t("title") }}
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          {{ t("description") }}
        </p>
      </div>

      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="bg-gray-50 rounded-2xl p-8 text-center"
        >
          <!-- Quote -->
          <p class="text-gray-600 text-sm leading-relaxed mb-6">
            {{ review.quote }}
          </p>

          <!-- Title -->
          <h3 class="font-display text-gray-900 font-semibold mb-8">
            {{ review.title }}
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
            <p class="text-gray-900 font-medium mb-1">{{ review.name }}</p>
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
    "title": "All The Happy Reviews",
    "description": "Read what our satisfied clients have to say about their beauty transformations and experiences at our salon.",
    "clientLabel": "Our Client",
    "reviews": {
      "1": {
        "quote": "Absolutely love my lash extensions! They look so natural and last for weeks. The team is professional and the salon is always clean.",
        "title": "Outstanding Support",
        "name": "Emily Thompson"
      },
      "2": {
        "quote": "Best nail salon in Santa Pola! The designs are creative and the quality is exceptional. I always leave feeling beautiful and confident.",
        "title": "Improved Productivity",
        "name": "Benjamin Reed"
      },
      "3": {
        "quote": "I highly recommend this salon to everyone! The atmosphere is relaxing, staff is friendly, and results are always perfect.",
        "title": "Highly Recommend",
        "name": "Rachel Johnson"
      }
    }
  },
  "es": {
    "title": "Todas Las Reseñas Felices",
    "description": "Lee lo que nuestros clientes satisfechos dicen sobre sus transformaciones de belleza y experiencias en nuestro salón.",
    "clientLabel": "Nuestro Cliente",
    "reviews": {
      "1": {
        "quote": "¡Me encantan mis extensiones de pestañas! Se ven tan naturales y duran semanas. El equipo es profesional y el salón siempre está limpio.",
        "title": "Soporte Excepcional",
        "name": "Emily Thompson"
      },
      "2": {
        "quote": "¡Mejor salón de uñas en Santa Pola! Los diseños son creativos y la calidad es excepcional. Siempre salgo sintiéndome hermosa y segura.",
        "title": "Productividad Mejorada",
        "name": "Benjamin Reed"
      },
      "3": {
        "quote": "¡Recomiendo este salón a todos! El ambiente es relajante, el personal es amable y los resultados son siempre perfectos.",
        "title": "Muy Recomendado",
        "name": "Rachel Johnson"
      }
    }
  },
  "ru": {
    "title": "Все Счастливые Отзывы",
    "description": "Читайте, что наши довольные клиенты говорят о своих преображениях и впечатлениях в нашем салоне.",
    "clientLabel": "Наш Клиент",
    "reviews": {
      "1": {
        "quote": "Обожаю свои наращенные ресницы! Они выглядят так естественно и держатся неделями. Команда профессиональная, а салон всегда чистый.",
        "title": "Выдающаяся Поддержка",
        "name": "Эмили Томпсон"
      },
      "2": {
        "quote": "Лучший салон ногтей в Санта-Поле! Дизайны креативные, а качество исключительное. Я всегда ухожу, чувствуя себя красивой и уверенной.",
        "title": "Улучшенная Продуктивность",
        "name": "Бенджамин Рид"
      },
      "3": {
        "quote": "Я настоятельно рекомендую этот салон всем! Атмосфера расслабляющая, персонал дружелюбный, а результаты всегда идеальные.",
        "title": "Очень Рекомендую",
        "name": "Рейчел Джонсон"
      }
    }
  }
}
</i18n>
