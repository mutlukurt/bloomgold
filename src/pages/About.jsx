import React from 'react';
import artisanImg from '../assets/about-artisan.png';

const About = () => {
    return (
        <div className="about-page section-padding container" style={{ paddingTop: '8rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                <div className="about-image">
                    <img src={artisanImg} alt="Master Jeweler at work" style={{ width: '100%', borderRadius: '4px' }} />
                </div>
                <div className="about-content">
                    <h1 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Our Legacy</h1>
                    <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
                        Founded in 1985, Bloom Gold began with a simple philosophy: jewelry should not just be worn, but experienced.
                        Every piece in our collection is a testament to generations of craftsmanship, forged in our private ateliers
                        where tradition meets modern artistry.
                    </p>
                    <p style={{ opacity: 0.8 }}>
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
