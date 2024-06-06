import { Icon } from '@iconify/react';
import React, { useState } from "react";
import styles from "../../css/article/ArticleSearch.module.css";

function ArticleSearch({ handleOnChange }) {
    const [value, setValue] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            handleOnChange(value);
        }
    };

    const handleClick = () => {
        handleOnChange(value);
    };

    return (
        <div id={styles['main']}>
            <div className={styles['search-field-container']}>
                <input
                    type="text"
                    className={styles['search-field']}
                    placeholder="검색어를 입력해주세요. ex)자취방, 금액 등"
                    value={value}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                />
                <div className={styles['divider']}></div>
                <Icon icon="ri:search-line" className={styles['search-icon']} onClick={handleClick} />
            </div>
        </div>
    );
}

export default ArticleSearch;
