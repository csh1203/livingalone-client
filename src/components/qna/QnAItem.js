import React from "react";

import { useNavigate } from "react-router-dom";
import '../../css/common/Style.css';
import styles from '../../css/qna/QnAItem.module.css';

function QnAItem({ id, title, content, createdAt }) {

    const movePage = useNavigate();

    return (
        <div onClick={() => movePage(`/qna/post/${id}`)} className={styles['item-container']}>
            <div className={styles['q-content']}>
                {title}
            </div>
            <div className={styles['a-content']}>{content.replace(/<\/?[^>]+(>|$)/g, "").substr(0, 50)}</div>
            <div className={styles['date']}>{createdAt}</div>
        </div >
    )
}

export default QnAItem;