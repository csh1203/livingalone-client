import React from "react";
import '../../../css/common/Style.css'
import styles from '../../../css/auth/find-account/ScopeBar.module.css'

function ScopeBar({scope, setScope}) {
    return(
        <div className={styles['scope-bar']}>
            <div className={styles[`scope-btn-${scope}`]} onClick={() => setScope(true)}>아이디 찾기</div>
            <div className={styles[`scope-btn-${!scope}`]} onClick={() => setScope(false)}>비밀번호 찾기</div>
        </div>
    )
}

export default ScopeBar;