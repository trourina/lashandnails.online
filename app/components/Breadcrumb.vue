<template>
  <nav aria-label="Breadcrumb" class="py-4 px-4">
    <ol class="flex items-center space-x-2 text-sm">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" class="flex items-center">
        <NuxtLink
          v-if="crumb.to"
          :to="localePath(crumb.to)"
          class="text-gray-600 hover:text-[#6B5B52] transition-colors"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span v-else class="text-gray-900 font-medium">
          {{ crumb.label }}
        </span>

        <svg
          v-if="index < breadcrumbs.length - 1"
          class="w-4 h-4 mx-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
interface Breadcrumb {
  label: string;
  to?: string;
}

interface Props {
  items: Breadcrumb[];
}

const { items: breadcrumbs } = defineProps<Props>();

const localePath = useLocalePath();
</script>
