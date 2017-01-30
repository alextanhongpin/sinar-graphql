const { GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql')

const organizationType = require('./organization.js')
const paginationType = require('./pagination.js')

const organizationsType = new GraphQLObjectType({
  name: 'Organizations',
  description: 'Get a list of organization',
  fields: {
    totalCount: {
      type: GraphQLInt
    },
    results: {
      type: new GraphQLList(organizationType)
    },
    pageInfo: {
      type: paginationType
    }
  }
})

module.exports = organizationsType
