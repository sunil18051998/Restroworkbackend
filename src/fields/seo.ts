// fields/seo.ts
import { Field } from "payload";

export const seoFields: Field = {
  name: "seo",
  label: "SEO",
  type: "group",
  fields: [
    {
      name: "title",
      label: "Meta Title",
      type: "text",
      required: true,
      maxLength: 60, // SEO best practice
    },
    {
      name: "description",
      label: "Meta Description",
      type: "textarea",
      maxLength: 160,
    },
    {
      name: "keywords",
      label: "Meta Keywords",
      type: "text",
    },
    {
      name: "ogImage",
      label: "Open Graph Image",
      type: "upload",
      relationTo: "media", // assumes you have a Media collection
    },
  ],
};
