const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const request = require('request')
// Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Base {
//     language: String,
//     link: String
//   }
//   type Query {
//     api: [Base],
//     greet(name: String) : String
//   }
// `)

const schemaBase = require('./schema.js')
// memberships
// persons
// posts
// organizations

class Base {
  constructor (language, link) {
    this.language = language
    this.link = link
  }

  language () {
    return this.language
  }

  link () {
    return this.link
  }

}

// The root provides a resolver function for each API endpoint
const root = {
  api: () => {
    // return 'Hello'
    return new Promise((resolve, reject) => {
      request('http://api.popit.sinarproject.org/', (error, response, body) => {
        if (!error && response.statusCode == 200) {
          const json = JSON.parse(body)
          const languages = Object.keys(json)
          const output = languages.map((language, index) => {
            return new Base(language, json[language])
          })
          resolve(output)
        }
      })
    })
  },
  memberships () {

  },
  greet: ({name}) => {
    return 'hello ' + name
  }
}

const app = express()
app.use('/graphql', graphqlHTTP({
  schema: schemaBase,
  // rootValue: root,
  graphiql: true
}))
app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
