<template>
  <div class="min-h-screen bg-gray-50">
    <Hero :title="s(sanityService?.title)" :subtitle="s(sanityService?.subtitle)" />

    <div class="container mx-auto max-w-5xl px-4 py-12 space-y-16">
      <Breadcrumb :items="breadcrumbs" />
      <!-- Overview -->
      <section aria-labelledby="overview" class="relative bg-white rounded-2xl p-8 shadow-sm">
        <DecorCircle color="cream" size="lg" top="-1rem" right="-1rem" />
        <h2 id="overview" class="font-display text-3xl font-bold text-gray-900 mb-4">
          {{ t("servicePage.overview") }}
        </h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          {{ s(sanityService?.description) }}
        </p>
      </section>

      <!-- Pricing Section -->
      <section aria-labelledby="pricing" class="relative bg-white rounded-2xl p-8 shadow-sm">
        <DecorCircle color="gold" size="xl" bottom="-1.5rem" left="-1.5rem" />
        <h2 id="pricing" class="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
          {{ t("servicePage.pricing") }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="(offer, index) in translatedOffers"
            :key="index"
            class="border-2 border-gray-200 rounded-xl p-6 hover:border-[#6B5B52] hover:shadow-md transition-all"
          >
            <h3 class="font-display text-xl font-semibold text-gray-900 mb-2">
              {{ offer.name }}
            </h3>
            <p class="text-gray-600 text-sm mb-4">
              {{ offer.description }}
            </p>
            <div class="flex items-baseline">
              <span class="text-3xl font-bold text-[#6B5B52]">€{{ offer.price }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits -->
      <section aria-labelledby="benefits" class="relative bg-white rounded-2xl p-8 shadow-sm">
        <DecorCircle color="brown" size="md" top="-0.75rem" left="-0.75rem" />
        <h2 id="benefits" class="font-display text-3xl font-bold text-gray-900 mb-6">
          {{ t("servicePage.benefits") }}
        </h2>
        <ul class="space-y-3">
          <li v-for="(benefit, index) in benefits" :key="index" class="flex items-start">
            <svg class="w-6 h-6 text-[#6B5B52] flex-shrink-0 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
            <span class="text-gray-700 text-lg">{{ benefit }}</span>
          </li>
        </ul>
      </section>

      <!-- Process -->
      <section aria-labelledby="process">
        <h2 id="process" class="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
          {{ t("servicePage.process") }}
        </h2>
        <ol class="space-y-6">
          <li v-for="(step, index) in processSteps" :key="index" class="flex gap-4">
            <div class="flex-shrink-0 w-10 h-10 bg-[#6B5B52] text-white rounded-full flex items-center justify-center font-bold">
              {{ index + 1 }}
            </div>
            <div class="flex-1 bg-white rounded-xl p-6 shadow-sm">
              <strong class="font-display text-xl text-gray-900 block mb-2">{{ step.title }}</strong>
              <p class="text-gray-600">{{ step.description }}</p>
            </div>
          </li>
        </ol>
      </section>

      <!-- Aftercare -->
      <section aria-labelledby="aftercare" class="relative bg-white rounded-2xl p-8 shadow-sm">
        <DecorCircle color="cream" size="lg" bottom="-1rem" right="-1rem" />
        <h2 id="aftercare" class="font-display text-3xl font-bold text-gray-900 mb-6">
          {{ t("servicePage.aftercare") }}
        </h2>
        <ul class="space-y-3">
          <li v-for="(tip, index) in aftercareTips" :key="index" class="flex items-start">
            <svg class="w-6 h-6 text-[#6B5B52] flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-gray-700">{{ tip }}</span>
          </li>
        </ul>
      </section>
    </div>

    <CTASection
      :heading="s(sanityService?.cta?.heading)"
      :subtitle="s(sanityService?.cta?.subtitle)"
      :message="s(sanityService?.cta?.message)"
      :primary-button="s(sanityService?.cta?.button)"
      :secondary-button="t('servicePage.viewPricing')"
    />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const s = (field: Parameters<typeof getLocalized>[0]) => getLocalized(field, locale.value);

const { data: sanityService } = await useFetchService("brows");

const translatedOffers = computed(() =>
  sanityService.value?.offers?.map((o) => ({ name: s(o.name), description: s(o.description), price: o.price })) ?? []
);

const breadcrumbs = computed(() => [
  { label: t("breadcrumb.home"), to: "/" },
  { label: t("breadcrumb.services"), to: "/services" },
  { label: s(sanityService.value?.title) },
]);

const benefits = computed(() => sanityService.value?.benefits?.map((b) => s(b.text)) ?? []);
const processSteps = computed(() => sanityService.value?.processSteps?.map((p) => ({ title: s(p.title), description: s(p.description) })) ?? []);
const aftercareTips = computed(() => sanityService.value?.aftercareTips?.map((a) => s(a.text)) ?? []);

const seoTitle = computed(() => s(sanityService.value?.seo?.title));
const seoDescription = computed(() => s(sanityService.value?.seo?.description));

useSeoMeta({
  title: () => seoTitle.value,
  description: () => seoDescription.value,
  ogTitle: () => seoTitle.value,
  ogDescription: () => seoDescription.value,
  ogType: "website",
  ogLocale: useOgLocale(),
});

useServicePageSchema({
  slug: "/services/brows",
  title: () => seoTitle.value,
  description: () => seoDescription.value,
  offers: () => translatedOffers.value,
});
</script>
