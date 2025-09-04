import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'image',
      type: 'text',
      //relationTo: 'media', // assumes you have a Media collection
      required: false,
    },
    {
      name: 'category',
      type: 'text',
      required: false,
    },
    {
      name: 'inStock',
      type: 'checkbox',
      required: false,
      defaultValue: true,
    },
  ],
}