import React, { useEffect, useState } from "react";

// 스타일
import '../../css/common/Style.css';
import styles from '../../css/qna/AllQnABoard.module.css';

// 컴포넌트
import axios from "axios";
import QnAItem from "./QnAItem";

function AllQnABoard() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/questions/list`);
            setData(response.data.questions);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles['main']}>
            <div className={styles['title-section']}>
                <h6>Q&A게시판</h6>
                <h1>전체 게시글</h1>
            </div>
            <div className={styles['board-section']}>
                <div className={styles['items-container']}>
                    {
                        data.map(item => (
                            <QnAItem
                                id={item.id}
                                title={item.title}
                                content={item.content}
                                createdAt={item.createdAt.split('T')[0].split('-').join('.')}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default AllQnABoard;
