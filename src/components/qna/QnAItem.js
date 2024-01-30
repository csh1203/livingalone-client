import React from "react";

import '../../css/common/Style.css'
import styles from '../../css/qna/QnAItem.module.css'

function QnAItem() {
    return (
        <div className={styles['item-container']}>
            <div className={styles['q-content']}>
                Q. 자취중인데 오늘 저녁 뭐먹을지 모르겠어요. 메뉴 추천좀요
            </div>
            <div className={styles['a-content']}>
                룰렛이라도 돌려서 줘봐요 아 진짜 귀찮아서 그러는게
            </div>
            <div className={styles['date']}>2023.12.24</div>
        </div>
    )
}

export default QnAItem;