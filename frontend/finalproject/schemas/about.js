import { string } from 'prop-types'

export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title Page',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true
          }
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        }
      ]
    },
    {
      name: 'aboutText',
      title: 'About',
      type: 'text'
    },
  ],
}