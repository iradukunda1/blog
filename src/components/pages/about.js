import React, { Component } from 'react';
import "../../assets/components/pages/about.scss"
import profile from "../../assets/img/profile.jpg"

class About extends Component {
    render() {
        return (
            <div className="about-me d-flex">
                <img src={profile} className="about-img rounded-circle" alt="" />
                <div className="about-container">
                    <h3 className="about-title">Jean de Dieu - Web &amp; mobile developer</h3>
                    <p className="about-text fa-9em text-black">
                        Motivated web designer and developer with experience creating custom websites through  Node Js, Express Js, React Js, PHP, Laravel,
                        Javascript, Java, Vue JS, HTML and CSS. I have strong
                        collaboration skills and proven history of application development.
                </p>
                </div>
            </div>
        );
    }
}

export default About;
