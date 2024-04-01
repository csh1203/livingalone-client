import React, {useState, useEffect} from "react";
import '../../css/common/Style.css';
import styles from '../../css/calc/CalcBox.module.css'

import CalcInput from "./CalcInput";

function CalcEtc({ setEtcCost }){
    const [ eachEtcCost, setEachEtcCost] = useState({
        phone: '',
        subscribe: '',
        insurance: '',
        emergency: ''
    })

    const isNum = num => {
        if(!num || isNaN(num)) return 0;
        return parseInt(num);
    }

    useEffect(() => {
        const {phone, subscribe, insurance, emergency} = eachEtcCost;
        let totalEtcCost = isNum(phone) + isNum(subscribe) + isNum(insurance) + isNum(emergency);
        setEtcCost(totalEtcCost);
    }, [eachEtcCost])


    return(
        <div>
            <div className={styles['etc-container']}>
                <div className={styles['cell-phone-bill-div']}>
                    <div className={styles['input-title']}>핸드폰 요금</div>
                    <CalcInput placeholder="입력해주세요" value={eachEtcCost.phone} 
                        onChange={e => {setEachEtcCost({...eachEtcCost, phone: e.target.value})}}/>

                </div>
                <div className={styles['subscription-fee-div']}>
                    <div className={styles['input-title']}>구독료</div>
                    <CalcInput placeholder="입력해주세요" value={eachEtcCost.subscribe} 
                        onChange={e => {setEachEtcCost({...eachEtcCost, subscribe: e.target.value})}}/>
                </div>
            </div>
            <div className={styles['insurance-cost-div']}>
                <div className={styles['input-title']}>보험비</div>
                <CalcInput placeholder="입력해주세요" value={eachEtcCost.insurance} 
                    onChange={e => {setEachEtcCost({...eachEtcCost, insurance: e.target.value})}}/>
            </div>
            <div className={styles['emergency-fund-div']}>
                <div className={styles['input-title']}>비상금</div>
                <CalcInput placeholder="입력해주세요" value={eachEtcCost.emergency} 
                    onChange={e => {setEachEtcCost({...eachEtcCost, emergency: e.target.value})}}/>
            </div>
        </div>
        
    )
}

export default CalcEtc;