import React from "react";

const Modal = ({ isVisible, onClose }) => {
  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } absolute top-0 py-10 bg-red-500 h-[calc(100vh-70px)] w-full bg-opacity-55`}
    >
      <div className="relative flex flex-col h-[600px] border-2 border-black max-w-[900px] items-center gap-8 bg-white rounded-md text-xl justify-center mx-auto">
        <div
          onClick={onClose}
          className="absolute top-0 right-0 m-4 bg-red-400 p-3 font-bold text-white cursor-pointer"
        >
          X
        </div>

        <h1 className="text-3xl font-bold">Sign up</h1>
        <form className="flex flex-col gap-6 items-center justify-center">
          <input
            className="bg-red-500 placeholder:text-white font-bold text-white p-3 w-[100%] rounded-md text-xl focus:outline-none"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="bg-red-500 placeholder:text-white font-bold text-white p-3 w-[100%] rounded-md text-xl focus:outline-none"
            type="email"
            placeholder="Enter your email"
          />
          <input
            className="bg-red-500 placeholder:text-white font-bold text-white p-3 w-[100%] rounded-md text-xl focus:outline-none"
            type="password"
            placeholder="Enter your password"
          />
          <button className="bg-green-600 p-3 text-white rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
