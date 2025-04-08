import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/cart/CartPage";
import ProductsPage from "./pages/product/ProductsPage";
import MainPage from "./pages/main/MainPage";
import { ToastContainer } from 'react-toastify';
import ProductDetails from "./pages/productDetails/ProductDetails";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import Header from './components/header/Header'
import CreateProduct from "./pages/createProduct/CreateProduct";
import UpdateProduct from "./pages/updateProduct/UpdateProduct";

function App() {
  return (
    <>
    <Header/>
      <ToastContainer />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/update-product/:id" element={<UpdateProduct/>} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;