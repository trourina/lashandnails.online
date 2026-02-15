import tailwindcss from "@tailwindcss/vite";
import { BUSINESS, OPENING_HOURS_SPECIFICATION, POTENTIAL_ACTIONS } from "./config/business.config";

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
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/sanity",
    "@nuxtjs/seo",
    "@nuxtjs/i18n",
  ],

  sanity: {
    projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || "",
    dataset: process.env.NUXT_PUBLIC_SANITY_DATASET || "production",
    apiVersion: process.env.NUXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
    useCdn: true,
    visualEditing: {
      token: process.env.NUXT_SANITY_VISUAL_EDITING_TOKEN,
      studioUrl: process.env.NUXT_SANITY_VISUAL_EDITING_STUDIO_URL,
      stega: true,
    },
  },

  image: {
    sanity: {
      projectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || "",
      dataset: process.env.NUXT_PUBLIC_SANITY_DATASET || "production",
    },
  },

  $production: {
    scripts: {
      registry: {
        googleAnalytics: {
          id: 'G-0SKWWBRJC4',
        },
      },
    },
  },

  fonts: {
    families: [{ name: "Prata", provider: "google" }],
  },

  i18n: {
    baseUrl: BUSINESS.url,
    langDir: "locales",
    locales: [
      { code: "en", language: "en", name: "English", file: "en.json" },
      { code: "es", language: "es", name: "Español", file: "es.json" },
      { code: "ru", language: "ru", name: "Русский", file: "ru.json" },
    ],
    defaultLocale: "es",
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
    defaultLocale: "es",
  },

  schemaOrg: {
    identity: {
      type: "LocalBusiness",
      name: BUSINESS.name,
      url: BUSINESS.url,
      logo: `${BUSINESS.url}/logo.png`,
      description: BUSINESS.description,
      slogan: BUSINESS.slogan,
      foundingDate: BUSINESS.foundingDate,
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
      hasMap: `https://www.google.com/maps/place/?q=place_id:${BUSINESS.googleMaps.placeId}`,
      telephone: BUSINESS.phone,
      priceRange: BUSINESS.priceRange,
      paymentAccepted: BUSINESS.paymentAccepted,
      currenciesAccepted: BUSINESS.currenciesAccepted,
      sameAs: [BUSINESS.social.facebook, BUSINESS.social.instagram],
      knowsLanguage: BUSINESS.knowsLanguage,
      amenityFeature: BUSINESS.amenityFeature,
      aggregateRating: BUSINESS.aggregateRating,
      areaServed: [
        { "@type": "City", name: "Santa Pola" },
        { "@type": "City", name: "Elche" },
        { "@type": "City", name: "Guardamar del Segura" },
        { "@type": "City", name: "Alicante" },
      ],
      openingHoursSpecification: OPENING_HOURS_SPECIFICATION,
      potentialAction: POTENTIAL_ACTIONS,
    },
  },
});
