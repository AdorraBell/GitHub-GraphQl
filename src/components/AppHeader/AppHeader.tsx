import { FC } from "react";
import styles from "./AppHeader.module.css";
import { useTypedSelector } from "src/hooks/useTypedSelector";
import UserUIBlock from "src/components/UI/UserUIBlock/UserUIBlock";

const AppHeader: FC = () => {

    const {login, authorized, avatarUrl} = useTypedSelector(state => state.currentUser);

    return ( 
        <div className={styles.header}>
            <div className={styles.header__content}>
                {authorized &&
                    <UserUIBlock
                        login={login} 
                        avatarUrl={avatarUrl} />
                }
            </div>
        </div>
    );
}
 
export default AppHeader;