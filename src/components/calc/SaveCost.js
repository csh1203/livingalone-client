import React from "react";
import '../../css/common/Style.css';
import styles from '../../css/calc/SaveCost.module.css'

function SaveCost({ cost, name, totalName, saveCost, setCost, defaultValue }) {

    const handlerSave = () => {
        localStorage.setItem(name, JSON.stringify(saveCost))
        localStorage.setItem(totalName, cost);
        setCost(saveCost);
    }

    const handlerDelete = () => {
        localStorage.removeItem(name);
        localStorage.removeItem(totalName);
        setCost(defaultValue);
    }

    return(
        <div className={styles['pin-container']}>
            <div className={styles['sum-container']}>
                <div className={styles['sum-div']}>
                    <div className={styles['sum-title']}>합계</div>
                    <div className={styles['sum-input']}>
                        {cost}
                    </div>
                </div>
            </div>
            
            <hr className={styles['hr']}/>
            <div className={styles['btn-group']}>
                <div className={styles['delete-btn']} onClick={handlerDelete}>삭제</div>
                <div className={styles['save-btn']} onClick={handlerSave}>저장</div>
            </div>
        </div>
    )
}

export default SaveCost;