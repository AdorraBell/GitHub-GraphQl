import { IReposQueryInfo, ReposQueryInfoActions, ReposQueryInfoEnum } from "./types";

const initialState: IReposQueryInfo = {
    error: '',
    currentCursor: '',
    queryString: '',
    cursorList: [],
    pagesQuantity: 1
}

export default function reposQueryInfoReducer(state = initialState, action: ReposQueryInfoActions) {
    switch (action.type) {
        case ReposQueryInfoEnum.SET_INFO :
            return {
                    ...state, 
                    error: action.payload.error, 
                    currentCursor: action.payload.currentCursor,
                    queryString: action.payload.queryString,
                    cursorList: action.payload.cursorList,
                    pagesQuantity: action.payload.pagesQuantity
                };
        case ReposQueryInfoEnum.SET_CURSOR: 
            return {...state, currentCursor: action.payload.currentCursor }
        default: return state;
    }
}