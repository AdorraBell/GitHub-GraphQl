import { FC } from "react";
import styles from "./RepoBlock.module.css";
import UserUIBlock from "src/components/UI/UserUIBlock/UserUIBlock";
import { Link } from "react-router-dom";

interface RepoBlockProps {
    name: string,
    stargazerCount: number,
    updatedAt: string,
    ownerLogin: string,
    ownerAvatarUrl?: string,
    linkToOwnerPage: string,
    description?: string,
}

const RepoBlock: FC<RepoBlockProps> = (props) => {

    const {
        name, 
        stargazerCount, 
        updatedAt, 
        ownerLogin, 
        ownerAvatarUrl, 
        linkToOwnerPage, 
        description
    } = props;

    return ( 
        <div className={styles.repoBlock}>
            <UserUIBlock 
                login={ownerLogin}
                avatarUrl={ownerAvatarUrl} 
                link={linkToOwnerPage} />
            <div className={styles.repoBlock__line}>
                <span className={styles.repoBlock__boldText}>
                    <Link to={`/detail/${ownerLogin}/${name}`}>{name}</Link>
                </span>
            </div>
            <div className={styles.repoBlock__line}>
                <span className={styles.repoBlock__boldText}>Stars: </span>
                {stargazerCount}
            </div>
            <div className={styles.repoBlock__line}>
                <span className={styles.repoBlock__boldText}>Updated: </span>
                {updatedAt}
            </div>
            <div className={styles.repoBlock__line}>
                <span className={styles.repoBlock__boldText}>Description: </span>
                {description}
            </div>
        </div>
    );
}
 
export default RepoBlock;