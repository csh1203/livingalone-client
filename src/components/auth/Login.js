import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserPK } from '../../actions/userActions';
import styles from '../../css/auth/Login.module.css';
import '../../css/common/Style.css';
import InputContainer from './basic/InputContainer';

function Login() {
    const movePage = useNavigate();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [isError, setIsError] = useState(false);

    const handleLogin = async () => {
        const req = {
            user_id: userId,
            password: userPassword
        }

        try {
            const response = await axios.post(`http://127.0.0.1:3001/users/login`, req);
            const loggedInUserPK = response.data.user_pk;
            dispatch(setUserPK(loggedInUserPK))
            localStorage.setItem('userPK', loggedInUserPK);
            movePage('/');
        } catch (error) {
            console.error('로그인 실패:', error)
            setIsError(true)
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles['main-label']}>로그인</div>
            <div className={styles['login-box']}>
                <div className={styles.forms}>
                    <InputContainer
                        handleOnChange={setUserId}
                        placeholder="아이디를 입력해 주세요."
                        isError={isError}
                        errorMessage="존재하지 않는 아이디입니다."
                    />
                    <InputContainer
                        handleOnChange={setUserPassword}
                        isPassword
                        placeholder="비밀번호를 입력해 주세요."
                        isError={isError}
                        errorMessage="알맞지 않는 비밀번호입니다."
                    />
                    <button
                        className={styles['login-button']}
                        onClick={handleLogin}
                    >로그인
                    </button>
                </div>
                <div className={styles['easy-login-label']}>
                    간편하게 시작하기
                </div>
                <div className={styles['auth-icons']}>
                    <div className={styles['auth-icon']}>
                        <img src="./images/auth-icon/naver.svg" className={styles['auth-icon-img']} alt="네이버 로그인" />
                    </div>
                    <div className={styles['auth-icon']}>
                        <img src="./images/auth-icon/kakao.svg" className={styles['auth-icon-img']} alt="카카오 로그인" />
                    </div>
                    <div className={styles['auth-icon']}>
                        <img src="./images/auth-icon/google.svg" className={styles['auth-icon-img']} alt="구글 로그인" />
                    </div>
                    <div className={styles['auth-icon']}>
                        <img src="./images/auth-icon/apple.svg" className={styles['auth-icon-img']} alt="애플 로그인" />
                    </div>
                </div>
                <button className={styles['signin-button']} onClick={() => movePage('/join')}>회원가입</button>
                <div className={styles['forgot-login']} onClick={() => movePage('/findAccount')}>아이디 | 비밀번호를 잊으셨나요?</div>
            </div>
        </div>
    );
}

export default Login;
