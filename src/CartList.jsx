import React from "react";
import CartRow from "./CartRow";

function CartList() {
    return (
        <>
        <div className='hidden md:block'>
          <div className='border bg-gray-100 flex items-center px-4 py-2 justify-between'>
            <div className='flex w-1/2 justify-center'>
              <h2>Product</h2>
            </div>
            <div className='flex justify-between items-center w-1/3 mr-10'>
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Subtotal</h2>
            </div>
          </div>
         </div>
         <CartRow></CartRow>
         <CartRow></CartRow>
        </>
    );
}

export default CartList;