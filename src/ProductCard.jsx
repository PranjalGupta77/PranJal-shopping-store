import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ thumbnail, category, title, price, id }) {
  return (
    <>
      <Link to={"/product/" + id}>
        <div className="bg-white mb-2 shadow-md max-w-xs aspect-square">
          <div className="w-full aspect-square">
            <img className="h-80 w-80 object-cover" src={thumbnail} />
          </div>
          <h2 className=" text-gray-500 mt-1">{category}</h2>
          <p className=" mt-1">{title}</p>
          <img className="w-14 h-o.5 mt-1" src="https://www.nzprintshop.co.nz/wp-content/uploads/fancy_products_uploads/2020/11/26/kissclipart5redstarspngclipartclipartca6eb866cfa00658.png" />
          <div className="flex justify-between">
            <h2 className="text-xs mt-1">${price}.00</h2>
            <Link to={"/product/" + id} className="text-xs text-blue-500 hover:text-red-500">view detaile</Link>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
