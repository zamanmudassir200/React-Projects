import React, { useEffect, useState } from "react";

const LoadMore = () => {
  const [loading, setLoading] = useState(null);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      console.log(data.total);
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setErrMsg(error.message);
    }
  };

  useEffect(() => {
    fetchProducts(count);
  }, [count]);

  const handleLoadMoreBtn = () => {
    setCount(count + 1);
  };
  if (loading) {
    return (
      <div className="grid place-items-center  h-screen">
        <div className="w-[80px] h-[80px] rounded-full border-8 border-t-pink-500 animate-spin"></div>
      </div>
    );
  }
  if (errMsg) {
    return (
      <div className="grid place-items-center  h-screen">
        <h1 className="font-bold text-xl">
          Error occured: <span className="text-red-700">{errMsg}</span>
        </h1>
      </div>
    );
  }
  return (
    <main className="bg-pink-300 py-4 text-center gap-2 flex flex-col min-h-screen ">
      <div className="max-w-[1300px] flex flex-wrap items-center  justify-center gap-4 p-2  mx-auto">
        {products.map((product) => {
          return (
            <>
              <div
                key={product.id}
                className="border w-[300px] h-auto p-3 flex flex-col gap-2 items-center justify-between"
              >
                <img
                  className="w-[250px]"
                  src={product.thumbnail}
                  alt={product.thumbnail}
                />
                <p>
                  <b>Title: </b>
                  {product.title}
                </p>
                <p className="text-justify">
                  <b>Description:</b> {product.description}
                </p>
                <p className="flex gap-3 ">
                  <span>
                    <b>Price:</b> {product.price} Rs
                  </span>
                  <span>
                    <b>Rating:</b> {product.rating}
                  </span>
                </p>
              </div>
            </>
          );
        })}
      </div>
      <button
        disabled={count >= products.total ? true : false}
        onClick={handleLoadMoreBtn}
        className="self-center  bg-white px-10 py-2 rounded-full text-lg font-semibold"
      >
        Load More
      </button>
    </main>
  );
};

export default LoadMore;
