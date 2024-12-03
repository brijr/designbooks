import { CollectionConfig } from 'payload'

export const Books: CollectionConfig = {
  slug: 'books',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'author',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
  ],
}

export default Books
