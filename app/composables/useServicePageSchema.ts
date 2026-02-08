import { getServiceSchemaBySlug } from "../../config/services.config";

/**
 * Composable to add consistent Schema.org markup to service pages
 * Automatically integrates with Nuxt I18n for language support
 *
 * @param serviceSlug - The slug of the service (e.g., "/services/lash-extensions")
 * @param pageTitle - Reactive function that returns the page title
 * @param seoDescription - Reactive function that returns the SEO description
 */
export function useServicePageSchema(
  serviceSlug: string,
  pageTitle: () => string,
  seoDescription: () => string
) {
  const config = useRuntimeConfig();
  const business = config.public.business;
  const { t } = useI18n();

  // Get service schema from centralized config
  const serviceSchema = getServiceSchemaBySlug(serviceSlug);

  useSchemaOrg([
    {
      "@type": "WebPage",
      "@id": `${business.url}${serviceSlug}#webpage`,
      name: pageTitle,
      description: seoDescription,
      // inLanguage is automatically set by Nuxt I18n integration
      breadcrumb: {
        "@id": `${business.url}${serviceSlug}#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${business.url}${serviceSlug}#breadcrumb`,
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
          name: pageTitle,
        },
      ],
    },
    // Add service schema from config if available
    ...(serviceSchema ? [serviceSchema] : []),
  ]);
}
