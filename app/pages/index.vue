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
      :secondary-button-link="`tel:${settings.phone}`"
    />
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const config = useRuntimeConfig();
const business = config.public.business;
const settings = useSiteSettings();

const { data: pageData } = await useFetchHomePage();
const s = (field: any) => getLocalized(field, locale.value);

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
    "@type": "WebPage",
    "@id": `${business.url}/#webpage`,
    name: () => stegaClean(s(pageData.value?.seo?.title)),
    description: () => stegaClean(s(pageData.value?.seo?.description)),
    isPartOf: {
      "@id": `${business.url}/#website`,
    },
  },
]);
</script>
