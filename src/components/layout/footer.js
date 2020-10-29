/* eslint-disable */
import React from 'react';
import "../../assets/components/layout/footer.scss"

function Footer() {
    return (
        <div className="webFooterView">
            <footer className="footer d-flex justify-content-between px-4 py-2 text-center text-white bg-dark">
                <span className="footer-details mb-0 fa-9em">
                    Copyright © IRADUKUNDA J. DIEU 2020
                </span>
                <div className="footer__icons">
                    <a href="#" className="footer__icons__link">
                        <span className="fa fa-facebook"></span>
                    </a>
                    <a href="#" className="footer__icons__link">
                        <span className="fa fa-instagram"></span>
                    </a>
                    <a href="#" className="footer__icons__link">
                        <span className="fa fa-linkedin"></span>
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
