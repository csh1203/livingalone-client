import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate, useParams } from 'react-router-dom';
import '../../css/common/Style.css';
import styles from '../../css/qna/AnswerList.module.css';
import AnswerItem from './AnswerItem';

function AnswerList() {
    const userPK = localStorage.getItem("userPK")
    const { id } = useParams()
    const [answerList, setAnswerList] = useState([])
    const [isPosting, setIsPosting] = useState(false)
    const [content, setContent] = useState("")
    const [isUpdated, setIsUpdated] = useState(false)

    const movePage = useNavigate()

    useEffect(() => {
        fetchData()
        console.log(answerList[0].user.image)
    }, [isUpdated])

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER}/answers/question/${id}`)
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

            const response = await axios.post(`${process.env.REACT_APP_SERVER}/answers`, req)
            console.log(response.data.message)
            setIsUpdated(isUpdated => !isUpdated)
            setIsPosting(false)
        } catch (error) {
            console.error(error)
        }
    }, [content, id, movePage, userPK])

    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['blockquote', 'code-block', 'link'],
        ],
    };

    return (
        <div className={styles['container']}>
            <div className={styles['top-section']}>
                <span className={styles['count']}>답변 {answerList.length}개</span>
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
                isPosting &&
                <ReactQuill
                    style={{ width: "100%", height: "200px", marginBottom: "100px", borderColor: "#CED0D6", borderRadius: "20px" }}
                    modules={modules}
                    value={content}
                    onChange={setContent}
                />
            }
            <div className={styles['answer-list']}>
                {
                    answerList.map(answer => <AnswerItem
                        key={answer.id}
                        index={answer.answer_pk}
                        answerUserPk={answer.user_pk}
                        userProfile={answer.user.image}
                        name={answer.user.name}
                        content={answer.answer}
                        date={answer.createdAt.split('T')[0]}
                        setIsUpdate={setIsUpdated}
                    />)
                }
            </div>
        </div>
    )
}

export default AnswerList;
