import { IReposQueryInfo, ReposQueryInfoActions, ReposQueryInfoEnum } from "./types";

const initialState: IReposQueryInfo = {
    error: '',
    pageNumber: 1,
    queryString: '',
    cursorList: []
}

export default function reposQueryInfoReducer(state = initialState, action: ReposQueryInfoActions) {
    switch (action.type) {
        case ReposQueryInfoEnum.SET_INFO :
            return {
                    ...state, 
                    error: action.payload.error, 
                    pageNumber: action.payload.pageNumber,
                    queryString: action.payload.queryString,
                    cursorList: action.payload.cursorList
                }
        default: return state;
    }
}