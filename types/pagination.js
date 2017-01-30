const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLBoolean } = require('graphql')

const paginationType = new GraphQLObjectType({
  name: 'Pagination',
  description: 'Pagination info for resources',
  fields: {
    page: {
      type: GraphQLInt
    },
    next: {
      type: GraphQLString
    },
    previous: {
      type: GraphQLString
    },
    perPage: {
      type: GraphQLInt
    },
    numPages: {
      type: GraphQLInt
    },
    hasMore: {
      type: GraphQLBoolean
    }
  }
})

module.exports = paginationType
