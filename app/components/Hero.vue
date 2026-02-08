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

const { t } = useI18n();
const localePath = useLocalePath();
const settings = useSiteSettings();
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
          class="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance"
        >
          {{ title || t("home.title") }}
        </h1>
        <p
          v-if="subtitle || t('home.subtitle')"
          class="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-balance"
        >
          {{ subtitle || t("home.subtitle") }}
        </p>

        <!-- CTA Buttons (optional) -->
        <div
          v-if="showCta"
          class="flex flex-col sm:flex-row gap-4 mt-8 justify-center"
        >
          <Button
            :href="`https://wa.me/${settings.phone.replace(
              /\+/g,
              ''
            )}?text=${encodeURIComponent(t('hero.ctaMessage'))}`"
            class="bg-[#FFC107] text-[#4A3A32] hover:bg-[#FFB300] px-8 py-3 rounded-full font-semibold shadow-lg transition-all"
            @click="handleWhatsAppClick"
          >
            {{ t("hero.ctaPrimary") }}
          </Button>
          <Button
            :to="localePath('/pricing')"
            class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#6B5B52] px-8 py-3 rounded-full font-semibold transition-all"
            @click="handlePricingClick"
          >
            {{ t("hero.ctaSecondary") }}
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>
