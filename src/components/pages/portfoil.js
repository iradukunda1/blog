/* eslint-disable */
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import "../../assets/components/pages/portfoil.scss"
import shuri_tour from "../../assets/img/shuri-tour.png"
import us_shop from "../../assets/img/us-shop.png"



function Portfoil() {
    useEffect(() => {
        nextSlide("1")
    }, [])

    const [slideIndex, setSlideIndex] = useState("1")

    const nextSlide = (n) => {
        setSlideIndex(slideIndex + n);
        showSlides(slideIndex);
    }

    // setInterval(() => {
    //     nextSlide("1")
    // }, 5000)

    const showSlides = (n) => {
        var i;
        var slides = document.getElementsByClassName('slide')
        if (n > slides.length) {
            setSlideIndex(1)
        }
        if (n < 1) {
            setSlideIndex(slides.length)
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "grid";
    }

    const next = (n) => {
        setSlideIndex(slideIndex + n)
    }
    const preview = (n) => {
        setSlideIndex(slideIndex - n)
    }

    return (
        <div className="portfoil">
            <h4 className="text-uppercase font-weight-bold">Portofiol</h4>
            <div className="d-flex align-items-center justify-content-between portfoils py-4">
                <span className="prev  my-auto"></span>
                <div className="portfoil-slides  px-4">
                    <div className="portfoil-content fade-show slide" id="slide">
                        <img src={shuri_tour} alt="shuri-tour" />
                        <div className="portfolio-details">
                            <div className="portfoil-title text-center">
                                <h3 className="d-inline-block mr-2">Shuri Tour</h3>
                                <span className="badge badge-primary">2020</span>
                            </div>
                            <p className="portfolio-text fa-9em text-justify">
                                A platform for online booking tour for schools, booking and viewing different experiences from different place which are most popular Rwanda.
                        </p>
                            <button className="btn btn-primary btn-portfolio mx-auto px-4"
                                onClick={() => {
                                    window.location.href = "https://shuri-tours.netlify.app/"
                                }}>Visit site
                                </button>
                        </div>
                    </div>
                    <div className="portfoil-content fade-show slide" id="slide">
                        <img src={us_shop} alt="shuri-tour" />
                        <div className="portfolio-details">
                            <div className="portfoil-title text-center">
                                <h3 className="d-inline-block mr-2">Su Bouquets</h3>
                                <span className="badge badge-primary">2020</span>
                            </div>
                            <p className="portfolio-text fa-9em text-justify">
                                A platform for online booking tour for schools, booking and viewing different experiences from different place which are most popular Rwanda.
                        </p>
                            <button className="btn btn-primary btn-portfolio mx-auto px-4"
                                onClick={() => {
                                    window.location.href = "https://us-shop.netlify.app/"
                                }}> Visit site
                            </button>
                        </div>
                    </div>
                </div>
                <span className="next my-auto"></span>
            </div>
        </div>
    );
}

export default Portfoil;
