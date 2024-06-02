import axios from 'axios';
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from '../../css/auth/Join.module.css';
import '../../css/common/Style.css';
import InputContainer from './basic/InputContainer';

function Join() {
    const movePage = useNavigate();
    const imgUrl = "https://cdn-icons-png.freepik.com/256/10302/10302971.png?semt=ais_hybrid";

    // form data
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    // error
    const [idError, setIdError] = useState(false);
    const [pwError, setPwError] = useState(false);
    const [pwConfirmError, setPwConfirmError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = useCallback(async () => {
        setIdError(false);
        setPwError(false);
        setPwConfirmError(false);
        setEmailError(false);

        if (!validatePassword(password)) {
            setPwError(true);
            return;
        }

        if (password !== confirmPassword) {
            setPwConfirmError(true);
            return;
        }

        try {
            const req = {
                user_id: id,
                name: name,
                password: password,
                email: email,
                image: imgUrl
            };

            const response = await axios.post(`http://127.0.0.1:3001/users/signup`, req);

            movePage('/login');
        } catch (error) {
            setIdError(true);
            console.error('회원가입 실패:', error);
        }
    }, [id, name, password, confirmPassword, email, movePage]);

    return (
        <div className={styles.main}>
            <div className={styles['main-label']}>회원가입</div>
            <div className={styles['login-box']}>
                <form className={styles.forms} onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                    <label className={styles['sub-label']}>회원정보 입력</label>
                    <InputContainer
                        handleOnChange={setId}
                        placeholder="아이디(6~12자 이내, 영문, 숫자)"
                        errorMessage="이미 사용중인 아이디 또는 아이디 규칙에 맞지 않습니다."
                        isError={idError}
                    />
                    <InputContainer
                        handleOnChange={setPassword}
                        isPassword
                        placeholder="비밀번호(8자 이상, 영문, 숫자, 기호)"
                        isError={pwError}
                        errorMessage="알맞지 않는 비밀번호입니다."
                    />
                    <InputContainer
                        handleOnChange={setConfirmPassword}
                        isPassword
                        placeholder="비밀번호를 한 번 더 입력하세요"
                        isError={pwConfirmError}
                        errorMessage="비밀번호가 일치하지 않습니다."
                    />
                    <InputContainer
                        handleOnChange={setName}
                        placeholder="닉네임을 입력하세요"
                        isError={false}
                    />
                    <InputContainer
                        handleOnChange={setEmail}
                        placeholder="이메일을 입력해 주세요."
                        errorMessage="이미 존재하는 이메일입니다."
                        isError={emailError}
                    />
                    <button
                        type="submit"
                        className={styles['login-button']}
                    >다음
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Join;
