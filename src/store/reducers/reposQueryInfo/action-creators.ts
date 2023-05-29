import { AppDispatch } from "src/store";
import { ICursor, IReposQueryInfo, ReposQueryInfoEnum, SetReposCursorAction, SetReposQueryInfoAction } from "./types";


export const ReposQueryInfoActionCreators = {
    setReposQueryInfo: (info: IReposQueryInfo): SetReposQueryInfoAction => ({
        type: ReposQueryInfoEnum.SET_INFO,
        payload: info
    }),

    setReposQueryCursor: (cursor: ICursor) : SetReposCursorAction => ({
        type: ReposQueryInfoEnum.SET_CURSOR,
        payload: cursor
    }),

    setInfo: (queryString: string, cursorList: string[], currentCursor: string) => 
    async (dispatch: AppDispatch) => { 
        const pagesQuantity = cursorList.length; 
        const info = {currentCursor, queryString, cursorList, pagesQuantity};
        dispatch(ReposQueryInfoActionCreators.setReposQueryInfo(info));
    },

    setCursor: (cursor: ICursor) => async (dispatch: AppDispatch) => {
        dispatch(ReposQueryInfoActionCreators.setReposQueryCursor(cursor));
    }
}