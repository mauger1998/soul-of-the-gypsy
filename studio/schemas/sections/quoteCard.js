export default {
  name: 'quoteCard',
  title: 'Quote Card',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'normalText',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'string',
    },

    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'tag',
      media: 'image',
    },
  },
}
