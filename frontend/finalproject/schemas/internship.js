export default {
  name: 'internship',
  title: 'Internship',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'architectureOffice',
      title: 'architecture office',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'learnings',
      title: 'How To (learnings)',
      type: 'array',
      of: [{type: 'string'}]
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
              description: 'Please enter a description for the image for screenreaders - thanks and cheers.'
            },        
            {
              name: 'caption',
              type: 'string',
              title: 'Description of the image (shown when hover over it)',
            },
          ]
        },
      ],
    },
    {
      name: 'DateOfInternship',
      title: 'Date of internship (end)',
      type: 'date',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      return Object.assign({}, selection,
      )
    },
  },
}
