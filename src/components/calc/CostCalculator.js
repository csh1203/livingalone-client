import React, {useState} from "react";
import '../css/Style.css';
import styles from '../css/CostCalculator.module.css'

function MainCostCalculator() {
    return(
        <div className={styles['main']}>
            <CategoryCostCalculator></CategoryCostCalculator>
            <InputCostCalculator></InputCostCalculator>
        </div>
    )
}

function CategoryCostCalculator() {

    const caterogyHome = React.useRef(null);
    const caterogyLiving = React.useRef(null);
    const caterogyAnother = React.useRef(null);
    const caterogyTotal = React.useRef(null);

    const clickCategory = (event) => {
        caterogyHome.current.style = "top: -110px";
        caterogyLiving.current.style = "top: -110px";
        caterogyAnother.current.style = "top: -110px";
        caterogyTotal.current.style = "top: -110px";
        event.target.style.top = "-135px"
              
    }

    return (
        <div className={styles.main}>
            <div className={styles['back-img-div']} style={{backgroundImage: 'url(/images/calc_back.png)'}}></div>
            <div className={styles['category-div']}>
                <div className={styles['category']} onClick={clickCategory} ref={caterogyHome}>
                    <img src="/images/calc-home.png"></img>
                    <div className={styles['category-title']}>주거비용</div>
                    <div className={styles['category-amount']}>32,000</div>
                </div>
                <div className={styles['category']} onClick={clickCategory} ref={caterogyLiving}>
                    <img src="/images/calc-living.png"></img>
                    <div className={styles['category-title']}>생활비</div>
                    <div className={styles['category-amount']}>32,000</div>
                </div>
                <div className={styles['category']} onClick={clickCategory} ref={caterogyAnother}>
                    <img src="/images/calc-another.png"></img>
                    <div className={styles['category-title']}>기타</div>
                    <div className={styles['category-amount']}>32,000</div>
                </div>
                <div className={styles['category']} onClick={clickCategory} ref={caterogyTotal}>
                    <img src="/images/calc-total.png"></img>
                    <div className={styles['category-title']}>총 금액</div>
                    <div className={styles['category-amount']}>32,000</div>
                </div>
            </div>

            
        </div>
       
        
    );
}

function InputCostCalculator() {

    const selectList = ["직접입력", "160,000(기본)"];
    const [Selected, setSelected] = useState("");

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    return(
        <div className={styles["main"]}>
            <div className={styles['input-div']}>
                <div className={styles['input-title']}>거주유형</div>
                <RadioGroup>
                    <Radio name="living-type" value="monthly" defaultChecked>
                        월세
                    </Radio>
                    <Radio name="living-type" value="charter">
                        전세
                    </Radio>
                </RadioGroup>
                <div className={styles['monthly-input-div']}>
                    <input type="text" placeholder="월세" className={styles['monthly-input']}/>
                    <input type="text" placeholder="보증금" className={styles['monthly-input']}/>
                </div>
                <div className={styles['input-subtitle-div']}>
                    <div className={styles['input-subtitle']}>관리비</div>
                    <div className={styles['input-subtitle']}>공과금</div>
                </div>
                <div className={styles['monthly-input-div']}>
                    <input type="text" placeholder="입력해주세요" className={styles['input-form']}/>
                    <select onChange={handleSelect} value={Selected} className={styles['input-form']}>
                    {selectList.map((item) => (
                        <option value={item} key={item}>
                        {item}
                        </option>
                    ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

function Radio({ children, value, name, defaultChecked, disabled }) {
    return (
      <label className={styles['input-radio']}>
        <input
          type="radio"
          value={value}
          name={name}
          defaultChecked={defaultChecked}
          disabled={disabled}
        />
        {children}
      </label>
    );
}

  function RadioGroup({ label, children }) {
    return (
      <div className={styles['radio-div']}>
        <legend>{label}</legend>
        {children}
      </div>
    );
}

export default MainCostCalculator;