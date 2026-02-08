// Object types
import localizedString from "./objects/localizedString";
import localizedText from "./objects/localizedText";
import seoFields from "./objects/seoFields";

// Document types
import galleryImage from "./documents/galleryImage";
import heroImage from "./documents/heroImage";
import service from "./documents/service";
import testimonial from "./documents/testimonial";
import faqItem from "./documents/faqItem";
import siteSettings from "./documents/siteSettings";

// Page singletons
import homePage from "./documents/homePage";
import aboutPage from "./documents/aboutPage";
import servicesOverviewPage from "./documents/servicesOverviewPage";
import pricingPage from "./documents/pricingPage";
import bookingPage from "./documents/bookingPage";
import contactPage from "./documents/contactPage";
import legalPage from "./documents/legalPage";

export const schemaTypes = [
  // Objects (must be registered before documents that use them)
  localizedString,
  localizedText,
  seoFields,

  // Documents
  galleryImage,
  heroImage,
  service,
  testimonial,
  faqItem,
  siteSettings,

  // Page singletons
  homePage,
  aboutPage,
  servicesOverviewPage,
  pricingPage,
  bookingPage,
  contactPage,
  legalPage,
];

// Singleton document types for Studio structure
export const singletonTypes = [
  "siteSettings",
  "homePage",
  "aboutPage",
  "servicesOverviewPage",
  "pricingPage",
  "bookingPage",
  "contactPage",
];
