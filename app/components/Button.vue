<template>
  <component
    :is="component"
    :to="props.to"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer nofollow' : undefined"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  to?: string;
  href?: string;
}

const props = defineProps<Props>();

const component = computed(() => {
  if (props.to) return resolveComponent("NuxtLink");
  if (props.href) return "a";
  return "button";
});
</script>

<style scoped></style>
