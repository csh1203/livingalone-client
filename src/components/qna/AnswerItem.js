import { useState } from 'react';
import '../../css/common/Style.css';
import styles from '../../css/qna/AnswerItem.module.css';

function AnswerItem({ answerUserPk, name, content, date }) {

    const [isVisible, setIsVisible] = useState(false)
    const currentUser = localStorage.getItem('userPK');
    console.log('currentUser', currentUser)

    const handleLineClick = () => {
        setIsVisible(!isVisible);
    };

    console.log(process.env.REACT_APP_BASIC_PROFILE)
    return (
        <div className={styles['container']}>
            <div className={styles['profile-dots']}>
                <div className={styles['profile-name']}>
                    <img src={process.env.REACT_APP_BASIC_PROFILE} className={styles['profile']} />
                    <p className={styles['name']}>
                        {name}
                    </p>
                </div>
                <img src="/images/line.png" className={styles['line']} onClick={() => setIsVisible(isVisible => !isVisible)} />
                {isVisible && (
                    <div className={styles['tooltip']}>
                        {
                            answerUserPk == currentUser
                                ?
                                <p className={styles['tooltip-menu']}>삭제하기</p>
                                :
                                <p className={styles['tooltip-error']}>신고하기</p>
                        }
                    </div>
                )}
            </div>
            <p className={styles['content']}>
                {content.replace(/<\/?[^>]+(>|$)/g, "")}
            </p>
            <small className={styles['date']}>{date}</small>
            {/* <p className={styles['accept']}>채택하기</p> */}
        </div>
    )
}


export default AnswerItem;
