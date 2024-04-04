import React, {useState} from "react";
import '../../../css/common/Style.css'
import styles from '../../../css/auth/find-account/FindId.module.css'

import ScopeBar from "./ScopeBar";
import FindInput from "./FindInput";
import SubmitBtn from "./SubmitBtn";

function FindId({ scope, setScope, setShowId }) {
    const [ inputValue, setInputValue ] = useState({
        nickname: '',
        email: ''
    })

    return(
        <div className={styles['find-box']}>
            <ScopeBar scope={scope} setScope={setScope}/>
            <div className={styles['title']}>
                아이디를 잃어버리셨나요? <br/> 하단의 정보를 상세히 입력하세요
            </div>
            <div className={styles['input-box']}>
                <FindInput placeholder="닉네임을 입력하세요" name="nickname" inputValue={inputValue} setInputValue={setInputValue}/>
                <FindInput placeholder="이메일을 입력하세요" name="email" inputValue={inputValue} setInputValue={setInputValue}/>
            </div>
            <SubmitBtn name="다음" clickEvent={() => setShowId(true)}/>
        </div>
    )
}

export default FindId;