// Business data - single source of truth
export const BUSINESS = {
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
    latitude: 38.1942263,
    longitude: -0.5558291,
  },
  googleMaps: {
    placeId: "ChIJwT2_BgbQZA0RKfMGo6vuCpk",
  },
  hours: {
    weekdays: { opens: "09:30", closes: "20:00" },
    saturday: { opens: "10:00", closes: "14:00" },
  },
  priceRange: "$$",
  paymentAccepted: ["Cash", "Bizum"],
  currenciesAccepted: "EUR",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61576877656154",
    instagram: "https://www.instagram.com/lash_nails.santapola",
  },
  // SEO & Schema.org enhancements
  slogan: "Your beauty destination in Santa Pola",
  foundingDate: "2023",
  knowsLanguage: ["es", "en", "ru"],
  image: [] as string[], // Will be populated when images are available
  amenityFeature: [
    {
      "@type": "LocationFeatureSpecification" as const,
      name: "WiFi",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification" as const,
      name: "Air Conditioning",
      value: true,
    },
    {
      "@type": "LocationFeatureSpecification" as const,
      name: "Appointment Required",
      value: true,
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating" as const,
    ratingValue: "5.0",
    reviewCount: "14",
    bestRating: "5",
    worstRating: "1",
  },
};

// OpeningHours specification for Schema.org
export const OPENING_HOURS_SPECIFICATION = [
  {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: BUSINESS.hours.weekdays.opens,
    closes: BUSINESS.hours.weekdays.closes,
  },
  {
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: ["Saturday"],
    opens: BUSINESS.hours.saturday.opens,
    closes: BUSINESS.hours.saturday.closes,
  },
];

// Reserve action for booking appointments
export const RESERVE_ACTION = {
  "@type": "ReserveAction" as const,
  target: {
    "@type": "EntryPoint" as const,
    urlTemplate: `${BUSINESS.url}/booking`,
    inLanguage: ["en", "es", "ru"],
    actionPlatform: [
      "http://schema.org/DesktopWebPlatform",
      "http://schema.org/MobileWebPlatform",
    ],
  },
  result: {
    "@type": "Reservation" as const,
    name: "Beauty Service Appointment",
  },
};

// Potential actions for Schema.org - enables direct contact/booking buttons in search results
export const POTENTIAL_ACTIONS = [
  RESERVE_ACTION,
  {
    "@type": "CommunicateAction" as const,
    target: `tel:${BUSINESS.phone}`,
    name: "Call Us" as const,
  },
  {
    "@type": "CommunicateAction" as const,
    target: `https://wa.me/${BUSINESS.phone.replace(/\+/g, "")}`,
    name: "WhatsApp" as const,
  },
  {
    "@type": "CommunicateAction" as const,
    target: `https://t.me/${BUSINESS.telegram}`,
    name: "Telegram" as const,
  },
];
