import React from "react";
import useFetch from "./useFetch";

const CustomHook = () => {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  console.log(error, data, pending);

  if (pending) {
    return (
      <div className="flex items-center justify-center h-screen font-bold text-xl">
        <h1>Pending! please wait...</h1>;
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen font-bold text-xl">
        <h1>
          Error occured! <span className="text-red-600">{error}</span>
        </h1>
      </div>
    );
  }
  return (
    <div className="text-center py-7 ">
      <h1 className="font-bold text-3xl py-4">Use Fetch Custom Hook</h1>
      {data && data.products && data.products.length
        ? data.products.map((productItem) => {
            return (
              <div className="text-xl" key={productItem.id}>
                {productItem.title}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default CustomHook;
