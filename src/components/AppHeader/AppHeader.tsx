import { FC } from "react";
import styles from "src/components/AppHeader/AppHeader.module.css";

const AppHeader: FC = () => {
    return ( 
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div className={styles.header__username}>
                    AdorraBell
                </div>
            </div>
        </div>
    );
}
 
export default AppHeader;