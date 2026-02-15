/**
 * Unified site settings composable.
 * Fetches from Sanity siteSettings, falls back to business.config.ts via runtimeConfig.
 * All values are stegaClean'd — they're used in hrefs, tel:, mailto:, etc.
 */
export function useSiteSettings() {
  const { data: sanity } = useFetchSiteSettings();
  const config = useRuntimeConfig();
  const business = config.public.business as Record<string, any>;

  const c = (val: string | undefined) => (val ? stegaClean(val) : undefined);

  return computed(() => {
    const s = sanity.value;
    return {
      phone: c(s?.phone) || business.phone,
      email: c(s?.email) || "info@lashandnails.es",
      telegram: c(s?.telegram) || business.telegram,
      address: {
        street: c(s?.street) || business.address.street,
        city: c(s?.city) || business.address.city,
        region: c(s?.region) || business.address.region,
        postalCode: c(s?.postalCode) || business.address.postalCode,
        country: c(s?.country) || business.address.country,
      },
      hours: {
        weekdays: {
          opens: c(s?.weekdayOpen) || business.hours.weekdays.opens,
          closes: c(s?.weekdayClose) || business.hours.weekdays.closes,
        },
        saturday: {
          opens: c(s?.saturdayOpen) || business.hours.saturday.opens,
          closes: c(s?.saturdayClose) || business.hours.saturday.closes,
        },
      },
      social: {
        facebook: c(s?.facebook) || business.social.facebook,
        instagram: c(s?.instagram) || business.social.instagram,
      },
      googleReviewUrl: c(s?.googleReviewUrl) || "https://g.page/r/CSnzBqO8436ZEAE/review",
      yelp: c(s?.yelp) || "https://yelp.es/biz/xnvJCVsuqRKFVajEYXZk-w",
    };
  });
}
