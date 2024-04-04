import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

import FindAccount from "../components/auth/find-account/FindAccount";
function FindAccountPage() {
    return(
        <>
            <Nav/>
            <FindAccount/>
            <Footer/>
        </>
    )
}

export default FindAccountPage;