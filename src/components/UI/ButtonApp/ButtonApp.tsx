import { FC, useEffect, useState } from "react"
import styles from "src/components/UI/ButtonApp/ButtonApp.module.css"
import { useTypedSelector } from "src/hooks/useTypedSelector";

type BtnClassVariants = 'brownButton' | 'brownOutlineButton';

type ButtonTypes = 'button' | 'submit';

interface ButtonAppProps {
    type: ButtonTypes,
    children: string | number,
    variant: BtnClassVariants,
    onClick: (id: number) => void,
    id: number,
    active: boolean
}

const ButtonApp: FC<ButtonAppProps> = ({type, children, variant, onClick, id, active}) => {
    
    const [btnClass, setBtnClass] = useState('');
    const btnClasses = styles.defaultBtn  +  ' ' + btnClass;
    const activeBtnClasses = styles.defaultBtn  +  ' ' + styles.selectedButton;
    const btnClicked = () => onClick(id);
    //const {cursorList, currentCursor} = useTypedSelector(state => state.reposQueryInfo);


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
            className={(active) ? activeBtnClasses : btnClasses} 
            onClick={btnClicked} >
            {children}
        </button>
    );
}
 
export default ButtonApp;