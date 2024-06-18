import React from "react";

// 스타일
import '../css/common/Style.css';

// 컴포넌트
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
import AllQnABoard from "../components/qna/AllQnABoard";

function AllQnABoardPage() {
    return (
        <div>
            <AllQnABoard />
            <Nav />
            <Footer />
        </div>
    )
}

export default AllQnABoardPage;
