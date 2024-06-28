import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <>
      <div className="flex  h-screen gap-4 items-center justify-center flex-col">
        <div className="flex ">
          {[...Array(noOfStars)].map((_, index) => {
            index = index + 1;
            return (
              <FaStar
                key={index}
                className={
                  index <= (hover || rating) ? "text-[yellow]" : "text-black"
                }
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                size={40}
              />
            );
          })}
        </div>
        <div className="">
          <h1 className="font-bold text-2xl">
            Rating: {rating} {rating > 1 ? "Stars" : "Star"}
          </h1>
        </div>
      </div>
    </>
  );
};

export default StarRating;
