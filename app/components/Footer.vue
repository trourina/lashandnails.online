<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
const settings = useSiteSettings();
</script>

<template>
  <footer class="bg-[#6B5B52] text-[#E8D5C4]">
    <div class="container mx-auto px-4 py-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <!-- Brand Section -->
        <div>
          <div class="flex items-center mb-4">
            <Logo class="h-16" />
         
          </div>
          <p class="text-sm leading-relaxed opacity-90">
            {{ t("footer.brandDescription") }}
          </p>
        </div>

        <!-- Services Section -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">
            {{ t("footer.servicesTitle") }}
          </h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                :to="localePath('/services/lash-extensions')"
                class="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
              >
                {{ t("footer.lashExtensions") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/services/manicure')"
                class="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
              >
                {{ t("footer.manicure") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/services/pedicure')"
                class="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
              >
                {{ t("footer.pedicure") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/services/brows')"
                class="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
              >
                {{ t("footer.brows") }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Help Center Section -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">
            {{ t("footer.quickLinksTitle") }}
          </h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                :to="localePath('/about')"
                class="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
              >
                {{ t("footer.aboutUs") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/gallery')"
                class="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
              >
                {{ t("footer.gallery") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/contact')"
                class="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
              >
                {{ t("footer.contactUs") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/booking')"
                class="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
              >
                {{ t("footer.bookAppointment") }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Legal Section -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">
            {{ t("footer.legalTitle") }}
          </h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                :to="localePath('/legal-notice')"
                class="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
              >
                {{ t("footer.legalNotice") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/privacy-policy')"
                class="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
              >
                {{ t("footer.privacyPolicy") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/cookie-policy')"
                class="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
              >
                {{ t("footer.cookiePolicy") }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Work Hours Section -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">
            {{ t("footer.hoursTitle") }}
          </h3>
          <div class="flex items-start gap-2 mb-3">
            <svg
              class="w-5 h-5 mt-0.5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clip-rule="evenodd"
              />
            </svg>
            <div class="text-sm">
              <p class="font-medium text-white">{{ t("footer.weekdays") }}</p>
              <p class="font-medium text-white">{{ t("footer.saturday") }}</p>
            </div>
          </div>
          <p class="text-sm leading-relaxed opacity-90">
            {{ t("footer.hoursDescription") }}
          </p>

          <!-- Social Media Icons -->
          <div class="flex gap-3 mt-6">
            <a
              :href="settings.social.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#6B5B52] hover:bg-opacity-90 transition-all"
              aria-label="Facebook"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                />
              </svg>
            </a>

            <a
              :href="settings.social.instagram"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#6B5B52] hover:bg-opacity-90 transition-all"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="border-t border-[#8B7B72] bg-[#5A4A42] py-4">
      <div class="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p class="text-sm opacity-75">
          {{ t("footer.copyright", { year: new Date().getFullYear() }) }}
        </p>
        <p class="text-sm opacity-75">
          Made by <a href="https://dix.consulting/" target="_blank" rel="noopener noreferrer" class="hover:opacity-100 hover:underline transition-opacity">Dix Consulting</a>
        </p>
      </div>
    </div>
  </footer>
</template>
