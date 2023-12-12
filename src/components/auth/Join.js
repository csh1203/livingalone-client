import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import '../../css/common/Style.css';
import styles from '../../css/auth/Join.module.css'
import { Icon } from '@iconify/react';

function Join() {
    const movePage = useNavigate();

    return (
        <div className={styles.main}>
            <div className={styles['main-label']}>회원가입</div>
            <div className={styles['login-box']}>
                <form className={styles.forms}>
                    <label className={styles['sub-label']}>회원정보 입력</label>
                    <div className={styles['input-container']}>
                        <div className={styles['inputs']}>
                            <input
                                type="text"
                                className={styles['text-field']}
                                placeholder="아이디를 입력하세요"
                                name={'id'}
                            />
                            <button className={styles['small-button']}>중복확인</button>
                        </div>
                        <div className={styles['error-message']}>이미 존재하는 아이디입니다.</div>
                    </div>
                    <div className={styles['input-container']}>
                        <div className={styles['inputs']}>
                            <input
                                type="text"
                                className={styles['text-field']}
                                placeholder="비밀번호를 입력하세요"
                            />
                            <Icon icon="mdi:eye" className={styles['icon']}/>
                        </div>
                        <div className={styles['error-message']}>8자 이상의 문자/숫자/기호를 조합해주세요</div>
                    </div>
                    <div className={styles['input-container']}>
                        <div className={styles['inputs']}>
                            <input
                                type="text"
                                className={styles['text-field']}
                                placeholder="비밀번호를 한 번 더 입력하세요"
                            />
                            <Icon icon="ooui:eye-closed" className={styles['icon']}/>
                        </div>
                        <div className={styles['error-message']}>8자 이상의 문자/숫자/기호를 조합해주세요</div>
                    </div>
                    <div className={styles['input-container']}>
                        <div className={styles['inputs']}>
                            <input
                                type="text"
                                className={styles['text-field']}
                                placeholder="닉네임을 입력하세요"
                                name={'name'}
                            />
                        </div>
                        <div className={styles['error-message']}>8자 이상의 문자/숫자/기호를 조합해주세요</div>
                    </div>
                    <div className={styles['input-container']}>
                        <div className={styles['inputs']}>
                            <input
                                type="text"
                                className={styles['text-field']}
                                placeholder="이메일을 입력하세요"
                                name={'email'}
                            />
                        </div>
                        <div className={styles['error-message']}>8자 이상의 문자/숫자/기호를 조합해주세요</div>
                    </div>
                    <button
                        className={styles['login-button']}
                    >다음
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Join;