import { defineType } from "sanity";

export default defineType({
  name: "localizedString",
  title: "Localized String",
  type: "object",
  fields: [
    { name: "en", title: "English", type: "string" },
    { name: "es", title: "Español", type: "string" },
    { name: "ru", title: "Русский", type: "string" },
  ],
});
