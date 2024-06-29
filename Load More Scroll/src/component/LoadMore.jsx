import React, { useEffect, useState } from "react";

const LoadMore = () => {
  const [loading, setLoading] = useState(null);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const [disableBtn, setDisableBtn] = useState(false);
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
      console.log(data.products);
      if (
        data.products.length < 20 ||
        products.length + data.products.length >= data.total
      ) {
        setDisableBtn(true);
      }
      // setProducts((prevData) => [...prevData, ...data.products]);
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      setErrMsg(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  // useEffect(() => {
  //   if (products && products.length === 194) {
  //     setDisableBtn(true);
  //   }
  // }, [products]);
  const handleLoadMoreBtn = () => {
    setCount(count + 1);
  };
  if (loading) {
    return (
      <div className="grid place-items-center  h-screen">
        <div className="w-[80px] h-[80px] rounded-full border-8 border-b-pink-500-2 border-spacing-x-60 border-t-pink-500 animate-spin"></div>
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
    <main className="bg-pink-300 py-4  text-center gap-3 flex flex-col min-h-screen ">
      <div className="max-w-[1300px] flex flex-wrap items-center  justify-center gap-4 p-2  mx-auto">
        {products.map((product) => {
          return (
            <>
              <div
                key={product.id}
                className="border-2 border-white hover:shadow-lg hover:scale-[1.05] transition-all  rounded-lg w-[300px] h-auto p-3 flex flex-col gap-2 items-center justify-between"
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
        disabled={disableBtn}
        onClick={handleLoadMoreBtn}
        className={`${
          disableBtn ? "line-through" : ""
        } self-center  bg-white px-10 py-2 rounded-full text-lg font-semibold`}
      >
        Load More Products
      </button>
      {console.log(disableBtn)}
      {disableBtn ? (
        <h1 className="text-xl">You have reached the max length</h1>
      ) : null}
    </main>
  );
};

export default LoadMore;
