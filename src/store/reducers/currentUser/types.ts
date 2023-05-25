import { IRepos, IUser } from "src/types/types";

export interface ICurrentUser extends IUser {
    reposData: IRepos,
    authorized: boolean
}

export enum UserActionsEnum {
    SET_USER = "SET_USER"
}

export interface SetUserAction {
    type: UserActionsEnum.SET_USER;
    payload: ICurrentUser;
}

export interface Languages {
    nodes: Language[]
}

export interface Language {
    name: string
}

export type CurrentUserActions = SetUserAction;
