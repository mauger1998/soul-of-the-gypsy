export default {
  name: 'polaroid',
  title: 'Polaroid',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
