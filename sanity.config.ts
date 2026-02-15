import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool, defineLocations } from "sanity/presentation";
import { visionTool } from "@sanity/vision";
import { ruKZLocale } from "@sanity/locale-ru-kz";
import { schemaTypes, singletonTypes } from "./schemas";
import type { StructureBuilder } from "sanity/structure";

function structure(S: StructureBuilder) {
  return S.list()
    .title("Контент")
    .items([
      // Singletons — Pages
      S.listItem()
        .title("Настройки сайта")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.listItem()
        .title("Главная")
        .id("homePage")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("О нас")
        .id("aboutPage")
        .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
      S.listItem()
        .title("Обзор услуг")
        .id("servicesOverviewPage")
        .child(S.document().schemaType("servicesOverviewPage").documentId("servicesOverviewPage")),
      S.listItem()
        .title("Цены")
        .id("pricingPage")
        .child(S.document().schemaType("pricingPage").documentId("pricingPage")),
      S.listItem()
        .title("Запись")
        .id("bookingPage")
        .child(S.document().schemaType("bookingPage").documentId("bookingPage")),
      S.listItem()
        .title("Контакты")
        .id("contactPage")
        .child(S.document().schemaType("contactPage").documentId("contactPage")),
      S.divider(),
      // List types
      S.listItem().title("Услуги").child(S.documentTypeList("service").title("Услуги")),
      S.listItem().title("Галерея").child(S.documentTypeList("galleryImage").title("Галерея")),
      S.listItem()
        .title("Герой-изображения")
        .child(S.documentTypeList("heroImage").title("Герой-изображения")),
      S.listItem().title("Отзывы").child(S.documentTypeList("testimonial").title("Отзывы")),
      S.listItem().title("FAQ").child(S.documentTypeList("faqItem").title("FAQ")),
      S.divider(),
      // Legal pages (multiple documents)
      S.listItem()
        .title("Юридические страницы")
        .child(S.documentTypeList("legalPage").title("Юридические страницы")),
    ]);
}

export default defineConfig({
  name: "lashandnails",
  title: "Lash & Nails Santa Pola",

  projectId: "4dsh8g5u",
  dataset: "production",

  plugins: [
    structureTool({ structure }),
    presentationTool({
      previewUrl: {
        initial: "https://www.lashandnails.es/es",
        previewMode: {
          enable: "/preview/enable",
        },
      },
      allowOrigins: ["http://localhost:*", "https://www.lashandnails.es"],
      resolve: {
        locations: {
          // Singleton pages
          homePage: defineLocations({
            message: "Главная страница",
            tone: "primary",
            locations: [{ title: "Главная", href: "/es" }],
          }),
          aboutPage: defineLocations({
            message: "Страница «О нас»",
            tone: "primary",
            locations: [{ title: "О нас", href: "/es/about" }],
          }),
          servicesOverviewPage: defineLocations({
            message: "Обзор услуг",
            tone: "primary",
            locations: [{ title: "Услуги", href: "/es/services" }],
          }),
          pricingPage: defineLocations({
            message: "Страница цен",
            tone: "primary",
            locations: [{ title: "Цены", href: "/es/pricing" }],
          }),
          bookingPage: defineLocations({
            message: "Страница записи",
            tone: "primary",
            locations: [{ title: "Запись", href: "/es/booking" }],
          }),
          contactPage: defineLocations({
            message: "Страница контактов",
            tone: "primary",
            locations: [{ title: "Контакты", href: "/es/contact" }],
          }),
          siteSettings: defineLocations({
            message: "Настройки используются на всех страницах",
            tone: "caution",
            locations: [{ title: "Главная", href: "/es" }],
          }),
          // List documents with dynamic slugs
          service: defineLocations({
            select: { title: "title.es", slug: "slug.current" },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Услуга",
                  href: `/es/services/${doc?.slug}`,
                },
                { title: "Все услуги", href: "/es/services" },
              ],
            }),
          }),
          legalPage: defineLocations({
            select: { title: "title.es", slug: "slug.current" },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Юридическая страница",
                  href: `/es/${doc?.slug}`,
                },
              ],
            }),
          }),
          galleryImage: defineLocations({
            message: "Изображения галереи",
            tone: "primary",
            locations: [{ title: "Галерея", href: "/es/gallery" }],
          }),
          heroImage: defineLocations({
            message: "Герой-изображения отображаются на главной",
            tone: "primary",
            locations: [{ title: "Главная", href: "/es" }],
          }),
          testimonial: defineLocations({
            message: "Отзывы отображаются на главной",
            tone: "primary",
            locations: [{ title: "Главная", href: "/es" }],
          }),
          faqItem: defineLocations({
            message: "FAQ отображаются на главной и контактах",
            tone: "primary",
            locations: [
              { title: "Главная", href: "/es" },
              { title: "Контакты", href: "/es/contact" },
            ],
          }),
        },
      },
    }),
    visionTool(),
    ruKZLocale(),
  ],

  schema: {
    types: schemaTypes,
    // Prevent singletons from appearing in "new document" menu
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
  },
});
