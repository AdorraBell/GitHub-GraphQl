import { FC } from "react";
import { IEdge } from "src/types/types"
import RepoBlock from "../UI/RepoBlock/RepoBlock";

interface ListOfReposProps {
    reposList: IEdge[]
}

const ListOfRepos: FC<ListOfReposProps> = ({reposList}) => {
    
    return ( 
        <div>
            {reposList.map(repoData =>
                <RepoBlock 
                    key={repoData.node.id}
                    name={repoData.node.name}
                    stargazerCount={repoData.node.stargazerCount}
                    updatedAt={repoData.node.updatedAt}
                    ownerLogin={repoData.node.owner.login}
                    ownerAvatarUrl={repoData.node.owner.avatarUrl}
                    linkToOwnerPage={repoData.node.owner.url} 
                    description={repoData.node.description} 
                    id={repoData.node.id}/>
            )}
        </div>
    );
}
 
export default ListOfRepos;