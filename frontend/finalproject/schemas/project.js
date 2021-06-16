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
      title: 'Images',
      type: 'array',
      of: [{type: 'image'},],
      options: {
        hotspot: true,
      },
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
