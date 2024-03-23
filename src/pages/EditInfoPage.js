import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import EditInfo from "../components/edit-info/EditInfo"

function EditInfoPage() {
    return(
        <div>
            <Nav/>
            <EditInfo/>
            <Footer/>
        </div>
    )
}

export default EditInfoPage;