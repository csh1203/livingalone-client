import React from "react";
import { useNavigate } from 'react-router-dom';
import '../../../css/common/Style.css'
import styles from '../../../css/auth/find-account/ShowId.module.css'

import SubmitBtn from "./SubmitBtn";

function ShowId() {
    const navigate = useNavigate();
    return(
        <div className={styles['show-box']}>
            <img src="/images/find-account/id-icon.svg" className={styles['icon']}/>
            <div className={styles['show-id']}>
                <div className={styles['user-id']}>mirim1017</div>
                <div className={styles['comment']}>회원님의 아이디입니다</div>
            </div>
            <SubmitBtn name="로그인하러 가기" clickEvent={() => navigate('/login')}/>
        </div>
    )
}

export default ShowId;