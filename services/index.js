const request = require('request')
const memberships = 'http://api.popit.sinarproject.org/en/memberships'
const persons = 'http://api.popit.sinarproject.org/en/persons'
const posts = 'http://api.popit.sinarproject.org/en/posts'
const organizations = 'http://api.popit.sinarproject.org/en/organizations'

const qs = require('querystring')

const ServiceFactory = (url) => {
  return (id, params, language) => {
    return new Promise((resolve, reject) => {
      let targetURL = url
      if (id) {
        targetURL += `/${id}`
      }
      if (params) {
        targetURL += `?${qs.stringify(params)}`
      }
      if (language) {
        targetURL.replace('/en/', language)
      }
      request(targetURL, (error, response, body) => {
        if (!error && response.statusCode === 200) {
        // Parse the response into JSON format
          resolve(JSON.parse(body))
        }
      })
    })
  }
}

const membershipsService = ServiceFactory(memberships)
const peopleService = ServiceFactory(persons)
const postsService = ServiceFactory(posts)
const organizationsService = ServiceFactory(organizations)

module.exports = {
  memberships: membershipsService,
  people: peopleService,
  posts: postsService,
  organizations: organizationsService
}
