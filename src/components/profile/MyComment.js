import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import '../../css/common/Style.css';
import styles from '../../css/profile/MyComment.module.css'
import { Icon } from '@iconify/react';
import MyCommentItem from "./MyCommentItem"

function MyComment({ commentsLength, commentPageLength }) {
    const [ usersComments, setUsersComments ] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const userPK = useSelector(state => state.user.userPK);

    useEffect(() => {
        getComments();
    }, [currentPage])

    const getComments = async() => {
        try{
            const response = await axios.get(`${process.env.REACT_APP_SERVER}/answers/list/${userPK}?page=${currentPage}`);
            console.log(response.data.data);
            setUsersComments(response.data.data);
        }catch(err){
            console.error(err);
        }
    }

    return(
        <div className={styles['comment-box']}>
            <div className={styles['comment-title-box']}>
                <div className={styles['comment-title']}>내가 쓴 댓글</div>
                <div className={styles['comment-length']}>{commentsLength}</div>
            </div>

            <div className={styles['comment-list']}>
                {
                    usersComments.map(comment => <MyCommentItem comment={comment}/>)    
                }
            </div>

            <div className={styles['comment-pages']}>
                <Icon icon="iconamoon:arrow-up-2-light" className={styles['prev-btn']} 
                    onClick={() => {currentPage > 1 && setCurrentPage(currentPage - 1)}}/>
                <div className={styles['current-page']}>{currentPage}</div>
                <div className={styles['slash']}>/</div>
                <div className={styles['all-pages']}>{commentPageLength}</div>
                <Icon icon="iconamoon:arrow-up-2-light" className={styles['next-btn']}
                    onClick={() => {currentPage < commentPageLength && setCurrentPage(currentPage + 1)}}/>
            </div>
        </div>
    )
}

export default MyComment;