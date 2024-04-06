import React, {useState} from "react";
import '../../../css/common/Style.css'
import styles from '../../../css/auth/find-account/FindPw.module.css'

import ScopeBar from "./ScopeBar";
import FindInput from "./FindInput";
import SubmitBtn from "./SubmitBtn";

function FindPw({ scope, setScope, setShowPw}) {
    const [ email, setEmail ] = useState({
        email: ''
    })
    const [ pw, setPw ] = useState({
        newPw: '',
        checkNewPw: ''
    })
    const [ movePw, setMovePw ] = useState(false);

    return(
        <>
            <ScopeBar scope={scope} setScope={setScope}/>
            <div className={styles['title']}>
                비밀번호를 잃어버리셨나요? <br/>
                하단의 정보를 상세히 입력하세요
            </div>
            {movePw ? <InputPw pw={pw} setPw={setPw} setShowPw={setShowPw}/> : 
            <InputEmail email={email} setEmail={setEmail} setShowPw={setShowPw} setMovePw={setMovePw}></InputEmail>}
            
            
            
        </>
    )
}

function InputEmail({ email, setEmail, setShowPw, setMovePw }) {
    return(
        <>
            <FindInput placeholder="이메일 주소를 입력해주세요" name="email" inputValue={email} setInputValue={setEmail} icon={true}/>
            <SubmitBtn name="완료" clickEvent={() => {setMovePw(true)}} value={email}/>
        </>
    )
}

function InputPw({ pw, setPw, setShowPw }){
    return(
        <>
            <div className={styles['input-box']}>
                <FindInput placeholder="새 비밀번호(8자 이상, 영문, 숫자, 기호)" name="newPw" inputValue={pw} setInputValue={setPw} icon={true}
                    prevPw='asdf1234'/> 
                <FindInput placeholder="비밀번호를 한 번 더 입력하세요" name="checkNewPw" inputValue={pw} setInputValue={setPw} icon={true}/> 
            </div>
           <SubmitBtn name="완료" clickEvent={() => {setShowPw(true)}} value={pw}/>
        </>
    )
}

export default FindPw;