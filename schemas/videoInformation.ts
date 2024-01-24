import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videoInformation',
  title: '영상 정보',
  type: 'object',
  fields: [
    defineField({
      name: 'presenter',
      title: '발표자',
      type: 'string',
    }),
    defineField({
      name: 'video',
      title: '영상',
      type: 'file',
    }),
  ],
})
