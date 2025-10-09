<template>
  <component
    :is="component"
    :to="to"
    :href="href"
    :target="href ? '_blank' : undefined"
    :rel="href ? 'noopener noreferrer nofollow' : undefined"
    :class="['button', `button-${variant}`]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'whatsapp'
  to?: string
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
})

const localePath = useLocalePath()

const component = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const to = computed(() => {
  if (!props.to) return undefined
  return localePath(props.to)
})
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
}

.button-primary {
  background: white;
  color: #667eea;
}

.button-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.button-whatsapp {
  background: #25D366;
  color: white;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}
</style>
