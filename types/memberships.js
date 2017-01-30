const { GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql')

const membershipType = require('./membership.js')
const paginationType = require('./pagination.js')
const membershipsType = new GraphQLObjectType({
  name: 'Memberships',
  description: 'Get a list of memberships',
  fields: {
    totalCount: {
      type: GraphQLInt
    },
    results: {
      type: new GraphQLList(membershipType)
    },
    pageInfo: {
    	type: paginationType
    }
  }
})

module.exports = membershipsType
