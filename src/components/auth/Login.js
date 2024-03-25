import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setUserPK} from '../../actions/userActions';
import axios from 'axios';
import '../../css/common/Style.css';
import styles from '../../css/auth/Login.module.css'

function Login() {
    const movePage = useNavigate();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleLogin = async () => {
        const req = {
            user_id: userId,
            password: userPassword
        }

        try {
            const response = await axios.post(`http://127.0.0.1:3001/users/login`, req);
            const loggedInUserPK = response.data.user.user_id;   // 로그인 후 받은 PK
            dispatch(setUserPK(loggedInUserPK));

            movePage('/');
        } catch (error) {
            console.error('로그인 실패:', error)
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles['main-label']}>로그인</div>
            <div className={styles['login-box']}>
                <div className={styles.forms}>
                    <div className={styles['input-container']}>
                        <input
                            type="text"
                            className={styles['text-field']}
                            placeholder="아이디를 입력하세요"
                            value={userId}
                            onChange={e => setUserId(e.target.value)}
                        />
                        <div className={styles['error-message']}>모든 정보를 입력해 주세요.</div>
                    </div>
                    <div className={styles['input-container']}>
                        <input
                            type="password"
                            className={styles['text-field']}
                            placeholder="비밀번호를 입력하세요"
                            value={userPassword}
                            onChange={e => setUserPassword(e.target.value)}
                        />
                        <div className={styles['error-message']}>모든 정보를 입력해 주세요.</div>
                    </div>
                    <div className={styles['keep-login-checkbox']}>
                        <label className={styles['round-checkbox']}>
                            <input
                                type="checkbox"
                            />
                            <span className={styles['checkmark']}></span>
                            로그인 상태 유지
                        </label>
                    </div>
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
                        <img src="./images/auth-icon/naver.svg" className={styles['auth-icon-img']}></img>
                    </div>
                    <div className={styles['auth-icon']}>
                        <img src="./images/auth-icon/kakao.svg" className={styles['auth-icon-img']}></img>
                    </div>
                    <div className={styles['auth-icon']}>
                        <img src="./images/auth-icon/google.svg" className={styles['auth-icon-img']}></img>
                    </div>
                    <div className={styles['auth-icon']}>
                        <img src="./images/auth-icon/apple.svg" className={styles['auth-icon-img']}></img>
                    </div>
                </div>
                <button className={styles['signin-button']} onClick={() => movePage('/join')}>회원가입</button>
                <div className={styles['forgot-login']}>아이디 | 비밀번호를 잊으셨나요?</div>
            </div>
        </div>
    );
}

export default Login;
