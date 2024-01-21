import {defineField, defineType} from 'sanity'
import {MdPeople as icon} from 'react-icons/md'

export default defineType({
  name: 'department',
  title: 'Department',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'introduction',
      title: '부서 소개',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: '부서명',
          type: 'string',
        }),
        defineField({
          name: 'short_introduction',
          title: '한 줄 소개',
          type: 'string',
        }),
        defineField({
          name: 'long_introduction',
          title: '상세 소개',
          type: 'string',
          description: '소개 페이지에서 줄바꿈도 반영됩니다. 이를 고려해서 작성해주세요.',
        }),
        defineField({
          name: 'apply_link',
          title: '지원서 링크',
          type: 'string',
        }),
      ],
    }),
  ],
})
