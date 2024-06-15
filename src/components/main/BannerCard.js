import React from 'react';
import styles from '../../css/main/BannerCard.module.css';
import '../../css/common/Style.css';
import {Icon} from '@iconify/react';

function BannerCard({iconUrl, mainTitle, subTitle, linkUrl}){
    return (
        <div className={styles['banner-card']}>
            <h6 className={styles['sub-title']}>{subTitle}</h6>
            <h2 className={styles['main-title']}>{mainTitle}</h2>
            <img className={styles['icon']} src={iconUrl} alt="Icon"/>
            <a className={styles['link']} href={linkUrl} rel="noopener noreferrer">
                바로가기 <Icon className={styles['iconify']} icon="uiw:right"/>
            </a>
        </div>
    );
};

export default BannerCard;
