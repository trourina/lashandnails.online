<template>
  <section aria-labelledby="faq-heading" class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <!-- Left Side - Heading and Description -->
        <div class="lg:pr-8 relative">
          <DecorCircle color="gold" size="xl" top="-1.5rem" left="-2rem" />
          <h2
            id="faq-heading"
            class="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {{ heading || s(homePage?.faqHeading) }}
          </h2>
          <p class="text-gray-600 text-lg leading-relaxed mb-6">
            {{ description || s(homePage?.faqDescription) }}
          </p>
        </div>

        <!-- Right Side - FAQ Items -->
        <div class="relative space-y-4">
          <DecorCircle color="cream" size="lg" bottom="-1rem" right="-1rem" />
          <details
            v-for="(faq, index) in faqs"
            :key="index"
            class="group bg-[#F5F1EC] rounded-3xl overflow-hidden transition-all"
          >
            <summary
              class="flex items-center gap-4 cursor-pointer px-6 py-5 font-display text-gray-800 text-lg list-none"
            >
              <div
                class="flex-shrink-0 w-8 h-8 rounded-full bg-[#6B5B52] flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 text-white transition-transform group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <span class="flex-1">{{ faq.question }}</span>
            </summary>
            <div class="px-6 pb-6 pl-[4.5rem] text-gray-600 leading-relaxed">
              {{ faq.answer }}
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  heading?: string;
  description?: string;
}

defineProps<Props>();

const { locale } = useI18n();

// Fetch FAQs from Sanity
const { data: sanityFAQs } = await useFetchFAQs();

// Fetch homepage labels from Sanity (for heading/description defaults)
const { data: homePage } = await useFetchHomePage();
const s = (field: Parameters<typeof getLocalized>[0]) => getLocalized(field, locale.value);

const faqs = computed(() => {
  if (!sanityFAQs.value?.length) return [];
  return sanityFAQs.value.map((item) => ({
    question: getLocalized(item.question, locale.value),
    answer: getLocalized(item.answer, locale.value),
  }));
});
</script>
