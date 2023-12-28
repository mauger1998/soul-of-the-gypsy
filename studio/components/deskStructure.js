import kustumSticker from './kustumSticker'
import LightingHopkinsSticker from './LightingHopkinsSticker'
import JonnyCashSticker from './JonnyCashSticker'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import BillyIdolSticker from '../components/BillyIdolSticker'

export const deskStructure = (S, context) =>
  S.list()
    .title('Soul of the Gypsy Studio')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(kustumSticker)
        .child(S.document().schemaType('home').documentId('fa93819c-ca6b-4d14-8027-9a4a452d77a3')),
      S.divider(),

      S.listItem()
        .title('About Page')
        .icon(LightingHopkinsSticker)
        .child(S.document().schemaType('about').documentId('199592d6-a449-482a-949b-4c61dc308e26')),
      S.divider(),

      S.listItem()
        .title('Gallery Page')
        .icon(JonnyCashSticker)
        .child(
          S.document().schemaType('gallery').documentId('9418ec7a-d314-4cf7-95ac-c5d959951b66'),
        ),

      S.divider(),
      // Optional configuration
      orderableDocumentListDeskItem({
        type: 'inspiration',
        title: 'Inspiration',
        icon: BillyIdolSticker,
        S,
        context,
      }),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['media.tag', 'home', 'about', 'gallery', 'inspiration'].includes(listItem.getId()),
      ),
    ])
