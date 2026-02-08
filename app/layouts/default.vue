<script setup lang="ts">
const head = useLocaleHead();
</script>

<template>
  <Html :lang="head.htmlAttrs!.lang" :dir="head.htmlAttrs!.dir">
    <Head>
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
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
