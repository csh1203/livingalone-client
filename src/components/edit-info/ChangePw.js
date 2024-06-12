import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../../css/common/Style.css';
import styles from '../../css/edit-info/ChangePw.module.css'
import axios from 'axios';

function ChangePw({ setShowChangePw }){
    const [ activationBtn, setActivationBtn ] = useState(false);
    const [ isSamePw, setIsSamePw] = useState(false);
    const [ currectPw, setCurrentPw ] = useState({
        content: '',
        show: false
    })

    const [ newPw, setNewPw ] = useState({
        content: '',
        show: false
    })

    const [ checkPw, setCheckPw ] = useState({
        content: '',
        show: false
    })

    const userPK = useSelector(state => state.user.userPK);

    const showPw = (isShow) => {
        return isShow ? '/images/edit-info/icon/open-eye.png' : '/images/edit-info/icon/close-eye.png'
    }

    useEffect(() => {
        (currectPw.content && (currectPw.content === newPw.content)) ? setIsSamePw(true) : setIsSamePw(false);
    }, [currectPw.content, newPw.content])

    useEffect(() => {
        if(currectPw.content && newPw.content && checkPw.content && !isSamePw && newPw.content == checkPw.content) 
            setActivationBtn(true);
        else
            setActivationBtn(false);
    }, [currectPw.content, newPw.content, checkPw.content, isSamePw])

    const handleClickOutside = (e) => {
        if (e.target.id === "pw-popup-shadow") {
            setShowChangePw(false);
        }
    }

    const editPw = async () => {
        try{
            if(newPw.content !== checkPw.content){
                return alert('비밀번호가 일치하지 않습니다.')
            }

            const req = {
                newPassword: newPw.content,
                newPasswordConfirmation: checkPw.content
            }

            const response = await axios.put(`${process.env.REACT_APP_SERVER}/users/${userPK}/password`, req);
            console.log(response);
            setShowChangePw(false);
        }catch(err){
            console.error(err); 
        }
    }

    return(
        <div className={styles['popup-shadow']} id="pw-popup-shadow" onClick={handleClickOutside}>
            <div className={styles['popup-box']}>
                <div className={styles['title']}>비밀번호 변경</div>
                <div className={styles['change-pw-box']}>
                    <div className={styles['current-pw']}>
                        <input placeholder="현재 비밀번호(8자 이상, 영문, 숫자, 기호)" type={currectPw.show ? 'text' : 'password'}
                            value={currectPw.content} onChange={e => setCurrentPw({...currectPw, content: e.target.value})}/>
                        <img src={showPw(currectPw.show)} className={styles['show-pw-btn']} 
                            onClick={() => setCurrentPw({ ...currectPw, show: !currectPw.show})}/>
                    </div>
                    <div>
                        <div className={`${styles['new-pw']} ${isSamePw ? styles['not-same-box'] : <></>}`}>
                            <input placeholder="새 비밀번호(8자 이상, 영문, 숫자, 기호)" type={newPw.show ? 'text' : 'password'}
                                value={newPw.content} onChange={e => setNewPw({...newPw, content: e.target.value})}/>
                            <img src={showPw(newPw.show)} className={styles['show-pw-btn']}
                                onClick={() => setNewPw({ ...newPw, show: !newPw.show})}/>
                        </div>
                        {isSamePw && <div className={styles['warning-text']}>기존 비밀번호와 동일한 비밀번호는 불가능합니다</div>}
                    </div>
                    

                    <div className={styles['check-pw']}>
                        <input placeholder="비밀번호를 한 번 더 입력하세요" type={checkPw.show ? 'text' : 'password'}
                            value={checkPw.content} onChange={e => setCheckPw({...checkPw, content: e.target.value})}/>
                        <img src={showPw(checkPw.show)} className={styles['show-pw-btn']}
                            onClick={() => setCheckPw({ ...checkPw, show: !checkPw.show})}/>
                    </div>
                </div>
                <div className={ activationBtn ? `${styles['apply-btn']} ${styles['activation-apply-btn']}` :  `${styles['apply-btn']}`}
                    onClick={() => activationBtn ? editPw() : <></>}>완료</div>
            </div>
        </div>
    )
}

export default ChangePw;
