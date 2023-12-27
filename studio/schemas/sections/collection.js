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
          {title: 'Kustom (Purple background)', value: 'kustom'},
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
