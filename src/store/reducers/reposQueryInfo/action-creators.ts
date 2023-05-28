import { AppDispatch } from "src/store";
import { ICursor, IReposQueryInfo, ReposQueryInfoEnum, SetReposCursorAction, SetReposQueryInfoAction } from "./types";
import { IEdge } from "src/types/types";


export const ReposQueryInfoActionCreators = {
    setReposQueryInfo: (info: IReposQueryInfo): SetReposQueryInfoAction => ({
        type: ReposQueryInfoEnum.SET_INFO,
        payload: info
    }),

    setReposQueryCursor: (cursor: ICursor) : SetReposCursorAction => ({
        type: ReposQueryInfoEnum.SET_CURSOR,
        payload: cursor
    }),

    setInfo: (queryString: string, fullCursorList: IEdge[], currentCursor: string) => 
    async (dispatch: AppDispatch) => { 
        let error = '';
        let cursorList: string[] = []
        fullCursorList.forEach((point, index) => {
            if(index % 10 === 0) cursorList.push(point.cursor);
        });
        const pagesQuantity = fullCursorList.length; 
        const info = {error, currentCursor, queryString, cursorList, pagesQuantity};
        dispatch(ReposQueryInfoActionCreators.setReposQueryInfo(info));
    },

    setCursor: (cursor: ICursor) => async (dispatch: AppDispatch) => {
        dispatch(ReposQueryInfoActionCreators.setReposQueryCursor(cursor));
    }
}