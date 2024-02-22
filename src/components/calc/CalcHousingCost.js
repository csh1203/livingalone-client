import React, {useState} from "react";
import '../../css/common/Style.css';
import styles from '../../css/calc/CostCalculator.module.css'

function CalcHousingCost(){
    const selectList = ["직접입력", "160,000(기본)"];
    const [Selected, setSelected] = useState("");
    const [radioBtn, setRadioBtn] = useState(true);

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    return(
        <div>
            <div className={styles['input-title']}>거주유형</div>
            <div className={styles['radio-btn-div']}>
                <div className={styles['monthly-btn-div']}>
                    <input type="radio" name="radioBtn" className={styles['monthly-btn']} defaultChecked
                        onChange={() => setRadioBtn(true)}/>월세
                </div>
                <div className={styles['charter-btn-div']}>
                    <input type="radio" name="radioBtn" className={styles['charter-btn']}
                        onChange={() => setRadioBtn(false)}/>전세
                </div>
            </div>
            
            <div className={`${styles['monthly-input-div']} ${styles['input-margin']}`}>
                { radioBtn ? <HousingCostMonthly/> : <HousingCostCharter/> }
            </div>
            <div className={styles['input-subtitle-div']}>
                <div className={styles['input-subtitle']}>관리비</div>
                <div className={styles['input-subtitle']}>공과금</div>
            </div>
            <div className={`${styles['monthly-input-div']} ${styles['input-margin']}`}>
                <input type="text" placeholder="입력해주세요" className={`${styles['input-form']} ${styles['input-style']}`}/>
                <select onChange={handleSelect} value={Selected} className={`${styles['input-form']} ${styles['input-style']}`}>
                {selectList.map((item) => (
                    <option value={item} key={item}>
                    {item}
                    </option>
                ))}
                </select>
            </div>
        </div>
    );
}

function HousingCostMonthly(){
    return(
        <>
            <input type="text" placeholder="월세" className={`${styles['monthly-input']} ${styles['input-style']}`}/>
            <input type="text" placeholder="보증금" className={`${styles['monthly-input']} ${styles['input-style']}`}/>
        </>
        
    );
}


function HousingCostCharter(){
    return(
        <>
            <input type="text" placeholder="전세 보증금" className={`${styles['charter-input']} ${styles['input-style']}`}/>
        </>
        
    );
}

export default CalcHousingCost;