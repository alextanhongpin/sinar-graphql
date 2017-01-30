const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')

const membershipType = require('./membership.js')
const personType = new GraphQLObjectType({
  name: 'Person',
  description: 'Details on the person',
  fields: {
    id: {
      type: GraphQLString
    },
    other_names: {
      type: new GraphQLList(GraphQLString)
    },
    identifiers: {
      type: new GraphQLList(GraphQLString)
    },
    // This will introduce circular dependencies:
    // person.js importing membership.js, which in
    // turns import person.js again
    // memberships: {
    //   type: new GraphQLList(membershipType)
    // },
    birth_date: {
      type: GraphQLString
    },
    death_date: {
      type: GraphQLString
    },
    links: {
      type: new GraphQLList(GraphQLString)
    },
    contact_details: {
      type: new GraphQLList(GraphQLString)
    },
    email: {
      type: GraphQLString
    },
    image: {
      type: GraphQLString
    },
    created_at: {
      type: GraphQLString
    },
    updated_at: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    family_name: {
      type: GraphQLString
    },
    given_name: {
      type: GraphQLString
    },
    additional_name: {
      type: GraphQLString
    },
    honorific_prefix: {
      type: GraphQLString
    },
    honorific_suffix: {
      type: GraphQLString
    },
    patronymic_name: {
      type: GraphQLString
    },
    sort_name: {
      type: GraphQLString
    },
    gender: {
      type: GraphQLString
    },
    summary: {
      type: GraphQLString
    },
    biography: {
      type: GraphQLString
    },
    national_identity: {
      type: GraphQLString
    },
    language_code: {
      type: GraphQLString
    }
  }
})
module.exports = personType
