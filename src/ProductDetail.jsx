import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { getProductData } from './Api';
import { HiArrowNarrowLeft } from "react-icons/hi";
import Loading from "./Loading"
import Error from "./Error"
import Button from "./Button"

function ProductDetail({ onAddToCart }) {
  const id = +(useParams().id);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(function () {
    const p = getProductData(id);

    p.then(function (product) {
      setProduct(product);
      setLoading(false);
    }).catch(function () {
      setLoading(false);
    });
  },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    onAddToCart(id, count);
  }

  function handleInputFirst() {
    setCount(1);
  }

  function handleSetLoading() {
    setLoading(true);
  }

  if (loading) {
    return <Loading />
  }

  if (!product) {
    return <Error />
  }

  return (<>

    <div className="px-4">
      <div className="p-5 max-w-6xl bg-white mx-auto px-9 py-12 my-16">

        <div className="w-8 mb-3 ml-2">
          <Link to="/" className="text-3xl "><HiArrowNarrowLeft></HiArrowNarrowLeft></Link>
        </div>

        <div className="sm:flex m-6">

          <img className="sm:w-96 sm:h-96 sm:m-4 shadow-lg" src={product.thumbnail} />
          <div className=" sm:ml-8 space-y-2 sm:mt-4">
            <div className=" text-gray-400 "> Home / {product.category} / {product.title}</div>

            <h1 className="text-3xl font-normal">{product.title} </h1>
            <h2 className="text-2xl 
 font-bold">${product.price}.00</h2>
            <p className="text-lg "> {product.description}</p>
            <div className="flex items-center">
              <input className="w-10 border-2 border-gray-300"
                onChange={handleCountChange}
                value={count}
                type="number" />
              <Button onClick={handleButtonClick}>Add to cart</Button>
            </div>
            <hr />
            <p className="mt-2">Category:<span className="text-red-400">{product.category}</span></p>
          </div>
        </div>

        <div className="flex flex-row justify-between p-8 sm:p-4">
          {id > 1 && (
            <Link onClick={handleInputFirst} to={"/product/" + (id - 1)}> <Button onClick={handleSetLoading}>Previous</Button></Link>)}
          {id < 100 && (
            <Link onClick={handleInputFirst} to={"/product/" + (id + 1)} > <Button onClick={handleSetLoading}>Next</Button></Link>)}
        </div>

      </div>
    </div>

  </>

  );
}

export default ProductDetail; 