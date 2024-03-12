import React from "react";
import '../../css/common/Style.css';
import styles from '../../css/profile/MyQnAItem.module.css'
import { Icon } from '@iconify/react';

function MyQnAItem() {
    return(
        <div className={styles['qna-item-box']}>
            <div className={styles['qna-item-title']}>
                Q. 자취중인데 오늘 저녁 뭐 먹을지 모르겠어요. 메뉴 추천좀요
            </div>
            <div className={styles['qna-item-content']}>
                룰렛이라도 돌려서 줘봐요 아 진짜 귀찮아서 그러는게 아니라, 그냥 뭔가 선택해야할 순간이 오면 머리가 멍해지고 금방 몇 시간이 훌쩍 지지지지지베베베ㅔㅂ베ㅔ베베베ㅔㅂ베
            </div>
            <div className={styles['qna-item-info']}>
                <div className={styles['qna-answer-box']}>
                    <Icon icon="iconamoon:comment-dots-light" className={styles['qna-answer-icon']}/>
                    <div className={styles['qna-answer-cnt']}>답변 2개</div>
                </div>
                <div className={styles['qna-date']}>2023. 12. 24</div>
            </div>
        </div>
    )
}

export default MyQnAItem;