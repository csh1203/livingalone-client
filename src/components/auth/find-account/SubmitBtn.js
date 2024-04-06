import React, {useState, useEffect} from "react";
import '../../../css/common/Style.css'
import styles from '../../../css/auth/find-account/SubmitBtn.module.css'

function SubmitBtn({ name, clickEvent, value }){
    const [ checkBtn, setCheckBtn] = useState(false);

    useEffect(() => {
        
        if(value){
            const keys = Object.keys(value);
            
            let flag = true;
            keys.forEach(key => {
                if(!value[key]) {
                    flag = false
                }
            })
            flag ? setCheckBtn(true) : setCheckBtn(false);
        }else {
            setCheckBtn(true);
        }
    }, [value])

    return(
        <button className={checkBtn ? styles['submit-btn'] : `${styles['submit-btn']} ${styles['no-check']}`} onClick={clickEvent}>
            {name}</button>
    )
}

SubmitBtn.defaultProps = {
    value: false
}

export default SubmitBtn;