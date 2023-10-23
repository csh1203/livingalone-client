import React from "react";
import '../css/Style.css';
import Nav from './Nav';
import Footer from "./Footer";
import CostCalculator from "./CostCalculator";

function CostCalculatorPage() {
    return (
        <div>
            <Nav />  
            <CostCalculator />          
            <Footer />
        </div>
    )
}

export default CostCalculatorPage;