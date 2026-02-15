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
        name: "Classic Extensions",
        price: "35",
        description: "Natural-looking lash extensions (1.5-2 hours)",
      },
      {
        name: "2D Extensions",
        price: "40",
        description: "Volume lash extensions for fuller look",
      },
      {
        name: "3D Extensions",
        price: "45",
        description: "Maximum volume and dramatic effect",
      },
      {
        name: "Lash Tinting",
        price: "10",
        description: "Enhance your natural lashes with tinting",
      },
      {
        name: "Lash Lamination",
        price: "35",
        description: "Lamination with tinting for lifted lashes",
      },
    ],
    image: `${BUSINESS.url}/images/lash-extensions.jpg`,
  },
  {
    id: "manicure",
    slug: "/services/manicure",
    name: "Manicure",
    description:
      "Professional manicure services with premium products for beautiful, healthy nails",
    category: "BeautyService",
    offers: [
      {
        name: "Hygienic Manicure (Women)",
        price: "20",
        description: "Basic manicure with nail care",
      },
      {
        name: "Manicure with Coating",
        price: "35",
        description: "Manicure with gel polish",
      },
      {
        name: "French Manicure",
        price: "45",
        description: "Classic French manicure style",
      },
      {
        name: "Men's Manicure",
        price: "25",
        description: "Professional nail care for men",
      },
      {
        name: "Gel Extension",
        price: "60",
        description: "Nail extension with gel",
      },
    ],
    image: `${BUSINESS.url}/images/manicure.jpg`,
  },
  {
    id: "pedicure",
    slug: "/services/pedicure",
    name: "Pedicure",
    description: "Professional pedicure services for healthy, beautiful feet",
    category: "BeautyService",
    offers: [
      {
        name: "Hygienic Pedicure (Women)",
        price: "45",
        description: "Complete pedicure treatment",
      },
      {
        name: "Pedicure with Coating",
        price: "55",
        description: "Pedicure with gel polish",
      },
      {
        name: "Men's Pedicure",
        price: "50",
        description: "Professional foot care for men",
      },
      {
        name: "Spa Foot Care",
        price: "20",
        description: "Relaxing spa treatment for feet",
      },
    ],
    image: `${BUSINESS.url}/images/pedicure.jpg`,
  },
  {
    id: "brows",
    slug: "/services/brows",
    name: "Brows",
    description: "Professional brow shaping, tinting and lamination services for perfect brows",
    category: "BeautyService",
    offers: [
      {
        name: "Brow Tinting",
        price: "10",
        description: "Professional brow tinting",
      },
      {
        name: "Tinting + Correction",
        price: "15",
        description: "Brow shaping and tinting",
      },
      {
        name: "Brow Lamination",
        price: "35",
        description: "Lamination with correction and tinting",
      },
      {
        name: "Brow Micropigmentation",
        price: "120",
        description: "Semi-permanent brow micropigmentation",
      },
    ],
    image: `${BUSINESS.url}/images/brows.jpg`,
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
