<template>
  <component
    :is="component"
    :to="props.to"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer nofollow' : undefined"
    class="button"
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

<style scoped>
.button {
  display: inline-block;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  font-size: 1.125rem;
  border: none;
  cursor: pointer;
  font-family: inherit;
  background: black;
  color: white;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
