import React, { useEffect, useState } from "react";

// 스타일
import '../../css/common/Style.css';
import styles from '../../css/qna/AllQnABoard.module.css';

// 컴포넌트
import axios from "axios";
import { useLocation } from "react-router-dom";
import Pagenation from "../common/Pagination";
import QnAItem from "./QnAItem";

function AllQnABoard() {
    const [data, setData] = useState([]);
    const [pagination, setPagination] = useState(null);
    const [tag, setTag] = useState('전체 게시글');
    const [page, setPage] = useState(1);

    // 쿼리 스트링 가져오기
    const tagName = useLocation().search.split('=')[1];

    // TODO: 태그 편집하는거 하기
    const tagging = () => {
        if (tagName === 'cost') {
            setTag('비용')
        } else if (tagName === 'dwelling') {
            setTag('주거')
        } else if (tagName === 'interior') {
            setTag('인테리어')
        } else if (tagName === 'tip') {
            setTag('생활꿀팁')
        }
    }

    useEffect(() => {
        tagging();
        fetchData();
    }, [page, tag])

    const fetchData = async () => {
        try {
            let url = `${process.env.REACT_APP_SERVER}/questions/list/page?page=${page}`;
            if (tag !== '전체 게시글') {
                url += `&tag=${tag}`;
            }
            const response = await axios.get(url);
            setData(response.data.questions);
            setPagination(response.data.pagination);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles['main']}>
            <div className={styles['title-section']}>
                <h6>Q&A게시판</h6>
                <h1>{tag}</h1>
            </div>
            <div className={styles['board-section']}>
                <div className={styles['items-container']}>
                    {
                        data
                            .filter(item => tag === '전체 게시글' || tag === item.tag)
                            .map(item => (
                                <QnAItem
                                    key={item.question_pk}
                                    id={item.question_pk}
                                    title={item.title}
                                    content={item.content}
                                    createdAt={item.createdAt.split('T')[0].split('-').join('.')}
                                />
                            ))
                    }
                </div>
                {
                    pagination
                        ?
                        <Pagenation handleOnClick={setPage} currentPage={pagination.currentPage} totalPage={pagination.totalPages} />
                        : 'loading'
                }
            </div>
            <img className={styles['circle']} src="/images/circle.png" />
        </div>
    )
}

export default AllQnABoard;
