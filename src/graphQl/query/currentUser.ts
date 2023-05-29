import {gql} from "@apollo/client";

export const GET_CURRENT_USER_INFO = gql`
query ($first: Int, $after: String) { 
  viewer {
    login
    name
    avatarUrl
    url
    repositories (first: $first, after: $after){
      edges {
        cursor
        node {
          id
          name
          url
          stargazerCount
          updatedAt
          description
          languages (first: 100){
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