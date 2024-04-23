import React, {useState, useEffect} from "react";
import '../../css/common/Style.css';
import styles from '../../css/calc/CalcBox.module.css'

import CalcInput from "./CalcInput";
import SaveCost from './SaveCost'

function CalcLivingCost({ livingCost, setLivingCost, isNum }){
    const [ eachLivingCost, setEachLivingCost ] = useState({})

    const defaultValue = {
        type: true,
        food: '',
        dailyNecessity: '',
        publicTransport: '',
        ownCar: ''
    }

    useEffect(() => {
        getLocalStorage();
    }, []);
    
    const getLocalStorage = () => {
        const localValue = JSON.parse(localStorage.getItem('livingCost'));
        if(localValue){
            setEachLivingCost(localValue);
        }else{
            setEachLivingCost(defaultValue)
        }
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
            <div className={styles['living-container']}>
                <div className={styles['food-expenses-div']}>
                    <div className={styles['input-title']}>식비</div>
                    <div className={`${styles['monthly-input-div']} ${styles['input-margin']}`}>
                        <CalcInput placeholder="입력해주세요" value={eachLivingCost.food} 
                            onChange={e => {setEachLivingCost({...eachLivingCost, food: e.target.value})}}/>
                    </div>
                </div>
                <div className={styles['daily-necessity-div']}>
                    <div className={styles['input-title']}>생필품</div>
                    <CalcInput placeholder="입력해주세요" value={eachLivingCost.dailyNecessity} 
                        onChange={e => {setEachLivingCost({...eachLivingCost, dailyNecessity: e.target.value})}}/>
                </div>
            </div>
            <div className={styles['transportation-cost-div']}>
                <div className={styles['transportation-title']}>교통비</div>
                <div className={styles['transportation-choose']}>
                    <div className={styles['transportation-btn-div']}>
                        <input type="radio" name="living-type" className={styles['radio-btn']} checked={eachLivingCost.type}
                            onClick={() => setEachLivingCost({...eachLivingCost, type: true})}/>대중교통
                    </div>
                    <div className={styles['transportation-btn-div']}>
                        <input type="radio" name="living-type" className={styles['radio-btn']} checked={!eachLivingCost.type}
                            onClick={() => setEachLivingCost({...eachLivingCost, type: false})}/>자차
                    </div>
                </div> 
            </div>
                
            {eachLivingCost.type ? 
            <CalcInput placeholder="입력해주세요" value={eachLivingCost.publicTransport} 
                onChange={e => {setEachLivingCost({...eachLivingCost, publicTransport: e.target.value})}}/> : 
            <CalcInput placeholder="기름값" value={eachLivingCost.ownCar} 
                onChange={e => {setEachLivingCost({...eachLivingCost, ownCar: e.target.value})}}/>}

            <SaveCost cost={livingCost} name="livingCost" totalName="totalLiving" saveCost={eachLivingCost} setCost={setEachLivingCost} defaultValue={defaultValue}/>
        </div>
    );
}

export default CalcLivingCost;