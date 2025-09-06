import type { CollectionConfig } from 'payload'

export const HomePage: CollectionConfig = {
slug: "homepage",
  labels: {
    singular: "Homepage",
    plural: "Homepage",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "locale",
      type: "select",
      required: true,
      options: [
        { label: "German", value: "de" },
        { label: "English", value: "en" },
        { label: "French", value: "fr" },
        // add more as needed
      ],
    },
    {
      name: "heroTitle",
      type: "text",
      required: true,
    },
    {
      name: "heroDesc",
      type: "textarea",
    },
    {
      name: "cta",
      type: "text",
    },
    {
      name: "whyTitle",
      type: "text",
    },
    {
      name: "features",
      type: "array",
      fields: [
        {
          name: "icon",
          type: "select", // store an identifier, render icon in frontend
          options: [
            { label: "Shopping Cart", value: "shopping-cart" },
            { label: "Truck", value: "truck" },
            { label: "Shield Check", value: "shield-check" },
            { label: "Star", value: "star" },
          ],
        },
        {
          name: "title",
          type: "text",
        },
        {
          name: "desc",
          type: "textarea",
        },
      ],
    },
    {
      name: "testimonialsTitle",
      type: "text",
    },
    {
      name: "testimonials",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "feedback",
          type: "textarea",
        },
        {
          name: "img",
          type: "text", // or "upload" if you want real file uploads
        },
      ],
    },
    {
      name: "ctaTitle",
      type: "text",
    },
    {
      name: "ctaDesc",
      type: "textarea",
    },
    {
      name: "ctaBtn",
      type: "text",
    },
  ],
}