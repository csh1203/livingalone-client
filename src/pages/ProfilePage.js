import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import BasicProfileMain from "../components/profile/BasicProfileMain";

function ProfilePage() {
    return (
        <div>
            <Nav />
            <BasicProfileMain />
            <Footer />
        </div>
    )
}

export default ProfilePage;
