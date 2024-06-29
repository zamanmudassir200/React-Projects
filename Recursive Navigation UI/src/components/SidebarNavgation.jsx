import React from "react";
import MenuList from "./MenuList";

const SidebarNavgation = ({ menus = [] }) => {
  return (
    <div className="max-w-[300px] p-3 min-h-screen bg-blue-500 text-white">
      <MenuList list={menus} />
    </div>
  );
};

export default SidebarNavgation;
