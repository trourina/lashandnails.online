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

        <!-- Categories Section -->
        <div>
          <h3 class="text-lg font-semibold text-white mb-4">
            {{ t("footer.categoriesTitle") }}
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

        <!-- Quick Links Section -->
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
          <table class="text-sm w-full mb-3">
            <tbody>
              <tr>
                <td class="pr-4 py-0.5 opacity-90">{{ t("footer.monFri") }}</td>
                <td class="py-0.5 font-medium text-white text-right">09:30 – 20:00</td>
              </tr>
              <tr>
                <td class="pr-4 py-0.5 opacity-90">{{ t("footer.sat") }}</td>
                <td class="py-0.5 font-medium text-white text-right">10:00 – 14:00</td>
              </tr>
              <tr>
                <td class="pr-4 py-0.5 opacity-90">{{ t("footer.sun") }}</td>
                <td class="py-0.5 font-medium text-white text-right">{{ t("footer.closed") }}</td>
              </tr>
            </tbody>
          </table>

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

            <a
              v-if="settings.yelp"
              :href="settings.yelp"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#6B5B52] hover:bg-opacity-90 transition-all"
              aria-label="Yelp"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
                <path d="M13.961 22.279c0.246-0.273 0.601-0.444 0.995-0.444 0.739 0 1.338 0.599 1.338 1.338 0 0.016-0 0.032-0.001 0.048l-0.237 6.483c-0.027 0.719-0.616 1.293-1.34 1.293-0.077 0-0.153-0.006-0.226-0.019l0.008 0.001c-1.763-0.303-3.331-0.962-4.69-1.902l0.039 0.025c-0.351-0.245-0.578-0.647-0.578-1.102 0-0.346 0.131-0.661 0.346-0.898l-0.001 0.001 4.345-4.829zM12.853 20.434l-6.301 1.572c-0.097 0.025-0.208 0.039-0.322 0.039-0.687 0-1.253-0.517-1.332-1.183l-0.001-0.006c-0.046-0.389-0.073-0.839-0.073-1.295 0-1.324 0.223-2.597 0.635-3.781l-0.024 0.081c0.183-0.534 0.681-0.911 1.267-0.911 0.214 0 0.417 0.050 0.596 0.14l-0.008-0.004 5.833 2.848c0.45 0.221 0.754 0.677 0.754 1.203 0 0.623-0.427 1.147-1.004 1.294l-0.009 0.002zM13.924 15.223l-6.104-10.574c-0.112-0.191-0.178-0.421-0.178-0.667 0-0.529 0.307-0.987 0.752-1.204l0.008-0.003c1.918-0.938 4.153-1.568 6.511-1.761l0.067-0.004c0.031-0.003 0.067-0.004 0.104-0.004 0.738 0 1.337 0.599 1.337 1.337v12.207c-0 0.739-0.599 1.338-1.338 1.338-0.493 0-0.923-0.266-1.155-0.663l-0.003-0.006zM19.918 20.681l6.176 2.007c0.541 0.18 0.925 0.682 0.925 1.274 0 0.209-0.048 0.407-0.134 0.584l0.003-0.008c-0.758 1.569-1.799 2.889-3.068 3.945l-0.019 0.015c-0.23 0.19-0.527 0.306-0.852 0.306-0.477 0-0.896-0.249-1.134-0.625l-0.003-0.006-3.449-5.51c-0.128-0.201-0.203-0.446-0.203-0.709 0-0.738 0.598-1.336 1.336-1.336 0.147 0 0.289 0.024 0.421 0.068l-0.009-0.003zM26.197 16.742l-6.242 1.791c-0.11 0.033-0.237 0.052-0.368 0.052-0.737 0-1.335-0.598-1.335-1.335 0-0.282 0.087-0.543 0.236-0.758l-0.003 0.004 3.63-5.383c0.244-0.358 0.65-0.59 1.111-0.59 0.339 0 0.649 0.126 0.885 0.334l-0.001-0.001c1.25 1.104 2.25 2.459 2.925 3.99l0.029 0.073c0.070 0.158 0.111 0.342 0.111 0.535 0 0.608-0.405 1.121-0.959 1.286l-0.009 0.002z" />
              </svg>
            </a>

            <a
              :href="settings.googleReviewUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all"
              aria-label="Google Reviews"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
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
          <NuxtLink :to="localePath('/admin')" class="hover:opacity-100 transition-opacity">
            {{ t("footer.copyright", { year: new Date().getFullYear() }) }}
          </NuxtLink>
        </p>
        <p class="text-sm opacity-75">
          Made by <a href="https://dix.consulting/" target="_blank" rel="noopener noreferrer" class="hover:opacity-100 hover:underline transition-opacity">Dix Consulting</a>
        </p>
      </div>
    </div>
  </footer>
</template>
