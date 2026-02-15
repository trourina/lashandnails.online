<script setup lang="ts">
import { BUSINESS } from "../../config/business.config";

const { locale } = useI18n();
const head = useLocaleHead();

// Override the auto-generated title template from @nuxtjs/seo.
// Sanity SEO titles already include the brand name, so we don't
// want the module to append "| Lash & Nails Santa Pola" again.
useHead({
  titleTemplate: (title) => title || "Lash & Nails Santa Pola",
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
