import KeithRichardsSticker from '../../components/KeithRichardsSticker'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: KeithRichardsSticker,
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'customImage',
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
