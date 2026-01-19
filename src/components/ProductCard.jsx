import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
    const { addToCart } = useShop();

    return (
        <div className="product-card">
            <div className="product-image-container">
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} loading="lazy" />
                </Link>
                <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                    aria-label="Add to cart"
                >
                    <Plus size={20} />
                    <span>Add to Bag</span>
                </button>
            </div>
            <div className="product-info">
                <Link to={`/product/${product.id}`}>
                    <h3>{product.name}</h3>
                </Link>
                <p className="product-price">${product.price.toLocaleString()}</p>
                <p className="product-category">{product.category}</p>
            </div>
        </div>
    );
};

export default ProductCard;
