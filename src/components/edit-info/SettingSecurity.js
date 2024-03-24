import React, { useState } from "react";
import '../../css/common/Style.css';
import styles from '../../css/edit-info/SettingSecurity.module.css'
import { Icon } from '@iconify/react';

import ShowEmailSecurity from './ShowEmailSecurity';
import ChangePw from './ChangePw'

function SettingSecurity() {
    const [ showEmailSecurity, setShowEmailSecurity] = useState(false);
    const [ showChangePw, setShowChangePw ] = useState(false);

    return(
        <>
            <div className={styles['title-box']}>
                <div className={styles['title']}>보안설정 변경</div>
                <div className={styles['sub-title']}>로그인 된 계정 정보를 변경할 수 있습니다.</div>
            </div>
            
            <div className={styles['setting-security-box']}>
                <div className={styles['setting-basic-security']}>
                    <div className={styles['security-title']}>기본보안 설정</div>
                    <div className={styles['security-list']}>
                        <div className={styles['security-box']}>
                            <div className={styles['security-box-title-div']}>
                                <Icon icon="mingcute:lock-fill" className={styles['security-icon']}/>
                                <div className={styles['security-box-title']}>비밀번호 변경</div>
                            </div>
                            <div className={`${styles['edit-security-btn']} ${styles['security-btn']}`}
                                onClick={() => setShowChangePw(true)}>변경</div>
                        </div>
                        <div className={styles['security-box']}>
                            <div className={styles['security-box-title-div']}>
                                <Icon icon="uiw:mail" className={styles['security-icon']}/>
                                <div className={styles['security-box-title']}>이메일</div>
                            </div>
                            <div className={`${styles['edit-security-btn']} ${styles['security-btn']}`}>변경</div>
                        </div>
                    </div>
                </div>

                <div className={styles['setting-consent-info']}>
                    <div className={styles['security-title']}>동의정보</div>
                    <div className={styles['security-list']}>
                        <div className={styles['security-box']}>
                            <div className={styles['security-box-title']}>이메일 정보수집</div>
                            <div className={`${styles['show-consent-info']} ${styles['security-btn']}`}
                                onClick={() => setShowEmailSecurity(true)}>열람</div>
                        </div>
                    </div>
                </div>
            </div>

            {showEmailSecurity && <ShowEmailSecurity setShowEmailSecurity={setShowEmailSecurity}/>}
            {showChangePw && <ChangePw setShowChangePw={setShowChangePw}/>}
        </>
    )
}

export default SettingSecurity;