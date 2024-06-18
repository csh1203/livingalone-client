import { Icon } from '@iconify/react';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import '../../css/common/Style.css';

import styles from '../../css/profile/BasicProfile.module.css';
import CancelAccount from "./CancelAccount";
import LogoutAlertBox from './LogoutAlertBox'
import MyComment from "./MyComment";
import MyQnA from "./MyQnA";

function BasicProfileMain() {
    const movePage = useNavigate();
    const [ activeButtonIndex, setActiveButtonIndex ] = useState(null);
    const [ showLogoutAlert, setShowLogoutAlert ] = useState(false);
    const [ showCancelPopup, setShowCancelPopup ] = useState(false);
    const [ userInfo, setUserInfo ] = useState(null);
    const [ commentsLength, setCommentsLength ] = useState(0);
    const [ commentPageLength, setCommentPageLength ] = useState(0);
    const [ qnaLength, setQnaLength ] = useState(0);
    const [ qnaPageLength, setQnaPageLength ] = useState(0);

    // Redux 스토어에서 유저의 PK 값을 가져옴
    const userPK = useSelector(state => state.user.userPK);

    useEffect(() => {
        // userPK가 있는 경우에만 사용자 정보 요청을 보냄
        console.log(userPK);
        if (userPK) {
            fetchUserInfo();
            fetchCommentInfo();
            fetchQnAInfo();
        } else {
            movePage('/login');
        }
    }, [userPK]);

    const fetchUserInfo = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER}/users/${userPK}`);
            console.log(response);
            setUserInfo(response.data);
            console.log(response.data);   
        } catch (error) {
            console.error('사용자 정보 요청 실패:', error);
        }
    };

    const fetchCommentInfo = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER}/answers/list/${userPK}?page=1`);
            setCommentPageLength(response.data.totalPages)
            setCommentsLength(response.data.totalAnswerCount);

        } catch (error) {
            console.error('댓글 요청 실패:', error);
        }
    }

    const fetchQnAInfo = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER}/questions/list/${userPK}?page=1`);
            setQnaPageLength(response.data.totalPages);
            setQnaLength(response.data.totalQuestions);
        } catch (error) {
            console.error('댓글 요청 실패:', error);
        }
    }

    return (
        <div className={styles['main']}>
            <div className={styles['profile-box']}>
                <div className={styles['profile-image-wrap']}>
                    <img className={styles['profile-image']} src={(userInfo && userInfo.image)?
                        `${process.env.REACT_APP_SERVER}${userInfo.image}` :
                        "/images/basicProfile.png"}/>
                    <Link to="/mypage/editInfo">
                        <div className={styles['edit-button']}>
                            <Icon icon="uil:pen" className={styles['edit-button-icon']}/>
                        </div>
                    </Link>
                </div>
                <div className={styles['name']}>{userInfo ? userInfo.name : "로딩중"}님</div>
                <div className={styles['email']}>{userInfo ? userInfo.email : "로딩중"}</div>
                <div className={styles['users-active']} onClick={() => setActiveButtonIndex(0)}>
                    <div className={styles['active-label-box']}>
                        <img src={activeButtonIndex === 0 ? '/images/mypage-icon/my_qna_select.svg' : '/images/mypage-icon/my_qna.svg'} />
                        <div className={styles['active-label']} style={{ color: activeButtonIndex === 0 ? '#036CE7' : '#1C1C1E'}}>내가 작성한 Q&A</div>
                    </div>
                    <div className={styles['count']}>{qnaLength}개</div>
                </div>
                <div className={styles['users-active']} onClick={() => setActiveButtonIndex(1)}>
                    <div className={styles['active-label-box']}>
                        <img src={activeButtonIndex === 1 ? '/images/mypage-icon/my_comment_select.svg' : '/images/mypage-icon/my_comment.svg'} />
                        <div className={styles['active-label']} style={{ color: activeButtonIndex === 1 ? '#036CE7' : '#1C1C1E'}}>내가 쓴 댓글</div>
                    </div>
                    <div className={styles['count']}>{commentsLength}개</div>
                </div>
                <hr className={styles['divider']}/>
                <div className={styles['mention']}>자취 모르는게 있다면?</div>
                <button onClick={() => movePage('/articles')} className={styles['to-info']}>자취정보 확인하기</button>
                <button onClick={() => movePage('/qna')} className={styles['to-qna']}>Q&A 보러가기</button>
                <div className={styles['logs']}>
                    <div className={styles['log-item']} onClick={() => setShowLogoutAlert(true)}>로그아웃</div>
                    <div className={styles['log-item']} onClick={() => setShowCancelPopup(true)}>계정탈퇴</div>
                </div>
            </div>

            <div>
                {activeButtonIndex === null ? <></> :
                 activeButtonIndex ?
                    <MyComment commentsLength={commentsLength} commentPageLength={commentPageLength}/> :
                    <MyQnA qnaLength={qnaLength} qnaPageLength={qnaPageLength}/>}
            </div>

            { showLogoutAlert && <LogoutAlertBox setShowLogoutAlert={setShowLogoutAlert}/> }
            { showCancelPopup && <CancelAccount setShowCancelPopup={setShowCancelPopup}/> }
        </div>
    )
}

export default BasicProfileMain;
