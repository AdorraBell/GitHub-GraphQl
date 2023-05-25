import { useQuery } from "@apollo/client"
import { FC, useEffect } from "react"
import AppLoader from "src/components/AppLoader/AppLoader"
import SearchRepoBlock from "src/components/SearchRepoBlock/SearchRepoBlock"
import BaseLayout from "src/layout/BaseLayout/BaseLayout"
import {GET_CURRENT_USER_INFO} from "src/graphQl/query/currentUser"
import { useActions } from "src/hooks/useActions"
import { useTypedSelector } from "src/hooks/useTypedSelector"
import ListOfRepos from "src/components/ListOfRepos/ListOfRepos"

const MainPage: FC = () => {

    const {setUser} = useActions();
    const {reposData} = useTypedSelector(state => state.currentUser);
    
    const currentUserData = useQuery(GET_CURRENT_USER_INFO, {
        variables: {
            userName: "AdorraBell"
        }
    });

    useEffect(() => {
        const user = currentUserData.data?.user;
        if(user){
            setUser(user.login, user.avatarUrl, user.url, user.repositories, true)
        }
    }, [currentUserData.data])


    return ( 
        <BaseLayout>
            <SearchRepoBlock />
                {currentUserData.loading &&
                    <AppLoader />
                }
                {reposData.edges !== undefined &&
                    <ListOfRepos 
                        reposList={reposData.edges} />
                }
        </BaseLayout>
    );
}
 
export default MainPage;