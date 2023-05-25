import { FC, useEffect, useState } from "react"
import styles from "src/components/UI/AppButton/AppButton.module.css"

type BtnClassVariants = 'brownButton' | 'brownOutlineButton';

type ButtonTypes = 'button' | 'submit';

interface AppButtonProps {
    type: ButtonTypes,
    children: string,
    variant: BtnClassVariants
}

const AppButton: FC<AppButtonProps> = ({type, children, variant}) => {
    
    const [btnClass, setBtnClass] = useState('');
    const btnClasses = styles.defaultBtn  +  ' ' + btnClass;

    const btnSelectClass = (variant: string) => {
        switch(variant){
            case 'brownButton': setBtnClass(styles.brownButton);
            break;
            case 'brownOutlineButton': setBtnClass(styles.brownOutlineButton);
            break;
            default: setBtnClass(styles.greyOutlineButton);
        }
    }

    useEffect(() => {
        btnSelectClass(variant);
    }, [])

    console.log(btnClasses)

    return ( 
        <button 
            type={type} 
            className={btnClasses} >
            {children}
        </button>
    );
}
 
export default AppButton;