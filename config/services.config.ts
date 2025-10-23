import { BUSINESS } from "./business.config";

// Service type definition for DRY principle
interface ServiceOffer {
  name: string;
  price: string;
  description?: string;
}

interface ServiceConfig {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  offers: ServiceOffer[];
  image?: string;
}

// Service data - single source of truth
export const SERVICES_DATA: ServiceConfig[] = [
  {
    id: "lash-extensions",
    slug: "/services/lash-extensions",
    name: "Lash Extensions",
    description:
      "Professional lash extension services with natural look and voluminous results using advanced techniques",
    category: "BeautyService",
    offers: [
      {
        name: "Classic Lash Extensions",
        price: "50",
        description: "Natural-looking lash extensions for everyday elegance",
      },
      {
        name: "Volume Lash Extensions",
        price: "70",
        description: "Fuller, dramatic lashes with volume technique",
      },
      {
        name: "Hybrid Lash Extensions",
        price: "60",
        description: "Perfect balance between classic and volume",
      },
      {
        name: "Lash Fill (2-3 weeks)",
        price: "40",
        description: "Maintenance fill for existing lash extensions",
      },
    ],
    image: `${BUSINESS.url}/images/lash-extensions.jpg`,
  },
  {
    id: "nail-design",
    slug: "/services/nail-design",
    name: "Nail Design",
    description:
      "Professional manicure, pedicure and creative nail art services with premium products",
    category: "BeautyService",
    offers: [
      {
        name: "Classic Manicure",
        price: "25",
        description: "Traditional manicure with polish",
      },
      {
        name: "Gel Manicure",
        price: "35",
        description: "Long-lasting gel polish manicure",
      },
      {
        name: "Nail Art Design",
        price: "45",
        description: "Creative nail art with custom designs",
      },
      {
        name: "Pedicure",
        price: "30",
        description: "Complete pedicure treatment",
      },
    ],
    image: `${BUSINESS.url}/images/nail-design.jpg`,
  },
  {
    id: "beauty-treatments",
    slug: "/services/beauty-treatments",
    name: "Beauty Treatments",
    description:
      "Professional facial treatments and beauty services for healthy, glowing skin",
    category: "BeautyService",
    offers: [
      {
        name: "Eyebrow Design & Tinting",
        price: "20",
        description: "Professional eyebrow shaping and tinting",
      },
      {
        name: "Facial Waxing",
        price: "15",
        description: "Gentle facial hair removal",
      },
      {
        name: "Microdermabrasion",
        price: "60",
        description: "Skin resurfacing treatment for smooth, radiant skin",
      },
      {
        name: "Facial Treatment",
        price: "50",
        description: "Deep cleansing and hydrating facial",
      },
    ],
    image: `${BUSINESS.url}/images/beauty-treatments.jpg`,
  },
];

// Generate Schema.org Service objects for each service
export const SERVICES_SCHEMA = SERVICES_DATA.map((service) => ({
  "@type": "Service",
  "@id": `${BUSINESS.url}${service.slug}#service`,
  serviceType: service.name,
  name: service.name,
  description: service.description,
  category: service.category,
  provider: {
    "@id": `${BUSINESS.url}/#localbusiness`,
  },
  areaServed: {
    "@type": "City",
    name: "Santa Pola",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${service.name} Services`,
    itemListElement: service.offers.map((offer) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: offer.name,
        description: offer.description,
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        price: offer.price,
      },
      availability: "http://schema.org/InStock",
    })),
  },
  ...(service.image && { image: service.image }),
}));

// Helper function to get service by slug
export function getServiceBySlug(slug: string) {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

// Helper function to get service schema by slug
export function getServiceSchemaBySlug(slug: string) {
  const index = SERVICES_DATA.findIndex((s) => s.slug === slug);
  return index !== -1 ? SERVICES_SCHEMA[index] : null;
}
