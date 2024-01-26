import blockContent2 from './blockContent2'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'
import department from './department'
import informationContent from './informationContent'
import applyStep from './applyStep'
import videoInformation from './videoInformation'
import defaultContent from './defaultContent'
import inaWordContent from './inaWordContent'

export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,
  department,

  // Other types
  defaultContent,
  blockContent2,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
  informationContent,
  applyStep,
  videoInformation,
  inaWordContent,
]
