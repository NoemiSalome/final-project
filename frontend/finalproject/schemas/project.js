export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'semester',
      title: 'Semester',
      type: 'string',
    },
    {
      name: 'studio',
      title: 'Studio',
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
              description: 'Please enter a description for the image for screenreaders - thanks and cheers (no blank spaces - use (- and _ instead)'
            },        
            {
              name: 'title',
              type: 'string',
              title: 'Title of the image',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Description of the image',
            },
          ]
        },
      ],
    },
    {
      name: 'DateOfCompletion',
      title: 'Date of project completion',
      type: 'date',
    },
    {
      name: 'projectSize',
      title: 'Project size BIG',
      type: 'boolean'
    }
  ]
}
