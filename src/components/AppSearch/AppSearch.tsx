import { ChangeEvent, FC } from "react"
import styles from "src/components/AppSearch/AppSerach.module.css"
import SearchIcon from "src/components/UI/SearchIcon";
import { useDebounce } from "src/hooks/useDebounce";

const AppSearch: FC = () => {

    const search = (e: string) => {
        console.log(e);
    }

    const debounsedSearch = useDebounce(search, 1000);

    const inputChanged = (e: ChangeEvent<HTMLInputElement>) => {
        debounsedSearch(e.currentTarget.value)
    }

    return ( 
        <div className={styles.search}>
            <input 
                type="text" 
                className={styles.search__input}
                onChange={inputChanged}/>
            <div className={styles.search__iconWrapper}>
                <SearchIcon />
            </div>
        </div>
    );
}
 
export default AppSearch;