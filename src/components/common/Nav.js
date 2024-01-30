import React from "react";
import styles from '../../css/common/Nav.module.css';
import '../../css/common/Style.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className={styles.nav}>
            <Link to="/">
                <div className={styles['nav-logo']}>
                    <img className={styles['icon-logo']}
                        src="./images/icon/icon_logo.png" alt="" />
                    <img className={styles['text-logo']}
                        src="./images/icon/text_logo.png" alt="" />
                </div>
            </Link>
            <div className={styles['menu-list']}>
                <ul className={styles['nav-list']}>
                    <Link to="/articles">
                        <li className={styles['nav-item']}>자취 정보</li>
                    </Link>
                    {/*<li className={styles['nav-item']}>자취력 테스트</li>*/}
                    <Link to="/CostCalculator">
                        <li className={styles['nav-item']}>비용 계산기</li>
                    </Link>
                    <Link to="/qna">
                        <li className={styles['nav-item']}>Q&A</li>
                    </Link>
                </ul>
                <div className={styles['icons']}>
                    <Link to="/login">
                        <Icon icon="icon-park-outline:people" className={styles['user-icon']} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;