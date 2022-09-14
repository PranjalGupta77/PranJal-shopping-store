import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";


function CartRow() {
  return (
    <div>

      <div className="md:hidden">
        <div className="border">
<div className="flex justify-end p-4">
<button className="text-gray-500 ml-5"><AiOutlineCloseCircle /></button>
</div>
<hr></hr>
<div className="flex justify-center py-4">
<img className="w-12" src="https://media.discordapp.net/attachments/992343608189526056/1002832090527711283/mug-white-4.jpeg?width=468&height=468" />
</div>
<hr></hr>
<div className="flex justify-between p-4">
<h1 className="font-bold">Product:</h1>
<h1 className="text-red-500">Black Printed Coffee Mug</h1>
</div>
<hr></hr>
<div className="flex justify-between p-4">
<h1 className="font-bold">Price:</h1>
<h1 className="font-bold">$25.00</h1>
</div>
<hr></hr>
<div className="flex justify-between p-4">
<h1 className="font-bold">Quantity:</h1>
<input className="border w-10 h-6 text-center text-gray-500" type="number" value={1}/>
</div>
<hr></hr>
<div className="flex justify-between p-4">
<h1 className="font-bold">Subtotal:</h1>
<h1 className="font-bold">$100.00</h1>
</div>
        </div>
      </div>


    <div className="hidden md:block">
    <div className="flex border items-center px-4 py-2 justify-between">
      <div className="flex items-center">
        <button className="text-gray-500 ml-5"><AiOutlineCloseCircle /></button>
        <img className="w-12 ml-16" src="https://media.discordapp.net/attachments/992343608189526056/1002832090527711283/mug-white-4.jpeg?width=468&height=468" />
        <h1 className="text-red-500 font-bold ml-24">Black Printed Coffee Mug</h1>
      </div>
      <div className="flex justify-between items-center w-1/3 mr-10">
        <h2 className="">$15.00</h2>
        <input className="border w-10 h-6 text-center text-gray-500" type="number" value={1}/>
        <h2 className="">$30.00</h2>
      </div>
    </div>
    </div>
    </div>
  );
}

export default CartRow;