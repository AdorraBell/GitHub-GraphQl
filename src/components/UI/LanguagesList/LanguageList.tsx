import { FC } from "react"
import { Language } from "src/store/reducers/currentUser/types";

interface LanguageListProps {
    languages: Language[]
}

const LanguageList: FC<LanguageListProps> = ({languages}) => {

    console.log(languages)

    return ( 
        <div>
            <ul>
                {languages.map(language =>
                    <li key={language.name}>{language.name}</li>
                )}
                
            </ul>
        </div>
    );
}
 
export default LanguageList;