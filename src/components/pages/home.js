import React from 'react';
import "../../assets/components/pages/home.scss"

function Home() {
    const scrollToId = (id) => {
        window.location.href = window.location.href.split("#")[0] + '#' + id
    }
    return (
        <div className="home-pages" id="home-pages">
            <div id="landing" className="landing">
                <div className="header-details" >
                    <div className="header-content text-center">
                        <h1 className="header-title mb-2">MOBILE APPLICATION AND
                FULLSTACK WEB DEVELOPER</h1>
                        <p className="header-text mb-2">
                            Specializing in full stack web development. If you are a business seeking a web presence or are looking
                            to
                            hire, contact me here. </p>
                        <li onClick={() => scrollToId('service-section')} className="btn btn-warning mt-2 rounded-pill border-0 py-3 px-5">Get started</li>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
