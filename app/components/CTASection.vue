<template>
  <section class="py-16 px-4 bg-gradient-to-br from-[#6B5B52] to-[#8B7565]">
    <div class="container mx-auto max-w-4xl text-center">
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-4">
        {{ displayHeading }}
      </h2>
      <p class="text-xl text-white/90 mb-8">
        {{ displaySubtitle }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          :href="whatsappLink"
          class="bg-white text-[#6B5B52] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
          @click="handleWhatsAppClick"
        >
          {{ displayPrimaryButton }}
        </Button>
        <Button
          v-if="showSecondaryButton"
          :to="secondaryButtonLink"
          class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#6B5B52] px-8 py-3 rounded-full font-semibold transition-all"
          @click="handleSecondaryClick"
        >
          {{ displaySecondaryButton }}
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

const { t } = useI18n({ useScope: 'local' })
const config = useRuntimeConfig()
const business = config.public.business
const { trackWhatsAppClick, trackPhoneClick } = useAnalytics()

const displayHeading = computed(() => props.heading || t('heading'))
const displaySubtitle = computed(() => props.subtitle || t('subtitle'))
const displayPrimaryButton = computed(() => props.primaryButton || t('cta'))
const displaySecondaryButton = computed(() => props.secondaryButton || t('phone'))
const whatsappLink = computed(() =>
  `https://wa.me/${business.phone.replace(/\+/g, '')}?text=${encodeURIComponent(props.message || t('message'))}`
)

const handleWhatsAppClick = () => {
  trackWhatsAppClick('cta_section')
}

const handleSecondaryClick = () => {
  // Track phone click if it's a tel: link, otherwise track as navigation
  if (props.secondaryButtonLink.startsWith('tel:')) {
    trackPhoneClick('cta_section')
  }
}
</script>

<i18n lang="json">
{
  "es": {
    "heading": "¿Lista para tu transformación?",
    "subtitle": "Reserva tu cita hoy y descubre tu mejor versión",
    "cta": "Reservar por WhatsApp",
    "phone": "Llamar ahora",
    "message": "Hola, me gustaría reservar una cita."
  },
  "en": {
    "heading": "Ready for your transformation?",
    "subtitle": "Book your appointment today and discover your best version",
    "cta": "Book via WhatsApp",
    "phone": "Call now",
    "message": "Hello, I would like to book an appointment."
  },
  "ru": {
    "heading": "Готовы к преображению?",
    "subtitle": "Запишитесь на прием сегодня и откройте для себя лучшую версию себя",
    "cta": "Записаться через WhatsApp",
    "phone": "Позвонить сейчас",
    "message": "Здравствуйте, я хочу записаться на прием."
  }
}
</i18n>
