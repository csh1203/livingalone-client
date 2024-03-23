import React, { useState, useRef } from "react";
import '../../css/common/Style.css';
import styles from '../../css/edit-info/EditProfile.module.css'

function EditProfile() {
    const [ profileImg, setProfileImg ] = useState("/images/edit-info/default-profile-img.png");
    const fileInput = useRef(null);

    const onchangeImageUpload = e => {
        const {files} = e.target;
        const uploadFile = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(uploadFile);
        if(!(uploadFile.type.match("image/png") || uploadFile.type.match("image/jpg") || uploadFile.type.match("image/jpeg"))){
            return alert('이미지 파일만 업로드 가능합니다.');
        }
        reader.onloadend = ()=> {
            setProfileImg(reader.result);
        }
    }

    const removeProfileImg = () => {
        setProfileImg("/images/edit-info/default-profile-img.png");
    }

    return(
        <>
            <div className={styles['title']}>프로필 수정</div>
            <div className={styles['sub-title']}>홀로서기에서 사용될 프로필과 닉네임을 수정하실 수 있습니다.</div>

            <div className={styles['set-table']}>
                <div className={styles['profile-img-title']}>프로필 사진</div>
                <div className={styles['set-profile']}>
                    <div className={styles['set-profile-img']}>
                        <img src={profileImg}/>
                    </div>
                    <div className={styles['edit-profile-btns']}>
                        <div className={styles['edit-profile']} onClick={() => fileInput.current.click()}>사진 변경</div>
                        <div className={styles['remove-profile']} onClick={() => removeProfileImg()}>삭제</div>
                    </div>
                    <div className={styles['profile-img-rule']}>확장자 : png, jpg, jpeg / 용량 : 1MB 이하</div>
                </div>
                <div className={styles['nickname-title']}>닉네임</div>
                <div className={styles['set-nickname']}>
                    <input placeholder="ex) 피리부는 코끼리" className={styles['nickname-input']}/>
                </div>
            </div>
            <input type="file" accept=".png, .jpg, .jpeg" style={{display: 'none'}} ref={fileInput}
                onChange = {onchangeImageUpload}/>

            <div className={styles['apply-btns']}>
                <div>적용</div>
                <div>취소</div>
            </div>
        </>
    )
}

export default EditProfile;