import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "servicesOverviewPage",
  title: "Страница услуг",
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
      name: "serviceCards",
      title: "Карточки услуг",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "serviceCard",
          fields: [
            {
              name: "slug",
              title: "URL slug",
              type: "string",
              validation: (rule) => rule.required(),
            },
            { name: "title", title: "Название", type: "localizedString" },
            {
              name: "image",
              title: "Изображение",
              type: "image",
              options: { hotspot: true },
            },
            { name: "description", title: "Описание", type: "localizedText" },
            {
              name: "features",
              title: "Особенности",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "feature",
                  fields: [
                    { name: "text", title: "Текст", type: "localizedString" },
                  ],
                  preview: {
                    select: { title: "text.ru" },
                  },
                }),
              ],
            },
          ],
          preview: {
            select: { title: "title.ru", subtitle: "slug" },
          },
        }),
      ],
    },
    {
      name: "cta",
      title: "Призыв к действию (CTA)",
      type: "object",
      fields: [
        { name: "heading", title: "Заголовок", type: "localizedString" },
        { name: "subtitle", title: "Подзаголовок", type: "localizedString" },
        { name: "button", title: "Кнопка", type: "localizedString" },
        { name: "message", title: "Сообщение WhatsApp", type: "localizedString" },
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
      return { title: "Страница услуг" };
    },
  },
});
