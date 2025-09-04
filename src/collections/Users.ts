import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as 
    {
    name: 'email',
    type: 'text',
    required: true,
  },
   {
    name: 'password',
    type: 'text',
    required: true,
  },
     {
    name: 'firstName',
    type: 'text',
    required: false,
  },
  {
    name: 'lastName',
    type: 'text',
    required: false,
  },
  {
    name: 'role',
    type: 'select',
    options: ['admin', 'editor', 'viewer'],
    required: false,
  },
  ],
}
