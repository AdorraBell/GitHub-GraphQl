import { AppDispatch } from "src/store";
import { IReposQueryInfo, ReposQueryInfoEnum, SetReposQueryInfoAction } from "./types";


export const ReposQueryInfoActionCreators = {
    setReposQueryInfo: (info: IReposQueryInfo): SetReposQueryInfoAction => ({
        type: ReposQueryInfoEnum.SET_INFO,
        payload: info
    }),

    setInfo: (queryString: string, cursorList: string[]) => 
    async (dispatch: AppDispatch) => { 
        let error = '';
        let pageNumber = 1;
        const info = {error, pageNumber, queryString, cursorList};
        dispatch(ReposQueryInfoActionCreators.setReposQueryInfo(info))
    }
}