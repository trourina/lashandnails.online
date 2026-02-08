<template>
  <div>
    <Hero :title="title" :subtitle="subtitle" />

    <!-- Services Grid -->
    <section aria-labelledby="services-list" class="py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article
            v-for="service in services"
            :key="service.slug"
            class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
          >
            <!-- Service Image -->
            <div
              class="relative aspect-[4/3] bg-gradient-to-br from-[#E8D5C4] to-[#D4C4B4] overflow-hidden"
            >
              <NuxtImg
                v-if="service.sanityImage"
                provider="sanity"
                :src="service.sanityImage"
                :alt="service.title"
                width="600"
                height="450"
                fit="crop"
                class="absolute inset-0 object-cover h-full w-full"
              />
              <div
                class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"
              />
            </div>

            <!-- Content -->
            <div class="p-6">
              <h2 class="font-display text-2xl font-bold text-gray-900 mb-3">
                {{ service.title }}
              </h2>
              <p class="text-gray-600 mb-4 leading-relaxed">
                {{ service.description }}
              </p>

              <!-- Features List -->
              <ul class="space-y-2 mb-6">
                <li
                  v-for="(feature, index) in service.features"
                  :key="index"
                  class="flex items-start text-sm text-gray-700"
                >
                  <svg
                    class="w-5 h-5 text-[#6B5B52] flex-shrink-0 mr-2 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>{{ feature }}</span>
                </li>
              </ul>

              <!-- CTA Button -->
              <NuxtLink
                :to="localePath(`/services/${service.slug}`)"
                class="inline-flex items-center justify-center w-full px-6 py-3 bg-[#6B5B52] text-white font-semibold rounded-full hover:bg-[#5A4A42] transition-colors group"
              >
                {{ t("common.viewDetails") }}
                <svg
                  class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <CTASection
      :heading="ctaHeading"
      :subtitle="ctaSubtitle"
      :message="ctaMessage"
      :primary-button="ctaButton"
      :secondary-button="ctaPricing"
    />
  </div>
</template>


<script setup lang="ts">
const { t, locale } = useI18n();
const config = useRuntimeConfig();
const business = config.public.business;
const localePath = useLocalePath();

const { data: pageData } = useFetchServicesOverview();
const s = (field: any) => getLocalized(field, locale.value);

const title = computed(() => s(pageData.value?.title));
const subtitle = computed(() => s(pageData.value?.subtitle));

const services = computed(() => {
  if (!pageData.value?.serviceCards?.length) return [];
  return pageData.value.serviceCards.map((card) => ({
    slug: card.slug,
    title: s(card.title),
    description: s(card.description),
    sanityImage: card.image?.asset?._ref || "",
    features: card.features?.map((f) => s(f.text)).filter(Boolean) || [],
  }));
});

const ctaHeading = computed(() => s(pageData.value?.cta?.heading));
const ctaSubtitle = computed(() => s(pageData.value?.cta?.subtitle));
const ctaButton = computed(() => s(pageData.value?.cta?.button));
const ctaPricing = computed(() => t("servicePage.viewPricing"));
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
    "@type": "CollectionPage",
    name: () => s(pageData.value?.seo?.title),
    description: () => s(pageData.value?.seo?.description),
    about: {
      "@type": "Thing",
      name: () => title.value,
    },
  },
]);
</script>
