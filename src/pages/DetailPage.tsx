import { FC, useEffect } from "react"
import { useParams } from "react-router"
import RepoDetail from "src/components/RepoDetail/RepoDetail"
import BaseLayout from "src/layout/BaseLayout/BaseLayout"
import {GET_REPO_DETAILS} from "src/graphQl/query/repoDetails"
import { useQuery } from "@apollo/client"
import AppLoader from "src/components/AppLoader/AppLoader"

const DetailPage: FC = () => {

    const ownerLogin = useParams().owner || '';
    const repoName = useParams().repo || '';

    const repoDetails = useQuery(GET_REPO_DETAILS, {
        variables: {
            name: repoName,
            owner: ownerLogin
        }
    })

    useEffect(() => {
        console.log(repoDetails.data?.repository);
    }, [repoDetails])

    

    return ( 
        <BaseLayout>
            {repoDetails.loading ?
                <AppLoader />
            :
                <RepoDetail 
                    repoName={repoName} 
                    stargazerCount={repoDetails.data.repository.stargazerCount} 
                    updatedAt={repoDetails.data.repository.updatedAt}
                    ownerLogin={ownerLogin} 
                    ownerAvatarUrl={repoDetails.data.repository.owner.avatarUrl} 
                    ownerUrl={repoDetails.data.repository.owner.url}
                    description={repoDetails.data.repository.description}
                    languages={repoDetails.data.repository.languages}
                    />
                
            }
            
        </BaseLayout>
    );
}
 
export default DetailPage;