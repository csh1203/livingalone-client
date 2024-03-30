import React, {useState, useEffect} from "react";
import '../../css/common/Style.css';
import styles from '../../css/calc/CostCalculator.module.css';

function CalcLivingCost({ setLivingCost }){
    const selectList = ["직접입력", "500,000(기본)"];
    const [Selected, setSelected] = useState("");
    const [ eachLivingCost, setEachLivingCost ] = useState({
        type: true,
        food: '',
        dailyNecessity: '',
        publicTransport: '',
        ownCar: ''
    })

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    const isNum = num => {
        if(!num || isNaN(num)) return 0;
        return parseInt(num);
    }

    useEffect(() => {
        let totalLivingCost;
        let {type, food, dailyNecessity, publicTransport, ownCar} = eachLivingCost;
        if(type) {
            totalLivingCost = isNum(food) + isNum(dailyNecessity) + isNum(publicTransport);
        }else{
            totalLivingCost = isNum(food) + isNum(dailyNecessity) + isNum(ownCar);
        }
        setLivingCost(totalLivingCost);
    }, [eachLivingCost])

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
                    <input type="text" placeholder="입력해주세요" className={`${styles['daily-necessity-input']} ${styles['input-margin']} ${styles['input-style']}`}
                        value={eachLivingCost.dailyNecessity} onChange={e => {setEachLivingCost({...eachLivingCost, dailyNecessity: e.target.value})}}/>
                </div>
            </div>
            <div className={styles['transportation-cost-div']}>
                <div className={styles['transportation-title']}>교통비</div>
                    <div className={styles['transportation-choose']}>
                        <div className={styles['transportation-btn-div']}>
                            <input type="radio" name="living-type" className={styles['radio-btn']} defaultChecked
                                onClick={() => setEachLivingCost({...eachLivingCost, type: true})}/>대중교통
                        </div>
                        <div className={styles['transportation-btn-div']}>
                            <input type="radio" name="living-type" className={styles['radio-btn']}
                                onClick={() => setEachLivingCost({...eachLivingCost, type: false})}/>자차
                        </div>
                    </div>
                    
                </div>
                
                {eachLivingCost.type ? <PublicTransport eachLivingCost={eachLivingCost} setEachLivingCost={setEachLivingCost}/> : 
                    <OwnCar eachLivingCost={eachLivingCost} setEachLivingCost={setEachLivingCost}/>}
            </div>
        
    );
}

function PublicTransport({ eachLivingCost, setEachLivingCost }){
    return(
        <input type="text" placeholder="입력해주세요" className={`${styles['transportation-input']} ${styles['input-margin']} ${styles['input-style']}`}
            value={eachLivingCost.publicTransport} onChange={e => {setEachLivingCost({...eachLivingCost, publicTransport: e.target.value})}}/>
    )
}

function OwnCar({ eachLivingCost, setEachLivingCost }){
    return(
        <input type="text" placeholder="기름값" className={`${styles['transportation-input']} ${styles['input-margin']} ${styles['input-style']}`}
        value={eachLivingCost.ownCar} onChange={e => {setEachLivingCost({...eachLivingCost, ownCar: e.target.value})}}/>
    )
}

export default CalcLivingCost;