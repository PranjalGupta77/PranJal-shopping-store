import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Loading from './Loading';
import Warning from './Warning'
import { getProductList } from './Api';

function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function() {
    const list = getProductList();

    list.then(function(products) {
      setProductList(products);
      setLoading(false);
    });
  }, []);

  const data = productList.filter(function(item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  if (sort == "high") {
    data.sort(function(x, y) {
      return y.price - x.price;
    });
  } else if (sort == "title") {
    data.sort(function(x, y) {
      return x.title < y.title ? -1 : 1;
    });
  } else if (sort == "low") {
    data.sort(function(x, y) {
      return x.price - y.price;
    });
  }

  function handleQueryChange(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  if (loading) {
    return <Loading />
  }
  return (
    <div className="px-3">
      <div className="p-5 max-w-6xl bg-white mx-auto px-9 py-12 my-16">

        <div className="flex justify-end mb-5 ">

          <div>
            <input
              placeholder="search"
              className="bg-gray-100 border border-gray-500 w-32 sm:w-full rounded-full px-2"
              onChange={handleQueryChange}
              value={query}
            />
          </div>

          <div>
            <select
              value={sort}
              onChange={handleSortChange}
              className="bg-gray-100 border border-gray-500 ml-2 text-gray-500 w-32 sm:w-full">

              <option value="default">Default sorting</option>
              <option value="title">Sort by title</option>
              <option value="low">Sort by price:low to high</option>
              <option value="high">Sort by price:high to low</option>
            </select>
          </div>

        </div>

        {data.length > 0 && <ProductList products={data} />}
        {data.length == 0 && <Warning />}
      </div>
      </div>
  );
}

export default ProductListPage;


