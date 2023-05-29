import {gql} from "@apollo/client";

export const SEARCH_REPOS = gql`
query ($query: String!, $type: SearchType!, $first: Int, $after: String){ 
  search (query: $query, type: $type, first: $first, after: $after) {
    repositoryCount
    edges {
      cursor
      node {
        ...on Repository {
          id
          name
          description
          stargazerCount
          url
          updatedAt
          languages (first: 10){
            nodes {
              name
            }
          }
          owner {
            login
            url
            avatarUrl
          }
        }
      }
    }
  } 
}
`