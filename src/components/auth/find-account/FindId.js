import React, {useState} from "react";
import '../../../css/common/Style.css'
import styles from '../../../css/auth/find-account/FindId.module.css'
import axios from "axios";
import { useSelector } from "react-redux";

import ScopeBar from "./ScopeBar";
import FindInput from "./FindInput";
import SubmitBtn from "./SubmitBtn";

function FindId({ scope, setScope, setShowId }) {
    const [ inputValue, setInputValue ] = useState({
        name: '',
        email: ''
    })

    const getUserId = async () => {
        try{
            const response = await axios.post(`http://127.0.0.1:3001/users/find-id`, inputValue);
            console.log(response.data.message);
            setShowId(response.data.message); 
        }catch(err){
            console.error(err);
        }
    }

    return(
        <div className={styles['find-box']}>
            <ScopeBar scope={scope} setScope={setScope}/>
            <div className={styles['title']}>
                아이디를 잃어버리셨나요? <br/> 하단의 정보를 상세히 입력하세요
            </div>
            <div className={styles['input-box']}>
                <FindInput placeholder="닉네임을 입력하세요" name="name" inputValue={inputValue} setInputValue={setInputValue} icon={false}/>
                <FindInput placeholder="이메일을 입력하세요" name="email" inputValue={inputValue} setInputValue={setInputValue} icon={false}/>
            </div>
            <SubmitBtn name="다음" clickEvent={() => {getUserId()}}/>
        </div>
    )
}

export default FindId;