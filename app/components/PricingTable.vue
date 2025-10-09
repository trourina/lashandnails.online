<template>
  <section class="pricing-section">
    <h2 class="font-display text-3xl mb-8">{{ title }}</h2>

    <div class="pricing-categories space-y-12">
      <article
        v-for="category in categories"
        :key="category.name"
        class="pricing-category"
      >
        <header class="category-header">
          <h3 class="font-display text-2xl">{{ category.name }}</h3>
        </header>

        <dl class="services-list">
          <div
            v-for="service in category.services"
            :key="service.name"
            class="service-item"
          >
            <dt class="service-name">
              {{ service.name }}
              <span v-if="service.note" class="service-note">{{ service.note }}</span>
            </dt>
            <dd class="service-price">{{ service.price }}</dd>
          </div>
        </dl>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Service {
  name: string
  note?: string
  price: string
}

interface Category {
  name: string
  services: Service[]
}

interface Props {
  title: string
  categories: Category[]
}

defineProps<Props>()
</script>

<style scoped>
.pricing-section {
  @apply max-w-4xl mx-auto px-4 py-8;
}

.pricing-categories {
  @apply space-y-12;
}

.pricing-category {
  @apply border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm;
}

.category-header {
  @apply bg-black text-white px-6 py-3 text-center;
}

.category-header h3 {
  @apply text-xl md:text-2xl font-normal tracking-wide;
}

.services-list {
  @apply divide-y divide-gray-200;
}

.service-item {
  @apply flex justify-between items-baseline px-6 py-4 hover:bg-gray-50 transition-colors;
}

.service-name {
  @apply flex-1 text-gray-800 text-base md:text-lg;
}

.service-note {
  @apply block text-sm text-gray-600 mt-1;
}

.service-price {
  @apply text-gray-900 font-semibold text-lg md:text-xl ml-4 whitespace-nowrap;
}
</style>
