<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
        @click.self="close"
      >
        <!-- Close button -->
        <button
          class="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
          @click="close"
          :aria-label="t('common.close')"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Previous button -->
        <button
          v-if="hasPrevious"
          class="absolute left-4 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
          @click="previous"
          :aria-label="t('common.previous')"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Image container -->
        <div class="relative max-w-7xl max-h-full flex items-center justify-center">
          <img
            :src="currentImage?.src"
            :alt="currentImage?.alt"
            class="max-w-full max-h-[90vh] object-contain rounded-lg"
          />

          <!-- Image caption -->
          <div v-if="currentImage?.caption" class="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
            <p class="text-lg">{{ currentImage.caption }}</p>
          </div>
        </div>

        <!-- Next button -->
        <button
          v-if="hasNext"
          class="absolute right-4 z-10 w-12 h-12 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
          @click="next"
          :aria-label="t('common.next')"
        >
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <!-- Image counter -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Image {
  src: string
  alt: string
  caption?: string
}

interface Props {
  images: Image[]
  initialIndex?: number
}

const props = withDefaults(defineProps<Props>(), {
  initialIndex: 0,
})

const emit = defineEmits<{
  close: []
}>()

const { t } = useI18n()

const isOpen = ref(false)
const currentIndex = ref(props.initialIndex)

const currentImage = computed(() => props.images[currentIndex.value])
const hasPrevious = computed(() => currentIndex.value > 0)
const hasNext = computed(() => currentIndex.value < props.images.length - 1)

const open = (index: number = 0) => {
  currentIndex.value = index
  isOpen.value = true
  // Prevent body scroll when lightbox is open
  document.body.style.overflow = 'hidden'
}

const close = () => {
  isOpen.value = false
  emit('close')
  // Restore body scroll
  document.body.style.overflow = ''
}

const previous = () => {
  if (hasPrevious.value) {
    currentIndex.value--
  }
}

const next = () => {
  if (hasNext.value) {
    currentIndex.value++
  }
}

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
  if (!isOpen.value) return

  switch (event.key) {
    case 'Escape':
      close()
      break
    case 'ArrowLeft':
      previous()
      break
    case 'ArrowRight':
      next()
      break
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  // Ensure body scroll is restored
  document.body.style.overflow = ''
})

// Expose methods to parent component
defineExpose({
  open,
  close,
})
</script>

<style scoped>
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>
