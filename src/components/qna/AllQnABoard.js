import React, { useEffect, useState } from "react";

// 스타일
import '../../css/common/Style.css';
import styles from '../../css/qna/AllQnABoard.module.css';

// 컴포넌트
import axios from "axios";
import { useLocation } from "react-router-dom";
import QnAItem from "./QnAItem";

function AllQnABoard() {
    const [data, setData] = useState([]);
    const [tag, setTag] = useState('전체 게시글');

    // 쿼리 스트링 가져오기
    const tagName = useLocation().search.split('=')[1];

    const setHeaderName = () => {
        if (tagName === undefined) return '전체 게시글'
        else if (tagName == 'cost') return '비용'
        else if (tagName == 'dwelling') return '주거'
        else if (tagName == 'interior') return '인테리어'
        else if (tagName == 'tip') return '생활꿀팁'
    }
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
                <h1>{setHeaderName()}</h1>
            </div>
            <div className={styles['board-section']}>
                <div className={styles['items-container']}>
                    {
                        data.map(item => (
                            <QnAItem
                                key={item.id}
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
