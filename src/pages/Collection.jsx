import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';
import '../styles/Collection.css';

const Collection = () => {
    const { products } = useShop();
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');
    const [filter, setFilter] = useState(categoryParam || 'All');

    useEffect(() => {
        if (categoryParam) {
            setFilter(categoryParam);
        }
    }, [categoryParam]);

    const handleFilterChange = (cat) => {
        setFilter(cat);
        setSearchParams(cat === 'All' ? {} : { category: cat });
    };

    const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'];

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="collection-page section-padding container">
            <div className="collection-header">
                <h1>Our Collections</h1>
                <p>Discover our range of hand-crafted masterpieces.</p>
            </div>

            <div className="filter-bar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => handleFilterChange(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="product-grid">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Collection;
