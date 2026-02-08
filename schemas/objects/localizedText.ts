import { defineType } from "sanity";

export default defineType({
  name: "localizedText",
  title: "Localized Text",
  type: "object",
  fields: [
    { name: "en", title: "English", type: "text" },
    { name: "es", title: "Español", type: "text" },
    { name: "ru", title: "Русский", type: "text" },
  ],
});
