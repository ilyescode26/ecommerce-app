# TechNest Store – React + Redux E-commerce

## Student
- **Name:** _(write your name here)_
- **Module:** WAMD – TD/TP 2
- **School:** ENSTA

## Application / Store name
**TechNest Store** – a simple online shop for tech gadgets and accessories.

## Description
A small e-commerce frontend built with React.js. Users can browse a product
catalog, search products, add them to a shopping cart, change quantities and
remove items. The shopping cart is stored in a **Redux global state**, so every
component (Navbar, ProductCard, Cart) reads and updates the same data without
passing it through props manually.

## Technologies used
- React.js (with JSX)
- Redux (store, actions, reducer)
- React-Redux (`Provider`, `useSelector`, `useDispatch`)
- JavaScript (ES6+)
- Vite (dev server / build)
- Plain CSS

## Main React components
| Component | Role |
|---|---|
| `App` | Layout, holds local `useState` for search and cart visibility |
| `Navbar` | Shows the store name and the live cart item count (from Redux) |
| `ProductList` | Receives products via **props** and renders the grid |
| `ProductCard` | Receives one product via **props**, dispatches `addToCart` |
| `Cart` | Reads the cart from Redux, dispatches remove / quantity / clear actions |

## Redux state managed by the application
```
state = {
  cart: {
    items: [
      { id, title, category, price, emoji, qty }
    ]
  }
}
```

Actions (in `src/store/actions.js`):
- `ADD_TO_CART`
- `REMOVE_FROM_CART`
- `INCREASE_QTY`
- `DECREASE_QTY`
- `CLEAR_CART`

The reducer (`src/store/reducers.js`) is a pure function that returns a new
state for each action. The store is created in `src/store/store.js`.

## Implemented features
Required:
- Product catalog with product information
- Add products to cart
- Remove products from cart
- Interface updates automatically when the cart changes (Redux)
- Multiple reusable components, props, local state, events

Optional (bonus):
- Product search
- Quantity management (+ / −)
- Cart total calculation
- Clear cart

## Project structure
```
ecommerce-app/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # Provider + render
    ├── App.jsx             # layout + local state
    ├── index.css
    ├── data/products.js    # static catalog
    ├── store/
    │   ├── actions.js
    │   ├── reducers.js
    │   └── store.js
    └── components/
        ├── Navbar.jsx
        ├── ProductList.jsx
        ├── ProductCard.jsx
        └── Cart.jsx
```

## How to run
```bash
npm install
npm run dev
```
Then open the URL shown in the terminal (default: http://localhost:5173).

To build for production:
```bash
npm run build
npm run preview
```
