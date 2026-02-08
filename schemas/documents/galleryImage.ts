import { defineType } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Фото галереи",
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
      name: "caption",
      title: "Подпись",
      type: "localizedString",
    },
    {
      name: "category",
      title: "Категория",
      type: "string",
      options: {
        list: [
          { title: "Ресницы", value: "lashes" },
          { title: "Маникюр", value: "manicure" },
          { title: "Педикюр", value: "pedicure" },
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
  orderings: [
    {
      title: "По порядку",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
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
