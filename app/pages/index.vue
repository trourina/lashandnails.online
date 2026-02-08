<template>
  <section>
    <HeroGrid />
    <FeaturedServices />
    <ReviewsSection />
    <FAQSection />
    <CTASection
      :heading="s(pageData?.ctaHeading)"
      :subtitle="s(pageData?.ctaSubtitle)"
      :message="s(pageData?.ctaMessage)"
      :primary-button="s(pageData?.ctaButton)"
      :secondary-button="s(pageData?.ctaSecondary)"
    />
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const config = useRuntimeConfig();
const business = config.public.business;

const { data: pageData } = useFetchHomePage();
const s = (field: any) => getLocalized(field, locale.value);

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
    "@type": "WebPage",
    "@id": `${business.url}/#webpage`,
    name: () => s(pageData.value?.seo?.title),
    description: () => s(pageData.value?.seo?.description),
    isPartOf: {
      "@id": `${business.url}/#website`,
    },
  },
]);
</script>
