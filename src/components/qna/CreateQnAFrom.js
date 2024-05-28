import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../../css/common/Style.css';
import styles from '../../css/qna/CreateQnAForm.module.css';
import QnATags from "./QnATags";

function CreateQnAFrom() {
    const userPK = useSelector(state => state.user.userPK);
    const movePage = useNavigate();

    const modules = {
        toolbar: [
            [{ header: '1' }, { header: '2' }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['blockquote', 'code-block', 'link'],
        ],
    };

    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [content, setContent] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleTagChange = (event) => {
        setTag(event.target.value.replaceAll(' ', ''));
    };

    const handleSubmit = async () => {
        try {
            if (userPK) {
                const response = await axios.post(`http://localhost:3001/questions`, {
                    title: title,
                    tag: tag,
                    views: 0,
                    content: content,
                    user_pk: userPK,
                });

                console.log("글이 성공적으로 전송되었습니다.", response.data);
                movePage('/qna')
            } else {
                alert('로그인이 필요한 기능입니다.');
                console.log(userPK)
            }
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

                    <ReactQuill
                        style={{ width: "100%", height: "600px", marginBottom: "42px", borderColor: "#CED0D6", borderRadius: "20px" }}
                        modules={modules}
                        onChange={setContent}
                    />
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