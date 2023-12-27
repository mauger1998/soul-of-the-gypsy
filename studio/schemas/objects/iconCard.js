import {PiPaintBrushLight} from 'react-icons/pi'

export default {
  name: 'iconCard',
  title: 'Icon Card',
  type: 'object',
  icon: PiPaintBrushLight,
  fields: [
    {
      name: 'icon',
      title: 'Icon',
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
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
}
