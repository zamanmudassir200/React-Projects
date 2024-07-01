import React, { useState } from "react";

const Tabs = ({ tabs, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };
  return (
    <div className="h-screen py-5">
      <div className="flex items-center justify-center">
        {tabs.map((tabItem, index) => {
          return (
            <div
              onClick={() => handleOnClick(index)}
              className="bg-red-300 p-4 cursor-pointer border-2  border-transparent hover:border-2 hover:border-red-800"
              key={tabItem.label}
            >
              <span>{tabItem.label}</span>
            </div>
          );
        })}
      </div>
      <div className="max-w-[700px] mx-auto my-10">
        {tabs[currentTabIndex] && tabs[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
