import { useState, useEffect } from 'react';
import '../../css/common/Style.css';
import styles from '../../css/profile/CancelAccount.module.css'

function CancelAccount({ setShowCancelPopup }) {
    return(
        <div className={styles['popup-shadow']}>
            <div className={styles['popup-box']}>
                <div className={styles['title']}>계정을 탈퇴하시겠습니까?</div>
                <div className={styles['radio-container']}>
                    <div className={styles['radio-box']}>
                        <input type="radio" name="radio" className={styles['radio-input']}/>
                        <div className={styles['radio-text']}>기록 삭제 목적</div>
                    </div>
                    <div className={styles['radio-box']}>
                        <input type="radio" name="radio" className={styles['radio-input']}/>
                        <div className={styles['radio-text']}>이용이 불편하고 장애가 많아서</div>
                    </div>
                    <div className={styles['radio-box']}>
                        <input type="radio" name="radio" className={styles['radio-input']}/>
                        <div className={styles['radio-text']}>다른 사이트가 더 좋아서</div>
                    </div>  
                    <div className={styles['radio-box']}>
                        <input type="radio" name="radio" className={styles['radio-input']}/>
                        <div className={styles['radio-text']}>사용빈도가 낮아서</div>
                    </div>
                    <div className={styles['radio-box']}>
                        <input type="radio" name="radio" className={styles['radio-input']}/>
                        <div className={styles['radio-text']}>기타</div>
                    </div>
                    <div className={styles['radio-box']}>
                        <input type="radio" name="radio" className={styles['radio-input']}/>
                        <div className={styles['radio-text']}>응답 거부</div>
                    </div>
                </div>
                <div className={styles['cancel-notification-box']}>
                    <div className={styles['noti-title']}>
                        탈퇴시 삭제 / 유지되는 정보를 확인하세요! <br/>
                        한번 삭제된 정보는 복구가 불가능합니다.
                    </div>
                    <div className={styles['cancel-list']}>
                        계정 및 프로필 정보 삭제 <br/>
                        작성했던 모든 Q&A, 댓글 삭제 <br/>
                        캐시 삭제 <br/>
                    </div>
                </div>

                <div className={styles['btns']}>
                    <div className={styles['cancel-btn']} onClick={() => setShowCancelPopup(false)}>아니오</div>
                    <div className={styles['apply-btn']} onClick={() => setShowCancelPopup(false)}>네</div>
                </div>
            </div>
        </div>
    )
}

export default CancelAccount;