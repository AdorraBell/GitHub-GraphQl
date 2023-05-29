
export interface IReposQueryInfo {
    currentCursor: string,
    queryString: string,
    cursorList: string[],
    pagesQuantity: number,
}

export interface ICursor {
    currentCursor: string
}

export enum ReposQueryInfoEnum {
    SET_INFO = "SET_INFO",
    SET_CURSOR = "SET_CURSOR"
}

export interface SetReposQueryInfoAction {
    type: ReposQueryInfoEnum.SET_INFO;
    payload: IReposQueryInfo;
}

export interface SetReposCursorAction {
    type: ReposQueryInfoEnum.SET_CURSOR;
    payload: ICursor;
}

export type ReposQueryInfoActions = SetReposQueryInfoAction | SetReposCursorAction;

