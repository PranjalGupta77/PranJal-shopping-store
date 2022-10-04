// import React, { useState } from 'react';
// import { Routes, Route } from "react-router-dom";
// import ProductDetail from './ProductDetail';
// import ProductListPage from './ProductListPage';
// import NavBar from './NavBar';
// import Footer from './Footer';
// import Error from './Error';
// import CartPage from './CartPage';
// import SingUpPage from './SingUpPage';
// import LoginPage from './LoginPage';
// import ForgotPasswordPage from './ForgotPasswordPage';

// function App() {

//   const savedDataString = localStorage.getItem("my-cart") || "{}";

//   console.log("savedDataString", savedDataString);


//   const savedData = JSON.parse(savedDataString)

//   const [cart, setCart] = useState(savedData);
//   function handleAddToCart(productId, count) {
//     const oldCount = cart[productId] || 0;

//     const newCart = { ...cart, [productId]: oldCount + count };
//     updateCart(newCart);
//   };

//   function updateCart(newCart) {
//     setCart(newCart);
//     const cartString = JSON.stringify(newCart);
//     localStorage.setItem("my-cart", cartString);
//   }

//   const totalCount = Object.keys(cart).reduce(function(previous, current) {
//     return previous + cart[current];
//   }, 0);

//   return (
//     <div className="flex flex-col bg-gray-200 h-screen overflow-scroll">

//       <NavBar productCount={totalCount} />

//       <div className="grow">
//         <Routes>
//           <Route index element={<ProductListPage />} />
//           <Route path="/product/:id" element={<ProductDetail onAddToCart={handleAddToCart} />} />
//           <Route path="*" element={<Error />} />
//           <Route path="/CartPage" element={<CartPage cart={cart} updateCart={updateCart} />} />
//           <Route path="/LoginPage" element={<LoginPage />} />
//           <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage />} />
//           <Route path="/SingUpPage" element={<SingUpPage />} />
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   );
// }
// export default App;


// import React from 'react';
// import CartCheckOut from './CartCheckOut';
// import CartList from './CartList';
// import { HiArrowNarrowLeft } from "react-icons/hi"
// import { Link } from "react-router-dom";

// function CartPage({ cart, updateCart }) {
//   return (
//     <>
//       <div className="px-4">
//         <div className="p-5 max-w-6xl bg-white mx-auto px-10 py-6 my-16">

//           <div className="w-8 mb-3 ml-2">
//             <Link to="/" className="text-3xl "><HiArrowNarrowLeft></HiArrowNarrowLeft></Link>
//           </div>

//           <CartList cart={cart} updateCart={updateCart} />

          // <div className='md:hidden px-4 mt-3'>
          //   <div className='flex justify-center'>
          //     <input className="border px-2 rounded-md" placeholder='coupon code' />
          //     <button className="rounded-md bg-red-500 px-6 py-1 text-white hover:bg-red-600 ml-4">Apply coupon</button>
          //   </div>
          //   <div className='mt-2'>
          //     <button className="rounded-md px-10 py-2 mt-2 w-full bg-red-200 text-gray-500 hover:bg-red-300">Update cart</button>
          //   </div>
          // </div>

          // <div className="hidden md:block">
          //   <div className='flex items-center justify-between border px-6 py-4'>
          //     <div>
          //       <input className="border px-2 py-1 rounded-md" placeholder='coupon code' />
          //       <button className="rounded-md bg-red-500 px-6 py-1 text-white hover:bg-red-600 ml-4">Apply coupon</button>
          //     </div>
          //     <div>
          //       <button className="rounded-md bg-red-200 px-6 py-1 text-gray-500 hover:bg-red-300">Update cart</button>
          //     </div>
          //   </div>
          // </div>

          // <CartCheckOut></CartCheckOut>

        // </div>
//       </div>
//     </>
//   );
// }

// export default CartPage;


// import React from "react";
// import CartRow from "./CartRow";

// function CartList({ cart, updateCart }) {
//   return (
//     <>
      // <div className='hidden md:block'>
      //   <div className='border bg-gray-100 flex items-center px-4 py-2 justify-between'>
      //     <div className='flex w-1/2 justify-center'>
      //       <h2>Product</h2>
      //     </div>
      //     <div className='flex justify-between items-center w-1/3 mr-10'>
      //       <h2>Price</h2>
      //       <h2>Quantity</h2>
      //       <h2>Subtotal</h2>
      //     </div>
      //   </div>
//       </div>
//       <CartRow cart={cart} updateCart={updateCart} />
//     </>
//   );
// }

// export default CartList;



// import { useEffect, useState } from "react";
// import React from "react";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import { getProductData } from "./Api"
// import Loading from "./Loading";

// function CartRow({ cart, updateCart }) {

//   const [loading, setLoading] = useState(true);
//   const [products, setProduct] = useState([]);
//   const [localCart, setLocalCart] = useState(cart);
//   const productIds = Object.keys(cart);

//   useEffect(function() {
//     setLocalCart(cart);
//   }, [cart])

//   useEffect(function() {
//     const myProductPromise = productIds.map(function(id) {
//       return getProductData(id);
//     });

//     Promise.all(myProductPromise).then(function(products) {
//       setProduct(products)
//       setLoading(false);
//     });
//   }, [cart]);

//   function handleChange(event) {
//     const newValue = +event.target.value;
//     const productId = event.target.getAttribute('productid');
//     const newLocalCart = { ...localCart, [productId]: newValue };
//     setLocalCart(newLocalCart);
//   }

//   function handleRemove(event) {
//     const productId = event.currentTarget.getAttribute("productid");
//     const newCart = { ...cart };
//     delete newCart[productId];
//     updateCart(newCart);
//   }

//   if (loading) {
//     return <Loading />
//   }

//   return (

//     <div>
//       {products.map(function(product) {
        // return <div>
        //   <div className="md:hidden">
        //     <div className="border">
        //       <div className="flex justify-end p-4">
        //         <button className="hover:text-red-500 text-gray-500 ml-5" onClick={handleRemove} productid={product.id} ><AiOutlineCloseCircle /></button>
        //       </div>
        //       <hr></hr>
        //       <div className="flex justify-center py-4">
        //         <img className="w-12" src={product.thumbnail} />
        //       </div>
        //       <hr></hr>
        //       <div className="flex justify-between p-4">
        //         <h1 className="font-bold">Product:</h1>
        //         <h1 className="text-red-500">{product.title}</h1>
        //       </div>
        //       <hr></hr>
        //       <div className="flex justify-between p-4">
        //         <h1 className="font-bold">Price:</h1>
        //         <h1 className="font-bold">${product.price}</h1>
        //       </div>
        //       <hr></hr>
        //       <div className="flex justify-between p-4">
        //         <h1 className="font-bold">Quantity:</h1>
        //         <input className="border w-10 h-6 text-center text-gray-500"
        //           type="number"
        //           value={localCart[product.id]}
        //           onChange={handleChange}
        //           productid={product.id}
        //         />
        //       </div>
        //       <hr></hr>
        //       <div className="flex justify-between p-4">
        //         <h1 className="font-bold">Subtotal:</h1>
        //         <h1 className="font-bold">${product.price * cart[product.id]}</h1>
        //       </div>
        //     </div>
        //   </div>

        //   <div className="hidden md:block">
        //     <div className="flex border items-center px-4 py-2 justify-between">
        //       <div className="flex items-center">
        //         <button className=" ml-5 hover:text-red-500 text-gray-500" onClick={handleRemove} productid={product.id}><AiOutlineCloseCircle /></button>
        //         <img className="w-12 ml-16" src={product.thumbnail} />
        //         <h1 className="text-red-500 font-bold ml-24">{product.title}</h1>
        //       </div>
        //       <div className="flex justify-between items-center w-1/3 mr-10">
        //         <h2 className="">${product.price}</h2>
        //         <input className="border w-10 h-6 text-center text-gray-500"
        //           type="number"
        //           value={localCart[product.id]}
        //           onChange={handleChange}
        //           productid={product.id}
        //         />
        //         <h2 className="">${product.price * cart[product.id]}</h2>
        //       </div>
        //     </div>
        //   </div>
        // </div>
//       })}
//     </div>

//   );
// }

// export default CartRow;
