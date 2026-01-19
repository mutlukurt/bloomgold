import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';
import heroBg from '../assets/hero-bg.png';
import '../styles/Home.css';

const Home = () => {
    const { products } = useShop();

    // Featured products (first 3)
    const featuredProducts = products.slice(0, 3);

    return (
        <div className="home-page">
            <Hero image={heroBg} />

            <section className="section-padding container intro-section">
                <h2 className="section-title">Exquisite Craftsmanship</h2>
                <p className="section-desc">
                    Discover our exclusive collection of hand-crafted jewelry, designed to illuminate your most precious moments.
                    From timeless classics to modern masterpieces, Bloom Gold defines luxury.
                </p>
            </section>

            <section className="section-padding container featured-section">
                <div className="section-header">
                    <h2 className="section-title">Featured Collections</h2>
                    <Link to="/collections" className="btn btn-outline">View All</Link>
                </div>
                <div className="product-grid">
                    {featuredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                    <h2>Bespoke Services</h2>
                    <p>create something as unique as your story</p>
                    <Link to="/contact" className="btn btn-primary">Book Consultation</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
