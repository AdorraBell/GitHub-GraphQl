
export interface IReposQueryInfo {
    error: string,
    pageNumber: number,
    queryString: string,
    cursorList: String[]
}

export enum ReposQueryInfoEnum {
    SET_INFO = "SET_INFO"
}

export interface SetReposQueryInfoAction {
    type: ReposQueryInfoEnum.SET_INFO;
    payload: IReposQueryInfo;
}

export type ReposQueryInfoActions = SetReposQueryInfoAction;

