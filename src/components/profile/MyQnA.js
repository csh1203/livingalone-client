import React, { useState } from "react";
import '../../css/common/Style.css';
import styles from '../../css/profile/MyQnA.module.css'
import { Icon } from '@iconify/react';
import MyQnAItem from './MyQnAItem'

function MyQnA() {
    const [currentPage, setCurrentPage] = useState(1);

    const posts = [
        <MyQnAItem key={1} />,
        <MyQnAItem key={2} />,
        <MyQnAItem key={3} />,
        <MyQnAItem key={4} />,
        <MyQnAItem key={5} />,
        <MyQnAItem key={6} />,
        <MyQnAItem key={7} />,
        <MyQnAItem key={8} />,
        <MyQnAItem key={9} />,
        <MyQnAItem key={10} />,
        <MyQnAItem key={11} />,
      ];

    const indexOfLastPost = currentPage * 4;
    const indexOfFirstPost = indexOfLastPost - 4;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const pageLength = Math.ceil(posts.length / 4);
    const qnaLength = posts.length;

    const onClickPrevPage = () => currentPage === 1 ? setCurrentPage(pageLength) : setCurrentPage(currentPage - 1);
    const onClickNextPage = () => currentPage === pageLength ? setCurrentPage(1) : setCurrentPage(currentPage + 1);

    return(
        <div className={styles['qna-box']}>
            <div className={styles['qna-title-box']}>
                <div className={styles['qna-title']}>내가 작성한 Q&A</div>
                <div className={styles['qna-length']}>{qnaLength}</div>
            </div>

            <div className={styles['qna-list']}>
                {currentPosts.map((post, index) => (
                    <div key={index}>{post}</div>
                ))}
            </div>

            <div className={styles['qna-pages']}>
                <Icon icon="iconamoon:arrow-up-2-light" className={styles['prev-btn']} 
                    onClick={onClickPrevPage}/>
                <div className={styles['current-page']}>{currentPage}</div>
                <div className={styles['slash']}>/</div>
                <div className={styles['all-pages']}>{pageLength}</div>
                <Icon icon="iconamoon:arrow-up-2-light" className={styles['next-btn']}
                    onClick={onClickNextPage}/>
            </div>
        </div>
    )
    
}

export default MyQnA;