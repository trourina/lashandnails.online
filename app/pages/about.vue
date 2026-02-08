<template>
  <div>
    <Hero :title="title" :subtitle="subtitle" />

    <!-- Our Story Section -->
    <section class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          {{ storyHeading }}
        </h2>
        <div class="space-y-6 text-gray-600 leading-relaxed text-lg">
          <p v-for="(paragraph, index) in storyParagraphs" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </section>

    <!-- Philosophy Section -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {{ philosophyHeading }}
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed italic">
            {{ philosophyDescription }}
          </p>
        </div>
      </div>
    </section>

    <!-- Expertise Section -->
    <section class="container mx-auto px-4 py-16">
      <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        {{ expertiseHeading }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <article
          v-for="(item, index) in expertiseItems"
          :key="index"
          class="bg-white border border-gray-200 rounded-3xl p-8 text-center hover:shadow-lg transition-shadow"
        >
          <div class="text-5xl mb-4">{{ item.icon }}</div>
          <h3 class="font-display text-xl font-semibold text-gray-900 mb-3">
            {{ item.title }}
          </h3>
          <p class="text-gray-600 leading-relaxed">{{ item.description }}</p>
        </article>
      </div>
    </section>

    <!-- Values Section -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {{ valuesHeading }}
        </h2>
        <div class="max-w-4xl mx-auto space-y-6">
          <div
            v-for="(value, index) in valuesItems"
            :key="index"
            class="bg-white rounded-3xl p-8 border border-gray-200"
          >
            <h3 class="font-display text-xl font-semibold text-[#6B5B52] mb-3">
              {{ value.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <CTASection
      :heading="ctaHeading"
      :subtitle="ctaSubtitle"
      :message="ctaMessage"
      :primary-button="ctaButton"
      :secondary-button="ctaServices"
      secondary-button-link="/services"
    />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const config = useRuntimeConfig();
const business = config.public.business;

const { data: pageData } = useFetchAboutPage();
const s = (field: any) => getLocalized(field, locale.value);

const title = computed(() => s(pageData.value?.title));
const subtitle = computed(() => s(pageData.value?.subtitle));
const storyHeading = computed(() => s(pageData.value?.storyHeading));
const philosophyHeading = computed(() => s(pageData.value?.philosophyHeading));
const philosophyDescription = computed(() => s(pageData.value?.philosophyDescription));
const expertiseHeading = computed(() => s(pageData.value?.expertiseHeading));
const valuesHeading = computed(() => s(pageData.value?.valuesHeading));

const storyParagraphs = computed(() =>
  pageData.value?.storyParagraphs?.map((p) => s(p.text)).filter(Boolean) || []
);

const expertiseItems = computed(() =>
  pageData.value?.expertiseItems?.map((item) => ({
    icon: item.icon,
    title: s(item.title),
    description: s(item.description),
  })) || []
);

const valuesItems = computed(() =>
  pageData.value?.valuesItems?.map((item) => ({
    title: s(item.title),
    description: s(item.description),
  })) || []
);

const ctaHeading = computed(() => s(pageData.value?.cta?.heading));
const ctaSubtitle = computed(() => s(pageData.value?.cta?.subtitle));
const ctaButton = computed(() => s(pageData.value?.cta?.button));
const ctaServices = computed(() => s(pageData.value?.cta?.services));
const ctaMessage = computed(() => s(pageData.value?.cta?.message));

useSeoMeta({
  title: () => s(pageData.value?.seo?.title),
  description: () => s(pageData.value?.seo?.description),
  ogTitle: () => s(pageData.value?.seo?.title),
  ogDescription: () => s(pageData.value?.seo?.description),
  ogType: "website",
  ogLocale: () =>
    locale.value === "es" ? "es_ES" : locale.value === "ru" ? "ru_RU" : "en_US",
});

useSchemaOrg([
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
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
    "@type": "AboutPage",
    name: () => s(pageData.value?.seo?.title),
    description: () => s(pageData.value?.seo?.description),
  },
]);
</script>
