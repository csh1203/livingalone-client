import React, {useState} from "react";
import styles from "../../css/article/ArticleList.module.css"
import {Icon} from '@iconify/react';

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
function ArticleList() {

    const [selectedCategory, setSelectedCategory] = useState(1);

    // 카테고리 클릭 이벤트 리스너
    const handleCategoryClick = index => {
        setSelectedCategory(index);
    };

    return (
        <div id={styles['main']}>
            {/*카테고리*/}
            <div className={styles['category-container']}>
                {/*줄 맞춤을 위한 div*/}
                <div className={`${styles['category-item']} ${styles['no-category']}`}></div>
                <div
                    className={styles['category-item']}
                    onClick={() => handleCategoryClick(1)}
                    style={{
                        color: selectedCategory === 1 ? "rgba(3, 108, 231, 1)" : "#000",
                        borderBottomColor: selectedCategory === 1 ? "rgba(3, 108, 231, 1)" : "rgba(214, 214, 214, 1)"
                    }}
                >
                    주거
                </div>
                <div
                    className={styles['category-item']}
                    onClick={() => handleCategoryClick(2)}
                    style={{
                        color: selectedCategory === 2 ? "rgba(3, 108, 231, 1)" : "#000",
                        borderColor: selectedCategory === 2 ? "rgba(3, 108, 231, 1)" : "rgba(214, 214, 214, 1)"
                    }}
                >
                    비용
                </div>
                <div
                    className={styles['category-item']}
                    onClick={() => handleCategoryClick(3)}
                    style={{
                        color: selectedCategory === 3 ? "rgba(3, 108, 231, 1)" : "#000",
                        borderBottomColor: selectedCategory === 3 ? "rgba(3, 108, 231, 1)" : "rgba(214, 214, 214, 1)"
                    }}
                >
                    인테리어
                </div>
                <div
                    className={styles['category-item']}
                    onClick={() => handleCategoryClick(4)}
                    style={{
                        color: selectedCategory === 4 ? "rgba(3, 108, 231, 1)" : "#000",
                        borderBottomColor: selectedCategory === 4 ? "rgba(3, 108, 231, 1)" : "rgba(214, 214, 214, 1)"
                    }}
                >
                    기타
                </div>
                {/*줄 맞춤을 위한 div*/}
                <div className={`${styles['category-item']} ${styles['no-category']}`}></div>
            </div>
            {/*검색 필터*/}
            <div className={styles['filter-container']}>
                <div className={styles['filter-item']}>
                    <div className={styles['filter-text']}>검색 필터</div>
                    <Icon icon="bi:filter" className={styles['filter-icon']}/>
                </div>
            </div>
            {/*글 목록*/}
            <div className={styles['article-list']}>
                <Article/>
                <Article/>
                <Article/>
                <Article/>
            </div>
            <div className={styles['pagination-container']}>
                <div className={styles['icons']}>
                    <Icon icon="material-symbols:keyboard-double-arrow-left-rounded" className={styles['pagination-icon']}/>
                    <Icon icon="iconamoon:arrow-left-2-light" className={styles['pagination-icon']}/>
                </div>
                <div className={styles['page-count']}>1</div>
                <div className={styles['page-count']}>2</div>
                <div className={styles['page-count']}>3</div>
                <div className={styles['page-count']}>4</div>
                <div className={styles['page-count']}>5</div>
                <div className={styles['page-count']}>6</div>
                <div className={styles['page-count']}>7</div>
                <div className={styles['icons']}>
                    <Icon icon="iconamoon:arrow-right-2-light" className={styles['pagination-icon']}/>
                    <Icon icon="material-symbols:keyboard-double-arrow-right-rounded" className={styles['pagination-icon']}/>
                </div>
            </div>
        </div>
    );
}

export default ArticleList;