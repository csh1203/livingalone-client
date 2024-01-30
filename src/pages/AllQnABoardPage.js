import React from "react";

// 스타일
import '../css/common/Style.css';

// 컴포넌트
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import AllQnABoard from "../components/qna/AllQnABoard";

function AllQnABoardPage () {
    return (
        <div>
            <Nav />
            <AllQnABoard />
            <Footer />
        </div>
    )
}

export default AllQnABoardPage;
