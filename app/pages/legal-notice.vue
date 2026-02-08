<template>
  <div class="min-h-screen bg-gray-50">
    <Hero :title="title" :subtitle="subtitle" />

    <div class="container mx-auto max-w-4xl px-4 py-12">
      <div class="bg-white rounded-2xl p-8 shadow-sm space-y-8">
        <section v-for="(section, idx) in sections" :key="idx">
          <h2 class="font-display text-2xl font-bold text-gray-900 mb-4">
            {{ section.title }}
          </h2>
          <p v-if="section.content" class="text-gray-700 leading-relaxed whitespace-pre-line" :class="{ 'mb-4': section.listItems?.length }">
            {{ section.content }}
          </p>
          <ul v-if="section.listItems?.length" class="list-disc list-inside space-y-2 text-gray-700">
            <li v-for="(item, i) in section.listItems" :key="i">{{ item }}</li>
          </ul>
          <p v-if="section.footer" class="text-gray-700 leading-relaxed mt-4">
            {{ section.footer }}
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();

const { data: pageData } = useFetchLegalPage("legal-notice");
const s = (field: any) => getLocalized(field, locale.value);

const title = computed(() => s(pageData.value?.title));
const subtitle = computed(() => s(pageData.value?.subtitle));

const sections = computed(() =>
  pageData.value?.sections?.map((sec) => ({
    title: s(sec.title),
    content: s(sec.content) || undefined,
    listItems: sec.listItems?.map((li) => s(li.text)).filter(Boolean),
    footer: s(sec.footer) || undefined,
  })) || []
);

useSeoMeta({
  title: () => s(pageData.value?.seo?.title),
  description: () => s(pageData.value?.seo?.description),
  ogTitle: () => s(pageData.value?.seo?.title),
  ogDescription: () => s(pageData.value?.seo?.description),
  ogType: "website",
  ogLocale: () =>
    locale.value === "es" ? "es_ES" : locale.value === "ru" ? "ru_RU" : "en_US",
});
</script>
