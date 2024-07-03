import React from "react";

const RestartModal = ({ isVisible, setSquares, setIsXturn, setIsVisible }) => {
  const handleRestartYes = () => {
    setIsXturn(true);
    setSquares(Array(9).fill(""));
    setIsVisible(false);
  };
  const handleRestartNo = () => {
    setIsVisible(false);

    return;
  };
  return (
    <div
      className={` ${
        isVisible ? "block absolute" : "hidden"
      }   gap-4  rounded-lg bg-white  w-full bg-opacity-100 drop-shadow-lg h-screen px-5 py-2 flex flex-col items-center justify-center   `}
    >
      <div
        className={`top-[200px] gap-4 rounded-lg h-[250px] px-5 py-2 flex flex-col items-center justify-center  bg-red-500 text-white`}
      >
        <div className="">Are your sure? You want to restart the game?</div>
        <div className="flex gap-6">
          <button
            onClick={handleRestartYes}
            className="bg-white text-black p-4 rounded-xl"
          >
            Yes
          </button>
          <button
            onClick={handleRestartNo}
            className="bg-white text-black p-4 rounded-xl"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestartModal;
