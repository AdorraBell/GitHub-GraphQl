import { FC } from "react";
import styles from "./ErrorBlock.module.css"

interface ErrorBlockProps {
    children: React.ReactNode
}

const ErrorBlock: FC<ErrorBlockProps> = ({children}) => {
    return ( 
        <div className={styles.errorBlock}>
            <div>
                {children}
            </div> 
        </div>
    );
}
 
export default ErrorBlock;