import ProductCard from './ProductCard';

// ProductList receives the products through PROPS and
// just displays them as a grid of reusable ProductCard components.
export default function ProductList({ products }) {
  return (
    <section className="products">
      <div className="products-head">
        <h2>Products</h2>
        <span className="count">{products.length} items</span>
      </div>

      {products.length === 0 ? (
        <div className="empty">
          <span>🔍</span>
          <p>No product matches your search.</p>
        </div>
      ) : (
        <div className="grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
