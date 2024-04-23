import React from "react";

import DOMPurify from "dompurify";
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
            <div className={styles['a-content']} dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(String(content.substr(0, 50))),
            }}
            />
            <div className={styles['date']}>{createdAt}</div>
        </div >
    )
}

export default QnAItem;