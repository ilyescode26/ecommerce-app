import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from '../store/actions';

// Cart is fully driven by the GLOBAL Redux state:
// - useSelector reads the items
// - useDispatch sends actions to add/remove/update quantities
export default function Cart({ open, onClose }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const count = items.reduce((sum, item) => sum + item.qty, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div className={`overlay ${open ? 'show' : ''}`} onClick={onClose} />

      <aside className={`cart ${open ? 'open' : ''}`}>
        <header className="cart-head">
          <div>
            <h2>Your cart</h2>
            <span className="cart-sub">
              {count} {count === 1 ? 'item' : 'items'}
            </span>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close cart">
            ✕
          </button>
        </header>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="empty">
              <span>🛒</span>
              <p>Your cart is empty.</p>
              <small>Add some products to get started.</small>
            </div>
          ) : (
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <span className="ci-emoji">{item.emoji}</span>

                  <div className="ci-info">
                    <strong>{item.title}</strong>
                    <span>{item.price.toLocaleString()} DA</span>
                  </div>

                  <div className="ci-qty">
                    <button onClick={() => dispatch(decreaseQty(item.id))}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="cart-foot">
            <div className="cart-total">
              <span>Total</span>
              <strong>{total.toLocaleString()} DA</strong>
            </div>
            <button className="checkout-btn">Checkout</button>
            <button className="clear-btn" onClick={() => dispatch(clearCart())}>
              Clear cart
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
