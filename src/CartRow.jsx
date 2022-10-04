import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function CartRow({ thumbnail, title, price, id, localCart, setLocalCart, savedData, updateCart }) {

  function handleDelete(event) {
    const productId = event.currentTarget.getAttribute("productid");

    const newCart = { ...savedData };
    delete newCart[productId];
    updateCart(newCart);
  }

  function handleChange(event) {
    const newValue = +event.target.value;
    const productId = event.target.getAttribute("productid");
    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalCart(newLocalCart);
  }
  return (
    <div>
      <div className="md:hidden">
        <div className="border">
          <div className="flex justify-end p-4">
            <button className="hover:text-red-500 text-gray-500 ml-5" onClick={handleDelete} productid={id} ><AiOutlineCloseCircle /></button>
          </div>
          <hr></hr>
          <div className="flex justify-center py-4">
            <img className="w-12" src={thumbnail} />
          </div>
          <hr></hr>
          <div className="flex justify-between p-4">
            <h1 className="font-bold">Product:</h1>
            <h1 className="text-red-500">{title}</h1>
          </div>
          <hr></hr>
          <div className="flex justify-between p-4">
            <h1 className="font-bold">Price:</h1>
            <h1 className="font-bold">${price}</h1>
          </div>
          <hr></hr>
          <div className="flex justify-between p-4">
            <h1 className="font-bold">Quantity:</h1>
            <input className="border w-10 h-6 text-center text-gray-500"
              type="number"
              productid={id}
              onChange={handleChange}
              value={localCart[id]}
            />
          </div>
          <hr></hr>
          <div className="flex justify-between p-4">
            <h1 className="font-bold">Subtotal:</h1>
            <h1 className="font-bold">${price * savedData[id]}</h1>
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex border items-center px-4 py-2 justify-between">
          <div className="flex items-center">
            <button className=" ml-5 hover:text-red-500 text-gray-500" onClick={handleDelete} productid={id}><AiOutlineCloseCircle /></button>
            <img className="w-12 ml-16" src={thumbnail} />
            <h1 className="text-red-500 font-bold ml-24">{title}</h1>
          </div>
          <div className="flex justify-between items-center w-1/3 mr-10">
            <h2 className="">${price}</h2>
            <input className="border w-10 h-6 text-center text-gray-500"
              type="number"
              productid={id}
              onChange={handleChange}
              value={localCart[id]}
            />
            <h2 className="">${price * savedData[id]}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CartRow;
