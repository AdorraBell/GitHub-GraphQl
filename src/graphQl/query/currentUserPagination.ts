import {gql} from "@apollo/client";

export const GET_CURRENT_USER_PAGINATION_INFO = gql`
query($login: String!){ 
    user(login: $login){
      repositories (first: 100) {
        edges{
            cursor
        }
      }
    }
  }
`