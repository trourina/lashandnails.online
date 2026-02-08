<template>
  <div>
    <Hero :title="title" :subtitle="subtitle" />

    <!-- Contact Info Cards -->
    <section class="container mx-auto px-4 py-12">
      <div class="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <DecorCircle color="gold" size="xl" top="-1.5rem" left="-1.5rem" />
        <DecorCircle color="cream" size="lg" bottom="-1rem" right="-1rem" />
        <!-- Phone -->
        <div class="bg-gray-50 rounded-3xl p-8 text-center">
          <div class="w-16 h-16 bg-[#6B5B52] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 class="font-display font-semibold text-gray-900 mb-2">{{ contactCardTitle("phone") }}</h3>
          <a :href="`tel:${settings.phone}`" class="text-gray-600 hover:text-[#6B5B52] transition-colors">
            {{ settings.phone }}
          </a>
        </div>

        <!-- Email -->
        <div class="bg-gray-50 rounded-3xl p-8 text-center">
          <div class="w-16 h-16 bg-[#6B5B52] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="font-display font-semibold text-gray-900 mb-2">{{ contactCardTitle("email") }}</h3>
          <a :href="`mailto:${settings.email}`" class="text-gray-600 hover:text-[#6B5B52] transition-colors">
            {{ settings.email }}
          </a>
        </div>

        <!-- Location -->
        <div class="bg-gray-50 rounded-3xl p-8 text-center">
          <div class="w-16 h-16 bg-[#6B5B52] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="font-display font-semibold text-gray-900 mb-2">{{ contactCardTitle("location") }}</h3>
          <p class="text-gray-600">{{ settings.address.street }}<br>{{ settings.address.city }}</p>
        </div>

        <!-- Hours -->
        <div class="bg-gray-50 rounded-3xl p-8 text-center">
          <div class="w-16 h-16 bg-[#6B5B52] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
          </div>
          <h3 class="font-display font-semibold text-gray-900 mb-2">{{ contactCardTitle("hours") }}</h3>
          <p class="text-gray-600 whitespace-pre-line">{{ contactCardValue("hours") }}</p>
        </div>
      </div>

      <!-- Map -->
      <div class="relative mb-16">
        <DecorCircle color="brown" size="lg" top="-1rem" right="-1rem" />
        <DecorCircle color="gold" size="md" bottom="-0.75rem" left="-0.75rem" />
        <LocationMap />
      </div>

      <!-- FAQ Section -->
      <FAQSection />
    </section>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const config = useRuntimeConfig();
const business = config.public.business;

const { data: pageData } = await useFetchContactPage();
const settings = useSiteSettings();
const s = (field: any) => getLocalized(field, locale.value);

const title = computed(() => s(pageData.value?.title));
const subtitle = computed(() => s(pageData.value?.subtitle));

function contactCardTitle(key: string): string {
  const card = pageData.value?.contactCards?.find((c) => c.key === key);
  return card ? s(card.title) : "";
}

function contactCardValue(key: string): string {
  const card = pageData.value?.contactCards?.find((c) => c.key === key);
  return card ? s(card.value) : "";
}

const faqItems = computed(() =>
  pageData.value?.faqs?.map((faq) => ({
    question: s(faq.question),
    answer: s(faq.answer),
  })) || []
);

useSeoMeta({
  title: () => s(pageData.value?.seo?.title),
  description: () => s(pageData.value?.seo?.description),
  ogTitle: () => s(pageData.value?.seo?.title),
  ogDescription: () => s(pageData.value?.seo?.description),
  ogType: "website",
  ogLocale: useOgLocale(),
});

useSchemaOrg([
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: () => t("breadcrumb.home"),
        item: business.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: () => title.value,
      },
    ],
  },
  {
    "@type": "ContactPage",
    name: () => s(pageData.value?.seo?.title),
    description: () => s(pageData.value?.seo?.description),
  },
  {
    "@type": "FAQPage",
    mainEntity: () =>
      faqItems.value.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
  },
]);
</script>
