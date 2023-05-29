import { FC, useEffect, useState } from "react"
import { SEARCH_REPOS } from "src/graphQl/query/repos"
import { useLazyQuery } from "@apollo/client"
import { useActions } from "src/hooks/useActions"
import { GET_CURRENT_USER_INFO } from "src/graphQl/query/currentUser"
import { useTypedSelector } from "src/hooks/useTypedSelector"
import ListOfRepos from "src/components/UI/ListOfRepos/ListOfRepos"
import LoaderApp from "src/components/UI/LoaderApp/LoaderApp"
import SearchLine from "../UI/SearchLine/SearchLine"
import { GET_REPOS_PAGINATION_INFO } from "src/graphQl/query/reposPaginationInfo"
import PaginationApp from "../UI/PaginationApp/PaginationApp"
import { IEdge } from "src/types/types"

const SearchRepoBlock: FC = () => {

    const {setUser, setData, setInfo, setCursor} = useActions();

    const {reposData} = useTypedSelector(state => state.currentUser);
    const {searchedReposData} = useTypedSelector(state => state.searchedRepos);
    const {queryString, pagesQuantity, cursorList } = useTypedSelector(state => state.reposQueryInfo);

    const [searchedLine, setSearchedLine] = useState(sessionStorage.getItem('searchedLine') || '');
    const [curCursor, setCurCursor] = useState(sessionStorage.getItem('currentCursor') || '');
    const searchedLineInSession = sessionStorage.getItem('searchedLine') || '';
    const pageIdInSession = sessionStorage.getItem(('pageId') || '');

    const [searchLine, searchedRepos] = useLazyQuery(SEARCH_REPOS);
    const [getCurrentUserData, currentUserData] = useLazyQuery(GET_CURRENT_USER_INFO);
    const [getReposPaginationInfo, reposPaginationInfo] = useLazyQuery(GET_REPOS_PAGINATION_INFO);
    const currentCursorInSession = sessionStorage.getItem('currentCursor') || '';


    /* Check if the data in the search query existed before the page was updated */

    useEffect(() => {

        /* Search line wasn't empty, get query with the same data */

        if(searchedLineInSession !== '') {
            if(pageIdInSession !== null) {
                pageSelected(Number(pageIdInSession));
            }else {
                searchData(queryString);
            }

        /* Search line was empty, get current user data */

        }else{
            if(currentCursorInSession !== '') {
                getCurrentUserData({
                    variables: {
                        first: 10,
                        after: currentCursorInSession
                    }
                })
            }else{
                getCurrentUserData({
                    variables: {
                        first: 10,
                    }
                })
            } 
        }
    }, [queryString])
    
    /* */

    /* Search data by string from search line, get pagination info */

    const searchData = (line: string) => {
        setSearchedLine(line);
        sessionStorage.setItem('searchedLine', line);
        sessionStorage.setItem('currentCursor', '');
        sessionStorage.setItem('pageId', JSON.stringify(0));
        sessionStorage.setItem('cursorsList', JSON.stringify([]));
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
    }

    /* */

    /* Set current page data when page has been selected */

    const pageSelected = (id: number) => {
        const cursor = cursorList[id];

        /* Page data for current user */

        if(searchedLine === ""){
            if(id === 0) {
                sessionStorage.setItem('pageId', JSON.stringify(id));
                getCurrentUserData({
                    variables: {
                        first: 10,
                    }
                })
                setCursor({currentCursor: cursor});
            }else {
                if(cursor !== undefined) {
                    getCurrentUserData({
                        variables: {
                            first: 10,
                            after: cursor
                        }
                    })
                }
            } 

        /* Page data for searched string */

        }else{
            if(id === 0) {
                sessionStorage.setItem('pageId', JSON.stringify(id));
                searchData(searchedLine);
                setCursor({currentCursor: cursor});
            } else {
                if(cursor !== undefined) {
                    searchLine({
                        variables: {
                            query: searchedLine,
                            type: "REPOSITORY",
                            first: 10,
                            after: cursor
                        }
                    });
                }
            }
        }
        sessionStorage.setItem('pageId', JSON.stringify(id));
        setCursor({currentCursor: cursor});
        sessionStorage.setItem('currentCursor', cursor);
    }

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


    /* Set info about pagination */

    const setPaginationInfo = () => {
        const paginationInfo = reposPaginationInfo.data?.search; 
        if(paginationInfo){
            const edges = paginationInfo.edges;
            let currentCursorList: string[] = [];
            edges.forEach((point: IEdge, index: number) => {
                if((index % 10 === 0) || (index === 0)){
                    currentCursorList.push(point.cursor);
                } 
            });
            setInfo(searchedLine, currentCursorList, curCursor);
            if(currentCursorList.length > 1) {
                sessionStorage.setItem('cursorsList', JSON.stringify(currentCursorList));
            }
        }
    }

    /* */


    return ( 
        <div>
            <SearchLine
                searchData={searchData}
                value={searchedLine} />
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
                        pageSelected={pageSelected}
                        queryString={queryString} />  
                }
                
        </div>
    );
}
 
export default SearchRepoBlock;