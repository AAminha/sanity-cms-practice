import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videoInformation',
  title: '영상 정보',
  type: 'object',
  fields: [
    defineField({
      name: 'presenter_name',
      title: '발표자 이름',
      type: 'string',
    }),
    defineField({
      name: 'presenter_nickname',
      title: '발표자 닉네임',
      type: 'string',
    }),
    defineField({
      name: 'video',
      title: '영상',
      type: 'file',
    }),
  ],
  preview: {
    select: {
      title: 'presenter_nickname',
      subtitle: 'presenter_name',
      video: 'video',
    },
    prepare(selection) {
      const {title, subtitle, video} = selection
      const checkInformation = title && subtitle && video

      return {
        title: title,
        subtitle: subtitle,
        media: checkInformation ? <span style={{fontSize: '1.2rem'}}>✅</span> : <span>❌</span>,
      }
    },
  },
})
