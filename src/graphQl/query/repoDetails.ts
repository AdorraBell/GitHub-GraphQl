import {gql} from "@apollo/client"

export const GET_REPO_DETAILS = gql`
query ($name: String!, $owner: String!) { 
    repository(name: $name, owner: $owner){
      name
      stargazerCount
      updatedAt
      owner {
        login
        url
        avatarUrl
      }
      languages (first: 50) {
        nodes {
          name
        }
      }
      description
    }
    
  }
`