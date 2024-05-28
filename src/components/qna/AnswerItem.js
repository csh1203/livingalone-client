import '../../css/common/Style.css';
import styles from '../../css/qna/AnswerItem.module.css';
function AnswerItem({ name, content, date }) {
    return (
        <div className={styles['container']}>
            <p className={styles['name']}>
                {name}
            </p>
            <p className={styles['content']}>
                {content}
            </p>
            <small className={styles['date']}>{date}</small>
        </div>
    )
}

export default AnswerItem;