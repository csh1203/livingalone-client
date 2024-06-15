import React from "react";
import { Link } from "react-router-dom";
import '../../css/common/Style.css';
import styles from '../../css/profile/MyQnAItem.module.css'
import { Icon } from '@iconify/react';

function MyQnAItem({ qna }) {
    return(
        <Link to={`/qna/post/${qna.question_pk}`}>
            <div className={styles['qna-item-box']}>
                <div className={styles['qna-item-title']}>
                    {qna.title}
                </div>
                <div className={styles['qna-item-content']}>
                    {qna.content.replace(/<[^>]*>/g, '')}
                </div>
                <div className={styles['qna-item-info']}>
                    <div className={styles['qna-answer-box']}>
                        <Icon icon="iconamoon:comment-dots-light" className={styles['qna-answer-icon']}/>
                        <div className={styles['qna-answer-cnt']}>{`답변 ${qna.comments}개`}</div>
                    </div>
                    <div className={styles['qna-date']}>{qna.createdAt.split('T')[0].replaceAll('-', '. ')}</div>
                </div>
            </div>
        </Link>
    )
}

export default MyQnAItem;