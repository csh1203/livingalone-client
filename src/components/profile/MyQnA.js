import React from "react";
import '../../css/common/Style.css';
import styles from '../../css/profile/MyQnA.module.css'
import { Icon } from '@iconify/react';
import MyQnAItem from './MyQnAItem'

function MyQnA() {
    const qnaLength = 1;

    return(
        <div className={styles['qna-box']}>
            <div className={styles['qna-title-box']}>
                <div className={styles['qna-title']}>내가 작성한 Q&A</div>
                <div className={styles['qna-length']}>{qnaLength}</div>
            </div>

            <div className={styles['qna-list']}>
                <MyQnAItem />
                <MyQnAItem />
                <MyQnAItem />
                <MyQnAItem />
            </div>
        </div>
    )
    
}

export default MyQnA;