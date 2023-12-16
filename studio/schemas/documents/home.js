export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Home Page',
      readOnly: true,
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'basic'},
        {type: 'projects'},
        {type: 'card'},
        {type: 'twoColumn'},
        {type: 'iconCardSection'},
      ],
    },
  ],
}
