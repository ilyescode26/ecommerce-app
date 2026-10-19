import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import products from './data/products';

export default function App() {
  // LOCAL state (useState): data only this component needs.
  // Compare with the cart, which lives in the Redux GLOBAL state.
  const [query, setQuery] = useState('');
  const [showCart, setShowCart] = useState(false);

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      <Navbar onShowCart={() => setShowCart(true)} />

      <header className="hero">
        <span className="hero-badge">New collection 2026</span>
        <h1>
          Gear that <span className="grad">levels up</span> your setup
        </h1>
        <p>Headphones, keyboards and accessories — curated for makers.</p>

        <div className="search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search a product..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </header>

      <main className="layout">
        <ProductList products={filtered} />
      </main>

      <Cart open={showCart} onClose={() => setShowCart(false)} />

      <footer className="footer">WAMD – TD/TP 2 · Built with React + Redux</footer>
    </div>
  );
}
