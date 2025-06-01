import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ProductData from "./context/ProductContext.jsx";
import CartProvider from "./context/CartContext.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductData>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductData>
  </BrowserRouter>
);
