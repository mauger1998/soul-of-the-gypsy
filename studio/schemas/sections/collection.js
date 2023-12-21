export default {
  name: 'collection',
  title: 'Collection',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Display Image',
      type: 'customImage',
    },

    {
      name: 'themeColor',
      title: 'Theme Color',
      type: 'string',

      options: {
        list: [
          {title: 'Fine Art (Black background)', value: 'fine art'},
          {title: 'Sketchbook (White background)', value: 'sketchbook'},
          {title: 'Kustum (Purple background)', value: 'kustum'},
          {title: 'Murals (Blue background)', value: 'murals'},
        ],
        layout: 'radio', // if you want to display them as radio buttons
      },
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
      name: 'stickers',
      title: 'Stickers',
      type: 'array',
      description: 'Must be 2 stickers here. The first one will dissapear on mobile.',
      of: [{type: 'customImage'}],
      validation: (Rule) => Rule.min(2).max(2).error('Must be 2 stickers here.'),
    },

    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'project',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
