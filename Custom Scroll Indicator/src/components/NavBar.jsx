import React from "react";

const NavBar = ({ scrollPercentage }) => {
  return (
    <div className="sticky top-0 z-10">
      <header
        className={` bg-green-600 text-white h-[70px] flex items-center justify-center`}
      >
        <h1 className="font-bold text-2xl">Custom Scroll Indicator</h1>
      </header>
      <div className={`h-[8px] w-[100%] bg-green-200`}>
        <div
          style={{ width: `${scrollPercentage}%` }}
          className={`h-[8px] bg-green-800`}
        ></div>
      </div>
    </div>
  );
};

export default NavBar;
