import React from 'react';
import styles from "../../css/article/ArticleList.module.css";

function Article({ index, content, title, thumbnail, likes, date }) {
    return (
        <div className={styles['article-container']}>
            <div className={styles['text-content']}>
                <div className={styles['main-contents']}>
                    <div className={styles['article-title']}>{title}</div>
                    <div className={styles['article-date']}>{date}</div>
                </div>
                <div className={styles['sub-contents']}>
                    <div className={styles['article-content']}>{content.replace(/<\/?[^>]+(>|$)/g, "").substr(0, 300)}
                    </div>
                    <div className={styles['article-likes']}>추천 {likes}</div>
                </div>
            </div>
            <div className={styles['thumbnail']}>
                <img src={thumbnail} className={styles['thumbnail-img']} />
            </div>
        </div>
    );
}

export default Article;