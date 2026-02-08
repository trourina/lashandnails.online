/**
 * Unified site settings composable.
 * Fetches from Sanity siteSettings, falls back to business.config.ts via runtimeConfig.
 */
export function useSiteSettings() {
  const { data: sanity } = useFetchSiteSettings();
  const config = useRuntimeConfig();
  const business = config.public.business as Record<string, any>;

  return computed(() => {
    const s = sanity.value;
    return {
      phone: s?.phone || business.phone,
      email: s?.email || "info@lashandnails.online",
      telegram: s?.telegram || business.telegram,
      address: {
        street: s?.street || business.address.street,
        city: s?.city || business.address.city,
        region: s?.region || business.address.region,
        postalCode: s?.postalCode || business.address.postalCode,
        country: s?.country || business.address.country,
      },
      hours: {
        weekdays: {
          opens: s?.weekdayOpen || business.hours.weekdays.opens,
          closes: s?.weekdayClose || business.hours.weekdays.closes,
        },
        saturday: {
          opens: s?.saturdayOpen || business.hours.saturday.opens,
          closes: s?.saturdayClose || business.hours.saturday.closes,
        },
      },
      social: {
        facebook: s?.facebook || business.social.facebook,
        instagram: s?.instagram || business.social.instagram,
      },
      googleReviewUrl: s?.googleReviewUrl || 'https://g.page/r/CSnzBqO8436ZEAE/review',
      yelp: s?.yelp || '',
    };
  });
}
