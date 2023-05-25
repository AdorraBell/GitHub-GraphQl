export interface IUser {
    login: string;
    avatarUrl: string;
    url: string;
    authorized: boolean;
}

export interface IRepo {
    id: number
    name: string;
    url: string;
    stargazerCount: number;
    updatedAt: string;
    description: string;
    languages: Array<string>;
    owner: IUser
}

// export interface IRepoData {
//     repo: IRepo,
//     cursor: string 
// }

export interface IRepos {
    edges: IEdge[],
}

export interface IEdge {
    cursor: string;
    node: IRepo
}