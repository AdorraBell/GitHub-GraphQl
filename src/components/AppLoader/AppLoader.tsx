import { FC } from "react"
import styles from "src/components/AppLoader/AppLoader.module.css"

const AppLoader: FC = () => {
    return ( 
        <div className={styles.loaderWrapper}>
            <div className={styles.loader}></div>
        </div> 
    );
}
 
export default AppLoader;