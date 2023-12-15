export default {
  name: 'projects',
  title: 'Projects',
  type: 'object',
  fields: [
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project'}}],
    },
  ],
  preview: {
    select: {
      title: 'projects',
      image: 'projects.0.image',
    },
    prepare: ({title, image}) => {
      return {
        title: `Projects`,
        media: title[0].image,
      }
    },
  },
}
