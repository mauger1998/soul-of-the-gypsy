export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'About Page',
      readOnly: true,
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [{type: 'basic'}, {type: 'card'}, {type: 'twoColumn'}],
    },
  ],
}
