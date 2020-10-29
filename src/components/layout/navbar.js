/* eslint-disable */
import React, { useEffect } from 'react';
import "../../assets/components/layout/navbar.scss"

function Navbar() {
    // const history = useHistory()
    // function service() {
    //     history.push({ pathname: '/service-section', hash: "#service-section" })
    // }
    useEffect(() => {
        // console.dir(this.props.location.search), []
    })
    const scrollToId = (id) => {
        window.location.href = window.location.href.split("#")[0] + '#' + id
    }
    return (
        <div className="webNavBar" >
            <div className="web-nav-content d-flex justify-content-between">
                <div className="logo-container"><span>Iradukunda jean</span></div>
                <ul className="unstyled nav-links d-flex">
                    <li onClick={() => scrollToId('home-section')}>HOME</li>
                    <li onClick={() => scrollToId('service-section')}>SERVICES</li>
                    <li onClick={() => scrollToId('about-section')}>ABOUT ME</li>
                    <li onClick={() => scrollToId('portofiol-section')}>PORTOFIOL</li>
                    <li onClick={() => scrollToId('contact-section')}>CONTACT ME</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
