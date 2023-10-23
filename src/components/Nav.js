import React from "react";
import styles from '../css/Nav.module.css';
import '../css/Style.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage'; // 로그인 페이지 컴포넌트

// TODO: Link로 navItem마다 경로 설정
function Nav() {
    return (
        <div className={styles.nav}>
            <div className={styles['nav-logo']}>LOGO</div>
                <div className={styles['menu-list']}>
                    <ul className={styles['nav-list']}>
                        <li className={styles['nav-item']}>자취 정보</li>
                        <li className={styles['nav-item']}>자취력 테스트</li>
                        <li className={styles['nav-item']}>비용 계산기</li>
                        <li className={styles['nav-item']}>게시글</li>
                    </ul>
                <div className={styles['icons']}>
                    <Icon icon="akar-icons:bell" /> 
                    <Link to="/login"> {/* 이동할 경로 지정 */}
                            <Icon icon="icon-park-outline:people" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;