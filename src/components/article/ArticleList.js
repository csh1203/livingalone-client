import { Icon } from '@iconify/react';
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "../../css/article/ArticleList.module.css";
import articleList from '../../data/article';
import Article from './Article';

function ArticleList({ keyword }) {

    const [searchParams, setSearchParams] = useSearchParams();

    const [selectedCategory, setSelectedCategory] = useState(1);
    const [selectedPage, setSelectedPage] = useState(parseInt(searchParams.get('page')));

    // 카테고리 클릭 이벤트 리스너
    const handleCategoryClick = index => {
        setSelectedCategory(index);
    };

    // 페이지 클릭 이벤트 리스너
    const handlePageClick = index => {
        setSelectedPage(index);
        window.location.replace(`/articles?page=${index}`);
        setSelectedPage(index);
    }

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
            {/* 검색 필터 */}
            <div className={styles['filter-container']}>
                {/* <div className={styles['filter-item']}>
                    <div className={styles['filter-text']}>검색 필터</div>
                    <Icon icon="bi:filter" className={styles['filter-icon']} /> 
                </div> */}
            </div>
            {/*글 목록*/}
            <div className={styles['article-list']}>
                {
                    articleList
                        .filter(article => {
                            if (selectedCategory == 1) return article.tag == '주거'
                            else if (selectedCategory == 2) return article.tag == '비용'
                            else if (selectedCategory == 3) return article.tag == '인테리어'
                            else return article.tag == '기타'
                        })
                        .filter(article => {
                            if (keyword === "") return true;
                            else {
                                const regex = new RegExp(keyword, 'i');
                                return regex.test(article.title);
                            }
                        })
                        .map((article, index) =>
                            <Article
                                key={index}
                                index={article.id}
                                content={article.content}
                                title={article.title}
                                thumbnail={article.thumbnail} l
                                likes={article.likes}
                                date={article.date} />)
                }
            </div>
            <div className={styles['pagination-container']}>
                <div className={styles['icons']}>
                    <Icon icon="material-symbols:keyboard-double-arrow-left-rounded"
                        className={styles['pagination-icon']} />
                    <Icon icon="iconamoon:arrow-left-2-light" className={styles['pagination-icon']} />
                </div>
                <div
                    className={styles['page-count']}
                    onClick={() => handlePageClick(1)}
                    style={{ color: selectedPage === 1 ? "rgba(3, 108, 231, 1)" : "#5C5C5C" }}>
                    1
                </div>

                <div className={styles['icons']}>
                    <Icon icon="iconamoon:arrow-right-2-light" className={styles['pagination-icon']} />
                    <Icon icon="material-symbols:keyboard-double-arrow-right-rounded"
                        className={styles['pagination-icon']} />
                </div>
            </div>
        </div>
    );
}

export default ArticleList;