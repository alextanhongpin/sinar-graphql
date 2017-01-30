const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')

const organizationType = new GraphQLObjectType({
  name: 'Organization',
  description: 'Get the organization details',
  fields: {
    id: {
      type: GraphQLString
    },
    parent_id: {
      type: GraphQLString
    },
    founding_date: {
      type: GraphQLString
    },
    dissolution_date: {
      type: GraphQLString
    },
    links: {
      type: new GraphQLList(GraphQLString)
    },
    contact_details: {
      type: new GraphQLList(GraphQLString)
    },
    created_at: {
      type: GraphQLString
    },
    updated_at: {
      type: GraphQLString
    },
    area: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    classification: {
      type: GraphQLString
    },
    abstract: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    language_code: {
      type: GraphQLString
    }
  }
})

module.exports = organizationType
