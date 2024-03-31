import React from 'react';
import styles from "../../css/article/ArticleList.module.css";

function Article() {
    return (
        <div className={styles['article-container']}>
            <div className={styles['text-content']}>
                <div className={styles['main-contents']}>
                    <div className={styles['article-title']}>자취방 구하는 꿀팁!</div>
                    <div className={styles['article-date']}>2023.10.3</div>
                </div>
                <div className={styles['sub-contents']}>
                    <div className={styles['article-content']}>자취방을 구하는 가장 좋은 방법에 대해 알아볼게요. 자취는 부모님 혹은 보호자의 품을
                        떠나 독립하는것을 의미하는데요, 저는 23살때 처음 자취를 시작했었어요. 모르는것도 힘든 것도 너무 많았었던 자취이기에 다른 분들은 이런 고통을 겪지 않았으면
                        해서 포스팅 올려봅니다. 이렇게 자취에 대해 알아보았는데요 도움이 많이 되셨나요? 도움..
                    </div>
                    <div className={styles['article-likes']}>추천 16</div>
                </div>
            </div>
            <div className={styles['thumbnail']}></div>
        </div>
    );
}

export default Article;