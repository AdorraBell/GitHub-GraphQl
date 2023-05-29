import React, { FC } from "react";
import AppHeader from "src/components/AppHeader/AppHeader";
import styles from "src/layout/BaseLayout/BaseLayout.module.css";

interface BaseLayoutProps {
    children: React.ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({children}) => {
    return ( 
        <div className={styles.baseLayout}>
            <AppHeader />
            {children}
        </div>
    );
}
 
export default BaseLayout;