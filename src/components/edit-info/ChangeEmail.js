import { useState, useEffect } from 'react';
import '../../css/common/Style.css';
import styles from '../../css/edit-info/ChangeEmail.module.css'

function ChangeEmail({ setShowChangeEmail }) {
    return(
        <div className={styles['popup-shadow']}>
            <div className={styles['popup-box']}>
                <div className={styles['title']}>이메일 변경</div>
                <div className={styles['email-info-box']}>
                    <div className={styles['current-email-box']}>
                        <div className={styles['current-email-title']}>현재 이메일 주소: </div>
                        <div className={styles['current-email']}>holosergi@gmail.com</div>
                    </div>
                    <input className={styles['new-email-input']} placeholder='새 이메일 주소'/>
                </div>
                <div className={styles['apply-btn']} onClick={() => setShowChangeEmail(false)}>완료</div>
            </div>
        </div>
    )
}

export default ChangeEmail;