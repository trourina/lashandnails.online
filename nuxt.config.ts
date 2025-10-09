import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        { name: "apple-mobile-web-app-title", content: "Lash&Nails" },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
  ],

  fonts: {
    families: [
      { name: 'Prata', provider: 'google' }
    ]
  },

  i18n: {
    locales: [
      { code: "en", name: "English" },
      { code: "es", name: "Español" },
      { code: "ru", name: "Русский" },
    ],
    defaultLocale: "en",
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    vueI18n: "./i18n.config.ts",
  },

  site: {
    url: "https://lashandnails.online",
    name: "Lash & Nails Santa Pola",
    description:
      "Beauty salon in Santa Pola - Lash extensions, nail design, and beauty treatments",
    defaultLocale: "en",
  },

  schemaOrg: {
    identity: {
      type: "LocalBusiness",
      name: "Lash & Nails Santa Pola",
      url: "https://lashandnails.online",
      logo: "https://lashandnails.online/logo.png",
      description:
        "Professional beauty salon in Santa Pola offering lash extensions, nail design, and beauty treatments",
      address: {
        streetAddress: "Carrer Major, 8",
        addressLocality: "Santa Pola",
        addressRegion: "Alicante",
        postalCode: "03130",
        addressCountry: "ES",
      },
      geo: {
        latitude: 38.1956992,
        longitude: -0.5579955,
      },
      telephone: "+34604316778",
      priceRange: "$$",
      openingHoursSpecification: [
        {
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "20:00",
        },
        {
          dayOfWeek: ["Saturday"],
          opens: "10:00",
          closes: "18:00",
        },
      ],
    },
  },
});
