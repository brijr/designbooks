import { link } from 'fs'
import { CollectionConfig } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'summary',
      type: 'richText',
    },
    {
      name: 'link',
      type: 'text',
    },
  ],
}

export default Books
