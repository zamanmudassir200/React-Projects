import React, { useEffect, useState } from "react";

const ScrollIndicator = ({ url, handleScrollPercentage }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const fetchData = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();
      console.log(data);
      setData(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setErrMsg(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  useEffect(() => {
    fetchData(url);
  }, [url]);

  if (loading) {
    return (
      <div className="flex items-center h-[calc(100vh-70px)] justify-center">
        <div className="bg-white rounded-full h-[50px] w-[50px] border-b-green-700 border-t-green-700 border-8 animate-spin"></div>
      </div>
    );
  }
  if (errMsg) {
    return (
      <div className="flex items-center h-[calc(100vh-70px)] justify-center">
        <h1 className="font-bold text-xl">
          Error Occured: <span className="text-red-600">{errMsg}</span>
        </h1>
      </div>
    );
  }
  return (
    <div className="py-5">
      {data.map((item) => {
        return (
          <ul className="flex  flex-col items-center  justify-center leading-10">
            <li className="text-start">{item.title}</li>
            <li className="text-start">{item.title}</li>
            <li className="text-start">{item.title}</li>
            <li className="text-start">{item.title}</li>
            <li className="text-start">{item.title}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default ScrollIndicator;
