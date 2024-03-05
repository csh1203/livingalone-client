import React from "react";
import '../../css/common/Style.css';
import styles from '../../css/profile/BasicProfile.module.css'

function BasicProfileMain() {
    return (
        <div className={styles['main']}>
            <div className={styles['profile-box']}>
                <div className={styles['profile-image-wrap']}>
                    <img className={styles['profile-image']} src="/images/basicProfile.png"/>
                    <div className={styles['edit-button']}></div>
                </div>
                <div className={styles['name']}>홍길동님</div>
                <div className={styles['email']}>holostand@gmail.com</div>
                <div className={styles['users-active']}>
                    <div className={styles['active-label']}>내가 작성한 Q&A</div>
                    <div className={styles['count']}>1개</div>
                </div>
                <div className={styles['users-active']}>
                    <div className={styles['active-label']}>내가 작성한 Q&A</div>
                    <div className={styles['count']}>1개</div>
                </div>
                <hr className={styles['divider']}/>
                <div className={styles['mention']}>자취 모르는게 있다면?</div>
                <button className={styles['to-info']}>자취정보 확인하기</button>
                <button className={styles['to-qna']}>Q&A 보러가기</button>
                <div className={styles['logs']}>
                    <div className={styles['log-item']}>로그아웃</div>
                    <div className={styles['log-item']}>계정탈퇴</div>
                </div>
            </div>
        </div>
    )
}

export default BasicProfileMain;
