import { FC } from "react"
import SearchRepoBlock from "src/components/SearchRepoBlock/SearchRepoBlock"
import BaseLayout from "src/layout/BaseLayout/BaseLayout"

const MainPage: FC = () => {
    
    return ( 
        <BaseLayout>
            <SearchRepoBlock />   
        </BaseLayout>
    );
}
 
export default MainPage;