import React from 'react';
import '../styles/Hero.css';

const Hero = ({ image }) => {
    return (
        <section className="hero">
            <div className="hero-background">
                {image ? (
                    <img src={image} alt="Luxury Store Interior" />
                ) : (
                    <div className="placeholder-bg"></div>
                )}
                <div className="overlay"></div>
            </div>

            <div className="container hero-content">
                <h1 className="hero-title fade-in-up">Bloom Gold</h1>
                <p className="hero-subtitle fade-in-up delay-1">Timeless Elegance, Crafted for You.</p>
                <div className="hero-actions fade-in-up delay-2">
                    <a href="/collections" className="btn btn-primary">Discover Collection</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
