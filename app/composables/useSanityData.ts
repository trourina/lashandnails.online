/**
 * Sanity CMS data layer — GROQ queries with locale-aware field extraction.
 *
 * Uses useAsyncData + useSanity().client.fetch() directly instead of
 * useSanityQuery to avoid hydration mismatches. The module's useSanityQuery
 * wraps data in a custom ref that starts as null on the client before the
 * payload resolves, causing components to briefly render fallback content.
 */

type LocalizedField = { en?: string; es?: string; ru?: string };

/**
 * Extract the current locale's value from a localized field, with EN fallback.
 */
export function getLocalized(
  field: LocalizedField | undefined,
  locale: string
): string {
  if (!field) return "";
  return (
    (field as Record<string, string>)[locale] || field.en || ""
  );
}

/**
 * Thin wrapper around useAsyncData + Sanity client.fetch().
 * Avoids useSanityQuery's hydration issue with its custom data ref.
 */
function useSanityFetch<T>(key: string, query: string, params?: Record<string, unknown>) {
  const { client } = useSanity();
  return useAsyncData(key, () => client.fetch<T>(query, params || {}));
}

// ─── Gallery ────────────────────────────────────────────────────────

const GALLERY_QUERY = `*[_type == "galleryImage"] | order(order asc) {
  _id,
  image,
  alt,
  caption,
  category
}`;

export function useFetchGalleryImages() {
  return useSanityFetch<
    {
      _id: string;
      image: { asset: { _ref: string }; hotspot?: unknown };
      alt: LocalizedField;
      caption: LocalizedField;
      category: string;
    }[]
  >('sanity-gallery', GALLERY_QUERY);
}

// ─── Hero images ────────────────────────────────────────────────────

const HERO_QUERY = `*[_type == "heroImage"] | order(order asc) {
  _id,
  image,
  alt,
  category
}`;

export function useFetchHeroImages() {
  return useSanityFetch<
    {
      _id: string;
      image: { asset: { _ref: string }; hotspot?: unknown };
      alt: LocalizedField;
      category: string;
    }[]
  >('sanity-hero-images', HERO_QUERY);
}

// ─── Services ───────────────────────────────────────────────────────

const SERVICE_BY_SLUG_QUERY = `*[_type == "service" && slug.current == $slug][0] {
  _id,
  slug,
  title,
  subtitle,
  description,
  image,
  category,
  offers[] {
    name,
    description,
    price
  },
  techniques[] {
    name,
    description
  },
  benefits[] {
    text
  },
  processSteps[] {
    title,
    description
  },
  aftercareTips[] {
    text
  },
  cta,
  seo
}`;

export interface SanityOffer {
  name: LocalizedField;
  description: LocalizedField;
  price: string;
}

export interface SanityTechnique {
  name: LocalizedField;
  description: LocalizedField;
}

export interface SanityBenefit {
  text: LocalizedField;
}

export interface SanityProcessStep {
  title: LocalizedField;
  description: LocalizedField;
}

export interface SanityCTA {
  heading: LocalizedField;
  subtitle: LocalizedField;
  button: LocalizedField;
  message: LocalizedField;
}

export interface SanityService {
  _id: string;
  slug: { current: string };
  title: LocalizedField;
  subtitle: LocalizedField;
  description: LocalizedField;
  image: { asset: { _ref: string }; hotspot?: unknown } | null;
  category: string;
  offers: SanityOffer[];
  techniques: SanityTechnique[] | null;
  benefits: SanityBenefit[] | null;
  processSteps: SanityProcessStep[] | null;
  aftercareTips: SanityBenefit[] | null;
  cta: SanityCTA | null;
  seo: {
    title: LocalizedField;
    description: LocalizedField;
  } | null;
}

export function useFetchService(slug: string) {
  return useSanityFetch<SanityService | null>(`sanity-service-${slug}`, SERVICE_BY_SLUG_QUERY, { slug });
}

const ALL_SERVICES_QUERY = `*[_type == "service"] | order(order asc) {
  _id,
  slug,
  title,
  subtitle,
  image,
  category,
  offers[] {
    name,
    description,
    price
  }
}`;

export function useFetchAllServices() {
  return useSanityFetch<SanityService[]>('sanity-all-services', ALL_SERVICES_QUERY);
}

// ─── Testimonials ───────────────────────────────────────────────────

const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc) {
  _id,
  clientName,
  avatar,
  title,
  quote,
  rating
}`;

export function useFetchTestimonials() {
  return useSanityFetch<
    {
      _id: string;
      clientName: string;
      avatar: { asset: { _ref: string } } | null;
      title: LocalizedField;
      quote: LocalizedField;
      rating: number;
    }[]
  >('sanity-testimonials', TESTIMONIALS_QUERY);
}

// ─── FAQ ────────────────────────────────────────────────────────────

const FAQ_QUERY = `*[_type == "faqItem"] | order(order asc) {
  _id,
  question,
  answer
}`;

export function useFetchFAQs() {
  return useSanityFetch<
    {
      _id: string;
      question: LocalizedField;
      answer: LocalizedField;
    }[]
  >('sanity-faqs', FAQ_QUERY);
}

// ─── Site Settings ─────────────────────────────────────────────────

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  siteName,
  siteDescription,
  phone,
  email,
  telegram,
  street,
  city,
  region,
  postalCode,
  country,
  weekdayOpen,
  weekdayClose,
  saturdayOpen,
  saturdayClose,
  facebook,
  instagram,
  googleReviewUrl,
  yelp
}`;

export interface SanitySiteSettings {
  siteName: string;
  siteDescription: LocalizedField;
  phone: string;
  email: string;
  telegram: string;
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  weekdayOpen: string;
  weekdayClose: string;
  saturdayOpen: string;
  saturdayClose: string;
  facebook: string;
  instagram: string;
  googleReviewUrl: string;
  yelp: string;
}

export function useFetchSiteSettings() {
  return useSanityFetch<SanitySiteSettings | null>('sanity-site-settings', SITE_SETTINGS_QUERY);
}

// ─── Home Page ─────────────────────────────────────────────────────

const HOME_PAGE_QUERY = `*[_type == "homePage"][0] {
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroCtaPrimary,
  heroCtaMessage,
  heroCategoryLashes,
  heroCategoryManicure,
  heroCategoryPedicure,
  heroCategoryBrows,
  featuredTitle,
  featuredSeeMore,
  featuredFromLabel,
  featuredServices[] {
    name,
    price,
    image,
    link
  },
  reviewsTitle,
  reviewsDescription,
  reviewsClientLabel,
  reviewsCtaButton,
  faqHeading,
  faqDescription,
  ctaHeading,
  ctaSubtitle,
  ctaButton,
  ctaSecondary,
  ctaMessage,
  seo
}`;

export interface SanitySeoFields {
  title: LocalizedField;
  description: LocalizedField;
}

export interface SanityHomePage {
  heroTitle: LocalizedField;
  heroSubtitle: LocalizedField;
  heroDescription: LocalizedField;
  heroCtaPrimary: LocalizedField;
  heroCtaMessage: LocalizedField;
  heroCategoryLashes: LocalizedField;
  heroCategoryManicure: LocalizedField;
  heroCategoryPedicure: LocalizedField;
  heroCategoryBrows: LocalizedField;
  featuredTitle: LocalizedField;
  featuredSeeMore: LocalizedField;
  featuredFromLabel: LocalizedField;
  featuredServices: {
    name: LocalizedField;
    price: string;
    image: { asset: { _ref: string }; hotspot?: unknown } | null;
    link: string;
  }[] | null;
  reviewsTitle: LocalizedField;
  reviewsDescription: LocalizedField;
  reviewsClientLabel: LocalizedField;
  reviewsCtaButton: LocalizedField;
  faqHeading: LocalizedField;
  faqDescription: LocalizedField;
  ctaHeading: LocalizedField;
  ctaSubtitle: LocalizedField;
  ctaButton: LocalizedField;
  ctaSecondary: LocalizedField;
  ctaMessage: LocalizedField;
  seo: SanitySeoFields | null;
}

export function useFetchHomePage() {
  return useSanityFetch<SanityHomePage | null>('sanity-home-page', HOME_PAGE_QUERY);
}

// ─── About Page ────────────────────────────────────────────────────

const ABOUT_PAGE_QUERY = `*[_type == "aboutPage"][0] {
  title,
  subtitle,
  ownerImage,
  teamImage1,
  teamImage2,
  storyHeading,
  storyParagraphs[] { text },
  philosophyHeading,
  philosophyDescription,
  expertiseHeading,
  expertiseItems[] { icon, title, description },
  valuesHeading,
  valuesItems[] { title, description },
  cta,
  seo
}`;

type SanityImage = { asset: { _ref: string }; hotspot?: unknown } | null;

export interface SanityAboutPage {
  title: LocalizedField;
  subtitle: LocalizedField;
  ownerImage: SanityImage;
  teamImage1: SanityImage;
  teamImage2: SanityImage;
  storyHeading: LocalizedField;
  storyParagraphs: { text: LocalizedField }[] | null;
  philosophyHeading: LocalizedField;
  philosophyDescription: LocalizedField;
  expertiseHeading: LocalizedField;
  expertiseItems: { icon: string; title: LocalizedField; description: LocalizedField }[] | null;
  valuesHeading: LocalizedField;
  valuesItems: { title: LocalizedField; description: LocalizedField }[] | null;
  cta: {
    heading: LocalizedField;
    subtitle: LocalizedField;
    button: LocalizedField;
    services: LocalizedField;
    message: LocalizedField;
  } | null;
  seo: SanitySeoFields | null;
}

export function useFetchAboutPage() {
  return useSanityFetch<SanityAboutPage | null>('sanity-about-page', ABOUT_PAGE_QUERY);
}

// ─── Services Overview Page ────────────────────────────────────────

const SERVICES_OVERVIEW_QUERY = `*[_type == "servicesOverviewPage"][0] {
  title,
  subtitle,
  serviceCards[] {
    slug,
    title,
    description,
    image,
    features[] { text }
  },
  cta,
  seo
}`;

export interface SanityServicesOverviewPage {
  title: LocalizedField;
  subtitle: LocalizedField;
  serviceCards: {
    slug: string;
    title: LocalizedField;
    description: LocalizedField;
    image: { asset: { _ref: string }; hotspot?: unknown } | null;
    features: { text: LocalizedField }[] | null;
  }[] | null;
  cta: SanityCTA | null;
  seo: SanitySeoFields | null;
}

export function useFetchServicesOverview() {
  return useSanityFetch<SanityServicesOverviewPage | null>('sanity-services-overview', SERVICES_OVERVIEW_QUERY);
}

// ─── Pricing Page ──────────────────────────────────────────────────

const PRICING_PAGE_QUERY = `*[_type == "pricingPage"][0] {
  title,
  subtitle,
  pricingTitle,
  categories[] {
    name,
    slug,
    cta,
    services[] {
      name,
      note,
      price
    }
  },
  seo
}`;

export interface SanityPricingCategory {
  name: LocalizedField;
  slug: string | null;
  cta: LocalizedField | null;
  services: {
    name: LocalizedField;
    note: LocalizedField | null;
    price: string;
  }[];
}

export interface SanityPricingPage {
  title: LocalizedField;
  subtitle: LocalizedField;
  pricingTitle: LocalizedField;
  categories: SanityPricingCategory[] | null;
  seo: SanitySeoFields | null;
}

export function useFetchPricingPage() {
  return useSanityFetch<SanityPricingPage | null>('sanity-pricing-page', PRICING_PAGE_QUERY);
}

// ─── Booking Page ──────────────────────────────────────────────────

const BOOKING_PAGE_QUERY = `*[_type == "bookingPage"][0] {
  title,
  subtitle,
  methodsHeading,
  methods[] {
    key,
    title,
    description,
    cta,
    message
  },
  infoHeading,
  infoItems[] {
    key,
    label,
    value,
    linkText,
    linkUrl
  },
  seo
}`;

export interface SanityBookingPage {
  title: LocalizedField;
  subtitle: LocalizedField;
  methodsHeading: LocalizedField;
  methods: {
    key: string;
    title: LocalizedField;
    description: LocalizedField;
    cta: LocalizedField;
    message: LocalizedField | null;
  }[] | null;
  infoHeading: LocalizedField;
  infoItems: {
    key: string;
    label: LocalizedField;
    value: LocalizedField;
    linkText: LocalizedField | null;
    linkUrl: string | null;
  }[] | null;
  seo: SanitySeoFields | null;
}

export function useFetchBookingPage() {
  return useSanityFetch<SanityBookingPage | null>('sanity-booking-page', BOOKING_PAGE_QUERY);
}

// ─── Contact Page ──────────────────────────────────────────────────

const CONTACT_PAGE_QUERY = `*[_type == "contactPage"][0] {
  title,
  subtitle,
  contactCards[] {
    key,
    title,
    value
  },
  faqs[] {
    question,
    answer
  },
  seo
}`;

export interface SanityContactPage {
  title: LocalizedField;
  subtitle: LocalizedField;
  contactCards: {
    key: string;
    title: LocalizedField;
    value: LocalizedField | null;
  }[] | null;
  faqs: {
    question: LocalizedField;
    answer: LocalizedField;
  }[] | null;
  seo: SanitySeoFields | null;
}

export function useFetchContactPage() {
  return useSanityFetch<SanityContactPage | null>('sanity-contact-page', CONTACT_PAGE_QUERY);
}

// ─── Legal Page ────────────────────────────────────────────────────

const LEGAL_PAGE_QUERY = `*[_type == "legalPage" && slug.current == $slug][0] {
  slug,
  title,
  subtitle,
  sections[] {
    title,
    content,
    listItems[] { text },
    footer
  },
  seo
}`;

export interface SanityLegalPage {
  slug: { current: string };
  title: LocalizedField;
  subtitle: LocalizedField;
  sections: {
    title: LocalizedField;
    content: LocalizedField | null;
    listItems: { text: LocalizedField }[] | null;
    footer: LocalizedField | null;
  }[] | null;
  seo: SanitySeoFields | null;
}

export function useFetchLegalPage(slug: string) {
  return useSanityFetch<SanityLegalPage | null>(`sanity-legal-${slug}`, LEGAL_PAGE_QUERY, { slug });
}
