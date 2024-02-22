import React, {useState} from "react";
import '../../css/common/Style.css';
import styles from '../../css/calc/CostCalculator.module.css';

function CalcLivingCost(){
    const selectList = ["직접입력", "500,000(기본)"];
    const [Selected, setSelected] = useState("");

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    return(
        <div>
            <div className={styles['input1-container']}>
                <div className={styles['food-expenses-div']}>
                    <div className={styles['input-title']}>식비</div>
                    <div className={`${styles['monthly-input-div']} ${styles['input-margin']}`}>
                        <select onChange={handleSelect} value={Selected} className={`${styles['input-form']} ${styles['input-style']}`}>
                        {selectList.map((item) => (
                            <option value={item} key={item}>
                            {item}
                            </option>
                        ))}
                        </select>
                    </div>
                </div>
                <div className={styles['daily-necessity-div']}>
                    <div className={styles['input-title']}>생필품</div>
                    <input type="text" placeholder="입력해주세요" className={`${styles['daily-necessity-input']} ${styles['input-margin']} ${styles['input-style']}`}/>
                </div>
            </div>
            <div className={styles['transportation-cost-div']}>
                <div className={styles['transportation-title']}>교통비</div>
                <input type="radio" name="living-type" defaultChecked/>대중교통
                <input type="radio" name="living-type" defaultChecked/>자차
            
                <input type="text" placeholder="기름값" className={`${styles['transportation-input']} ${styles['input-margin']} ${styles['input-style']}`}/>
            </div>
        </div>
        
    );
}

export default CalcLivingCost;