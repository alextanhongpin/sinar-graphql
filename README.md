
# Sinar API GraphQL

Sinar API integration with GraphQL.

```
$ npm install
$ npm start
```
 Visit http://localhost:4000/graphql and start experimenting with different queries.

## Available resources

## Counts

```
// Query
{
    organizations {
        totalCount
    }
}

// Response
{
  "data": {
    "organizations": {
      "totalCount": 251
    }
  }
}
```

## Pagination

The query below shows how to obtain the results from page 2
```
// Query
{
    organizations(page: 2) {
        results {
            id
        }
    }
}
// Response
{
  "data": {
    "organizations": {
      "pageInfo": {
        "page": 1,
        "next": "http://api.popit.sinarproject.org/en/organizations?page=2",
        "previous": null,
        "perPage": 10,
        "numPages": 26,
        "hasMore": true
      }
    }
  }
}

```

## Get a list

The query below will grab the a list of paginated (default limit to 10 items)
results with the `id` and `name` field.

```
{
    organizations {
        results {
            id,
            name
    }
  }
}

// Response
{
  "data": {
    "organizations": {
      "results": [
        {
          "id": "5368583c19ee29270d8a9f9f",
          "name": "Kuala Dimensi Sdn Berhad"
        },
        {
          "id": "556c60788aaf69205fde4d7f",
          "name": "Kabaddi Association of Malaysia"
        },
        {
          "id": "55a5e053aed29bca536e6450",
          "name": "Cyberview Sdn Bhd"
        },
        {
          "id": "536318c119ee29270d8a9e69",
          "name": "Parti Sosialis Malaysia"
        },
        {
          "id": "53631a3619ee29270d8a9e90",
          "name": "Democratic Action Party"
        }
        // ...not shown
      ]
  }
}

```

## Get a single item

The following query will get a single item with the particular id.
```
// Query
{
    organizations(id:"5368583c19ee29270d8a9f9f") {
        results {
            id,
            name
    }
  }
}

// Response
{
  "data": {
    "organizations": {
      "results": [
        {
          "id": "5368583c19ee29270d8a9f9f",
          "name": "Kuala Dimensi Sdn Berhad"
        }
      ]
    }
  }
}
```



## Get particular fields

## Metadata
```
// Query
{
    organizations(language: "ms") {
    pageInfo {
      page
      next
      previous
      perPage
      numPages
      hasMore
    }
  }
}

```

## Localization

```
// Available languages: `ms`, or `en`
{
    organizations(language: "ms") {
    totalCount
  }
}

```


# Client side fetching
```
// Using Fetch API on the client side to pull data
    const getPosts = fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
            {
              posts {
                results {
                  id
                }
              }
            }
            `           
        })
    })
```

## Improvements

1. Unable to identify the schema for the 'area' resource.
2. The naming for 'persons' should be changed to 'people'
3. Unable to identify the schema for the 'on_behalf_of' resource
4. Circular dependency due to resources keep referencing each other

