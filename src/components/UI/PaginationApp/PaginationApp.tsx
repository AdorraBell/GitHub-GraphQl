import { FC, useState, useEffect } from "react";
import ButtonApp from "src/components/UI/ButtonApp/ButtonApp";
import styles from "./PaginationApp.module.css";

interface PaginationAppProps {
    cursorList: String[],
    pageSelected: (id: number) => void,
    queryString?: string
}

const PaginationApp: FC<PaginationAppProps> = ({cursorList, pageSelected, queryString}) => {

    const [activeBtnId, setActiveBtnId] = useState(JSON.parse(sessionStorage.getItem(('pageId')) || ''));

    const btnClicked = (id: number) => {
        pageSelected(id);
        setActiveBtnId(id);
    }

    useEffect(() => {
        setActiveBtnId(JSON.parse(sessionStorage.getItem(('pageId')) || ''))
    }, [queryString])

    
    return ( 
        <div className={styles.pagination}>
            { cursorList.map((point, index) =>
                <ButtonApp 
                    type="button" 
                    variant="brownButton"
                    onClick={btnClicked}
                    key={index}
                    id={index}
                    active={activeBtnId === index}
                    point={point}
                    >
                    {index+1}
                </ButtonApp>
            )}
        </div> 
    );
}
 
export default PaginationApp;