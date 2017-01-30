const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql')

const personType = require('./person.js')
const organizationType = require('./organization.js')
const postType = require('./post.js')
const linkType = require('./link.js')

const membershipType = new GraphQLObjectType({
  name: 'Membership',
  description: 'Get a particular membership by membership id',
  fields: {
    id: {
      type: GraphQLString
    },
    total: {
      type: GraphQLInt
    },
    person: {
      type: personType
    },
    person_id: {
      type: GraphQLString
    },
    organization: {
      type: organizationType
    },
    organization_id: {
      type: GraphQLString
    },
    // This should be none?
    // member: {
    //   type: types.member
    // },
    // member_id: {
    //   type: GraphQLString
    // },
    // TODO: Identify the Schema for the following resources
    // on_behalf_of: {},
    // on_behalf_of_id: {
    //   type: GraphQLString
    // },
    // area: {
    // },
    // area_id: {},
    post: {
      type: postType
    },
    post_id: {
      type: GraphQLString
    },
    contact_details: {
      type: new GraphQLList(GraphQLString)
    },
    links: {
      type: linkType
    },
    start_date: {
      type: GraphQLString
    },
    end_date: {
      type: GraphQLString
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

module.exports = membershipType
