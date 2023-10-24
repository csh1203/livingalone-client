import React from "react";
import '../css/Style.css';
import Nav from './Nav';
import Footer from "./Footer";
import MainCostCalculator from "./CostCalculator";

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