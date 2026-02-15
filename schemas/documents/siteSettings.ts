import { defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Настройки сайта",
  type: "document",
  groups: [
    { name: "general", title: "Общие", default: true },
    { name: "contact", title: "Контакты" },
    { name: "hours", title: "Часы работы" },
    { name: "social", title: "Соцсети" },
  ],
  fields: [
    {
      name: "siteName",
      title: "Название сайта",
      type: "string",
      group: "general",
    },
    {
      name: "siteDescription",
      title: "Описание сайта",
      type: "localizedText",
      group: "general",
    },
    // Contact info
    {
      name: "phone",
      title: "Телефон",
      type: "string",
      group: "contact",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      group: "contact",
    },
    {
      name: "telegram",
      title: "Telegram (имя пользователя)",
      type: "string",
      group: "contact",
    },
    // Address
    {
      name: "street",
      title: "Улица",
      type: "string",
      group: "contact",
    },
    {
      name: "city",
      title: "Город",
      type: "string",
      group: "contact",
    },
    {
      name: "region",
      title: "Регион",
      type: "string",
      group: "contact",
    },
    {
      name: "postalCode",
      title: "Почтовый индекс",
      type: "string",
      group: "contact",
    },
    {
      name: "country",
      title: "Код страны",
      type: "string",
      description: "Например: ES",
      group: "contact",
    },
    // Opening hours
    {
      name: "weekdayOpen",
      title: "Будни - открытие",
      type: "string",
      description: "Например: 09:30",
      group: "hours",
    },
    {
      name: "weekdayClose",
      title: "Будни - закрытие",
      type: "string",
      description: "Например: 20:00",
      group: "hours",
    },
    {
      name: "saturdayOpen",
      title: "Суббота - открытие",
      type: "string",
      description: "Например: 10:00",
      group: "hours",
    },
    {
      name: "saturdayClose",
      title: "Суббота - закрытие",
      type: "string",
      description: "Например: 14:00",
      group: "hours",
    },
    // Social media
    {
      name: "facebook",
      title: "Facebook URL",
      type: "url",
      group: "social",
    },
    {
      name: "instagram",
      title: "Instagram URL",
      type: "url",
      group: "social",
    },
    {
      name: "googleReviewUrl",
      title: "Ссылка на Google отзывы",
      type: "url",
      description: "Ссылка для оставления отзыва в Google (g.page/r/...)",
      group: "social",
    },
    {
      name: "googleRating",
      title: "Рейтинг Google",
      type: "number",
      description: "Средний рейтинг (1–5)",
      validation: (rule: any) => rule.min(1).max(5).precision(1),
      group: "social",
    },
    {
      name: "googleReviewCount",
      title: "Количество отзывов Google",
      type: "number",
      description: "Общее количество отзывов в Google",
      validation: (rule: any) => rule.min(0).integer(),
      group: "social",
    },
    {
      name: "yelp",
      title: "Yelp URL",
      type: "url",
      group: "social",
    },
  ],
  preview: {
    prepare() {
      return { title: "Настройки сайта" };
    },
  },
});
