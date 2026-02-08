import { defineType } from "sanity";

export default defineType({
  name: "heroImage",
  title: "Фото для главной",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Изображение",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    },
    {
      name: "alt",
      title: "Описание (alt)",
      type: "localizedString",
    },
    {
      name: "category",
      title: "Категория",
      type: "string",
      options: {
        list: [
          { title: "Маникюр", value: "manicure" },
          { title: "Педикюр", value: "pedicure" },
          { title: "Ресницы", value: "lashes" },
          { title: "Брови", value: "brows" },
        ],
      },
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
      title: "alt.ru",
      subtitle: "category",
      media: "image",
    },
  },
});
