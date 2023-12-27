import React from "react";
import styles from "../../css/article/ArticleSearch.module.css"
import { Icon } from '@iconify/react';
function ArticleSearch() {
    return (
        <div id={styles['main']}>
            <div className={styles['search-field-container']}>
                <input
                    type="text"
                    className={styles['search-field']}
                    placeholder={"검색어를 입력해주세요. ex)자취방, 금액 등"}
                />
                <div className={styles['divider']}></div>
                <Icon icon="ri:search-line" className={styles['search-icon']}/>
            </div>
        </div>
    );
}

export default ArticleSearch;