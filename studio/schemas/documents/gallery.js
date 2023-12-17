export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Gallery Title',
      type: 'string',
      initialValue: 'Gallery Page',
      readOnly: true,
    },
    {
      name: 'sections',
      title: 'Gallery Sections',
      type: 'array',
      of: [
        {
          type: 'card',
        },
        {
          type: 'projects',
        },
        {
          type: 'basic',
        },
        {
          type: 'collection',
        },
      ],
    },
  ],
}
