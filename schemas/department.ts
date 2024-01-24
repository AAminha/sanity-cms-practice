import {defineField, defineType} from 'sanity'
import {MdPeople as icon} from 'react-icons/md'

export default defineType({
  name: 'department',
  title: 'Department',
  type: 'document',
  icon,
  fields: [
    defineField({
      title: '부서 기본 정보',
      name: 'basicInformation',
      type: 'informationContent',
    }),
    defineField({
      name: 'task',
      title: '부서 업무',
      type: 'blockContent',
    }),
    defineField({
      name: 'ideal',
      title: '인재상',
      type: 'blockContent',
    }),
    defineField({
      name: 'experience',
      title: '추천 경험',
      type: 'blockContent',
    }),
    defineField({
      name: 'applyProcedure',
      title: '지원 절차',
      type: 'array',
      of: [{type: 'applyStep'}],
    }),
    defineField({
      name: 'roadToPro',
      title: '로드 투 프로',
      type: 'array',
      of: [{type: 'videoInformation'}],
    }),
  ],
})
