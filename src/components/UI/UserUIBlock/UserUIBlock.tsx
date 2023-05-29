import { FC } from "react";
import styles from "./UserUIBlock.module.css";

interface UserUIBlockProps {
    avatarUrl?: string,
    login: string,
    link?: string
}

const UserUIBlock: FC<UserUIBlockProps> = ({avatarUrl, login, link}) => {
    return ( 
        <div className={styles.userUI}>
            <div className={styles.userUI__userIcon}>
                {avatarUrl &&
                    <img src={avatarUrl} />
                }
            </div>
            <div className={styles.userUI__username}>
                {link ?
                    <a href={link}>{login}</a>
                    :
                    login
                }
                
            </div>
        </div>
    );
}
 
export default UserUIBlock;