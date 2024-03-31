import React from "react";

import '../../css/common/Style.css';
import styles from '../../css/qna/QnAItem.module.css';

function QnAItem({ id, title, content, createdAt }) {
    return (
        <div className={styles['item-container']}>
            <div className={styles['q-content']}>
                {title}
            </div>
            <div className={styles['a-content']}>
                {content}
            </div>
            <div className={styles['date']}>{createdAt}</div>
        </div>
    )
}

export default QnAItem;