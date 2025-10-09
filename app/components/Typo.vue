<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  is?: string
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'lead'
}

const props = withDefaults(defineProps<Props>(), {
  is: 'p',
  variant: 'p',
})

const tag = computed(() => props.is)

const classes = computed(() => {
  const variants = {
    h1: 'font-display text-5xl font-bold',
    h2: 'font-display text-4xl font-bold',
    h3: 'font-display text-3xl font-semibold',
    h4: 'font-display text-2xl font-semibold',
    h5: 'font-display text-xl font-semibold',
    h6: 'font-display text-lg font-semibold',
    p: 'text-base',
    span: 'text-base',
    lead: 'text-lg',
  }

  return variants[props.variant]
})
</script>
