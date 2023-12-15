export default {
  name: 'twoColumn',
  title: 'Two Column Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'text',
      media: 'image',
    },
  },
}
