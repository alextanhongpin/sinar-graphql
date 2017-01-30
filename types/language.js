const { GraphQLEnumType } = require('graphql')

const languageEnum = new GraphQLEnumType({
  name: 'Language',
  description: 'One of the languages available',
  values: {
    ENGLISH: {
      value: 'en',
      description: 'English Language (Malaysia)'
    },
    MALAY: {
      value: 'ms',
      description: 'Malay Language (Malaysia)'
    }
  }
})

module.exports = languageEnum
