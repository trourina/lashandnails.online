const OG_LOCALE_MAP: Record<string, string> = {
  es: "es_ES",
  ru: "ru_RU",
  en: "en_US",
};

export function useOgLocale() {
  const { locale } = useI18n();
  return computed(() => OG_LOCALE_MAP[locale.value] || "en_US");
}
