<template>
  <component
    :is="component"
    :to="props.to"
    :href="href"
    :target="href && !href.startsWith('tel:') ? '_blank' : undefined"
    :rel="href && !href.startsWith('tel:') ? linkRel : undefined"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  to?: string;
  href?: string;
  nofollow?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  nofollow: true,
});

const component = computed(() => {
  if (props.to) return resolveComponent("NuxtLink");
  if (props.href) return "a";
  return "button";
});

const linkRel = computed(() =>
  props.nofollow ? "noopener noreferrer nofollow" : "noopener noreferrer",
);
</script>

<style scoped></style>
