import { defineType } from "sanity";

export default defineType({
  name: "faqItem",
  title: "Вопрос-ответ",
  type: "document",
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
    {
      name: "order",
      title: "Порядок",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "question.ru",
    },
  },
});
