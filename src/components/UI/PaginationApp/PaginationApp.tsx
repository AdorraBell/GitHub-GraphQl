import { FC } from "react"
import ButtonApp from "../ButtonApp/ButtonApp"
import styles from "src/components/UI/PaginationApp/PaginationApp.module.css"

interface PaginationAppProps {
    cursorList: String[],
    pageSelected: (id: number) => void
}

const PaginationApp: FC<PaginationAppProps> = ({cursorList, pageSelected}) => {

    const btnClicked = (id: number) => {
        pageSelected(id);
    }

    return ( 
        <div className={styles.pagination}>
            { cursorList.map((point, index) =>
                <ButtonApp 
                    type="button" 
                    variant="brownButton"
                    onClick={btnClicked}
                    key={index}
                    id={index}
                    >
                    {index+1}
                </ButtonApp>
            )}
        </div> 
    );
}
 
export default PaginationApp;