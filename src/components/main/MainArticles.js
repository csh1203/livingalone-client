import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/common/Style.css';
import styles from '../../css/main/MainArticles.module.css';
import articleList from '../../data/article';

function MainArticles() {
    return (
        <div className={styles["articles-container"]}>
            <ArticleSection title="오늘도 핫하다 핫해 🔥" sort="hot" />
            <ArticleSection title="나만 알기 아쉬운 꿀팁 🍯" sort="주거" />
            <ArticleSection title="인테리어는 어떤게 좋을까? 🛏️" sort="interior" />
        </div>
    )
}

function ArticleSection({ title, sort }) {
    const hotArticle = articleList.sort((a, b) => b.likes - a.likes)

    return (
        <div className={styles["article-section"]}>
            <div className={styles["section-header"]}>
                <div className={styles["section-label"]}>
                    {title}
                </div>
                <div className={styles["goto-more-articles"]}>
                    <Link to="/articles" className={styles["goto-label"]}>더보기</Link>
                    <Icon icon="iconamoon:arrow-right-2-light" />
                </div>
            </div>
            <div className={styles["articles"]}>
                {sort === "hot"
                    ? hotArticle.slice(0, 4).map(article => (
                        <Article key={article.id} title={article.title} thumbnail={article.thumbnail} date={article.date} />
                    ))
                    : sort === '주거'
                        ? hotArticle
                            .filter(article => article.tag === '주거')
                            .map(article => (
                                <Article key={article.id} title={article.title} thumbnail={article.thumbnail} date={article.date} />
                            ))
                        : hotArticle
                            .filter(article => article.tag === '인테리어')
                            .map(article => (
                                <Article key={article.id} title={article.title} thumbnail={article.thumbnail} date={article.date} />
                            ))
                }
            </div>
        </div>
    );
}

function Article({ thumbnail, title, date }) {
    return (
        <div className={styles["article"]}>
            <img src={thumbnail} className={styles["article-thumbnail"]} />
            <div className={styles["article-title"]}>{title.substr(0, 15) + '...'}</div>
            <div className={styles["article-date"]}>{date}</div>
        </div>
    );
}

export default MainArticles;
