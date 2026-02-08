import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "service",
  title: "Услуга",
  type: "document",
  fields: [
    {
      name: "slug",
      title: "URL slug",
      type: "slug",
      options: { source: "title.en" },
      validation: (rule) => rule.required(),
    },
    {
      name: "title",
      title: "Название",
      type: "localizedString",
      validation: (rule) => rule.required(),
    },
    {
      name: "subtitle",
      title: "Подзаголовок",
      type: "localizedText",
    },
    {
      name: "description",
      title: "Описание (overview)",
      type: "localizedText",
    },
    {
      name: "image",
      title: "Изображение",
      type: "image",
      options: { hotspot: true },
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
    },
    {
      name: "offers",
      title: "Прайс-лист",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "offer",
          fields: [
            {
              name: "name",
              title: "Название",
              type: "localizedString",
              validation: (rule) => rule.required(),
            },
            {
              name: "description",
              title: "Описание",
              type: "localizedString",
            },
            {
              name: "price",
              title: "Цена (€)",
              type: "string",
              validation: (rule) => rule.required(),
            },
          ],
          preview: {
            select: {
              title: "name.ru",
              subtitle: "price",
            },
            prepare({ title, subtitle }) {
              return { title, subtitle: `€${subtitle}` };
            },
          },
        }),
      ],
    },
    {
      name: "techniques",
      title: "Техники",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "technique",
          fields: [
            { name: "name", title: "Название", type: "localizedString" },
            { name: "description", title: "Описание", type: "localizedText" },
          ],
          preview: {
            select: { title: "name.ru" },
          },
        }),
      ],
    },
    {
      name: "benefits",
      title: "Преимущества",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "benefit",
          fields: [
            { name: "text", title: "Текст", type: "localizedString" },
          ],
          preview: {
            select: { title: "text.ru" },
          },
        }),
      ],
    },
    {
      name: "processSteps",
      title: "Этапы процесса",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "processStep",
          fields: [
            { name: "title", title: "Заголовок", type: "localizedString" },
            { name: "description", title: "Описание", type: "localizedText" },
          ],
          preview: {
            select: { title: "title.ru" },
          },
        }),
      ],
    },
    {
      name: "aftercareTips",
      title: "Советы по уходу",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "aftercareTip",
          fields: [
            { name: "text", title: "Текст", type: "localizedString" },
          ],
          preview: {
            select: { title: "text.ru" },
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
    {
      name: "order",
      title: "Порядок",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "title.ru",
      subtitle: "category",
      media: "image",
    },
  },
});
