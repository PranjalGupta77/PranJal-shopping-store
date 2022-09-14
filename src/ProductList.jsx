import React from 'react';
import ProductCard from './ProductCard';
import OtherButton from './OtherButton'

function ProductList({ products }) {
  return (
    <>
      <div className="sm:grid grid-cols-3 gap-2 space-y-2 sm:space-y-0 flex flex-wrap justify-center">
        {products.map(function(item) {
          return (
            <ProductCard
              key={item.title}
              {...item}
            />
          );
        })}
        <span className="w-56 shrink-0"></span>
        <span className="w-56 shrink-0"></span>
        <span className="w-56 shrink-0"></span>

      </div>

      <div className="mt-12 flex gap-2">
        <OtherButton>1</OtherButton>
        <OtherButton>2</OtherButton>
        <OtherButton>3</OtherButton>
        <OtherButton>4</OtherButton>
      </div>
    </>
  );
}

export default ProductList;


