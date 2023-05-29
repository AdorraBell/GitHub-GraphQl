import { ChangeEvent, FC } from "react";
import styles from "./SearchLine.module.css";
import SearchIcon from "src/components/UI/SearchIcon";
import { useDebounce } from "src/hooks/useDebounce";

interface SearchLineProps {
    searchData: (e: string) => void,
    value?: string
}

const SearchLine: FC<SearchLineProps> = ({searchData, value}) => {

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
                onChange={inputChanged}
                defaultValue={value} />
            <div className={styles.search__iconWrapper}>
                <SearchIcon />
            </div>
        </div>
    );
}
 
export default SearchLine;