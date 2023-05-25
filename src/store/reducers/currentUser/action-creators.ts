import { AppDispatch } from "src/store";
import { ICurrentUser, SetUserAction, UserActionsEnum } from "./types";
import { IRepos } from "src/types/types";

export const CurrentUserActionCreators = {
    setCurrentUser: (user: ICurrentUser): SetUserAction => ({
        type: UserActionsEnum.SET_USER,
        payload: user
    }),

    setUser: (login: string, avatarUrl: string, url: string, reposData: IRepos, authorized: boolean) => async (dispatch: AppDispatch) => { 
        const curUser = {login, avatarUrl, url, reposData, authorized};
        dispatch(CurrentUserActionCreators.setCurrentUser(curUser))
    }
}