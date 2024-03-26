import React from "react";
import '../../css/common/Style.css';
import styles from '../../css/qna/CreateQnAForm.module.css';

function QnATags() {
    return (
        <div className={styles['tags']}>
            <div className={styles['tag-item']}>
                <div className={styles['tag-number']}>1</div>
                <div className={styles['tag-content']}>비용</div>
            </div>
            <div className={styles['tag-item']}>
                <div className={styles['tag-number']}>2</div>
                <div className={styles['tag-content']}>생활꿀팁</div>
            </div>
            <div className={styles['tag-item']}>
                <div className={styles['tag-number']}>3</div>
                <div className={styles['tag-content']}>인테리어</div>
            </div>
            <div className={styles['tag-item']}>
                <div className={styles['tag-number']}>4</div>
                <div className={styles['tag-content']}>주거</div>
            </div>
        </div>
    )
}

export default QnATags;