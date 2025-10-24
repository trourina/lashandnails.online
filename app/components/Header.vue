<script setup lang="ts">
const { t, locale, locales } = useI18n({ useScope: "local" });
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const route = useRoute();

const isActive = (path: string) => {
  if (path === "/") {
    return route.path === localePath("/");
  }
  return route.path.startsWith(localePath(path));
};

const isDropdownOpen = ref(false);
const isMobileMenuOpen = ref(false);

const localeNames: Record<string, string> = {
  en: "EN",
  es: "ES",
  ru: "RU",
};

const availableLocales = computed(() => {
  return (locales.value as Array<{ code: string }>).filter(
    (i) => i.code !== locale.value
  );
});

const allLocales = computed(() => {
  return locales.value as Array<{ code: string }>;
});
</script>

<template>
  <header
    class="container mx-auto w-full relative z-10 p-4 h-24 flex items-center justify-between"
  >
    <!-- Logo -->
    <NuxtLink :to="localePath('/')" class="flex items-center gap-3 group">
      <Logo class="w-[180px]" />
    </NuxtLink>

    <!-- Navigation and Language Switcher -->
    <div class="hidden lg:flex items-center gap-3">
      <!-- Navigation -->
      <nav
        class="flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-full px-2 py-2 shadow-lg"
      >
      <NuxtLink
        :to="localePath('/')"
        :class="[
          'px-5 py-2 rounded-full text-sm font-medium transition-all',
          isActive('/')
            ? 'bg-[#6B5B52] text-white'
            : 'text-gray-700 hover:text-[#6B5B52] hover:bg-gray-50',
        ]"
      >
        {{ t("nav.home") }}
      </NuxtLink>

      <NuxtLink
        :to="localePath('/about')"
        :class="[
          'px-5 py-2 rounded-full text-sm font-medium transition-all',
          isActive('/about')
            ? 'bg-[#6B5B52] text-white'
            : 'text-gray-700 hover:text-[#6B5B52] hover:bg-gray-50',
        ]"
      >
        {{ t("nav.about") }}
      </NuxtLink>

      <NuxtLink
        :to="localePath('/services')"
        :class="[
          'px-5 py-2 rounded-full text-sm font-medium transition-all',
          isActive('/services')
            ? 'bg-[#6B5B52] text-white'
            : 'text-gray-700 hover:text-[#6B5B52] hover:bg-gray-50',
        ]"
      >
        {{ t("nav.services") }}
      </NuxtLink>

      <NuxtLink
        :to="localePath('/pricing')"
        :class="[
          'px-5 py-2 rounded-full text-sm font-medium transition-all',
          isActive('/pricing')
            ? 'bg-[#6B5B52] text-white'
            : 'text-gray-700 hover:text-[#6B5B52] hover:bg-gray-50',
        ]"
      >
        {{ t("nav.pricing") }}
      </NuxtLink>

      <NuxtLink
        :to="localePath('/gallery')"
        :class="[
          'px-5 py-2 rounded-full text-sm font-medium transition-all',
          isActive('/gallery')
            ? 'bg-[#6B5B52] text-white'
            : 'text-gray-700 hover:text-[#6B5B52] hover:bg-gray-50',
        ]"
      >
        {{ t("nav.gallery") }}
      </NuxtLink>

      <NuxtLink
        :to="localePath('/contact')"
        class="ml-1 px-6 py-2 bg-[#6B5B52] text-white rounded-full text-sm font-medium hover:bg-[#5A4A42] transition-all shadow-md"
      >
        {{ t("nav.contact") }}
      </NuxtLink>
      </nav>

      <!-- Language Switcher Dropdown -->
      <div class="relative">
      <button
        @click="isDropdownOpen = !isDropdownOpen"
        class="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 hover:text-[#6B5B52] hover:bg-gray-50 transition-all shadow-lg"
        aria-label="Language switcher"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span>{{ localeNames[locale] }}</span>
        <svg
          class="w-4 h-4 transition-transform"
          :class="{ 'rotate-180': isDropdownOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Dropdown Menu -->
      <div
        v-show="isDropdownOpen"
        class="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-1 z-[100]"
      >
        <NuxtLink
          v-for="loc in availableLocales"
          :key="loc.code"
          :to="switchLocalePath(loc.code)"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#6B5B52] transition-colors"
          @click="isDropdownOpen = false"
        >
          {{ localeNames[loc.code] }}
        </NuxtLink>
      </div>
      </div>
    </div>

    <!-- Mobile Menu Button -->
    <button
      @click="isMobileMenuOpen = !isMobileMenuOpen"
      class="lg:hidden p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all"
      aria-label="Toggle menu"
    >
      <svg
        v-if="!isMobileMenuOpen"
        class="w-6 h-6 text-[#6B5B52]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        class="w-6 h-6 text-[#6B5B52]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </header>

  <!-- Mobile Menu -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-4"
  >
    <div
      v-show="isMobileMenuOpen"
      class="lg:hidden fixed inset-x-0 top-24 z-40 bg-white shadow-lg mx-4 rounded-2xl overflow-hidden"
    >
      <nav class="flex flex-col py-4">
        <NuxtLink
          :to="localePath('/')"
          :class="[
            'px-6 py-3 text-base font-medium transition-colors',
            isActive('/')
              ? 'bg-[#6B5B52] text-white'
              : 'text-gray-700 hover:bg-gray-50 hover:text-[#6B5B52]',
          ]"
          @click="isMobileMenuOpen = false"
        >
          {{ t("nav.home") }}
        </NuxtLink>

        <NuxtLink
          :to="localePath('/about')"
          :class="[
            'px-6 py-3 text-base font-medium transition-colors',
            isActive('/about')
              ? 'bg-[#6B5B52] text-white'
              : 'text-gray-700 hover:bg-gray-50 hover:text-[#6B5B52]',
          ]"
          @click="isMobileMenuOpen = false"
        >
          {{ t("nav.about") }}
        </NuxtLink>

        <NuxtLink
          :to="localePath('/services')"
          :class="[
            'px-6 py-3 text-base font-medium transition-colors',
            isActive('/services')
              ? 'bg-[#6B5B52] text-white'
              : 'text-gray-700 hover:bg-gray-50 hover:text-[#6B5B52]',
          ]"
          @click="isMobileMenuOpen = false"
        >
          {{ t("nav.services") }}
        </NuxtLink>

        <NuxtLink
          :to="localePath('/pricing')"
          :class="[
            'px-6 py-3 text-base font-medium transition-colors',
            isActive('/pricing')
              ? 'bg-[#6B5B52] text-white'
              : 'text-gray-700 hover:bg-gray-50 hover:text-[#6B5B52]',
          ]"
          @click="isMobileMenuOpen = false"
        >
          {{ t("nav.pricing") }}
        </NuxtLink>

        <NuxtLink
          :to="localePath('/gallery')"
          :class="[
            'px-6 py-3 text-base font-medium transition-colors',
            isActive('/gallery')
              ? 'bg-[#6B5B52] text-white'
              : 'text-gray-700 hover:bg-gray-50 hover:text-[#6B5B52]',
          ]"
          @click="isMobileMenuOpen = false"
        >
          {{ t("nav.gallery") }}
        </NuxtLink>

        <NuxtLink
          :to="localePath('/contact')"
          :class="[
            'px-6 py-3 text-base font-medium transition-colors',
            isActive('/contact')
              ? 'bg-[#6B5B52] text-white'
              : 'text-gray-700 hover:bg-gray-50 hover:text-[#6B5B52]',
          ]"
          @click="isMobileMenuOpen = false"
        >
          {{ t("nav.contact") }}
        </NuxtLink>

        <!-- Language Switcher in Mobile Menu -->
        <div class="border-t border-gray-200 mt-4 pt-4 px-6">
          <p class="text-xs font-semibold text-gray-500 uppercase mb-2">{{ t("nav.language") }}</p>
          <div class="flex gap-2">
            <NuxtLink
              v-for="loc in allLocales"
              :key="loc.code"
              :to="switchLocalePath(loc.code)"
              :class="[
                'px-4 py-2 rounded-lg text-sm font-medium transition-all',
                locale === loc.code
                  ? 'bg-[#6B5B52] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
              ]"
              @click="isMobileMenuOpen = false"
            >
              {{ localeNames[loc.code] }}
            </NuxtLink>
          </div>
        </div>
      </nav>
    </div>
  </Transition>
</template>

<i18n lang="json">
{
  "en": {
    "brandName": "Lash & Nails",
    "nav": {
      "home": "Home",
      "about": "About Us",
      "services": "Services",
      "pricing": "Pricing",
      "gallery": "Gallery",
      "contact": "Contact Us",
      "language": "Language"
    }
  },
  "es": {
    "brandName": "Lash & Nails",
    "nav": {
      "home": "Inicio",
      "about": "Nosotros",
      "services": "Servicios",
      "pricing": "Precios",
      "gallery": "Galería",
      "contact": "Contacto",
      "language": "Idioma"
    }
  },
  "ru": {
    "brandName": "Lash & Nails",
    "nav": {
      "home": "Главная",
      "about": "О нас",
      "services": "Услуги",
      "pricing": "Цены",
      "gallery": "Галерея",
      "contact": "Контакты",
      "language": "Язык"
    }
  }
}
</i18n>
