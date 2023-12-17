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
      name: 'titleColor',
      title: 'Title Color',
      type: 'string',
      description:
        'Title is going to be in the bottom left corner of whatever image you upload so pick a colour based on the image background color.',
      options: {
        list: [
          {title: 'Black', value: 'black'},
          {title: 'White', value: 'white'},
        ],
        layout: 'radio', // if you want to display them as radio buttons
      },
    },
    {
      name: 'themeColor',
      title: 'Theme Color',
      type: 'string',

      options: {
        list: [
          {title: 'Fine Art', value: 'fine art'},
          {title: 'Sketchbook', value: 'sketchbook'},
          {title: 'Kustum', value: 'kustum'},
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
