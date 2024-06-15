import React, { useState } from 'react';
import '../../css/common/Style.css';
import styles from '../../css/main/MainBanner.module.css';
import BannerCard from "./BannerCard";

function MainBanner() {
    const [containerPosition, setContainerPosition] = useState(0);

    const handleNextClick = () => {
        setContainerPosition((prevPosition) => prevPosition - 10);
    };

    return (
        <div className={styles.banner}>
            <div className={styles["slogan-container"]}>
                <div className={styles["main-slogan"]}>
                    자취를 처음 시작하는 당신에게<br />
                    오늘, 홀로서기에서
                </div>
                <div className={styles["sub-slogan"]}>자취가 처음인 당신을 위해 다양한 정보를 준비했어요!</div>
            </div>
            <div className={styles["card-container"]} >
                <BannerCard
                    iconUrl="./images/banner_icons/calc_icon.png"
                    subTitle="비용계산기"
                    mainTitle="자취, 얼마나 들까?"
                    linkUrl="/CostCalculator"
                />
                <BannerCard
                    iconUrl="./images/banner_icons/book_icon.png"
                    subTitle="자취정보"
                    mainTitle="자취에 대해서 알고싶다면?"
                    linkUrl="/articles"
                />
            </div>
        </div>
    );
}

export default MainBanner;
