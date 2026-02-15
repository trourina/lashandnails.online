<template>
  <figure role="listitem" class="gallery-item">
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      loading="lazy"
      decoding="async"
    />
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
interface Props {
  src?: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

defineProps<Props>();
</script>

<style scoped>
.gallery-item {
  margin: 0;
  position: relative;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  aspect-ratio: 4/3;
}

.gallery-item figcaption {
  padding: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary, #666);
}
</style>
