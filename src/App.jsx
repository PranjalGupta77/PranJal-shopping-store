import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import ProductDetail from './ProductDetail';
import ProductListPage from './ProductListPage';
import NavBar from './NavBar';
import Footer from './Footer';
import Error from './Error';
import CartPage from './CartPage';
import SingUpPage from './SingUpPage';
import LoginPage from './LoginPage';
import ForgotPasswordPage from './ForgotPasswordPage';


function App() {

const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString)
  
  const [cart, setCart] = useState(savedData);
  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;

    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart",cartString);
  };
  
  const totalCount = Object.keys(cart).reduce(function(previous, current) {
    return previous + cart[current];
  }, 0);

  return (
    <div className="flex flex-col bg-gray-200 h-screen overflow-scroll">

      <NavBar productCount={totalCount} />

      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
          <Route path="*" element={<Error />} />
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage />} />
          <Route path="/SingUpPage" element={<SingUpPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;


