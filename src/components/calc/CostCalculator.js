import React, {useState, useEffect} from "react";
import '../../css/common/Style.css';
import styles from '../../css/calc/CostCalculator.module.css'

import CalcCategory from "./CalcCategory";
import HousingCost from "./CalcHousingCost";
import LivingCost from "./CalcLivingCost";
import Etc from "./CalcEtc"

function MainCostCalculator() {
    const [ housingCost, setHousingCost ] = useState(0);
    const [ livingCost, setLivingCost ] = useState(0);
    const [ etcCost, setEtcCost] = useState(0);
    const [ totalCost, setTotalCost ] = useState(0);
    const [ content, setContent ] = useState('categoryHome');

    const selectComponent = {
        categoryHome: <HousingCost setHousingCost={setHousingCost}/>,
        categoryLiving: <LivingCost setLivingCost={setLivingCost}/>,
        categoryAnother: <Etc setEtcCost={setEtcCost}/>
    };

    useEffect(() => {
        setTotalCost(housingCost + livingCost + etcCost)
    }, [housingCost, livingCost, etcCost])

    const getUnit = name => {
        return name.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    const toCategory = {
        housingCost: housingCost,
        livingCost: livingCost,
        etcCost: etcCost,
        totalCost: totalCost,
        getUnit: getUnit,
        setContent: setContent
    }

    return(
        <div className={styles['main']}>
            <div className={styles['main']}>
                <div className={styles['back-img-div']} style={{backgroundImage: 'url(/images/calc-back.png)'}}></div>
                <CalcCategory toCategory={toCategory}/>
            </div>
            
            <div className={styles["main back-test"]}>
                <div className={styles['input-div']}>
                    {content && <>{selectComponent[content]}</>}
                    <div className={styles['pin-container']}>
                        <div className={styles['sum-container']}>
                            <div className={styles['sum-div']}>
                                <div className={styles['sum-title']}>합계</div>
                                <div className={styles['sum-input']}>
                                    {content === 'categoryHome' ? getUnit(housingCost) : 
                                        content === 'categoryLiving' ? getUnit(livingCost) : getUnit(etcCost)}
                                </div>
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