import { useSelector } from 'react-redux';

// Navbar reads the GLOBAL state (cart) with useSelector and
// shows the total number of items. No props needed for the count.
export default function Navbar({ onShowCart }) {
  const count = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.qty, 0)
  );

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-mark">🛍️</span>
        <span>
          Tech<strong>Nest</strong>
        </span>
      </div>

      <button className="cart-btn" onClick={onShowCart}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <span className="cart-label">Cart</span>
        {count > 0 && <span className="badge">{count}</span>}
      </button>
    </nav>
  );
}
