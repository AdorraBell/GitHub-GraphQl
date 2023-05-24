import { FC, useState } from "react";
import AppLoader from "src/components/AppLoader/AppLoader";
import SearchRepoBlock from "src/components/SearchRepoBlock/SearchRepoBlock";

import BaseLayout from "src/layout/BaseLayout/BaseLayout";

const MainPage: FC = () => {

    const [isSearching, setIsSearching] = useState(false);

    return ( 
        <BaseLayout>
            <SearchRepoBlock />
                {isSearching &&
                    <AppLoader />
                }
        </BaseLayout>
    );
}
 
export default MainPage;