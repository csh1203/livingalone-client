import React from "react";
import MainCostCalculator from "../components/calc/CostCalculator";
import Footer from "../components/common/Footer";
import Nav from '../components/common/Nav';
import '../css/common/Style.css';

function CostCalculatorPage() {
    return (
        <div>
            <MainCostCalculator />

            <Nav />
            <Footer />
        </div>
    )
}

export default CostCalculatorPage;