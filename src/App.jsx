import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';

import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ShopProvider>
      <Router>
        <ScrollToTop />
        <div className="app-container">
          <Header />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collections" element={<Collection />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
