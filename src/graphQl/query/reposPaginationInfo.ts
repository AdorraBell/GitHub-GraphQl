import {gql} from "@apollo/client"

export const SEARCH_REPOS_PAGINATION_INFO = gql`
query ($query: String!, $type: SearchType!, $first: Int, $after: String){ 
    search (query: $query, type: $type, first: $first, after: $after) {
        repositoryCount
        edges {
            cursor
        }
    }
}
`