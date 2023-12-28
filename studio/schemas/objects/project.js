import KeithRichardsSticker from '../../components/KeithRichardsSticker'

export default {
  name: 'project',
  title: 'Projects',
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
}
