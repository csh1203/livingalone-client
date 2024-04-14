import '../../css/common/Style.css';
import styles from '../../css/qna/AnswerList.module.css';

function AnswerList(props) {

    // 답변들 불러오기

    return (
        <div className={styles['container']}>
            <div className={styles['top-section']}>
                <span className={styles['count']}>답변 3개</span>
                <div className={styles['buttons']}>
                    <button className={styles['sub-button']}>답변하기</button>
                </div>
            </div>
        </div>
    )
}

export default AnswerList;