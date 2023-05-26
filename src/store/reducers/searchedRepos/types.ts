import { IRepos } from "src/types/types";


export interface ISearchedRepos {
    searchedReposData: IRepos,
}

export enum SearchedReposActionsEnum {
    SET_PAGE_REPOS = "SET_PAGE_REPOS"
}


export interface SetReposAction {
    type: SearchedReposActionsEnum.SET_PAGE_REPOS;
    payload: IRepos;
}

export type CurrentReposActions = SetReposAction;