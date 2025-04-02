import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/cart/CartPage";
import ProductsPage from "./pages/product/ProductsPage";
import MainPage from "./pages/main/MainPage";
import { ToastContainer } from 'react-toastify';
import ProductDetails from "./pages/productDetails/ProductDetails";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Header from "./components/header/Header";

function App() {
  return (
    <>
    <Header/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;