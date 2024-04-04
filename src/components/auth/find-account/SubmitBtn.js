import React from "react";
import '../../../css/common/Style.css'
import styles from '../../../css/auth/find-account/SubmitBtn.module.css'

function SubmitBtn({ name, clickEvent }) {
    return(
        <button className={styles['submit-btn']} onClick={clickEvent}>{name}</button>
    )
}

export default SubmitBtn;