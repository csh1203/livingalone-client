import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import ArticleSearch from "../components/article/ArticleSearch";
import ArticleList from "../components/article/ArticleList";

function ArticlePage() {
    return (
        <div>
            <Nav/>
            <ArticleSearch/>
            <ArticleList/>
            <Footer/>
        </div>
    );
}

export default ArticlePage;