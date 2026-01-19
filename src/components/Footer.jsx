import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <h2 className="footer-logo">Bloom Gold</h2>
                    <p>Exquisite jewelry for life's most precious moments.</p>
                </div>

                <div className="footer-links">
                    <div className="link-column">
                        <h3>Shop</h3>
                        <Link to="/collections">All Collections</Link>
                        <Link to="/collections?category=Rings">Rings</Link>
                        <Link to="/collections?category=Necklaces">Necklaces</Link>
                        <Link to="/collections?category=Earrings">Earrings</Link>
                    </div>
                    <div className="link-column">
                        <h3>Company</h3>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>

                <div className="footer-social">
                    <h3>Follow us</h3>
                    <div className="social-icons">
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Bloom Gold. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
