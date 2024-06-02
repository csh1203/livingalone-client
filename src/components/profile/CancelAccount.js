import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import '../../css/common/Style.css';
import styles from '../../css/profile/CancelAccount.module.css'

import RadioBox from './RadioBox';
import axios from "axios";

function CancelAccount({ setShowCancelPopup }) {
    const movePage = useNavigate();
    const userPK = useSelector(state => state.user.userPK);

    const cacelAccount = async() => {
        try{
            const response = await axios.delete(`http://127.0.0.1:3001/users/${userPK}`);
            movePage('/login');
        }catch(error){
            console.log(error);
        }
        
    }

    return(
        <div className={styles['popup-shadow']}>
            <div className={styles['popup-box']}>
                <div className={styles['title']}>계정을 탈퇴하시겠습니까?</div>
                <div className={styles['radio-container']}>
                    <RadioBox>기록 삭제 목적</RadioBox>
                    <RadioBox>이용이 불편하고 장애가 많아서</RadioBox>
                    <RadioBox>다른 사이트가 더 좋아서</RadioBox>
                    <RadioBox>사용빈도가 낮아서</RadioBox>
                    <RadioBox>기타</RadioBox>
                    <RadioBox>응답 거부</RadioBox>
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
                    <div className={styles['apply-btn']} onClick={cacelAccount}>네</div>
                </div>
            </div>
        </div>
    )
}

export default CancelAccount;