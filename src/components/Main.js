import React from "react";
import styles from '../css/Main.module.css';
import '../css/Style.css';
import Nav from './Nav';
import MainBanner from './MainBanner';
import MainArticles from "./MainArticles";

function Main() {
    return (
        <div>
            <Nav />
            <MainBanner />
            <MainArticles />
        </div>
    )
}

export default Main;