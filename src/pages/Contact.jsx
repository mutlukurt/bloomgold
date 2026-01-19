import React from 'react';
import storeImg from '../assets/contact-store.png';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="contact-page container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--color-primary)', fontSize: '3rem' }}>Visit Us</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                <div className="contact-info">
                    <img src={storeImg} alt="Bloom Gold Storefront" style={{ width: '100%', marginBottom: '2rem', borderRadius: '4px' }} />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        <div>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <MapPin size={20} /> Address
                            </h3>
                            <p style={{ opacity: 0.7 }}>
                                125 Bond Street<br />
                                Mayfair, London<br />
                                W1S 1AR
                            </p>
                        </div>

                        <div>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={20} /> Hours
                            </h3>
                            <p style={{ opacity: 0.7 }}>
                                Mon - Sat: 10am - 7pm<br />
                                Sun: 12pm - 6pm
                            </p>
                        </div>

                        <div>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Phone size={20} /> Phone
                            </h3>
                            <p style={{ opacity: 0.7 }}>+44 (0) 20 7123 4567</p>
                        </div>

                        <div>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Mail size={20} /> Email
                            </h3>
                            <p style={{ opacity: 0.7 }}>concierge@bloomgold.com</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form" style={{ background: '#1a1a1a', padding: '3rem', borderRadius: '4px' }}>
                    <h2 style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>Send an Enquiry</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            style={{ padding: '1rem', background: 'transparent', border: '1px solid #333', color: '#fff', outline: 'none' }}
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            style={{ padding: '1rem', background: 'transparent', border: '1px solid #333', color: '#fff', outline: 'none' }}
                        />
                        <select style={{ padding: '1rem', background: 'transparent', border: '1px solid #333', color: '#fff', outline: 'none' }}>
                            <option>General Enquiry</option>
                            <option>Book an Appointment</option>
                            <option>Custom Commission</option>
                        </select>
                        <textarea
                            placeholder="Message"
                            rows="5"
                            style={{ padding: '1rem', background: 'transparent', border: '1px solid #333', color: '#fff', outline: 'none' }}
                        ></textarea>
                        <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
