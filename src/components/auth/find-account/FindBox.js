import React, {useState} from "react";
import '../../../css/common/Style.css'
import styles from '../../../css/auth/find-account/FindBox.module.css'

import FindId from './FindId'
import FindPw from './FindPw'

function FindBox(){
    const [ scope, setScope ] = useState(true);

    return(
        <div className={styles['box']}>
            <div className={styles['scope-bar']}>
                <div className={styles[`scope-btn-${scope}`]} onClick={() => setScope(true)}>아이디 찾기</div>
                <div className={styles[`scope-btn-${!scope}`]} onClick={() => setScope(false)}>비밀번호 찾기</div>
            </div>
            { scope ? <FindId/> : <FindPw/>}
        </div>
    )
}

export default FindBox;