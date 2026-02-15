<script setup lang="ts">
// Deprecated: Use ReviewsSection.vue instead (Sanity-powered)
const testimonials: { id: number; quote: string; title: string; name: string }[] = [];
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reviews</h2>
        <p class="text-gray-600 max-w-2xl mx-auto"></p>
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
            <p class="text-gray-500 text-sm"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
