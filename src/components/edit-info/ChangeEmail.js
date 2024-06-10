import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import '../../css/common/Style.css';
import styles from '../../css/edit-info/ChangeEmail.module.css'

function ChangeEmail({ setShowChangeEmail }) {
    const [ activationBtn, setActivationBtn ] = useState(true);
    const [ email, setEmail ] = useState('');

    const userPK = useSelector(state => state.user.userPK);

    useEffect(() => {
        getEmail();
    }, [])

    const getEmail = async () => {
        try{    
            const response = await axios.get(`${process.env.REACT_APP_SERVER}/users/${userPK}`);
            setEmail(response.data.email)
        }catch(err){
            console.error(err);
        }
    }

    const onChangeEmail = e => {
        setEmail(e.target.value);
        if(e.target.value){
            setActivationBtn(true);
        }else{
            setActivationBtn(false);
        }
    }

    const handleClickOutside = (e) => {
        if (e.target.id === "email-popup-shadow") {
            setShowChangeEmail(false);
        }
    }

    return(
        <div className={styles['popup-shadow']} id="email-popup-shadow" onClick={handleClickOutside}>
            <div className={styles['popup-box']}>
                <div className={styles['title']}>이메일 변경</div>
                <div className={styles['email-info-box']}>
                    <div className={styles['current-email-box']}>
                        <div className={styles['current-email-title']}>현재 이메일 주소: </div>
                        <div className={styles['current-email']}>holosergi@gmail.com</div>
                    </div>
                    <input className={styles['new-email-input']} placeholder='새 이메일 주소' value={email} onChange={onChangeEmail}/>
                </div>
                <div className={ activationBtn ? `${styles['apply-btn']} ${styles['activation-apply-btn']}` :  `${styles['apply-btn']}`}
                    onClick={() => activationBtn ? setShowChangeEmail(false) : <></>}>완료</div>
            </div>
        </div>
    )
}

export default ChangeEmail;