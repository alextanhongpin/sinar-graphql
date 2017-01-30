const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = require('graphql')

const types = require('./types/index.js')
const services = require('./services/index.js')
const models = require('./models/index.js')

const Link = models.link
const Membership = models.membership
const Organization = models.organization
const Person = models.person
const Post = models.post
const PageInfo = models.pagination

var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    memberships: {
      type: types.memberships,
      // `args` describes the arguments that the `user` query accepts
      args: {
        id: {
          type: GraphQLString
        },
        page: {
          type: GraphQLInt
        },
        language: {
          type: GraphQLString
        }
      },
      resolve: function (_, {id, page = 1, language = 'en'}) {
        if (id) {
          return services.memberships(id, null, language).then((data) => {
              // Map the Object to the Class
            const model = data.result
            if (model.links && model.links.length) {
              model.links = model.links.map((link) => {
                return new Link(link)
              })
            }
            if (model.organization) {
              model.organization = new Organization(model.organization)
            }
            if (model.person) {
              model.person = new Person(model.person)
            }
            if (model.post) {
              model.post = new Post(model.post)
            }
            const membership = new Membership(model)
            // Unfortunately you have to return even a single
            // item back as an array
            return {
              // Only one matching results
              totalCount: data.total || 1,
              results: [membership],
              pageInfo: new PageInfo(data)
            }
          })
        } else {
          return services.memberships(null, {
            page
          }, language).then((data) => {
            const results = data.results.map((model) => {
              // Map the Object to the Class
              // Only map if the object is not null
              if (model.links && model.links.length) {
                model.links = model.links.map((link) => {
                  return new Link(link)
                })
              }
              if (model.organization) {
                model.organization = new Organization(model.organization)
              }
              if (model.person) {
                model.person = new Person(model.person)
              }
              if (model.post) {
                model.post = new Post(model.post)
              }

              return new Membership(model)
            })

            return {
              totalCount: data.total,
              results,
              pageInfo: new PageInfo(data)
            }
          })
        }
      }
    },
    people: {
      type: types.people,
      // `args` describes the arguments that the `user` query accepts
      args: {
        id: {
          type: GraphQLString
        },
        page: {
          type: GraphQLInt
        },
        language: {
          type: GraphQLString
        }
      },
      resolve: function (_, {id, page = 1, language = 'en'}) {
        if (id) {
          return services.people(id, null, language).then((data) => {
              // Map the Object to the Class
            const model = data.result
            if (model.memberships && model.memberships.length) {
              model.memberships = model.memberships.map((member) => {
                return new Membership(member)
              })
            }

            const person = new Person(model)
            // Unfortunately you have to return even a single
            // item back as an array
            return {
              // Only one matching results
              totalCount: data.total || 1,
              results: [person],
              pageInfo: new PageInfo(data)
            }
          })
        } else {
          return services.people(null, {
            page
          }, language).then((data) => {
            const results = data.results.map((model) => {
              // Map the Object to the Class
              // Only map if the object is not null
              if (model.memberships && model.memberships.length) {
                model.memberships = model.memberships.map((member) => {
                  return new Membership(member)
                })
              }

              return new Person(model)
            })

            return {
              totalCount: data.total,
              results,
              pageInfo: new PageInfo(data)
            }
          })
        }
      }
    },

    posts: {
      type: types.posts,
      // `args` describes the arguments that the `user` query accepts
      args: {
        id: {
          type: GraphQLString
        },
        page: {
          type: GraphQLInt
        },
        language: {
          type: GraphQLString
        }
      },
      resolve: function (_, {id, page = 1, language = 'en'}) {
        if (id) {
          return services.posts(id, null, language).then((data) => {
              // Map the Object to the Class
            const model = data.result
            if (model.organization) {
              model.organization = new Organization(model.organization)
            }
            const post = new Post(model)
            // Unfortunately you have to return even a single
            // item back as an array
            return {
              // Only one matching results
              totalCount: data.total || 1,
              results: [post],
              pageInfo: new PageInfo(data)
            }
          })
        } else {
          return services.posts(null, {
            page
          }, language).then((data) => {
            const results = data.results.map((model) => {
              // Map the Object to the Class
              // Only map if the object is not null
              if (model.organization) {
                model.organization = new Organization(model.organization)
              }
              return new Post(model)
            })

            return {
              totalCount: data.total,
              results,
              pageInfo: new PageInfo(data)
            }
          })
        }
      }
    },
    organizations: {
      type: types.organizations,
      // `args` describes the arguments that the `user` query accepts
      args: {
        id: {
          type: GraphQLString
        },
        page: {
          type: GraphQLInt
        },
        language: {
          type: GraphQLString
        }
      },
      resolve: function (_, {id, page = 1, language = 'en'}) {
        if (id) {
          return services.organizations(id, null, language).then((data) => {
              // Map the Object to the Class
            const model = data.result

            const organization = new Organization(model)
            // Unfortunately you have to return even a single
            // item back as an array
            return {
              // Only one matching results
              totalCount: data.total || 1,
              results: [organization],
              pageInfo: new PageInfo(data)
            }
          })
        } else {
          return services.organizations(null, {
            page
          }, language).then((data) => {
            const results = data.results.map((model) => {
              // Map the Object to the Class
              // Only map if the object i              // if (model.memberships && model.memberships.length) {
              //   model.memberships = model.memberships.map((member) => {
              //     return new Membership(member)
              //   })
              // }s not null
              return new Organization(model)
            })

            return {
              totalCount: data.total,
              results,
              pageInfo: new PageInfo(data)
            }
          })
        }
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

module.exports = schema
