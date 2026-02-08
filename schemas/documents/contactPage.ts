import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "contactPage",
  title: "Страница контактов",
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
      name: "contactCards",
      title: "Контактные карточки",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "contactCard",
          fields: [
            {
              name: "key",
              title: "Ключ",
              type: "string",
              description: "phone, email, location, hours",
              validation: (rule) => rule.required(),
            },
            { name: "title", title: "Заголовок", type: "localizedString" },
            {
              name: "value",
              title: "Значение",
              type: "localizedText",
              description: "Текст для отображения (напр. адрес, часы)",
            },
          ],
          preview: {
            select: { title: "title.ru", subtitle: "key" },
          },
        }),
      ],
    },
    {
      name: "faqs",
      title: "Часто задаваемые вопросы (контактные)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "contactFaq",
          fields: [
            {
              name: "question",
              title: "Вопрос",
              type: "localizedString",
              validation: (rule) => rule.required(),
            },
            {
              name: "answer",
              title: "Ответ",
              type: "localizedText",
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: { title: "question.ru" },
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
      return { title: "Страница контактов" };
    },
  },
});
