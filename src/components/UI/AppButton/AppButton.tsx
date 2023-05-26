import { FC, useEffect, useState } from "react"
import styles from "src/components/UI/AppButton/AppButton.module.css"

type BtnClassVariants = 'brownButton' | 'brownOutlineButton';

type ButtonTypes = 'button' | 'submit';

interface AppButtonProps {
    type: ButtonTypes,
    children: string,
    variant: BtnClassVariants,
    onClick: (id: number | null) => void,
    id?: number
}

const AppButton: FC<AppButtonProps> = ({type, children, variant, onClick, id}) => {
    
    const [btnClass, setBtnClass] = useState('');
    const btnClasses = styles.defaultBtn  +  ' ' + btnClass;
    const btnClicked = () => onClick(id || null)

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

    return ( 
        <button 
            type={type} 
            className={btnClasses} 
            onClick={btnClicked} >
            {children}
        </button>
    );
}
 
export default AppButton;