import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "aboutPage",
  title: "О нас",
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
      name: "ownerImage",
      title: "Фото владелицы",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "teamImage1",
      title: "Фото команды 1",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "teamImage2",
      title: "Фото команды 2",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "storyHeading",
      title: "Заголовок истории",
      type: "localizedString",
    },
    {
      name: "storyParagraphs",
      title: "Параграфы истории",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "paragraph",
          fields: [
            {
              name: "text",
              title: "Текст",
              type: "localizedText",
            },
          ],
          preview: {
            select: { title: "text.ru" },
          },
        }),
      ],
    },
    {
      name: "philosophyHeading",
      title: "Заголовок философии",
      type: "localizedString",
    },
    {
      name: "philosophyDescription",
      title: "Описание философии",
      type: "localizedText",
    },
    {
      name: "expertiseHeading",
      title: "Заголовок опыта",
      type: "localizedString",
    },
    {
      name: "expertiseItems",
      title: "Пункты опыта",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "expertiseItem",
          fields: [
            { name: "icon", title: "Эмодзи", type: "string" },
            { name: "title", title: "Заголовок", type: "localizedString" },
            { name: "description", title: "Описание", type: "localizedText" },
          ],
          preview: {
            select: { title: "title.ru", subtitle: "icon" },
          },
        }),
      ],
    },
    {
      name: "valuesHeading",
      title: "Заголовок ценностей",
      type: "localizedString",
    },
    {
      name: "valuesItems",
      title: "Ценности",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "valueItem",
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
      name: "cta",
      title: "Призыв к действию (CTA)",
      type: "object",
      fields: [
        { name: "heading", title: "Заголовок", type: "localizedString" },
        { name: "subtitle", title: "Подзаголовок", type: "localizedString" },
        { name: "button", title: "Кнопка", type: "localizedString" },
        { name: "services", title: "Кнопка услуг", type: "localizedString" },
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
      return { title: "О нас" };
    },
  },
});
