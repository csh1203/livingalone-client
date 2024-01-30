import React from "react";

// 스타일
import '../../css/common/Style.css';
import styles from '../../css/qna/AllQnABoard.module.css'

// 컴포넌트
import QnAItem from "./QnAItem";

function AllQnABoard () {
    return (
        <div className={styles['main']}>
            <div className={styles['title-section']}>
                <h6>Q&A게시판</h6>
                <h1>전체 게시글</h1>
            </div>
            <div className={styles['board-section']}>
                <div className={styles['items-container']}>
                    <QnAItem />
                    <QnAItem />
                    <QnAItem />
                    <QnAItem />
                    <QnAItem />
                </div>
                
            </div>
        </div>
    )
}

export default AllQnABoard;
