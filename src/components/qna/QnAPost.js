import axios from 'axios';
import DOMPurify from 'dompurify';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../css/common/Style.css';
import styles from '../../css/qna/QnAPost.module.css';

function QnAPost() {
    const { id } = useParams();
    console.log(id);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true); // 추가: 로딩 상태 추가

    useEffect(() => {
        fetchData();
        addViewCount();
    }, [id]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/questions/${id}`);
            setPost(response.data.question);
            setLoading(false); // 추가: 데이터 로딩이 끝났으므로 로딩 상태 변경
        } catch (error) {
            console.error(error);
        }
    };

    const addViewCount = useCallback(async () => {
        try {
            const response = await axios.post(`http://localhost:3001/questions/view/${id}`);
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }, [])

    // 추가: 로딩 중일 때 로딩 상태를 표시
    if (loading) {
        return <div>Loading...</div>;
    }

    // 데이터가 있을 때만 렌더링
    return (
        <div className={styles['container']}>
            <div className={styles['title-container']}>
                <span className={styles['q']}>Q.</span>
                <span className={styles['title']}>{post.title}</span>
            </div>

            <div className={styles['content-container']} dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(String(post.content)),
            }}>
            </div>

            <div className={styles['info-container']}>
                <span className={styles['user-name']}>{post.user_id}</span>
                <div className={styles['date-and-views']}>
                    <span className={styles['date']}>{post.createdAt.split('T')[0].split('-').join('.')}</span>
                    <span className={styles['views']}>{post.views}회</span>
                </div>
            </div>
        </div>
    );
}

export default QnAPost;
