import React from "react";
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
import CreateQnAFrom from "../components/qna/CreateQnAFrom";

function CreateQnAPage() {
    return (
        <div>
            <CreateQnAFrom />
            <Nav />
            <Footer />
        </div>
    );
};

export default CreateQnAPage;