import { AppDispatch } from "src/store";
import { CurrentReposActions, ISearchedRepos, SearchedReposActionsEnum } from "./types";
import { IRepos } from "src/types/types";

export const ReposListActionCreator = {
    setReposList: (searchedReposData: IRepos): CurrentReposActions => ({
        type: SearchedReposActionsEnum.SET_PAGE_REPOS,
        payload: searchedReposData
    }),

    setData: (searchedReposData: IRepos) => async (dispatch: AppDispatch) => { 
        dispatch(ReposListActionCreator.setReposList(searchedReposData))
    }
}