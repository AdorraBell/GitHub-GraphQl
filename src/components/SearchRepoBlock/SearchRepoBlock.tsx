import { FC, useEffect, useState } from "react"
import {SEARCH_REPOS} from "src/graphQl/query/repos"
import { useLazyQuery} from "@apollo/client"
import { useActions } from "src/hooks/useActions"
import {GET_CURRENT_USER_INFO} from "src/graphQl/query/currentUser"
import { useTypedSelector } from "src/hooks/useTypedSelector"
import ListOfRepos from "src/components/UI/ListOfRepos/ListOfRepos"
import LoaderApp from "src/components/UI/LoaderApp/LoaderApp"
import SearchLine from "../UI/SearchLine/SearchLine"
import { GET_REPOS_PAGINATION_INFO } from "src/graphQl/query/reposPaginationInfo"
import PaginationApp from "../UI/PaginationApp/PaginationApp"

const SearchRepoBlock: FC = () => {

    const {setUser, setData, setInfo, setCursor} = useActions();
    const {reposData} = useTypedSelector(state => state.currentUser);
    const {searchedReposData} = useTypedSelector(state => state.searchedRepos);
    const {queryString, pagesQuantity, cursorList} = useTypedSelector(state => state.reposQueryInfo);
    const [searchedLine, setSearchedLine] = useState('');
    const [curCursor, setCurCursor] = useState('');

    const [searchLine, searchedRepos] = useLazyQuery(SEARCH_REPOS);
    const [getCurrentUserData, currentUserData] = useLazyQuery(GET_CURRENT_USER_INFO);
    const [getReposPaginationInfo, reposPaginationInfo] = useLazyQuery(GET_REPOS_PAGINATION_INFO);

    /* Search data by string from search line, get pagination info */

    const searchData = (line: string) => {
        setSearchedLine(line);
        searchLine({
            variables: {
                query: line,
                type: "REPOSITORY",
                first: 10,
            }
        });
        getReposPaginationInfo({
            variables: {
                query: line,
                type: "REPOSITORY",
                first: 100,
            }
        })
        localStorage.setItem('currentCursor', JSON.stringify(line));
    }

    /* */

    /* Set current page data when page has been selected */

    const pageSelected = (id: number) => {
        const cursor = cursorList[id];
        searchLine({
            variables: {
                query: searchedLine,
                type: "REPOSITORY",
                first: 10,
                after: cursorList
            }
        });
        localStorage.setItem('currentCursor', JSON.stringify(cursor));
        setCurCursor(cursor);
        setCursor({currentCursor: cursor});
    }

    /* Search default user data */

    useEffect(() => {
        getCurrentUserData({
            variables: {
                first: 10,
            }
        })
    }, [])

    /* */

    /* Set current user data to state, get pagination info */
    useEffect(() => {
        const user = currentUserData.data?.viewer;
        if(user){
            setUser(user.login, user.avatarUrl, user.url, user.repositories, true);
            getReposPaginationInfo({
                variables: {
                    query: user.login,
                    type: "USER",
                    first: 100,
                }
            })
        }
        
    }, [currentUserData.data])

    /* */


    /* Set searched data to state */

    useEffect(() => {
        const info = searchedRepos.data?.search;   
        if(info){
            setData(info);
        }  
    }, [searchedRepos.data])

    /* */


    useEffect(() => {
        setPaginationInfo()
    }, [reposPaginationInfo])

    const setPaginationInfo = () => {
        const paginationInfo = reposPaginationInfo.data?.search; 
        if(paginationInfo){
            console.log(paginationInfo);
            setInfo(searchedLine, paginationInfo.edges, curCursor);
        }
    }


    return ( 
        <div>
            <SearchLine
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
                {pagesQuantity > 1 &&
                    <PaginationApp 
                        cursorList={cursorList} 
                        pageSelected={pageSelected} />  
                }
                
        </div>
    );
}
 
export default SearchRepoBlock;