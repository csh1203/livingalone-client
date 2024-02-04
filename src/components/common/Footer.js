import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../../css/common/Style.css";
import styles from "../../css/common/Footer.module.css";

function Footer() {
    return (
        <div className={styles["footer-container"]}>
            <Link to="/">
                <div className={styles['nav-logo']}>
                    <img className={styles['icon-logo']}
                        src="/images/icon/icon_logo.png" alt="" />
                    <img className={styles['text-logo']}
                        src="/images/icon/text_logo.png" alt="" />
                </div>
            </Link>
            <div className={styles["link-list"]}>
                <div className={styles["link-item"]}>서비스 소개</div>
                <div className={styles["link-item"]}>이용약관</div>
                <div className={styles["link-item"]}>개인정보처리방침</div>
                <div className={styles["link-item"]}>오류신고</div>
            </div>
            <hr className={styles["hr"]}></hr>
            <div className={styles["des"]}>Ⓒ 2023 홀로서기 Team project</div>
        </div>
    );
}

export default Footer;