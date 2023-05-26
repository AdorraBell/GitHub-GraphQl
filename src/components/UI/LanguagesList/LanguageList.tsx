import { FC } from "react"
import { Language } from "src/store/reducers/currentUser/types";

interface LanguageListProps {
    languages: Language[]
}

const LanguageList: FC<LanguageListProps> = ({languages}) => {

    return ( 
        <ul>
            {languages.map(language =>
                <li key={language.name}>{language.name}</li>
            )}
            
        </ul>
    );
}
 
export default LanguageList;