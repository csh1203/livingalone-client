import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useSelector } from "react-redux";
import '../../css/common/Style.css';
import styles from '../../css/edit-info/EditProfile.module.css'

function EditProfile() {
    const [ profileImg, setProfileImg ] = useState("/images/edit-info/default-profile-img.png");
    const [ imageSrc, setImageSrc ] = useState("/images/edit-info/default-profile-img.png");
    const [ nickname, setNickname ] = useState('');
    const [ defaultNickname, setDefaultNickname ] = useState('');
    const [ defaultProfile, setDefaultProfile ] = useState("/images/edit-info/default-profile-img.png");

    const fileInput = useRef(null);

    const movePage = useNavigate();
    const userPK = useSelector(state => state.user.userPK);

    useEffect(() => {
        getNickname();
    }, [])

    const getNickname = async () => {
        try{
            const response = await axios.get(`${process.env.REACT_APP_SERVER}/users/${userPK}`);
            setDefaultNickname(response.data.name)
            setNickname(response.data.name)
        }catch(err){
            console.error(err);
        }
    }

    const onchangeImageUpload = e => {
        const file = e.target.files[0];

        const uploadFile = file;
        const reader = new FileReader();
        reader.readAsDataURL(uploadFile);

        if(!file){
            return alert('파일을 선택해주세요.');
        }
        console.log(file);
        if(!(file.type === "image/png" || file.type === "image/jpeg")){
            return alert('이미지 파일만 업로드 가능합니다.');
        }
       
        reader.onload = () => {
            setImageSrc(reader.result);
        }
        setProfileImg(file);
    }

    const removeProfileImg = () => {
        setProfileImg("/images/edit-info/default-profile-img.png");
    }

    const setProfile = async () => {
        const image = profileImg === "/images/edit-info/default-profile-img.png" ? null : profileImg;
        try{
            const formData = new FormData();
            formData.append('image', image);
            formData.append('name', nickname);

            const response = await axios.patch(`${process.env.REACT_APP_SERVER}/users/${userPK}`, formData)
            console.log(response);
            movePage('/mypage');
        }catch(err){
            console.error(err);
        }
    }

    const resetProfile = () => {
        setImageSrc(defaultProfile);
        setNickname(defaultNickname);
    }

    return(
        <>
            <div className={styles['title-box']}>
                <div className={styles['title']}>프로필 수정</div>
                <div className={styles['sub-title']}>홀로서기에서 사용될 프로필과 닉네임을 수정하실 수 있습니다.</div>
            </div>
            

            <div className={styles['set-table']}>
                <div className={styles['profile-img-title']}>프로필 사진</div>
                <div className={styles['set-profile']}>
                    <div className={styles['set-profile-img']}>
                        <img src={imageSrc}/>
                    </div>
                    <div className={styles['edit-profile-btns']}>
                        <div className={styles['edit-profile']} onClick={() => fileInput.current.click()}>사진 변경</div>
                        <div className={styles['remove-profile']} onClick={() => removeProfileImg()}>삭제</div>
                    </div>
                    <div className={styles['profile-img-rule']}>확장자 : png, jpg, jpeg / 용량 : 1MB 이하</div>
                </div>
                <div className={styles['nickname-title']}>닉네임</div>
                <div className={styles['set-nickname']}>
                    <input placeholder="ex) 피리부는 코끼리"
                        className={styles['nickname-input']}
                        value={nickname}
                        onChange={e => setNickname(e.target.value)}/>
                </div>
            </div>
            <input type="file" accept=".png, .jpg, .jpeg" style={{display: 'none'}} ref={fileInput}
                onChange = {onchangeImageUpload}/>

            <div className={styles['apply-btns']}>
                <div onClick={setProfile}>적용</div>
                <div onClick={resetProfile}>취소</div>
            </div>
        </>
    )
}

export default EditProfile;