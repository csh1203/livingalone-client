import React from 'react';
import '../../css/common/Style.css'
import styles from '../../css/calc/CalcCategory.module.css'


function CalcCategory({ toCategory }) {
    const { housingCost, livingCost, etcCost, totalCost, getUnit, setContent} = toCategory;
    
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
        <>
            <div className={styles['category-div']}>
                <div className={styles['category']} onClick={() => clickCategory('categoryHome')} ref={categoryHome}>
                    <img src="/images/calc-home.png"></img>
                    <div className={styles['category-title']}>주거비용</div>
                    <div className={styles['category-amount']}>{getUnit(housingCost)}
                    </div>
                </div>
                <div className={styles['category']} onClick={() => clickCategory('categoryLiving')} ref={categoryLiving}>
                    <img src="/images/calc-living.png"></img>
                    <div className={styles['category-title']}>생활비</div>
                    <div className={styles['category-amount']}>{getUnit(livingCost)}</div>
                </div>
                <div className={styles['category']} onClick={() => clickCategory('categoryAnother')} ref={categoryAnother}>
                    <img src="/images/calc-another.png"></img>
                    <div className={styles['category-title']}>기타</div>
                    <div className={styles['category-amount']}>{getUnit(etcCost)}</div>
                </div>
                <div className={styles['category']}>
                    <img src="/images/calc-total.png"></img>
                    <div className={styles['category-title']}>총 금액</div>
                    <div className={styles['category-amount']}>{getUnit(totalCost)}</div>
                </div>
            </div>
        </>
    )
}

export default CalcCategory;