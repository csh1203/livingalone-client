import React, {useEffect} from "react";
import styles from '../../css/common/Nav.module.css';
import '../../css/common/Style.css';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

function Nav() {
    const userPK = useSelector(state => state.user.userPK);

    return (
        <div className={styles.nav}>
            <Link to="/">
                <div className={styles['nav-logo']}>
                    <img className={styles['icon-logo']}
                        src="/images/icon/icon_logo.png" alt="" />
                    <img className={styles['text-logo']}
                        src="/images/icon/text_logo.png" alt="" />
                </div>
            </Link>
            <div className={styles['menu-list']}>
                <ul className={styles['nav-list']}>
                    <Link to="/articles">
                        <li className={styles['nav-item']}>자취 정보</li>
                    </Link>
                    <Link to="/CostCalculator">
                        <li className={styles['nav-item']}>비용 계산기</li>
                    </Link>
                    <Link to="/qna">
                        <li className={styles['nav-item']}>Q&A</li>
                    </Link>
                </ul>
                <div className={styles['icons']}>
                    <Link to={ userPK ? "/mypage" : "/login"}>
                        <Icon icon="icon-park-outline:people" className={styles['user-icon']} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Nav;
