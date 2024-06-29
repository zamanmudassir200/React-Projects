import React from "react";
import MenuList from "./MenuList";

const SidebarNavgation = ({ menus = [] }) => {
  return (
    <div>
      <MenuList list={menus} />
    </div>
  );
};

export default SidebarNavgation;
