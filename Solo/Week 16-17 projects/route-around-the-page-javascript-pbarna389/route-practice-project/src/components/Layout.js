import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ text }) => {
    return (
        <>
            <Header />
            <h1> {text} </h1>
            <Footer />
        </>
    )
}

export default Layout