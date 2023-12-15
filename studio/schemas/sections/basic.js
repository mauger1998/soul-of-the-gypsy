import {BiSolidPaint} from 'react-icons/bi'

export default {
  name: 'basic',
  title: 'Basic Section',
  type: 'object',
  icon: BiSolidPaint,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'heroTitle',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'title.title',
      subtitle: 'text',
    },
  },
}
