<script setup lang="ts">
interface Props {
  title?: string;
  subtitle?: string;
  showCta?: boolean;
}

withDefaults(defineProps<Props>(), {
  title: "",
  subtitle: "",
  showCta: false,
});

const { t } = useI18n({ useScope: "local" });
const config = useRuntimeConfig();
const business = config.public.business;
const { trackWhatsAppClick, trackNavigation } = useAnalytics();

const handleWhatsAppClick = () => {
  trackWhatsAppClick("hero");
};

const handlePricingClick = () => {
  trackNavigation("/pricing", "hero");
};
</script>

<template>
  <section
    class="bg-gradient-to-br from-[#6B5B52] to-[#8B7565] text-white -mt-24 py-60 px-4"
  >
    <div class="container mx-auto max-w-4xl">
      <div class="text-center">
        <h1
          class="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-pretty"
        >
          {{ title || t("title") }}
        </h1>
        <p
          v-if="subtitle || t('subtitle')"
          class="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
        >
          {{ subtitle || t("subtitle") }}
        </p>

        <!-- CTA Buttons (optional) -->
        <div
          v-if="showCta"
          class="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
        >
          <Button
            :href="`https://wa.me/${business.phone.replace(
              /\+/g,
              ''
            )}?text=${encodeURIComponent(t('ctaMessage'))}`"
            class="bg-[#FFC107] text-[#4A3A32] hover:bg-[#FFB300] px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
            @click="handleWhatsAppClick"
          >
            {{ t("ctaPrimary") }}
          </Button>
          <Button
            to="/pricing"
            class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#6B5B52] px-8 py-3 rounded-full font-semibold transition-all"
            @click="handlePricingClick"
          >
            {{ t("ctaSecondary") }}
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<i18n lang="json">
{
  "es": {
    "title": "Salón de Belleza en Santa Pola",
    "subtitle": "Extensiones de pestañas, diseño de uñas y tratamientos de belleza profesionales",
    "ctaPrimary": "Reservar por WhatsApp",
    "ctaSecondary": "Ver Precios",
    "ctaMessage": "Hola, me gustaría reservar una cita."
  },
  "en": {
    "title": "Beauty Salon in Santa Pola",
    "subtitle": "Professional lash extensions, nail design and beauty treatments",
    "ctaPrimary": "Book via WhatsApp",
    "ctaSecondary": "View Pricing",
    "ctaMessage": "Hello, I would like to book an appointment."
  },
  "ru": {
    "title": "Салон красоты в Санта-Пола",
    "subtitle": "Профессиональное наращивание ресниц, дизайн ногтей и косметические процедуры",
    "ctaPrimary": "Записаться через WhatsApp",
    "ctaSecondary": "Посмотреть цены",
    "ctaMessage": "Здравствуйте, я хочу записаться на прием."
  }
}
</i18n>
