import { defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Отзыв",
  type: "document",
  fields: [
    {
      name: "clientName",
      title: "Имя клиента",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "avatar",
      title: "Фото клиента",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "title",
      title: "Заголовок",
      type: "localizedString",
    },
    {
      name: "quote",
      title: "Текст отзыва",
      type: "localizedText",
      validation: (rule) => rule.required(),
    },
    {
      name: "rating",
      title: "Оценка (1-5)",
      type: "number",
      validation: (rule) => rule.min(1).max(5),
      initialValue: 5,
    },
    {
      name: "order",
      title: "Порядок",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "clientName",
      subtitle: "title.ru",
      media: "avatar",
    },
  },
});
