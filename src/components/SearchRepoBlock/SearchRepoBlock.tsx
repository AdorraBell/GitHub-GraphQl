import { FC, useEffect, useState } from "react"
import AppSearch from "src/components/AppSearch/AppSearch"
import {SEARCH_REPOS} from "src/graphQl/query/repos"
import { useLazyQuery} from "@apollo/client"
import { useActions } from "src/hooks/useActions"
import {GET_CURRENT_USER_INFO} from "src/graphQl/query/currentUser"
import { useTypedSelector } from "src/hooks/useTypedSelector"
import ListOfRepos from "src/components/UI/ListOfRepos/ListOfRepos"
import LoaderApp from "src/components/UI/LoaderApp/LoaderApp"

const SearchRepoBlock: FC = () => {

    const {setUser, setData} = useActions();
    const {reposData} = useTypedSelector(state => state.currentUser);
    const {searchedReposData} = useTypedSelector(state => state.searchedRepos);
    const {queryString} = useTypedSelector(state => state.reposQueryInfo);
    const [searchedLine, setSearchedLine] = useState('');

    const [searchLine, searchedRepos] = useLazyQuery(SEARCH_REPOS);
    const [getCurrentUserData, currentUserData] = useLazyQuery(GET_CURRENT_USER_INFO);

    const searchData = (line: string) => {
        setSearchedLine(line);
        
        searchLine({
            variables: {
                query: line,
                type: "REPOSITORY",
                first: 10,
                //after: ""
            }
        });
    }

    useEffect(() => {
        getCurrentUserData()
    }, [])

    useEffect(() => {
        const user = currentUserData.data?.viewer;
        if(user){
            setUser(user.login, user.avatarUrl, user.url, user.repositories, true);
        }
    }, [currentUserData.data])

    useEffect(() => {
        const info = searchedRepos.data?.search;   
        
        if(info){
            setData(info);
        }  
    }, [searchedRepos.data])


    useEffect(() => {
        console.log(searchedLine) 
    }, [searchedLine])


    return ( 
        <div>
            <AppSearch 
                searchData={searchData}
                value={queryString} />
                {(currentUserData.loading || searchedRepos.loading) ?
                    <LoaderApp />
                    :
                    !!Object.keys(searchedReposData).length ?
                    <ListOfRepos 
                        reposList={searchedReposData} />
                    :
                    reposData.edges !== undefined &&
                    <ListOfRepos 
                        reposList={reposData.edges} />
                }
                
                
        </div>
    );
}
 
export default SearchRepoBlock;