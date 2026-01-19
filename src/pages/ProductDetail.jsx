import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ShoppingBag, ArrowLeft, Star, Share2 } from 'lucide-react';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const { products, addToCart } = useShop();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="container" style={{ paddingTop: '10rem', textAlign: 'center' }}>
                <h2>Product not found</h2>
                <Link to="/collections" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Collections</Link>
            </div>
        );
    }

    return (
        <div className="product-detail-page section-padding container">
            <Link to="/collections" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', opacity: 0.7 }}>
                <ArrowLeft size={18} /> Back to Collections
            </Link>

            <div className="product-detail-grid">
                <div className="product-images">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="product-info-column">
                    <span className="product-category-label">
                        {product.category}
                    </span>
                    <h1 className="product-title">{product.name}</h1>

                    <div className="product-price-section">
                        <span className="product-price-value">${product.price.toLocaleString()}</span>
                        <div className="product-rating">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                        </div>
                        <span style={{ opacity: 0.5, fontSize: '0.9rem' }}>(24 reviews)</span>
                    </div>

                    <p className="product-description">
                        {product.description}
                    </p>

                    <div className="product-actions">
                        <button
                            className="btn btn-primary btn-add-to-cart"
                            onClick={() => addToCart(product)}
                        >
                            <ShoppingBag size={20} /> Add to Bag
                        </button>
                        <button className="btn btn-share">
                            <Share2 size={20} />
                        </button>
                    </div>

                    <div className="product-meta">
                        <h4>Product Details</h4>
                        <ul>
                            <li>• 18k Solid Gold</li>
                            <li>• Ethically Sourced Gemstones</li>
                            <li>• Handcrafted in London</li>
                            <li>• Lifetime Warranty</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
