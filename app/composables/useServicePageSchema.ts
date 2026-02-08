import { stegaClean } from "@sanity/client/stega";
import { BUSINESS } from "../../config/business.config";

interface ServiceOffer {
  name: string;
  description?: string;
  price: string;
}

interface ServiceSchemaOptions {
  slug: string;
  title: () => string;
  description: () => string;
  offers: () => ServiceOffer[];
}

/**
 * Composable to add consistent Schema.org markup to service pages.
 * Builds WebPage, BreadcrumbList, and Service schemas from Sanity data.
 */
export function useServicePageSchema(options: ServiceSchemaOptions) {
  const config = useRuntimeConfig();
  const business = config.public.business;
  const { t } = useI18n();

  const serviceUrl = `${business.url}${options.slug}`;

  useSchemaOrg([
    {
      "@type": "WebPage",
      "@id": `${serviceUrl}#webpage`,
      name: options.title,
      description: options.description,
      breadcrumb: {
        "@id": `${serviceUrl}#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${serviceUrl}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: () => t("breadcrumb.home"),
          item: business.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: () => t("breadcrumb.services"),
          item: `${business.url}/services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: options.title,
        },
      ],
    },
    {
      "@type": "Service",
      "@id": `${serviceUrl}#service`,
      serviceType: options.title,
      name: options.title,
      description: options.description,
      category: "BeautyService",
      provider: {
        "@id": `${BUSINESS.url}/#localbusiness`,
      },
      areaServed: {
        "@type": "City",
        name: "Santa Pola",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: options.title,
        itemListElement: () =>
          options.offers().map((offer) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: stegaClean(offer.name),
              ...(offer.description && { description: stegaClean(offer.description) }),
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "EUR",
              price: stegaClean(offer.price),
            },
            availability: "http://schema.org/InStock",
          })),
      },
    },
  ]);
}
