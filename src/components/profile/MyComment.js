import React, { useState } from "react";
import '../../css/common/Style.css';
import styles from '../../css/profile/MyComment.module.css'
import { Icon } from '@iconify/react';
import MyCommentItem from "./MyCommentItem"

function MyComment() {
    const [currentPage, setCurrentPage] = useState(1);

    const posts = [
        <MyCommentItem key={1} />,
        <MyCommentItem key={2} />,
        <MyCommentItem key={3} />,
        <MyCommentItem key={4} />,
        <MyCommentItem key={5} />,
        <MyCommentItem key={6} />,
        <MyCommentItem key={7} />,
        <MyCommentItem key={8} />,
        <MyCommentItem key={9} />,
        <MyCommentItem key={10} />,
        <MyCommentItem key={11} />,
    ];

    const postsPerPage = 6;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const pageLength = Math.ceil(posts.length / postsPerPage);
    const commentLength = posts.length;

    const onClickPrevPage = () => currentPage === 1 ? setCurrentPage(pageLength) : setCurrentPage(currentPage - 1);
    const onClickNextPage = () => currentPage === pageLength ? setCurrentPage(1) : setCurrentPage(currentPage + 1);

    return(
        <div className={styles['comment-box']}>
            <div className={styles['comment-title-box']}>
                <div className={styles['comment-title']}>내가 쓴 댓글</div>
                <div className={styles['comment-length']}>{commentLength}</div>
            </div>

            <div className={styles['comment-list']}>
                {currentPosts.map((post, index) => (
                    <div key={index}>{post}</div>
                ))}
            </div>

            <div className={styles['comment-pages']}>
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

export default MyComment;