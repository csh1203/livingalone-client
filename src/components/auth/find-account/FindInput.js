import '../../../css/common/Style.css'
import styles from '../../../css/auth/find-account/FindInput.module.css'

function FindInput({ placeholder, name, inputValue, setInputValue}) {
    const changeHandler = e => {
        setInputValue({...inputValue, [name]: e.target.value})
    }

    return(
        <input type='text' className={styles['input']} placeholder={placeholder} value={inputValue[name]} onChange={changeHandler}/>
    )
}

export default FindInput;