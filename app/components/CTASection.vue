<template>
  <section class="py-16 px-4 bg-gradient-to-br from-[#6B5B52] to-[#8B7565]">
    <div class="container mx-auto max-w-4xl text-center">
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">
        {{ heading }}
      </h2>
      <p class="text-xl text-white/90 mb-8">
        {{ subtitle }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          :href="whatsappLink"
          class="bg-[#FFC107] text-[#4A3A32] hover:bg-[#FFB300] px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
          @click="handleWhatsAppClick"
        >
          {{ primaryButton }}
        </Button>
        <Button
          v-if="showSecondaryButton"
          :to="resolvedSecondaryLink"
          class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#6B5B52] px-8 py-3 rounded-full font-semibold transition-all"
          @click="handleSecondaryClick"
        >
          {{ secondaryButton }}
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  heading?: string;
  subtitle?: string;
  message?: string;
  primaryButton?: string;
  secondaryButton?: string;
  secondaryButtonLink?: string;
  showSecondaryButton?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  heading: "",
  subtitle: "",
  message: "",
  primaryButton: "",
  secondaryButton: "",
  secondaryButtonLink: "/pricing",
  showSecondaryButton: true,
});

const localePath = useLocalePath()
const settings = useSiteSettings()
const { trackWhatsAppClick, trackPhoneClick } = useAnalytics()

const resolvedSecondaryLink = computed(() =>
  props.secondaryButtonLink.startsWith('tel:') || props.secondaryButtonLink.startsWith('http')
    ? props.secondaryButtonLink
    : localePath(props.secondaryButtonLink)
)

const whatsappLink = computed(() =>
  `https://wa.me/${settings.value.phone.replace(/\+/g, '')}?text=${encodeURIComponent(props.message)}`
)

const handleWhatsAppClick = () => {
  trackWhatsAppClick('cta_section')
}

const handleSecondaryClick = () => {
  if (props.secondaryButtonLink.startsWith('tel:')) {
    trackPhoneClick('cta_section')
  }
}
</script>
