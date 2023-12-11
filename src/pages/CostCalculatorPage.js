import React from "react";
import '../css/common/Style.css';
import Nav from '../components/common/Nav';
import Footer from "../components/common/Footer";
import MainCostCalculator from "../components/calc/CostCalculator";

function CostCalculatorPage() {
    return (
        <div>
            <Nav />  
            <MainCostCalculator />          
            <Footer />
        </div>
    )
}

export default CostCalculatorPage;