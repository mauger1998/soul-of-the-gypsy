export default {
  title: 'Normal Text',
  name: 'normalText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {
          title: 'Normal',
          value: 'normal',
        },
      ],

      marks: {
        decorators: [
          {
            title: 'Bold',
            value: 'strong',
          },
          {
            title: 'Italic',
            value: 'em',
          },
        ],
      },
    },
  ],
}
