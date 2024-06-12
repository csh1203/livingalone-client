import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import '../../css/common/Style.css';
import styles from '../../css/profile/MyQnA.module.css'
import { Icon } from '@iconify/react';
import MyQnAItem from './MyQnAItem'

function MyQnA({ qnaLength, qnaPageLength }) {
    const [ userQnA, setUserQnA ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    
    const userPK = useSelector(state => state.user.userPK);

    useEffect(() => {
        getQnA();
    }, [currentPage])

    const getQnA = async() => {
        try{
            const response = await axios.get(`${process.env.REACT_APP_SERVER}/questions/list/${userPK}?page=${currentPage}`);
            console.log(response.data.data);
            setUserQnA(response.data.data);
        }catch(err){
            console.error(err);
        }
    }

    return(
        <div className={styles['qna-box']}>
            <div className={styles['qna-title-box']}>
                <div className={styles['qna-title']}>내가 작성한 Q&A</div>
                <div className={styles['qna-length']}>{qnaLength}</div>
            </div>

            <div className={styles['qna-list']}>
                {
                    userQnA.map(qna => <MyQnAItem qna={qna}/>)
                }
            </div>

            <div className={styles['qna-pages']}>
                <Icon icon="iconamoon:arrow-up-2-light" className={styles['prev-btn']} 
                    onClick={() => {currentPage > 1 && setCurrentPage(currentPage - 1)}}/>
                <div className={styles['current-page']}>{currentPage}</div>
                <div className={styles['slash']}>/</div>
                <div className={styles['all-pages']}>{qnaPageLength}</div>
                <Icon icon="iconamoon:arrow-up-2-light" className={styles['next-btn']}
                    onClick={() => {currentPage < qnaPageLength && setCurrentPage(currentPage + 1)}}/>
            </div>
        </div>
    )
    
}

export default MyQnA;