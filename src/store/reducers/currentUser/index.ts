import { CurrentUserActions, ICurrentUser, UserActionsEnum } from "src/store/reducers/currentUser/types"
import { IRepos } from "src/types/types";


const initialState: ICurrentUser = {
    login: '',
    avatarUrl: '',
    url: '',
    reposData: {} as IRepos,
    authorized: false
}

export default function authReducer(state = initialState, action: CurrentUserActions) {
    switch (action.type) {
        case UserActionsEnum.SET_USER :
            return {
                    ...state, 
                    login: action.payload.login, 
                    avatarUrl: action.payload.avatarUrl, 
                    url: action.payload.url,
                    reposData: action.payload.reposData,
                    authorized: action.payload.authorized}
        default: return state;
    }
}