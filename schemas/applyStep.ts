import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'applyStep',
  title: '지원 단계',
  type: 'object',
  fields: [
    defineField({
      name: 'schedule',
      title: '일정',
      type: 'string',
    }),
    defineField({
      name: 'step',
      title: '단계',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'step',
      subtitle: 'schedule',
    },
  },
})
