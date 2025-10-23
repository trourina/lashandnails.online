<template>
  <section>
    <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">
      {{ title }}
    </h2>

    <div class="space-y-8">
      <article
        v-for="category in categories"
        :key="category.name"
        class="overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
      >
        <header class="bg-[#6B5B52] text-white px-6 py-4">
          <h3 class="font-display text-xl md:text-2xl font-semibold">
            {{ category.name }}
          </h3>
        </header>

        <dl class="divide-y divide-gray-100">
          <div
            v-for="service in category.services"
            :key="service.name"
            class="flex justify-between items-baseline px-6 py-4 hover:bg-gray-50 transition-colors"
          >
            <dt class="flex-1 text-gray-800 text-base">
              <span class="font-medium">{{ service.name }}</span>
              <span
                v-if="service.note"
                class="block text-sm text-gray-500 mt-1"
              >
                {{ service.note }}
              </span>
            </dt>
            <dd
              class="text-[#6B5B52] font-bold text-lg ml-4 whitespace-nowrap"
            >
              {{ service.price }}
            </dd>
          </div>
        </dl>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Service {
  name: string;
  note?: string;
  price: string;
}

interface Category {
  name: string;
  services: Service[];
}

interface Props {
  title: string;
  categories: Category[];
}

defineProps<Props>();
</script>
