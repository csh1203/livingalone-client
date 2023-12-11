import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import Login from "../components/auth/Login";
function LoginPage() {
    return (
        <div>
            <Nav></Nav>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
}

export default LoginPage;