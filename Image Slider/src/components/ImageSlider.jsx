import React, { useState } from "react";
import { useEffect } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errMsg, setErrMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrMsg(e.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="self-center justify-self-center h-[80px] w-[80px] rounded-full border-8 border-t-purple-600 animate-spin"></div>
      </div>
    );
  }
  if (errMsg !== null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-bold">
          Error Occured! <span className="text-red-700">{errMsg}</span>
        </div>
      </div>
    );
  }
  const handlePrevImage = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNextImage = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <>
      <div className="relative w-screen gap-1 overflow-hidden border-red-400 flex items-start justify-center">
        <button
          onClick={handlePrevImage}
          className="active:scale-[1.05] transition-all opacity-[0.7] active:bg-purple-700 absolute top-[260px] left-5 bg-black text-white p-4 rounded-full"
        >
          <FaArrowCircleLeft size={30} />
        </button>
        {images && images.length
          ? images.map((imgItem, index) => {
              return (
                <img
                  key={imgItem.id}
                  className={`${
                    currentSlide === index
                      ? " shadow-[0px 0px 7px #666] w-[100%] h-[600px]"
                      : "hidden"
                  } `}
                  src={imgItem.download_url}
                  alt={imgItem.download_url}
                />
              );
            })
          : null}
        <button
          onClick={handleNextImage}
          className="active:scale-[1.05] active:bg-purple-700 opacity-[0.7] transition-all absolute top-[260px] right-5 bg-black text-white p-4 rounded-full"
        >
          <FaArrowCircleRight size={30} />
        </button>
        <div className="absolute bottom-[30px] flex">
          <span className="">
            {images && images.length
              ? images.map((_, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={` ${
                        currentSlide !== index
                          ? "bg-purple-600 rounded-full w-[15px] h-[15px] m-[2px] "
                          : "rounded-full w-[15px] h-[15px] m-[2px] bg-white"
                      } `}
                    ></button>
                  );
                })
              : null}
          </span>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
