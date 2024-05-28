import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../css/common/Style.css';
import styles from '../../css/qna/AnswerList.module.css';
import AnswerItem from './AnswerItem';

function AnswerList(props) {

    const [answerList, setAnswerList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/answers/list/1`)
            console.log(response.data.data)
            setAnswerList(response.data.data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className={styles['container']}>
            <div className={styles['top-section']}>
                <span className={styles['count']}>답변 3개</span>
                <div className={styles['buttons']}>
                    <button className={styles['sub-button']}>답변하기</button>
                </div>
            </div>

            <div className={styles['answer-list']}>
                {
                    answerList.map(answer => <AnswerItem name={answer.user_pk} content={answer.answer} date={answer.createdAt.split('T')[0]} />)
                }
            </div>
        </div>
    )
}

export default AnswerList;