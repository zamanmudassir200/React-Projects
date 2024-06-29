import React, { useState } from "react";
import MenuList from "./MenuList";
import { FaPlus, FaMinus } from "react-icons/fa";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
    console.log(displayCurrentChildren);
  };
  return (
    <li className="text-2xl underline  ">
      <div className="flex gap-3 items-center ">
        <p className="">{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span
            className="cursor-pointer"
            onClick={() => handleToggleChildren(item.label)}
          >
            {displayCurrentChildren[item.label] ? (
              <FaMinus size={15} />
            ) : (
              <FaPlus size={15} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList className="ml-6" list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItem;
