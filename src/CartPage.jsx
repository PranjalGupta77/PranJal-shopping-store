import React from 'react';
import CartCheckOut from './CartCheckOut';
import CartList from './CartList';
import { HiArrowNarrowLeft } from "react-icons/hi"
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <>
      <div className="px-4">
        <div className="p-5 max-w-6xl bg-white mx-auto px-10 py-6 my-16">

        <div className="w-8 mb-3 ml-2">
        <Link to="/" className="text-3xl "><HiArrowNarrowLeft></HiArrowNarrowLeft></Link>
      </div>

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

<CartCheckOut></CartCheckOut>

           </div>
      </div>
    </>
  );
}

export default CartPage;