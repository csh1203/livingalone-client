import { useState, useEffect } from 'react'
import '../../../css/common/Style.css'
import styles from '../../../css/auth/find-account/FindInput.module.css'

function FindInput({ placeholder, name, inputValue, setInputValue, icon, prevPw}) {
    const [ showPw, setShowPw ] = useState(false);
    const [ diff, setDiff ] = useState(false);
    const changeHandler = e => {
        setInputValue(prev => ({...prev, [name]: e.target.value}))
        
    }

    useEffect(() => {
        prevPw && prevPw === inputValue[name] ? setDiff(true) : setDiff(false);
    }, [inputValue])

    return(
        <div className={styles['input']}>
            <div className={styles['input-box']}>
                <input type={ icon ? showPw ? 'text' : 'password' : 'text'} className={styles['input']} placeholder={placeholder} value={inputValue[name]} onChange={changeHandler}/>
                { icon && <img src={`/images/edit-info/icon/${showPw ? 'open' : 'close'}-eye.png`} onClick={() => setShowPw(!showPw)} className={styles['icon']}/>}
            </div>
            { diff ? <div className={styles['no-same']}>기존 비밀번호와 동일한 비밀번호는 불가능합니다</div> : null}
        </div>
        
    )
}

FindInput.defaultProps = {
    prevPw: null
}


export default FindInput;