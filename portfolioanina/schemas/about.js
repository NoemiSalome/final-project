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
      name: 'aboutText',
      title: 'About',
      type: 'text'
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        { name: 'images',
          type: 'image',
          title: 'Image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Please enter a description for the image for screenreaders - thanks and cheers (no blank spaces - use (- and _ instead)'
            },
          ]
        },
      ],
    },
  ],
}