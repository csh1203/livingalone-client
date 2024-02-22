import React, {useState} from "react";
import '../../css/common/Style.css';
import styles from '../../css/calc/CostCalculator.module.css'

import HousingCost from "./CalcHousingCost";
import LivingCost from "./CalcLivingCost";
import Etc from "./CalcEtc"

function MainCostCalculator() {
    const [content, setContent] = useState('categoryHome');

    const selectComponent = {
        categoryHome: <HousingCost />,
        categoryLiving: <LivingCost />,
        categoryAnother: <Etc />
    };

    const categoryHome = React.useRef(null);
    const categoryLiving = React.useRef(null);
    const categoryAnother = React.useRef(null);

    const refs = {
        categoryHome: categoryHome,
        categoryLiving: categoryLiving,
        categoryAnother: categoryAnother
    };

    const clickCategory = (name) => {;
        const ref = refs[name];
        categoryHome.current.style = "top: -110px";
        categoryLiving.current.style = "top: -110px";
        categoryAnother.current.style = "top: -110px";
        if (ref && ref.current) {
            ref.current.style.top = "-135px";
        }
        setContent(name);
    }

    return(
        <div className={styles['main']}>
            <div className={styles.main}>
                <div className={styles['back-img-div']} style={{backgroundImage: 'url(/images/calc-back.png)'}}></div>
                <div className={styles['category-div']}>
                    <div className={styles['category']} onClick={() => clickCategory('categoryHome')} ref={categoryHome}>
                        <img src="/images/calc-home.png"></img>
                        <div className={styles['category-title']}>주거비용</div>
                        <div className={styles['category-amount']}>32,000</div>
                    </div>
                    <div className={styles['category']} onClick={() => clickCategory('categoryLiving')} ref={categoryLiving}>
                        <img src="/images/calc-living.png"></img>
                        <div className={styles['category-title']}>생활비</div>
                        <div className={styles['category-amount']}>32,000</div>
                    </div>
                    <div className={styles['category']} onClick={() => clickCategory('categoryAnother')} ref={categoryAnother}>
                        <img src="/images/calc-another.png"></img>
                        <div className={styles['category-title']}>기타</div>
                        <div className={styles['category-amount']}>32,000</div>
                    </div>
                    <div className={styles['category']}>
                        <img src="/images/calc-total.png"></img>
                        <div className={styles['category-title']}>총 금액</div>
                        <div className={styles['category-amount']}>32,000</div>
                    </div>
                </div>
            </div>
            
            <div className={styles["main back-test"]}>
                <div className={styles['input-div']}>
                    {content && <>{selectComponent[content]}</>}
                    <div className={styles['pin-container']}>
                        <div className={styles['sum-container']}>
                            <div className={styles['sum-div']}>
                                <div className={styles['sum-title']}>합계</div>
                                <div className={styles['sum-input']}></div>
                            </div>
                        </div>
                        
                        <hr className={styles['hr']}/>
                        <div className={styles['btn-group']}>
                            <div className={styles['delete-btn']}>삭제</div>
                            <div className={styles['save-btn']}>저장</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCostCalculator;