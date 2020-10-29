/* eslint-disable */
import React from 'react';
import Navbar from "../layout/navbar"
import Content from "../layout/content"
import Footer from "../layout/footer"
import "../../assets/components/layout/webContentLayout.scss"

function WebContentLayout() {
    return (
        <div className="webContentLayout" >
            <Navbar />
            <Content />
            <Footer />
        </div>

    );
}

export default WebContentLayout;
