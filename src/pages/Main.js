import React from "react";
import '../css/common/Style.css';
import Nav from '../components/common/Nav';
import MainArticles from "../components/main/MainArticles";
import Footer from "../components/common/Footer";
import MainBanner from "../components/main/MainBanner";

function Main() {
    return (
        <div>
            <Nav />
            <MainBanner />
            <MainArticles />
            <Footer />
        </div>
    )
}

export default Main;