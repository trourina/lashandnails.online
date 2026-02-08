<template>
  <div>
    <Hero :title="title" :subtitle="subtitle" />

    <section class="container mx-auto px-4 py-12">
      <PricingTable :title="pricingTitle" :categories="pricingData" />
    </section>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();
const config = useRuntimeConfig();
const business = config.public.business;
const localePath = useLocalePath();

const { data: pageData } = useFetchPricingPage();
const s = (field: any) => getLocalized(field, locale.value);

const title = computed(() => s(pageData.value?.title));
const subtitle = computed(() => s(pageData.value?.subtitle));
const pricingTitle = computed(() => s(pageData.value?.pricingTitle));

const pricingData = computed(() => {
  if (!pageData.value?.categories?.length) return [];
  return pageData.value.categories.map((cat) => ({
    name: s(cat.name),
    ...(cat.slug ? { link: localePath(`/services/${cat.slug}`), linkText: t("common.learnMore") } : {}),
    ...(cat.cta ? { cta: s(cat.cta) } : {}),
    services: cat.services.map((svc) => ({
      name: s(svc.name),
      ...(svc.note && s(svc.note) ? { note: s(svc.note) } : {}),
      price: svc.price,
    })),
  }));
});

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
    "@type": "WebPage",
    name: () => s(pageData.value?.seo?.title),
    description: () => s(pageData.value?.seo?.description),
  },
]);
</script>
