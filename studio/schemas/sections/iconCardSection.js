import {MdOutlineLocalOffer} from 'react-icons/md'

export default {
  name: 'iconCardSection',
  title: 'Icon Card Section',
  type: 'object',
  icon: MdOutlineLocalOffer,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'text',
    },
    {
      name: 'iconCards',
      title: 'Icon Cards',
      type: 'array',
      of: [{type: 'iconCard'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'iconCards.0.icon',
    },
  },
}
