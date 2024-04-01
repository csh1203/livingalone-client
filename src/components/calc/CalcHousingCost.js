import React, {useState, useEffect} from "react";
import '../../css/common/Style.css';
import styles from '../../css/calc/CalcBox.module.css'
import CalcInput from "./CalcInput";

function CalcHousingCost({setHousingCost}){
    const [ eachHousingCost, setEachHousingCost ] = useState({
        type: true,
        monthly: '',
        deposit: '',
        charter: '',
        maintenanceCost: '',
        dues: ''
    })
    const selectList = ["직접입력", "160,000(기본)"];
    const [Selected, setSelected] = useState("");

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    const isNum = num => {
        if(!num || isNaN(num)) return 0;
        return parseInt(num);
    }

    useEffect(() => {
        let totalHousingCost;
        let {type, monthly, deposit, charter, maintenanceCost, dues} = eachHousingCost;
        if(type) {
            totalHousingCost = isNum(monthly) + isNum(deposit) + isNum(maintenanceCost);
        }else{
            totalHousingCost = isNum(charter) +  isNum(maintenanceCost);
        }
        setHousingCost(totalHousingCost);

    }, [eachHousingCost])

    return(
        <div>
            <div className={styles['input-title']}>거주유형</div>
            <div className={styles['radio-btn-div']}>
                <div className={styles['monthly-btn-div']}>
                    <input type="radio" name="radioBtn" className={styles['radio-btn']} defaultChecked
                        onChange={() => setEachHousingCost({ ...eachHousingCost, type: true })}/>월세
                </div>
                <div className={styles['charter-btn-div']}>
                    <input type="radio" name="radioBtn" className={styles['radio-btn']}
                        onChange={() => setEachHousingCost({ ...eachHousingCost, type: false})}/>전세
                </div>
            </div>
            
            <div className={`${styles['monthly-input-div']}`}>
                { eachHousingCost.type ? <HousingCostMonthly eachHousingCost={eachHousingCost} setEachHousingCost={setEachHousingCost}/> : <HousingCostCharter eachHousingCost={eachHousingCost} setEachHousingCost={setEachHousingCost}/> }
            </div>
            <div className={styles['input-subtitle-div']}>
                <div className={styles['input-subtitle']}>관리비</div>
                <div className={styles['input-subtitle']}>공과금</div>
            </div>
            <div className={`${styles['monthly-input-div']}`}>
                <CalcInput placeholder="입력해주세요" value={eachHousingCost.maintenanceCost} 
                    onChange={e => {setEachHousingCost({...eachHousingCost, maintenanceCost: e.target.value})}}/>
                <select onChange={handleSelect} value={Selected} className={styles['input-style']}>
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

function HousingCostMonthly({ eachHousingCost, setEachHousingCost }){
    return(
        <>
            <CalcInput placeholder="월세" value={eachHousingCost.monthly} 
                onChange={e => {setEachHousingCost({...eachHousingCost, monthly: e.target.value})}}/>
            <CalcInput placeholder="보증금" value={eachHousingCost.deposit} 
                onChange={e => {setEachHousingCost({...eachHousingCost, deposit: e.target.value})}}/>

        </>
        
    );
}


function HousingCostCharter({ eachHousingCost, setEachHousingCost }){
    return(
        <>
            <CalcInput placeholder="전세 보증금" value={eachHousingCost.charter} 
                onChange={e => {setEachHousingCost({...eachHousingCost, charter: e.target.value})}}/>
        </>
        
    );
}

export default CalcHousingCost;