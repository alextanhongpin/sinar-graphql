const { GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql')

const postType = require('./post.js')
const paginationType = require('./pagination.js')

const postsType = new GraphQLObjectType({
  name: 'Posts',
  description: 'Get a list of posts',
  fields: {
    totalCount: {
      type: GraphQLInt
    },
    results: {
      type: new GraphQLList(postType)
    },
    pageInfo: {
      type: paginationType
    }
  }
})

module.exports = postsType
