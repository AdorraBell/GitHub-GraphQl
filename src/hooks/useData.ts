import { useQuery } from "@apollo/client";
import {SEARCH_REPOS} from "src/graphQl/query/repos";

export const useData = (variables: Object) => {
    const searchedRepos = useQuery(SEARCH_REPOS, {
        variables: variables
    })

    return searchedRepos;
}