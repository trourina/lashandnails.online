<script setup lang="ts">
import { BUSINESS } from "../../config/business.config";

const { locale } = useI18n();
const head = useLocaleHead();

// Normalise page titles: strip any trailing "| Lash & Nails …" that
// Sanity SEO fields or @nuxtjs/seo may have added, then re-append the
// brand once so we never get a duplicated suffix in the <title> tag.
useHead({
  titleTemplate: (title) => {
    if (!title) return "Lash & Nails Santa Pola";
    const pageTitle = title.replace(/\s*\|\s*Lash\s*&\s*Nails.*$/i, "").trim();
    return pageTitle ? `${pageTitle} | Lash & Nails Santa Pola` : "Lash & Nails Santa Pola";
  },
});

// Global Twitter Card meta for social sharing previews
useSeoMeta({
  twitterCard: "summary_large_image",
});

// Localize Schema.org identity description and slogan per locale.
// The global identity in nuxt.config.ts is build-time English only.
const localizedDesc = BUSINESS.localizedDescription as Record<string, string>;
const localizedSlogan = BUSINESS.localizedSlogan as Record<string, string>;

useSchemaOrg([
  {
    "@type": "BeautySalon",
    description: () => localizedDesc[locale.value] || BUSINESS.description,
    slogan: () => localizedSlogan[locale.value] || BUSINESS.slogan,
  },
]);
</script>

<template>
  <Html :lang="head.htmlAttrs!.lang" :dir="head.htmlAttrs!.dir">
    <Head>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body class="mx-auto max-w-[2048px] overflow-x-hidden">
      <Header />

      <main>
        <slot />
      </main>

      <Footer />
    </Body>
  </Html>
</template>
