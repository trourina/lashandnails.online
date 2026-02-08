import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "pricingPage",
  title: "Страница цен",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Заголовок",
      type: "localizedString",
    },
    {
      name: "subtitle",
      title: "Подзаголовок",
      type: "localizedString",
    },
    {
      name: "pricingTitle",
      title: "Заголовок таблицы цен",
      type: "localizedString",
    },
    {
      name: "categories",
      title: "Категории",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "pricingCategory",
          fields: [
            {
              name: "name",
              title: "Название категории",
              type: "localizedString",
              validation: (rule) => rule.required(),
            },
            {
              name: "slug",
              title: "Ссылка на страницу услуги (slug)",
              type: "string",
              description: "Например: lash-extensions, manicure",
            },
            {
              name: "cta",
              title: "Текст CTA",
              type: "localizedText",
            },
            {
              name: "services",
              title: "Услуги",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "pricingService",
                  fields: [
                    {
                      name: "name",
                      title: "Название",
                      type: "localizedString",
                      validation: (rule) => rule.required(),
                    },
                    {
                      name: "note",
                      title: "Примечание",
                      type: "localizedString",
                    },
                    {
                      name: "price",
                      title: "Цена",
                      type: "string",
                      description: 'Например: "35€", "от 10€", "+5€"',
                      validation: (rule) => rule.required(),
                    },
                  ],
                  preview: {
                    select: { title: "name.ru", subtitle: "price" },
                  },
                }),
              ],
            },
          ],
          preview: {
            select: { title: "name.ru" },
          },
        }),
      ],
    },
    {
      name: "seo",
      title: "SEO",
      type: "seoFields",
    },
  ],
  preview: {
    prepare() {
      return { title: "Страница цен" };
    },
  },
});
