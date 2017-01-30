const { GraphQLObjectType, GraphQLString } = require('graphql')

const linkType = new GraphQLObjectType({
  name: 'Link',
  description: 'An list of relevant reference links',
  fields: {
    id: {
      type: GraphQLString
    },
    label: {
      type: GraphQLString
    },
    field: {
      type: GraphQLString
    },
    url: {
      type: GraphQLString
    },
    created_at: {
      type: GraphQLString
    },
    updated_at: {
      type: GraphQLString
    },
    note: {
      type: GraphQLString
    },
    language_code: {
      type: GraphQLString
    }
  }
})

module.exports = linkType
