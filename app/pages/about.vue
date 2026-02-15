<template>
  <div>
    <Hero :title="title" :subtitle="subtitle" />

    <!-- Our Story — text + owner photo side by side -->
    <section class="container mx-auto px-4 py-16">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="relative">
          <DecorCircle color="cream" size="lg" top="-1.5rem" left="-1.5rem" />
          <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {{ storyHeading }}
          </h2>
          <div class="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p v-for="(paragraph, index) in storyParagraphs" :key="index">
              {{ paragraph }}
            </p>
          </div>
        </div>
        <div class="relative">
          <NuxtImg
            provider="sanity"
            :src="pageData?.ownerImage?.asset?._ref"
            alt="Lash & Nails Room salon"
            class="rounded-3xl shadow-xl w-full object-cover aspect-[3/4]"
            loading="lazy"
            width="600"
            height="800"
            :data-sanity="encodeDataAttribute?.('ownerImage')"
          />
          <DecorCircle color="gold" size="lg" bottom="-1rem" left="-1rem" />
          <DecorCircle color="brown" size="md" top="-1rem" right="-1rem" />
        </div>
      </div>
    </section>

    <!-- Team Photos -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="relative">
              <NuxtImg
                provider="sanity"
                :src="pageData?.teamImage1?.asset?._ref"
                alt="Lash & Nails Room team"
                class="rounded-3xl shadow-lg w-full object-cover aspect-[4/5]"
                loading="lazy"
                width="600"
                height="750"
                :data-sanity="encodeDataAttribute?.('teamImage1')"
              />
              <DecorCircle color="cream" size="lg" top="-0.75rem" left="-0.75rem" />
              <DecorCircle color="gold" size="xl" bottom="-1.25rem" right="-1.25rem" />
            </div>
            <div class="relative">
              <NuxtImg
                provider="sanity"
                :src="pageData?.teamImage2?.asset?._ref"
                alt="Lash & Nails Room team"
                class="rounded-3xl shadow-lg w-full object-cover aspect-[4/5]"
                loading="lazy"
                width="600"
                height="750"
                :data-sanity="encodeDataAttribute?.('teamImage2')"
              />
              <DecorCircle color="brown" size="md" bottom="-0.75rem" left="-0.75rem" />
              <DecorCircle color="cream" size="lg" top="-1.25rem" right="-1.25rem" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Philosophy — quote style -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="relative max-w-4xl mx-auto text-center">
          <DecorCircle color="gold" size="xl" top="-2rem" left="-2rem" />
          <DecorCircle color="brown" size="lg" bottom="-1.5rem" right="-1.5rem" />
          <div class="text-6xl text-[#6B5B52]/20 font-display mb-4">&ldquo;</div>
          <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {{ philosophyHeading }}
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed italic max-w-2xl mx-auto">
            {{ philosophyDescription }}
          </p>
        </div>
      </div>
    </section>

    <!-- Expertise Cards -->
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          {{ expertiseHeading }}
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <article
            v-for="(item, index) in expertiseItems"
            :key="index"
            class="relative group text-center"
          >
            <div
              class="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
              :class="[
                index === 0 ? 'bg-[#6B5B52]/10' : '',
                index === 1 ? 'bg-[#FFC107]/15' : '',
                index === 2 ? 'bg-[#E8D5C4]/40' : '',
              ]"
            >
              <!-- Certificate icon -->
              <svg
                v-if="index === 0"
                class="w-8 h-8 text-[#6B5B52]"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              <!-- Clock icon -->
              <svg
                v-else-if="index === 1"
                class="w-8 h-8 text-[#8B7565]"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <!-- Diamond/sparkle icon -->
              <svg
                v-else
                class="w-8 h-8 text-[#6B5B52]"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <h3 class="font-display text-xl font-semibold text-gray-900 mb-3">
              {{ item.title }}
            </h3>
            <p class="text-gray-500 leading-relaxed max-w-xs mx-auto">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="relative max-w-4xl mx-auto">
          <DecorCircle color="cream" size="lg" top="-1.5rem" right="3rem" />
          <DecorCircle color="gold" size="lg" bottom="2rem" left="-2rem" />
          <h2 class="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {{ valuesHeading }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="(value, index) in valuesItems"
              :key="index"
              class="relative bg-gray-50 rounded-3xl p-8 border border-gray-200"
            >
              <DecorCircle
                v-if="index % 2 === 0"
                color="brown"
                size="sm"
                bottom="-0.5rem"
                right="-0.5rem"
              />
              <DecorCircle v-else color="gold" size="sm" top="-0.5rem" left="-0.5rem" />
              <h3 class="font-display text-xl font-semibold text-[#6B5B52] mb-3">
                {{ value.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
            </div>
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
const { t, locale } = useI18n();
const config = useRuntimeConfig();
const business = config.public.business;

const { data: pageData, encodeDataAttribute } = await useFetchAboutPage();
const s = (field: any) => getLocalized(field, locale.value);

const title = computed(() => s(pageData.value?.title));
const subtitle = computed(() => s(pageData.value?.subtitle));
const storyHeading = computed(() => s(pageData.value?.storyHeading));
const philosophyHeading = computed(() => s(pageData.value?.philosophyHeading));
const philosophyDescription = computed(() => s(pageData.value?.philosophyDescription));
const expertiseHeading = computed(() => s(pageData.value?.expertiseHeading));
const valuesHeading = computed(() => s(pageData.value?.valuesHeading));

const storyParagraphs = computed(
  () => pageData.value?.storyParagraphs?.map((p) => s(p.text)).filter(Boolean) || [],
);

const expertiseItems = computed(
  () =>
    pageData.value?.expertiseItems?.map((item) => ({
      icon: item.icon,
      title: s(item.title),
      description: s(item.description),
    })) || [],
);

const valuesItems = computed(
  () =>
    pageData.value?.valuesItems?.map((item) => ({
      title: s(item.title),
      description: s(item.description),
    })) || [],
);

const ctaHeading = computed(() => s(pageData.value?.cta?.heading));
const ctaSubtitle = computed(() => s(pageData.value?.cta?.subtitle));
const ctaButton = computed(() => s(pageData.value?.cta?.button));
const ctaServices = computed(() => s(pageData.value?.cta?.services));
const ctaMessage = computed(() => s(pageData.value?.cta?.message));

useSeoMeta({
  title: () => stegaClean(s(pageData.value?.seo?.title)),
  description: () => stegaClean(s(pageData.value?.seo?.description)),
  ogTitle: () => stegaClean(s(pageData.value?.seo?.title)),
  ogDescription: () => stegaClean(s(pageData.value?.seo?.description)),
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
        name: () => stegaClean(title.value),
      },
    ],
  },
  {
    "@type": "AboutPage",
    name: () => stegaClean(s(pageData.value?.seo?.title)),
    description: () => stegaClean(s(pageData.value?.seo?.description)),
  },
]);
</script>
