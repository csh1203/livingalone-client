import React, { useState } from "react";
import '../../../css/common/Style.css';
import styles from '../../../css/auth/find-account/FindAccount.module.css'

import FindBox from './FindBox'

function FindAccount() {

    return(
        <main>
            <div className={styles['title']}>계정 찾기</div>
            <FindBox />
        </main>
    )
}

export default FindAccount;