import React from 'react';
import artisanImg from '../assets/about-artisan.png';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-page container">
            <div className="about-grid">
                <div className="about-image">
                    <img src={artisanImg} alt="Master Jeweler at work" />
                </div>
                <div className="about-content">
                    <h1>Our Legacy</h1>
                    <p>
                        Founded in 1985, Bloom Gold began with a simple philosophy: jewelry should not just be worn, but experienced.
                        Every piece in our collection is a testament to generations of craftsmanship, forged in our private ateliers
                        where tradition meets modern artistry.
                    </p>
                    <p>
                        Our master artisans dedicate hundreds of hours to a single piece, ensuring that the gold is pure, the diamonds
                        are ethically sourced, and the design is nothing short of perfection. When you choose Bloom Gold, you are not
                        just buying jewelry; you are acquiring a piece of history.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
