const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')

const organizationType = require('./organization.js')
const postType = new GraphQLObjectType({
  name: 'Post',
  description: 'The post details',
  fields: {
    id: {
      type: GraphQLString
    },
    organization: {
      type: organizationType
    },
    organization_id: {
      type: GraphQLString
    },
    area_id: {
      type: GraphQLString
    },
    start_date: {
      type: GraphQLString
    },
    end_date: {
      type: GraphQLString
    },
    contact_details: {
      type: new GraphQLList(GraphQLString)
    },
    links: {
      type: new GraphQLList(GraphQLString)
    },
    created_at: {
      type: GraphQLString
    },
    updated_at: {
      type: GraphQLString
    },
    label: {
      type: GraphQLString
    },
    role: {
      type: GraphQLString
    },
    language_code: {
      type: GraphQLString
    }
  }
})

module.exports = postType
