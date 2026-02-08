import { defineType } from "sanity";

export default defineType({
  name: "seoFields",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: "title",
      title: "SEO Title",
      type: "localizedString",
    },
    {
      name: "description",
      title: "SEO Description",
      type: "localizedText",
    },
  ],
});
