import { useEffect, useState } from 'react';
import styles from '../../../css/auth/Login.module.css';
import '../../../css/common/Style.css';

function InputContainer({ handleOnChange, isPassword, placeholder, isError, errorMessage }) {
    const [type, setType] = useState('text')

    useEffect(() => {
        if (isPassword) setType('password')
    }, [])

    const toggleType = () => {
        if (type === 'text') setType('password')
        else setType('text')
    }

    return (
        <div>
            <div className={styles['text-field']}>
                <input
                    type={type}
                    onChange={e => handleOnChange(e.target.value)}
                    placeholder={placeholder}
                />
                {
                    isPassword &&
                    <img src={
                        type === 'password' ? '/images/edit-info/icon/close-eye.png' : '/images/edit-info/icon/open-eye.png'
                    } onClick={toggleType} />
                }
            </div>
            {
                isError &&
                <div className={styles['error-message']}>{errorMessage}</div>
            }
        </div>
    )
}

export default InputContainer;