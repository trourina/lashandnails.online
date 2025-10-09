<template>
  <section class="">
    <h2 class="font-display text-3xl mb-8">{{ title }}</h2>

    <div class="space-y-12">
      <article
        v-for="category in categories"
        :key="category.name"
        class="border border-gray-300 overflow-hidden bg-white"
      >
        <header class="bg-black text-white px-6 py-3">
          <h3
            class="font-display text-xl md:text-2xl font-normal tracking-wide"
          >
            {{ category.name }}
          </h3>
        </header>

        <dl class="divide-y divide-gray-200">
          <div
            v-for="service in category.services"
            :key="service.name"
            class="flex justify-between items-baseline px-6 py-4 hover:bg-gray-50 transition-colors"
          >
            <dt class="flex-1 text-gray-800 text-base md:text-lg">
              {{ service.name }}
              <span
                v-if="service.note"
                class="block text-sm text-gray-600 mt-1"
                >{{ service.note }}</span
              >
            </dt>
            <dd
              class="text-gray-900 font-semibold text-lg md:text-xl ml-4 whitespace-nowrap"
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
