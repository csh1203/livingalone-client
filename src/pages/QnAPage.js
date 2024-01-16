import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import QnAMain from "../components/qna/QnAMain";

function QnAPage() {
    return (
        <div>
            <Nav/>
            <QnAMain />
            <Footer/>
        </div>
    );
}

export default QnAPage;