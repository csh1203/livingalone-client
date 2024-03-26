import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../../css/common/Style.css';
import styles from '../../css/qna/CreateQnAForm.module.css';
import QnATags from "./QnATags";

function CreateQnAFrom() {

    const id = useSelector(state => state.user.userPk)

    const movePage = useNavigate();

    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [content, setContent] = useState("");

    useEffect(()=> {
        if (!id) {
            alert('로그인이 필요합니다.');
            movePage('/login')
        }
    }, id);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTagChange = (event) => {
        setTag(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`http://localhost:3001/questions/${id}`, {
                title: title,
                tag: tag,
                views: 0,
                content: content,
                user_id: id,
            });

            console.log("글이 성공적으로 전송되었습니다.", response.data);
        } catch (error) {
            console.error("글 전송 중 오류가 발생했습니다.", error);
        }
    };

    return (
        <div className={styles['root']}>
            <div className={styles['main']}>
                <div className={styles['form-container']}>
                    <div className={styles['title-form']}>
                        <input
                            className={styles['title-input']}
                            type="text"
                            placeholder="제목을 입력해 주세요"
                            value={title}
                            onChange={handleTitleChange}
                        />
                        <input
                            className={styles['tag-input']}
                            type="text"
                            placeholder="게시물 태그를 입력해 주세요"
                            value={tag}
                            onChange={handleTagChange}
                        />
                    </div>
                    <div className={styles['content-form']}>
                        <div className={styles['style-options']}>
                            <div className={styles['text-style']}>
                                <img
                                    src="/images/text/1.png"
                                    className={styles['img-icon']}
                                />
                                <img
                                    src="/images/text/2.png"
                                    className={styles['img-icon']}
                                />
                                <img
                                    src="/images/text/3.png"
                                    className={styles['img-icon']}
                                />
                                <img
                                    src="/images/text/4.png"
                                    className={styles['img-icon']}
                                />
                                <img
                                    src="/images/text/5.png"
                                    className={styles['img-icon']}
                                />
                                <img
                                    src="/images/text/6.png"
                                    className={styles['img-icon']}
                                />
                            </div>
                            <div className={styles['dividor']}>|</div>
                            <div className={styles['text-style']}>
                                <img
                                    src="/images/text/align-left.png"
                                    className={styles['img-icon']}
                                />
                                <img
                                    src="/images/text/align-center.png"
                                    className={styles['img-icon']}
                                />
                                <img
                                    src="/images/text/align-right.png"
                                    className={styles['img-icon']}
                                />
                                <img
                                    src="/images/text/align-justify.png"
                                    className={styles['img-icon']}
                                />
                            </div>
                            <div className={styles['dividor']}>|</div>
                            <div className={styles['text-style']}>
                                <img
                                    src="/images/text/link.png"
                                    className={styles['img-icon']}
                                />
                                <img
                                    src="/images/text/list.png"
                                    className={styles['img-icon']}
                                />
                            </div>
                        </div>
                        <textarea
                            className={styles['content-textarea']}
                            placeholder="궁금한 내용을 질문으로 작성해 주세요.
                        다만 개인정보(실명, 전화번호,  계정 정보)가 포함된 정보들은 게시될 수 없습니다."
                            value={content}
                            onChange={handleContentChange}
                        />
                    </div>
                </div>
                <div className={styles['tag-container']}>
                    <div className={styles['text-info']}>
                        빠른 답변을 원하시나요? <br />
                        게시물 태그를 이용해보세요
                    </div>
                    <label>인기 태그</label>
                    <QnATags />
                </div>
            </div>
            <div className={styles['buttons']}>
                <button className={styles['main-button']} onClick={handleSubmit}>작성완료</button>
                <button className={styles['sub-button']}>임시저장</button>
                <button className={styles['sub-button']}>작성취소</button>
            </div>
        </div>
    )
};

export default CreateQnAFrom;