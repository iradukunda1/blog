import React from 'react';
/* eslint-disable */
import About from '../pages/about.js';
import Home from "../pages/home.js"
import Services from '../pages/services.js';
import Contact from '../pages/contact.js';
import Portfoil from '../pages/portfoil.js';

// General scroll to element function

function Content() {
    return (
        <div className="webContentView">
            <div id="home-section"><Home /></div>
            <div id="service-section"><Services /></div>
            <div id="about-section"><About /></div>
            <div id="portofiol-section"><Portfoil /></div>
            <div id="contact-section"><Contact /></div>
        </div>
    );

}

export default Content;
