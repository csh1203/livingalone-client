import React from "react";
import { useNavigate } from 'react-router-dom';
import '../../../css/common/Style.css'
import styles from '../../../css/auth/find-account/ShowPw.module.css'

import SubmitBtn from "./SubmitBtn";

function ShowPw() {
    const navigate = useNavigate();
    return(
        <div className={styles['show-pw']}>
            <img src="/images/find-account/pw-icon.svg" className={styles['icon']}/>
            <div className={styles['change-pw']}>
                holosergi@gmail.com님의 <br/>
                비밀번호 변경이 완료되었습니다
            </div>
            <SubmitBtn name="로그인하러 가기" clickEvent={() => navigate('/login')}/>
        </div>
    )
}

export default ShowPw;