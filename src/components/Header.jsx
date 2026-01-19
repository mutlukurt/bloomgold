import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Menu, X, ShoppingBag } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { toggleCart, cartCount } = useShop();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Prevent scrolling when menu is open
        document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo">
                    Bloom Gold
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <Link to="/">Home</Link>
                    <Link to="/collections">Collections</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <div className="header-actions">
                    <button className="icon-btn" onClick={toggleCart}>
                        <ShoppingBag size={24} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </button>

                    <button className="mobile-menu-btn" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-nav-links">
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                        <Link to="/collections" onClick={toggleMenu}>Collections</Link>
                        <Link to="/about" onClick={toggleMenu}>About</Link>
                        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
