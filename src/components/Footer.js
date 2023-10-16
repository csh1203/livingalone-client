import React from "react";
import "../css/Style.css";
import styles from "../css/Footer.module.css";

function Footer() {
    return (
        <div className={styles["footerContainer"]}>
            <div className={styles["logo"]}>
                LOGO
            </div>
            <div className={styles["linkList"]}>
                <div className={styles["linkItem"]}>서비스 소개</div>
                <div className={styles["linkItem"]}>이용약관</div>
                <div className={styles["linkItem"]}>개인정보처리방침</div>
                <div className={styles["linkItem"]}>오류신고</div>
            </div>
            <hr className={styles["hr"]}></hr>
            <div className={styles["des"]}>Ⓒ 2023 홀로서기 Team project</div>
        </div>
    );
}

export default Footer;