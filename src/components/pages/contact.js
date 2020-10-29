import React from 'react';
import "../../assets/components/pages/contact.scss"

function Contact() {
    return (
        <div className="contact-me d-flex">
            <h2 className="contact-title">Get in touch</h2>
            <div className="contact-form" id="contact_form">
                <div className="row mx-0 p-0 justify-content-between">
                    <div className="form-group w-1/2">
                        <label className="form-label">Name</label>
                        <input type="text" id="name" className="form-input px-2 py-1 border" />
                    </div>
                    <div className="form-group w-1/2">
                        <label className="form-label">Email</label>
                        <input type="text" id="email" className="form-input px-2 py-1 border" />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea name="" className="form-input p-2" id="message" cols="30" rows="7" ></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary px-4 fa-9em text-uppercase rounded-pill" id="submit">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
