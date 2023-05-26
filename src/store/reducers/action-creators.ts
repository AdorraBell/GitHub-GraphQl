import { CurrentUserActionCreators } from "src/store/reducers/currentUser/action-creators";
import { ReposQueryInfoActionCreators } from "./reposQueryInfo/action-creators";
import { ReposListActionCreator } from "./searchedRepos/action-creators";

export const allActionCreators = {
    ...CurrentUserActionCreators,
    ...ReposQueryInfoActionCreators,
    ...ReposListActionCreator
}