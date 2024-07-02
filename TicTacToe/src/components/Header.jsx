import React from "react";

const Header = () => {
  return (
    <header>
      <div className="sticky top-[0px] z-10 flex items-center bg-red-700 h-[70px] justify-center">
        <h1 className="font-bold text-2xl text-white">Tic Tac Toe</h1>
      </div>
    </header>
  );
};

export default Header;
