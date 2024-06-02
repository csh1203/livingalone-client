import { Link } from 'react-router-dom';
import '../../css/common/Style.css';

import styles from '../../css/profile/LogoutAlertBox.module.css';

function LogoutAlertBox ({ setShowLogoutAlert }) {
    return (
        <div className={styles['alert-shadow']}>
            <div className={styles['alert-box']}>
                <div className={styles['alert-title']}>로그아웃 하시겠습니까?</div>
                <div className={styles['alert-comment']}>
                    홀로서기 서비스를 이용하실려면 로그인이 필요합니다. <br/>
                    정말 로그아웃 하시겠습니까?
                </div>
                <div className={styles['alert-btns']}>
                    <div className={styles['alert-btn-no']} onClick={() => setShowLogoutAlert(false)}>아니오</div>
                    <Link to={"/login"}>
                        <div className={styles['alert-btn-yes']}>네</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LogoutAlertBox;