import React, {useState} from "react";
import '../../css/common/Style.css';
import styles from '../../css/calc/CostCalculator.module.css'

function CalcEtc(){
    return(
        <div>
            <div className={styles['input2-container']}>
                <div className={styles['cell-phone-bill-div']}>
                    <div className={styles['input-title']}>핸드폰 요금</div>
                    <input type="text" placeholder="입력해주세요" className={`${styles['cell-phone-input']} ${styles['input-margin']} ${styles['input-style']}`}/>
                </div>
                <div className={styles['subscription-fee-div']}>
                    <div className={styles['input-title']}>구독료</div>
                    <input type="text" placeholder="입력해주세요" className={`${styles['subscription-input']} ${styles['input-margin']} ${styles['input-style']}`}/>
                </div>
            </div>
            <div className={styles['insurance-cost-div']}>
                <div className={styles['input-title']}>보험비</div>
                <input type="text" placeholder="입력해주세요" className={`${styles['insurance-input']} ${styles['input-margin']} ${styles['input-style']}`}/>
            </div>
            <div className={styles['emergency-fund-div']}>
                <div className={styles['input-title']}>비상금</div>
                <input type="text" placeholder="입력해주세요" className={`${styles['emergency-input']} ${styles['input-margin']} ${styles['input-style']}`}/>
            </div>
        </div>
        
    )
}

export default CalcEtc;