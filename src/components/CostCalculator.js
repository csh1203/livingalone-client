import React from "react";
import '../css/Style.css';
import styles from '../css/CostCalculator.module.css'

function CostCalculator() {

    const clickCategory = (event) => {
        const categorys = document.getElementsByClassName('category');
        console.log(categorys);
        for(let i in categorys){
            console.log(i);
            console.log(event.target);
            if(categorys[i] == event.target){
                event.target.style.top = "-134px";
            }else{
                event.target.style.top = "-110px";
            }
        }
        

    }

    return (
        <div className={styles.main}>
            <img src="/images/calc_back.png" className={styles['back-img']} ></img>
            <div className={styles['category-div']}>
                <div className={styles['category']} onClick={clickCategory}>
                    <img src="/images/calc-home.png"></img>
                    <div className={styles['category-title']}>주거비용</div>
                    <div className={styles['category-amount']}>32,000</div>
                </div>
                <div className={styles['category']} onClick={clickCategory}>
                    <img src="/images/calc-living.png"></img>
                    <div className={styles['category-title']}>생활비</div>
                    <div className={styles['category-amount']}>32,000</div>
                </div>
                <div className={styles['category']} onClick={clickCategory}>
                    <img src="/images/calc-another.png"></img>
                    <div className={styles['category-title']}>기타</div>
                    <div className={styles['category-amount']}>32,000</div>
                </div>
                <div className={styles['category']} onClick={clickCategory}>
                    <img src="/images/calc-total.png"></img>
                    <div className={styles['category-title']}>총 금액</div>
                    <div className={styles['category-amount']}>32,000</div>
                </div>
            </div>

            <div className={styles['input-div']}>

            </div>
        </div>
       
        
    );
}

export default CostCalculator;