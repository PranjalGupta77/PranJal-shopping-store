import React from 'react';
import CartList from './CartList';

function CartPage() {
  return (
    <>
      <div className="px-4">
        <div className="p-5 max-w-6xl bg-white mx-auto px-20 py-12 my-16">

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

          <CartList></CartList>
          <CartList></CartList>

<div className='md:hidden px-4 mt-3'>
           <div className='flex justify-center'>
              <input className="border px-2 rounded-md" placeholder='coupon code' />
              <button className="rounded-md bg-red-500 px-6 py-1 text-white hover:bg-red-600 ml-4">Apply coupon</button>
          </div>
          <div className='mt-2'>
              <button className="rounded-md px-10 py-2 mt-2 w-full bg-red-200 text-gray-500 hover:bg-red-300">Update cart</button>
            </div>
</div>

          <div className="hidden md:block">
          <div className='flex items-center justify-between border px-6 py-4'>
            <div>
              <input className="border px-2 py-1 rounded-md" placeholder='coupon code' />
              <button className="rounded-md bg-red-500 px-6 py-1 text-white hover:bg-red-600 ml-4">Apply coupon</button>
            </div>
            <div>
              <button className="rounded-md bg-red-200 px-6 py-1 text-gray-500 hover:bg-red-300">Update cart</button>
            </div>
          </div>
          </div>

          <div className="flex md:justify-end justify-center">
            <div className='border md:w-1/2 mt-5'>
              <h1 className="border font-bold items-center bg-gray-100 px-4 py-2">Cart Total</h1>
              <div className='py-6 px-4'>
                <div className="flex px-2">
                  <h2>Subtotal</h2>
                  <h2 className="ml-20">$30.00</h2>
                </div>
                <hr></hr>
                <div className="flex px-2 mt-2">
                  <h2>Subtotal</h2>
                  <h2 className="ml-20">$30.00</h2>
                </div>
                <hr></hr>
                <button className="rounded-md px-10 py-2 mt-2 w-full bg-red-500 text-white hover:bg-red-600 ">PROCEED TO CHECKOUT</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default CartPage;