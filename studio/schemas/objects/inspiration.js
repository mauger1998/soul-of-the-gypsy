import BillyIdolSticker from '../../components/BillyIdolSticker'
export default {
  name: 'inspiration',
  title: 'Inspiration',
  type: 'document',
  icon: BillyIdolSticker,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      title: 'Sticker',
      name: 'sticker',
      type: 'customImage',
      description: 'If you want to add a sticker make sure it has no background.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
}
