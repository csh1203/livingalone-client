import React from "react";
// import styles from '../css/Main.module.css';
import '../css/common/Style.css';
import Nav from '../components/common/Nav';
import MainArticles from "../components/main/MainArticles";
import Footer from "../components/common/Footer";

function Main() {
    return (
        <div>
            <Nav />
            {/* <MainBanner /> */}
            <MainArticles />
            <Footer />
        </div>
    )
}

export default Main;