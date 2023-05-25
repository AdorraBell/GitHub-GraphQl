import { FC, useState, useEffect } from "react"
import AppSearch from "../AppSearch/AppSearch"
import {SEARCH_REPOS} from "src/graphQl/query/repos"
import { useQuery } from "@apollo/client"

const SearchRepoBlock: FC = () => {

    const searchData = (e: string) => {
        console.log(e)
    }

    const searchedRepos = useQuery(SEARCH_REPOS, {
        variables: {
            query: "react",
            type: "REPOSITORY",
            first: 10,
            //after: "Y3Vyc29yOjk="
        }
    });



    return ( 
        <div>
            <AppSearch 
                searchData={searchData} />
        </div>
    );
}
 
export default SearchRepoBlock;