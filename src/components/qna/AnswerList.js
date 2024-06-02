import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import '../../css/common/Style.css';
import styles from '../../css/qna/AnswerList.module.css';
import AnswerItem from './AnswerItem';
import AnswerPosting from './AnswerPosting';

function AnswerList(props) {
    const userPK = useSelector(state => state.user.userPK);
    const { id } = useParams()
    const [answerList, setAnswerList] = useState([])
    const [isPosting, setIsPosting] = useState(false)
    const [content, setContent] = useState("")
    const movePage = useNavigate();

    useEffect(() => {
        fetchData()
        console.log(userPK)
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/answers/question/${id}`)
            console.log(response.data.data)
            setAnswerList(response.data.data)
        } catch (error) {
            console.error(error)
        }
    }

    const postAnswer = useCallback(async () => {
        try {
            const req = {
                user_pk: userPK,
                isAccepted: false,
                question_pk: id,
                answer: content
            }

            const response = await axios.post(`http://localhost:3001/answers`, req)
            console.log(response.data.message)
        } catch (error) {
            console.error(error)
        }
    }, [])

    return (
        <div className={styles['container']}>
            <div className={styles['top-section']}>
                <span className={styles['count']}>답변 3개</span>
                <div className={styles['buttons']}>
                    {
                        isPosting && <button className={styles['sec-button']} onClick={() => setIsPosting(false)}>답변취소</button>
                    }
                    {
                        isPosting ?
                            <button className={styles['sub-button']} onClick={postAnswer}>답변등록</button>
                            : <button className={styles['main-button']} onClick={() => setIsPosting(true)}>답변쓰기</button>
                    }

                </div>
            </div>
            {
                isPosting && <AnswerPosting handleOnChange={setContent} />
            }
            <div className={styles['answer-list']}>
                {
                    answerList.map(answer => <AnswerItem name={answer.user_pk} content={answer.answer} date={answer.createdAt.split('T')[0]} />)
                }
            </div>
        </div>
    )
}

export default AnswerList;