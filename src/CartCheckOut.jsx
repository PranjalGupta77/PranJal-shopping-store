import React from 'react';

function CartCheckOut() {
  return (
    <>
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

      </>
  );
}

export default CartCheckOut;