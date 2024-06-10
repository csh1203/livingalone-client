import React, {useState} from "react";
import '../../../css/common/Style.css'
import styles from '../../../css/auth/find-account/FindPw.module.css'
import axios from "axios";
import ScopeBar from "./ScopeBar";
import FindInput from "./FindInput";
import SubmitBtn from "./SubmitBtn";


function FindPw({ scope, setScope, setShowPw }) {
    const [ email, setEmail ] = useState({
        email: ''
    })
    const [ pw, setPw ] = useState({
        newPassword: '',
        newPasswordConfirmation: ''
    })
    const [ movePw, setMovePw ] = useState(false);

    const req = {};
    Object.assign(req, email, pw);

    const changeUserPw = async () => {
        try{
            const response = await axios.put(`${process.env.REACT_APP_SERVER}/users/password`, req)
            console.log(response.data);
            setShowPw(email.email);
        }catch(err){
            alert(err.response.data.message);
        }
    }

    return(
        <>
            <ScopeBar scope={scope} setScope={setScope}/>
            <div className={styles['title']}>
                비밀번호를 잃어버리셨나요? <br/>
                하단의 정보를 상세히 입력하세요
            </div>
            {movePw ? <InputPw pw={pw} setPw={setPw} changeUserPw={changeUserPw}/> : 
            <InputEmail email={email} setEmail={setEmail} setMovePw={setMovePw}></InputEmail>}
        </>
    )
}

function InputEmail({ email, setEmail, setMovePw }) {
    return(
        <>
            <FindInput placeholder="이메일 주소를 입력해주세요" name="email" inputValue={email} setInputValue={setEmail} icon={true}/>
            <SubmitBtn name="완료" clickEvent={() => setMovePw(true)} value={email}/>
        </>
    )
}

function InputPw({ pw, setPw, changeUserPw }){
    return(
        <>
            <div className={styles['input-box']}>
                <FindInput placeholder="새 비밀번호(8자 이상, 영문, 숫자, 기호)" name="newPassword" inputValue={pw} setInputValue={setPw} icon={true}
                    prevPw='asdf1234'/> 
                <FindInput placeholder="비밀번호를 한 번 더 입력하세요" name="newPasswordConfirmation" inputValue={pw} setInputValue={setPw} icon={true}/> 
            </div>
           <SubmitBtn name="완료" clickEvent={() => changeUserPw()} value={pw}/>
        </>
    )
}

export default FindPw;