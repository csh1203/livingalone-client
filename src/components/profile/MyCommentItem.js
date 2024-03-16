import React from "react";
import '../../css/common/Style.css';
import styles from '../../css/profile/MyCommentItem.module.css'
import { Icon } from '@iconify/react';

function MyCommentItem() {
    return(
        <div className={styles['comment-item-box']}>
            <div className={styles['comment-item-title']}>
                저 오늘 저녁에 짜장면 먹었는데, 혹시 oo반점어떠세요? 여기 진짜 사장님이 친절하시고 음식 양도 푸짐해요
            </div>
            <div className={styles['comment-item-date']}>2023. 04. 12</div>
            <div className={styles['comment-item-post']}>
                <div className={styles['post-title']}>“ 오늘 저녁 뭐 먹을까요? 추천해주세요”</div>
                <div className={styles['post-comments']}>[4]</div>
            </div>
        </div>
    )
}

export default MyCommentItem;