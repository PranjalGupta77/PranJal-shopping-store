import React, { useState, useEffect } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { getProductData } from "./Api";
import Loading from "./Loading";
import CartCheckOut from "./CartCheckOut"
import CartList from "./CartList";

function CartPage({ savedData, updateCart }) {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [localCart, setLocalCart] = useState(savedData);

  const cartIds = Object.keys(savedData);

  useEffect(
    function() {
      setLoading(true);
      const promises = cartIds.map(function(productId) {
        return getProductData(productId);
      });
      const allPromise = Promise.all(promises);

      allPromise.then(function(products) {
        setProducts(products);
        setLoading(false);
      });
    },
    [savedData]
  );
  useEffect(
    function() {
      setLocalCart(savedData);
    },
    [savedData]
  );

  function handleUpdateCart() {
    updateCart(localCart);
  }

  if (loading) {
    return <Loading />;
  }

  return (

    <div className="px-4">
      <div className="p-5 max-w-6xl bg-white mx-auto px-10 py-6 my-16">
        <div className="w-8 mb-3 ml-2">
          <Link to="/" className="text-3xl "><HiArrowNarrowLeft></HiArrowNarrowLeft></Link>
        </div>

        <CartList
          items={products}
          localCart={localCart}
          setLocalCart={setLocalCart}
          savedData={savedData}
          updateCart={updateCart}
        />

        <div className='md:hidden px-4 mt-3'>
          <div className='flex justify-center'>
            <input className="border px-2 rounded-md" placeholder='coupon code' />
            <button className="rounded-md bg-red-500 px-6 py-1 text-white hover:bg-red-600 ml-4">Apply coupon</button>
          </div>
          <div className='mt-2'>
            <button onClick={handleUpdateCart} className="rounded-md px-10 py-2 mt-2 w-full bg-red-200 text-gray-500 hover:bg-red-300">Update cart</button>
          </div>
        </div>

        <div className="hidden md:block">
          <div className='flex items-center justify-between border px-6 py-4'>
            <div>
              <input className="border px-2 py-1 rounded-md" placeholder='coupon code' />
              <button className="rounded-md bg-red-500 px-6 py-1 text-white hover:bg-red-600 ml-4">Apply coupon</button>
            </div>
            <div>
              <button onClick={handleUpdateCart} className="rounded-md bg-red-200 px-6 py-1 text-gray-500 hover:bg-red-300">Update cart</button>
            </div>
          </div>
        </div>

        <CartCheckOut />

      </div>
    </div>
  );
}
export default CartPage;

