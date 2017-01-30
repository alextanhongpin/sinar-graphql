const { GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql')

const personType = require('./person.js')
const paginationType = require('./pagination.js')

const peopleType = new GraphQLObjectType({
  name: 'People',
  description: 'Get a list of memberships',
  fields: {
    totalCount: {
      type: GraphQLInt
    },
    results: {
      type: new GraphQLList(personType)
    },
    pageInfo: {
      type: paginationType
    }
  }
})

module.exports = peopleType
