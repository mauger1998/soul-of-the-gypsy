import BillyIdolSticker from '../../components/BillyIdolSticker'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'inspiration',
  title: 'Inspiration',
  type: 'document',
  icon: BillyIdolSticker,
  orderings: [orderRankOrdering],

  fields: [
    orderRankField({type: 'inspiration'}),

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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
}
