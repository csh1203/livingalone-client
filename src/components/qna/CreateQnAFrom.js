import React from "react";
import '../../css/common/Style.css';
import styles from '../../css/qna/CreateQnAForm.module.css';
import { Icon } from '@iconify/react';

function CreateQnAFrom() {
    return (
        <div className={styles['root']}>
            <div className={styles['main']}>
                <div className={styles['form-container']}>
                    <div className={styles['title-form']}>
                        <input
                            className={styles['title-input']}
                            type="text"
                            placeholder="제목을 입력해 주세요"
                        />
                        <input
                            className={styles['tag-input']}
                            type="text"
                            placeholder="게시물 태그를 입력해 주세요"
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
                        />
                    </div>
                </div>
                <div className={styles['tag-container']}>
                    <div className={styles['text-info']}>
                        빠른 답변을 원하시나요? <br/>
                        게시물 태그를 이용해보세요
                    </div>
                    <label>인기 태그</label>
                    <div className={styles['tags']}>
                        <div className={styles['tag-item']}>
                            <div className={styles['tag-number']}>1</div>
                            <div className={styles['tag-content']}>비용</div>
                        </div>
                        <div className={styles['tag-item']}>
                            <div className={styles['tag-number']}>2</div>
                            <div className={styles['tag-content']}>생활꿀팁</div>
                        </div>
                        <div className={styles['tag-item']}>
                            <div className={styles['tag-number']}>3</div>
                            <div className={styles['tag-content']}>인테리어</div>
                        </div>
                        <div className={styles['tag-item']}>
                            <div className={styles['tag-number']}>4</div>
                            <div className={styles['tag-content']}>주거</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['buttons']}>
                <button className={styles['main-button']}>임시저장</button>
                <button className={styles['sub-button']}>작성취소</button>
                <button className={styles['sub-button']}>작성완료</button>
            </div>
        </div>
    )
};

export default CreateQnAFrom;