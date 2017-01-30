const express = require('express')
const graphqlHTTP = require('express-graphql')
const path = require('path')
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

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schemaBase,
  graphiql: true
}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(4000)
console.log('Running a GraphQL API server at localhost:4000/graphql')
