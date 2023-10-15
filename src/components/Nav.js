import React from "react";
import styles from '../css/Nav.module.css';
import '../css/Style.css';
import { Icon } from '@iconify/react';
// TODO: Link로 navItem마다 경로 설정
function Main() {
    return (
        <div className={styles.nav}>
            <div className={styles.navLogo}>LOGO</div>
                <div className={styles.menuList}>
                    <ul className={styles.navList}>
                        <li className={styles['navItem']}>자취 정보</li>
                        <li className={styles['navItem']}>자취력 테스트</li>
                        <li className={styles['navItem']}>비용 계산기</li>
                        <li className={styles['navItem']}>게시글</li>
                    </ul>
                <div className={styles.icons}>
                    <Icon icon="akar-icons:bell" /> 
                    <Icon icon="icon-park-outline:people" />
                </div>
            </div>
        </div>
    );
}

export default Main;