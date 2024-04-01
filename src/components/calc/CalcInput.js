import '../../css/common/Style.css'
import styles from '../../css/calc/CalcInput.module.css'

function CalcInput({ placeholder, value, onChange}) {
    return(
        <>
            <input type="text" placeholder={placeholder} value={value} onChange={onChange}className={styles['input-style']}/>
        </>
    )
}

export default CalcInput;