import { defineType, defineField } from "sanity";

export default defineType({
  name: "homePage",
  title: "Главная страница",
  type: "document",
  groups: [
    { name: "hero", title: "Герой (шапка)" },
    { name: "featured", title: "Популярные услуги" },
    { name: "reviews", title: "Отзывы" },
    { name: "faq", title: "Вопросы и ответы" },
    { name: "cta", title: "Призыв к действию" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // Hero section
    defineField({ name: "heroTitle", title: "Заголовок", type: "localizedString", group: "hero" }),
    defineField({
      name: "heroSubtitle",
      title: "Подзаголовок",
      type: "localizedString",
      group: "hero",
    }),
    defineField({
      name: "heroDescription",
      title: "Описание",
      type: "localizedText",
      group: "hero",
    }),
    defineField({
      name: "heroCtaPrimary",
      title: "Кнопка WhatsApp",
      type: "localizedString",
      group: "hero",
    }),
    defineField({
      name: "heroCtaMessage",
      title: "Сообщение WhatsApp",
      type: "localizedString",
      group: "hero",
    }),
    defineField({
      name: "heroCategoryLashes",
      title: "Категория: Ресницы",
      type: "localizedString",
      group: "hero",
    }),
    defineField({
      name: "heroCategoryManicure",
      title: "Категория: Маникюр",
      type: "localizedString",
      group: "hero",
    }),
    defineField({
      name: "heroCategoryPedicure",
      title: "Категория: Педикюр",
      type: "localizedString",
      group: "hero",
    }),
    defineField({
      name: "heroCategoryBrows",
      title: "Категория: Брови",
      type: "localizedString",
      group: "hero",
    }),

    // Featured services section
    defineField({
      name: "featuredTitle",
      title: "Заголовок секции",
      type: "localizedString",
      group: "featured",
    }),
    defineField({
      name: "featuredSeeMore",
      title: "Кнопка 'Показать ещё'",
      type: "localizedString",
      group: "featured",
    }),
    defineField({
      name: "featuredFromLabel",
      title: "Метка 'от' (для цен)",
      type: "localizedString",
      group: "featured",
    }),
    defineField({
      name: "featuredServices",
      title: "Популярные услуги (карточки)",
      type: "array",
      group: "featured",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", title: "Название", type: "localizedString" },
            { name: "price", title: "Цена", type: "string" },
            {
              name: "image",
              title: "Изображение",
              type: "image",
              options: { hotspot: true },
            },
            { name: "link", title: "Ссылка (напр. /services/manicure)", type: "string" },
          ],
          preview: {
            select: { title: "name.ru", subtitle: "price", media: "image" },
          },
        },
      ],
    }),

    // Reviews section
    defineField({
      name: "reviewsTitle",
      title: "Заголовок секции",
      type: "localizedString",
      group: "reviews",
    }),
    defineField({
      name: "reviewsDescription",
      title: "Описание секции",
      type: "localizedText",
      group: "reviews",
    }),
    defineField({
      name: "reviewsClientLabel",
      title: "Метка 'Наш клиент'",
      type: "localizedString",
      group: "reviews",
    }),
    defineField({
      name: "reviewsCtaButton",
      title: "Кнопка 'Оставить отзыв'",
      type: "localizedString",
      group: "reviews",
    }),

    // FAQ section
    defineField({
      name: "faqHeading",
      title: "Заголовок секции",
      type: "localizedString",
      group: "faq",
    }),
    defineField({
      name: "faqDescription",
      title: "Описание секции",
      type: "localizedText",
      group: "faq",
    }),

    // CTA section
    defineField({ name: "ctaHeading", title: "Заголовок", type: "localizedString", group: "cta" }),
    defineField({
      name: "ctaSubtitle",
      title: "Подзаголовок",
      type: "localizedString",
      group: "cta",
    }),
    defineField({
      name: "ctaButton",
      title: "Кнопка WhatsApp",
      type: "localizedString",
      group: "cta",
    }),
    defineField({
      name: "ctaSecondary",
      title: "Вторая кнопка",
      type: "localizedString",
      group: "cta",
    }),
    defineField({
      name: "ctaMessage",
      title: "Сообщение WhatsApp",
      type: "localizedString",
      group: "cta",
    }),

    // SEO
    defineField({ name: "seo", title: "SEO", type: "seoFields", group: "seo" }),
  ],
  preview: {
    prepare() {
      return { title: "Главная страница" };
    },
  },
});
