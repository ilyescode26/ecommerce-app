import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions';

// ProductCard gets one product via PROPS and dispatches
// an action to the Redux store when the user clicks "Add".
// It also keeps a tiny LOCAL state to show a short "Added" feedback.
export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch(addToCart(product));
    setAdded(true);
    setTimeout(() => setAdded(false), 900);
  };

  return (
    <article className="card">
      <div className="thumb">
        <span>{product.emoji}</span>
      </div>

      <div className="card-body">
        <span className="category">{product.category}</span>
        <h3>{product.title}</h3>
        <p className="price">{product.price.toLocaleString()} DA</p>
      </div>

      <button
        className={`add-btn ${added ? 'added' : ''}`}
        onClick={handleAdd}
        disabled={added}
      >
        {added ? '✓ Added' : 'Add to cart'}
      </button>
    </article>  
  );
}
