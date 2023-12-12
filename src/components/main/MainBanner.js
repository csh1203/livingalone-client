import React from "react";
import styles from '../../css/main/MainBanner.module.css';
import '../../css/common/Style.css';
import { Icon } from '@iconify/react';

function Main() {
    return (
        <div className={styles.banner}>
            <div className={styles["slogan-container"]}>
                <div className={styles["main-slogan"]}>
                    자취를 처음 시작하는 당신에게<br/>
                    오늘, 홀로서기에서
                </div>
                <div className={styles["sub-slogan"]}>자취가 처음인 당신을 위해 다양한 정보를 준비했어요!</div>
            </div>
인
        </div>
    );
}

export default Main;