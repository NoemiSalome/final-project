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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
      title: 'Images',
      type: 'array',
      of: [{type: 'image'},],
      options: {
        hotspot: true,
      },
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
