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

    const isNum = num => {
        if(!num || isNaN(num)) return 0;
        return parseInt(num);
    }

    const selectComponent = {
        categoryHome: <HousingCost housingCost={housingCost} setHousingCost={setHousingCost} isNum={isNum} />,
        categoryLiving: <LivingCost livingCost={livingCost} setLivingCost={setLivingCost} isNum={isNum} />,
        categoryAnother: <Etc etcCost={etcCost} setEtcCost={setEtcCost} isNum={isNum} />
    };

    useEffect(() => {
        let totalHousing = localStorage.getItem('totalHousing');
        let totalLiving = localStorage.getItem('totalLiving');
        let totalEtc = localStorage.getItem('totalEtc');

        setHousingCost(totalHousing ? parseInt(totalHousing) : 0);
        setLivingCost(totalLiving ? parseInt(totalLiving) : 0);
        setEtcCost(totalEtc ? parseInt(totalEtc) : 0);
    }, [])

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
                </div>
            </div>
        </div>
    )
}

export default MainCostCalculator;