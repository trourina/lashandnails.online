import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "bookingPage",
  title: "Страница записи",
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
      name: "methodsHeading",
      title: "Заголовок методов",
      type: "localizedString",
    },
    {
      name: "methods",
      title: "Методы записи",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "bookingMethod",
          fields: [
            {
              name: "key",
              title: "Ключ",
              type: "string",
              description: "whatsapp, phone и т.д.",
              validation: (rule) => rule.required(),
            },
            { name: "title", title: "Название", type: "localizedString" },
            { name: "description", title: "Описание", type: "localizedText" },
            { name: "cta", title: "Текст кнопки", type: "localizedString" },
            {
              name: "message",
              title: "Сообщение WhatsApp",
              type: "localizedString",
              description: "Только для WhatsApp",
            },
          ],
          preview: {
            select: { title: "title.ru", subtitle: "key" },
          },
        }),
      ],
    },
    {
      name: "infoHeading",
      title: "Заголовок информации",
      type: "localizedString",
    },
    {
      name: "infoItems",
      title: "Информационные пункты",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "infoItem",
          fields: [
            {
              name: "key",
              title: "Ключ",
              type: "string",
              description: "hours, services, location",
              validation: (rule) => rule.required(),
            },
            { name: "label", title: "Метка", type: "localizedString" },
            { name: "value", title: "Значение", type: "localizedText" },
            {
              name: "linkText",
              title: "Текст ссылки",
              type: "localizedString",
            },
            {
              name: "linkUrl",
              title: "URL ссылки",
              type: "string",
            },
          ],
          preview: {
            select: { title: "label.ru", subtitle: "key" },
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
      return { title: "Страница записи" };
    },
  },
});
