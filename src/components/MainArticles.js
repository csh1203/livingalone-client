import React from 'react';
import '../css/Style.css';
import styles from '../css/MainArticles.module.css';
import { Icon } from '@iconify/react';

function MainArticles() {
    return (
        <div className={styles["articlesContainer"]}>
            <ArticleSection title="오늘도 핫하다 핫해 🔥" />
            <ArticleSection title="나만 알기 아쉬운 꿀팁 🍯" />
            <ArticleSection title="인테리어는 어떤게 좋을까? 🛏️" />
        </div>
    )
}

function ArticleSection({title}) {
    return (
        <div className={styles["articleSection"]}>
            <div className={styles["sectionHeader"]}>
                <div className={styles["sectionLabel"]}>  
                    {title}
                </div>
                <div className={styles["gotoMoreArticles"]}>
                    <div className={styles["gotoLabel"]}>더보기</div>
                    <Icon icon="iconamoon:arrow-right-2-light" />
                </div>
            </div>
            <div className={styles["articles"]}>
                <Article title="이걸 아직도 모른다고?" date="3시간 전"/>
                <Article title="이걸 아직도 모른다고?" date="3시간 전"/>
                <Article title="이걸 아직도 모른다고?" date="3시간 전"/>
                <Article title="이걸 아직도 모른다고?" date="3시간 전"/>
            </div>
        </div>
    );
}


function Article({thumbnail, title, date}) {
    return (
        <div className={styles["article"]}>
            <div className={styles["articleThumbNail"]}>{thumbnail}</div>
            <div className={styles["articleTitle"]}>{title}</div>
            <div className={styles["articleDate"]}>{date}</div>
        </div>
    );
}



export default MainArticles;