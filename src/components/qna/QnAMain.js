import { Icon } from '@iconify/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../css/common/Style.css';
import styles from '../../css/qna/QnAMain.module.css';

function QnAMain() {

    const movePage = useNavigate();

    return (
        <div className={styles.main}>
            <div className={styles.titles}>
                <h6 className={styles['sub-title']}>궁금한 질문이 있으신가요?</h6>
                <h1 className={styles['main-title']}>Q&A 게시판에 올라온 고민들을 확인해 보세요</h1>
            </div>
            <div className={styles['categories-container']}>
                <div className={styles['category-container']} id={styles.all}>
                    <div className={styles['icon']}>📑</div>
                    <div className={styles['category-sub']}>나와 비슷한 고민이 있을까?</div>
                    <div className={styles['category-main']}>전체 Q&A<br />게시글 확인하기</div>
                    <Link to={"/qna/all"} className={styles['go-category']}>게시글 보러가기</Link>
                </div>
                <div onClick={() => movePage('/qna/all?tag=dwelling')} className={styles['category-container']} id={styles.home}>
                    <div className={styles['icon']}>🏠</div>
                    <div className={styles['category-sub']}>나와 비슷한 고민이 있을까?</div>
                    <div className={styles['category-main']}>주거</div>
                </div>
                <div onClick={() => movePage('/qna/all?tag=cost')} className={styles['category-container']} id={styles.price}>
                    <div className={styles['icon']}>💵</div>
                    <div className={styles['category-sub']}>나와 비슷한 고민이 있을까?</div>
                    <div className={styles['category-main']}>비용</div>
                </div>
                <div onClick={() => movePage('/qna/all?tag=interior')} className={styles['category-container']} id={styles.deco}>
                    <div className={styles['icon']}>🛏</div>
                    <div className={styles['category-sub']}>나와 비슷한 고민이 있을까?</div>
                    <div className={styles['category-main']}>인테리어</div>
                </div>
                <div onClick={() => movePage('/qna/all?tag=tip')} className={styles['category-container']} id={styles.tip}>
                    <div className={styles['icon']}>🍯</div>
                    <div className={styles['category-sub']}>나와 비슷한 고민이 있을까?</div>
                    <div className={styles['category-main']}>생활꿀팁</div>
                </div>
            </div>
            <Link className={styles['go-write']} to={'/qna/write'}>
                <Icon className={styles['pen-icon']} icon="ri:ball-pen-fill" />
                <div>Q&A 작성</div>
            </Link>
        </div>
    );
}

export default QnAMain;