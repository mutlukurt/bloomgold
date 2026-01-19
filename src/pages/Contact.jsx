import React from 'react';
import storeImg from '../assets/contact-store.png';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-page container">
            <h1 className="contact-title">Visit Us</h1>

            <div className="contact-grid">
                <div className="contact-info">
                    <img src={storeImg} alt="Bloom Gold Storefront" className="contact-img" />

                    <div className="contact-details-grid">
                        <div className="contact-item">
                            <h3>
                                <MapPin size={20} /> Address
                            </h3>
                            <p>
                                125 Bond Street<br />
                                Mayfair, London<br />
                                W1S 1AR
                            </p>
                        </div>

                        <div className="contact-item">
                            <h3>
                                <Clock size={20} /> Hours
                            </h3>
                            <p>
                                Mon - Sat: 10am - 7pm<br />
                                Sun: 12pm - 6pm
                            </p>
                        </div>

                        <div className="contact-item">
                            <h3>
                                <Phone size={20} /> Phone
                            </h3>
                            <p>+44 (0) 20 7123 4567</p>
                        </div>

                        <div className="contact-item">
                            <h3>
                                <Mail size={20} /> Email
                            </h3>
                            <p>concierge@bloomgold.com</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h2>Send an Enquiry</h2>
                    <form className="contact-form">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="form-input"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="form-input"
                        />
                        <select className="form-select">
                            <option>General Enquiry</option>
                            <option>Book an Appointment</option>
                            <option>Custom Commission</option>
                        </select>
                        <textarea
                            placeholder="Message"
                            rows="5"
                            className="form-textarea"
                        ></textarea>
                        <button className="btn btn-primary form-btn">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
