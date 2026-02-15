<template>
  <section>
    <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">
      {{ title }}
    </h2>

    <div class="space-y-12">
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
              <span v-if="service.note" class="block text-sm text-gray-500 mt-1">
                {{ service.note }}
              </span>
            </dt>
            <dd class="text-[#6B5B52] font-bold text-lg ml-4 whitespace-nowrap">
              {{ service.price }}
            </dd>
          </div>
        </dl>

        <!-- CTA Section -->
        <div
          v-if="category.link || category.cta"
          class="px-6 py-6 bg-gray-50 border-t border-gray-100"
        >
          <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p v-if="category.cta" class="text-gray-700 text-sm">
              {{ category.cta }}
            </p>
            <NuxtLink
              v-if="category.link"
              :to="category.link"
              class="px-6 py-3 bg-[#FFC107] text-[#4A3A32] rounded-full text-sm font-semibold hover:bg-[#FFB300] transition-all shadow-md hover:shadow-lg whitespace-nowrap"
            >
              {{ category.linkText || "Learn More" }}
            </NuxtLink>
          </div>
        </div>
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
  link?: string;
  linkText?: string;
  cta?: string;
}

interface Props {
  title: string;
  categories: Category[];
}

defineProps<Props>();
</script>
