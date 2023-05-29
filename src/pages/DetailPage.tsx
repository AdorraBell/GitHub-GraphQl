import { FC } from "react";
import { useParams } from "react-router";
import RepoDetail from "src/components/RepoDetail/RepoDetail";
import BaseLayout from "src/layout/BaseLayout/BaseLayout";
import {GET_REPO_DETAILS} from "src/graphQl/query/repoDetails";
import { useQuery } from "@apollo/client";
import LoaderApp from "src/components/UI/LoaderApp/LoaderApp";

const DetailPage: FC = () => {

    const ownerLogin = useParams().owner || '';
    const repoName = useParams().repo || '';

    const repoDetails = useQuery(GET_REPO_DETAILS, {
        variables: {
            name: repoName,
            owner: ownerLogin
        }
    })

    return ( 
        <BaseLayout>
            {repoDetails.loading ?
                <LoaderApp />
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