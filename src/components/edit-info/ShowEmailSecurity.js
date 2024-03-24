import '../../css/common/Style.css';
import styles from '../../css/edit-info/ShowEmailSecurity.module.css'
import { Icon } from '@iconify/react';


function ShowEmailSecurity({ setShowEmailSecurity }) {
    return(
        <div className={styles['popup-shadow']}>
            <div className={styles['popup-box']}>
                <Icon icon="iconoir:cancel" className={styles['close-btn']}
                    onClick={() => setShowEmailSecurity(false)}/>
                <div className={styles['popup-detail']}>
                    <div className={styles['title']}>이메일 정보수집 동의(필수)</div>
                    <div className={styles['content']}>
                        <div className={styles['explain-content']}>
                            홀로서기는 서비스 제공에 필요 최소한의 개인정보를 수집, 이용합니다
                        </div>
                        <br/>
                        <div className={styles['contect-detail']}>
                            1. 서비스 기본기능 제공을 위한 이용자 식별 및 회원관리 <br/>
                            2. 이용자 피해 예방을 위한 가입 이메일 식별 및 경고 기능 제공 <br/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowEmailSecurity;