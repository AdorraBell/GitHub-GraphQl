import { IRepos } from "src/types/types";
import { CurrentReposActions, ISearchedRepos, SearchedReposActionsEnum } from "./types";


const initialState: ISearchedRepos = {
    searchedReposData: {} as IRepos,
}

export default function reposListReducer(state = initialState, action: CurrentReposActions) {
    switch (action.type) {
        case SearchedReposActionsEnum.SET_PAGE_REPOS:
            return {
                    ...state, 
                    searchedReposData: action.payload.edges
                }
        default: return state;
    }
}