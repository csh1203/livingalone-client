import React from "react";
import { Link } from "react-router-dom";
import '../../css/common/Style.css';
import styles from '../../css/profile/MyCommentItem.module.css'
import { Icon } from '@iconify/react';

function MyCommentItem({ comment }) {
    console.log(comment);
    return(
        <Link to={`/qna/post`}>
            <div className={styles['comment-item-box']}>
                <div className={styles['comment-item-title']}>
                    {comment.answer.replace(/<[^>]*>/g, '')}
                </div>
                <div className={styles['comment-item-date']}>
                    {comment.updatedAt.split('T')[0].replaceAll('-', '. ')}
                </div>
                <div className={styles['comment-item-post']}>
                    <div className={styles['post-title']}>{`“${comment.questionTitle}”`}</div>
                    <div className={styles['post-comments']}>[4]</div>
                </div>
            </div>
        </Link>
    )
}

export default MyCommentItem;