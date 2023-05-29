import { FC } from "react";
import styles from "./LoaderApp.module.css";


const LoaderApp: FC = () => {
    return ( 
        <div className={styles.loaderWrapper}>
            <div className={styles.loader}></div>
        </div> 
    );
}
 
export default LoaderApp;