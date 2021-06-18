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
          name: 'alt',
          type: 'string',
          title: 'Please enter a description for the image for screenreaders - thanks and cheers (no blank spaces - use (- and _ instead)',
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