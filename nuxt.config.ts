import tailwindcss from "@tailwindcss/vite";

// Business data - single source of truth
const BUSINESS = {
  name: "Lash & Nails Santa Pola",
  description:
    "Professional beauty salon in Santa Pola offering lash extensions, nail design, and beauty treatments",
  url: "https://lashandnails.online",
  phone: "+34604316778",
  telegram: "Irina_STS",
  address: {
    street: "Carrer Major, 8",
    city: "Santa Pola",
    region: "Alicante",
    postalCode: "03130",
    country: "ES",
  },
  geo: {
    latitude: 38.1956992,
    longitude: -0.5579955,
  },
  hours: {
    weekdays: { opens: "09:30", closes: "20:00" },
    saturday: { opens: "10:00", closes: "14:00" },
  },
  priceRange: "$$",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61576877656154",
    instagram: "https://www.instagram.com/lash_nails.santapola",
  },
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      business: BUSINESS,
    },
  },

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon-96x96.png",
          sizes: "96x96",
        },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [{ name: "apple-mobile-web-app-title", content: "Lash&Nails" }],
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
    families: [{ name: "Prata", provider: "google" }],
  },

  i18n: {
    baseUrl: BUSINESS.url,
    locales: [
      { code: "en", language: "en", name: "English" },
      { code: "es", language: "es", name: "Español" },
      { code: "ru", language: "ru", name: "Русский" },
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
    url: BUSINESS.url,
    name: BUSINESS.name,
    description: BUSINESS.description,
    defaultLocale: "en",
  },

  schemaOrg: {
    identity: {
      type: "LocalBusiness",
      name: BUSINESS.name,
      url: BUSINESS.url,
      logo: `${BUSINESS.url}/logo.png`,
      description: BUSINESS.description,
      address: {
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.region,
        postalCode: BUSINESS.address.postalCode,
        addressCountry: BUSINESS.address.country,
      },
      geo: {
        latitude: BUSINESS.geo.latitude,
        longitude: BUSINESS.geo.longitude,
      },
      telephone: BUSINESS.phone,
      priceRange: BUSINESS.priceRange,
      sameAs: [BUSINESS.social.facebook, BUSINESS.social.instagram],
      areaServed: [
        { "@type": "City", name: "Santa Pola" },
        { "@type": "City", name: "Elche" },
        { "@type": "City", name: "Guardamar del Segura" },
        { "@type": "City", name: "Alicante" },
      ],
      openingHoursSpecification: [
        {
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: BUSINESS.hours.weekdays.opens,
          closes: BUSINESS.hours.weekdays.closes,
        },
        {
          dayOfWeek: ["Saturday"],
          opens: BUSINESS.hours.saturday.opens,
          closes: BUSINESS.hours.saturday.closes,
        },
      ],
    },
  },
});
