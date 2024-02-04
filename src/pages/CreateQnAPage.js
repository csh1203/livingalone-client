import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import CreateQnAFrom from "../components/qna/CreateQnAFrom";

function CreateQnAPage() {
    return (
        <div>
            <Nav />
            <CreateQnAFrom />
            <Footer />
        </div>
    );
};

export default CreateQnAPage;