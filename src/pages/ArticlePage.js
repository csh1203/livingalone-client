import React, { useState } from "react";
import ArticleList from "../components/article/ArticleList";
import ArticleSearch from "../components/article/ArticleSearch";
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";

function ArticlePage() {

    const [keyword, setKeyword] = useState("")

    return (
        <div>
            <Nav />
            <ArticleSearch handleOnChange={setKeyword} />
            <ArticleList keyword={keyword.trim()} />
            <Footer />
        </div>
    );
}

export default ArticlePage;