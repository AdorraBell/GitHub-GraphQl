import { ChangeEvent, FC } from "react"
import styles from "src/components/AppSearch/AppSerach.module.css"
import SearchIcon from "src/components/UI/SearchIcon";
import { useDebounce } from "src/hooks/useDebounce";

interface AppSearchProps {
    searchData: (e: string) => void
}

const AppSearch: FC<AppSearchProps> = ({searchData}) => {

    const search = (e: string) => {
        searchData(e);
    }

    const debounsedSearch = useDebounce(search, 700);

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