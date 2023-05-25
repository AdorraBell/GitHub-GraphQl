
import { FC } from "react"
import { Languages } from "src/store/reducers/currentUser/types";
import UserUIBlock from "../UI/UserUIBlock/UserUIBlock";
import LanguageList from "../UI/LanguagesList/LanguageList";
import styles from "src/components/RepoDetail/RepoDetail.module.css"
import AppButton from "../UI/AppButton/AppButton";
import { Link } from "react-router-dom";


interface RepoDetailProps {
    repoName: string,
    stargazerCount: number,
    updatedAt: string,
    ownerLogin: string,
    ownerUrl: string,
    ownerAvatarUrl: string,
    description?: string,
    languages: Languages
}

const RepoDetail: FC<RepoDetailProps> = (props) => {

    const {
        repoName, 
        stargazerCount, 
        updatedAt, 
        ownerLogin, 
        ownerAvatarUrl, 
        ownerUrl, 
        description, 
        languages
    } = props;

    return ( 
        <div className={styles.repoDetail}>
            <h2 className={styles.repoDetail__titleH2}>{repoName}</h2>
            <div>
                <div className={styles.repoDetail__line}>
                    <div>
                        <span className={styles.boldText}>Updated: </span>
                        {updatedAt}
                    </div>
                    <div> 
                        <span className={styles.boldText}>Stars: </span>
                        {stargazerCount}
                    </div>
                </div>
                <UserUIBlock 
                    login={ownerLogin}
                    avatarUrl={ownerAvatarUrl}
                    link={ownerUrl} />
                <h3 className={styles.repoDetail__titleH3}>Stack:</h3>
                <LanguageList 
                    languages={languages.nodes} />
                <h3 className={styles.repoDetail__titleH3}>Description:</h3>
                <div>{description}</div>
            </div>
            <div className={styles.repoDetail__line}>
                <Link to="/">
                <AppButton
                    type="button"
                    variant="brownOutlineButton">
                        Go Back
                </AppButton>
                </Link>
            </div>
        </div>
    );
}
 
export default RepoDetail;