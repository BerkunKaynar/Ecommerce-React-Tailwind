import "./App.css";
import Header from "./components/header/Header";
import Home from "./modules/Home/Home";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Product from "./modules/product/Product";
import Products from "./modules/products/Products";
import CategoryProducts from "./modules/CategoryProducts/CategoryProducts";
import Cart from "./modules/Cart/Cart";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories/:name" element={<CategoryProducts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
