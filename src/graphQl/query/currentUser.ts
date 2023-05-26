import {gql} from "@apollo/client"

export const GET_CURRENT_USER_INFO = gql`
query { 
  viewer {
    login
    name
    avatarUrl
    url
    repositories(first: 10){
      edges {
        cursor
        node {
          id
          name
          url
          stargazerCount
          updatedAt
          description
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