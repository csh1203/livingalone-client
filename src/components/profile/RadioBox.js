import '../../css/common/Style.css';
import styles from '../../css/profile/CancelAccount.module.css'

function RadioBox(props) {
    return (
        <div className={styles['radio-box']}>
            <input type="radio" name="radio" className={styles['radio-input']}/>
            <div className={styles['radio-text']}>{props.children}</div>
        </div>
    )
}

export default RadioBox;