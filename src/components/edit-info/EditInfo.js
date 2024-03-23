import React, {useState} from "react";
import '../../css/common/Style.css';
import styles from '../../css/edit-info/EditInfo.module.css'

import EditProfile from "./EditProfile";

function EditInfo () {
    const [chooseBtn, setChooseBtn] = useState(true);

    return(
        <div className={styles['body']}>
            <div className={styles['scope-bar']}>
                <div className={`${styles['my-profile']} ${chooseBtn ? styles['ch-btn'] : ''}`}
                    onClick={() => setChooseBtn(true)}>내 프로필</div>
                <div className={`${styles['security-setting']} ${chooseBtn ? '' : styles['ch-btn']}`}
                    onClick={() => setChooseBtn(false)}>보안설정</div>
            </div>
            {chooseBtn ? <EditProfile/> : <></>}
            
        </div>
    )
}

export default EditInfo;