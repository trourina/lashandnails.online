import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
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
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
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
        .child(
          S.document()
            .schemaType("servicesOverviewPage")
            .documentId("servicesOverviewPage"),
        ),
      S.listItem()
        .title("Цены")
        .id("pricingPage")
        .child(
          S.document().schemaType("pricingPage").documentId("pricingPage"),
        ),
      S.listItem()
        .title("Запись")
        .id("bookingPage")
        .child(
          S.document().schemaType("bookingPage").documentId("bookingPage"),
        ),
      S.listItem()
        .title("Контакты")
        .id("contactPage")
        .child(
          S.document().schemaType("contactPage").documentId("contactPage"),
        ),
      S.divider(),
      // List types
      S.listItem()
        .title("Услуги")
        .child(S.documentTypeList("service").title("Услуги")),
      S.listItem()
        .title("Галерея")
        .child(S.documentTypeList("galleryImage").title("Галерея")),
      S.listItem()
        .title("Герой-изображения")
        .child(S.documentTypeList("heroImage").title("Герой-изображения")),
      S.listItem()
        .title("Отзывы")
        .child(S.documentTypeList("testimonial").title("Отзывы")),
      S.listItem()
        .title("FAQ")
        .child(S.documentTypeList("faqItem").title("FAQ")),
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
    visionTool(),
    ruKZLocale(),
  ],

  schema: {
    types: schemaTypes,
    // Prevent singletons from appearing in "new document" menu
    templates: (templates) =>
      templates.filter(
        ({ schemaType }) => !singletonTypes.includes(schemaType),
      ),
  },
});
