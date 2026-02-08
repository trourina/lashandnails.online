<template>
  <div>
    <Hero :title="title" :subtitle="subtitle" />

    <section class="container mx-auto px-4 py-12">

    <section aria-labelledby="booking-methods">
      <h2 id="booking-methods">{{ methodsHeading }}</h2>

      <div class="booking-methods-grid">
        <article v-for="method in methods" :key="method.key" class="booking-method">
          <h3>{{ method.title }}</h3>
          <p>{{ method.description }}</p>
          <Button
            v-if="method.key === 'whatsapp'"
            :href="`https://wa.me/${settings.phone.replace(
              /\+/g,
              ''
            )}?text=${encodeURIComponent(method.message || '')}`"
          >
            {{ method.cta }}
          </Button>
          <Button v-else-if="method.key === 'phone'" :href="`tel:${settings.phone}`">
            {{ method.cta }}
          </Button>
        </article>
      </div>
    </section>

    <section aria-labelledby="booking-info">
      <h2 id="booking-info">{{ infoHeading }}</h2>

      <dl class="info-list">
        <div v-for="item in infoItems" :key="item.key">
          <dt>{{ item.label }}</dt>
          <dd v-if="item.linkUrl">
            <NuxtLink :to="localePath(item.linkUrl)">{{ item.linkText }}</NuxtLink>
          </dd>
          <dd v-else class="whitespace-pre-line">{{ item.value }}</dd>
        </div>
      </dl>
    </section>
    </section>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const localePath = useLocalePath();
const config = useRuntimeConfig();
const business = config.public.business;

const { data: pageData } = useFetchBookingPage();
const settings = useSiteSettings();
const s = (field: any) => getLocalized(field, locale.value);

const title = computed(() => s(pageData.value?.title));
const subtitle = computed(() => s(pageData.value?.subtitle));
const methodsHeading = computed(() => s(pageData.value?.methodsHeading));
const infoHeading = computed(() => s(pageData.value?.infoHeading));

const methods = computed(() => {
  if (!pageData.value?.methods?.length) return [];
  return pageData.value.methods.map((m) => ({
    key: m.key,
    title: s(m.title),
    description: s(m.description),
    cta: s(m.cta),
    message: s(m.message) || "",
  }));
});

const infoItems = computed(() => {
  if (!pageData.value?.infoItems?.length) return [];
  return pageData.value.infoItems.map((item) => ({
    key: item.key,
    label: s(item.label),
    value: s(item.value),
    linkText: s(item.linkText) || "",
    linkUrl: item.linkUrl || "",
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

<style scoped>
h1,
h2,
h3 {
  font-family: "Prata", serif;
}

.booking-methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.booking-method {
  padding: 2rem;
  border: 1px solid #333;
  border-radius: 12px;
  text-align: center;
}

.booking-method h3 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.booking-method p {
  margin-bottom: 1.5rem;
  color: #999;
}

section {
  margin-bottom: 4rem;
}

h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
}

.info-list {
  margin-top: 2rem;
}

.info-list > div {
  padding: 1.5rem 0;
  border-bottom: 1px solid #333;
}

.info-list > div:last-child {
  border-bottom: none;
}

.info-list dt {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #999;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
}

.info-list dd {
  margin: 0;
  font-size: 1.125rem;
}

.info-list a {
  color: #667eea;
  text-decoration: underline;
}

.info-list a:hover {
  color: #764ba2;
}

address {
  font-style: normal;
}
</style>
