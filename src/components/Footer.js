import React from "react";
import "../css/Style.css";
import styles from "../css/Footer.module.css";

function Footer() {
    return (
        <div className={styles["footer-container"]}>
            <div className={styles["logo"]}>
                LOGO
            </div>
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