import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "legalPage",
  title: "Юридическая страница",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "URL slug",
      type: "slug",
      validation: (rule) => rule.required(),
    },
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
      name: "sections",
      title: "Разделы",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "legalSection",
          fields: [
            {
              name: "title",
              title: "Заголовок",
              type: "localizedString",
              validation: (rule) => rule.required(),
            },
            {
              name: "content",
              title: "Содержание",
              type: "localizedText",
              description: "Основной текст раздела",
            },
            {
              name: "listItems",
              title: "Список пунктов",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "listItem",
                  fields: [
                    {
                      name: "text",
                      title: "Текст",
                      type: "localizedString",
                    },
                  ],
                  preview: {
                    select: { title: "text.ru" },
                  },
                }),
              ],
            },
            {
              name: "footer",
              title: "Текст после списка",
              type: "localizedText",
            },
          ],
          preview: {
            select: { title: "title.ru" },
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
    select: { title: "title.ru" },
  },
});
