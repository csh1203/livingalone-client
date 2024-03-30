import { Icon } from '@iconify/react';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import '../../css/common/Style.css';
import styles from '../../css/profile/BasicProfile.module.css';
import CancelAccount from "./CancelAccount";
import MyComment from "./MyComment";
import MyQnA from "./MyQnA";

function BasicProfileMain() {
    const movePage = useNavigate();
    
    const [ activeButtonIndex, setActiveButtonIndex ] = useState(null);
    const [ showLogoutAlert, setShowLogoutAlert ] = useState(false);
    const [ showCancelPopup, setShowCancelPopup ] = useState(false);

    const [userInfo, setUserInfo] = useState(null);
    const [usersComments, setUsersComments] = useState([]);
    const [userQnA, setUserQnA] = useState([]);

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
            const response = await axios.get(`http://127.0.0.1:3001/users/1`);
            setUserInfo(response.data);
        } catch (error) {
            console.error('사용자 정보 요청 실패:', error);
        }
    };

    const fetchCommentInfo = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:3001/answers/list/1`);
            setUsersComments(response.data.data)
        } catch (error) {
            console.error('댓글 요청 실패:', error);
        }
    }

    const fetchQnAInfo = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:3001/questions/1`);
            console.log(response.data.question);
            setUserQnA(response.data.data)
        } catch (error) {
            console.error('댓글 요청 실패:', error);
        }
    }

    return (
        <div className={styles['main']}>
            <div className={styles['profile-box']}>
                <div className={styles['profile-image-wrap']}>
                    <img className={styles['profile-image']} src="/images/basicProfile.png"/>
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
                    <div className={styles['count']}>1개</div>
                </div>
                <div className={styles['users-active']} onClick={() => setActiveButtonIndex(1)}>
                    <div className={styles['active-label-box']}>
                        <img src={activeButtonIndex === 1 ? '/images/mypage-icon/my_comment_select.svg' : '/images/mypage-icon/my_comment.svg'} />
                        <div className={styles['active-label']} style={{ color: activeButtonIndex === 1 ? '#036CE7' : '#1C1C1E'}}>내가 쓴 댓글</div>
                    </div>
                    <div className={styles['count']}>{usersComments.length}개</div>
                </div>
                <hr className={styles['divider']}/>
                <div className={styles['mention']}>자취 모르는게 있다면?</div>
                <button className={styles['to-info']}>자취정보 확인하기</button>
                <button className={styles['to-qna']}>Q&A 보러가기</button>
                <div className={styles['logs']}>
                    <div className={styles['log-item']} onClick={() => setShowLogoutAlert(true)}>로그아웃</div>
                    <div className={styles['log-item']} onClick={() => setShowCancelPopup(true)}>계정탈퇴</div>
                </div>
            </div>

            <div>
                {activeButtonIndex === null ? <></> : activeButtonIndex ? <MyComment /> : <MyQnA />}
            </div>

            { showLogoutAlert && <LogoutAlertBox setShowLogoutAlert={setShowLogoutAlert}/> }
            { showCancelPopup && <CancelAccount setShowCancelPopup={setShowCancelPopup}/> }
        </div>
    )
}

function LogoutAlertBox ({ setShowLogoutAlert }) {
    return (
        <div className={styles['alert-shadow']}>
            <div className={styles['alert-box']}>
                <div className={styles['alert-title']}>로그아웃 하시겠습니까?</div>
                <div className={styles['alert-comment']}>
                    홀로서기 서비스를 이용하실려면 로그인이 필요합니다. <br/>
                    정말 로그아웃 하시겠습니까?
                </div>
                <div className={styles['alert-btns']}>
                    <div className={styles['alert-btn-no']} onClick={() => setShowLogoutAlert(false)}>아니오</div>
                    <Link to={"/login"}>
                        <div className={styles['alert-btn-yes']}>네</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BasicProfileMain;
