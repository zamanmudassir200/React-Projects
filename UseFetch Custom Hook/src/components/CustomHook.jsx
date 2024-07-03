import React from "react";
import useFetch from "./useFetch";

const CustomHook = () => {
  const { data, pending, error } = useFetch(
    "https://dummyjson.com/products",
    {}
  );
  console.log(error, data, pending);
  return (
    <div>
      <h1 className="">Use Fetch Custom Hook</h1>
    </div>
  );
};

export default CustomHook;
