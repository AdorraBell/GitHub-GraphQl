
import { FC } from "react";
import { Languages } from "src/store/reducers/currentUser/types";
import UserUIBlock from "src/components/UI/UserUIBlock/UserUIBlock";
import LanguageList from "src/components/UI/LanguagesList/LanguageList";
import styles from "src/components/RepoDetail/RepoDetail.module.css";
import ButtonApp from "src/components/UI/ButtonApp/ButtonApp";
import { useNavigate } from "react-router-dom";


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

    const navigation = useNavigate();
    const btnClicked = () => navigation('/');

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
                <ButtonApp
                    type="button"
                    variant="brownOutlineButton"
                    onClick={btnClicked}
                    id={1} >
                        Go Back
                </ButtonApp>
            </div>
        </div>
    );
}
 
export default RepoDetail;