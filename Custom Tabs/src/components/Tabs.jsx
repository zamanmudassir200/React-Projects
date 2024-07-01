import React, { useState } from "react";

const Tabs = ({ tabs, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  };
  return (
    <div className="h-screen py-5 bg-purple-500 shadow-xl bg-opacity-60 backdrop-blur-56">
      <div className="flex items-center justify-center">
        {tabs.map((tabItem, index) => {
          return (
            <div
              onClick={() => handleOnClick(index)}
              className={`${
                index === currentTabIndex
                  ? "bg-white  border-b-black border-b-4"
                  : ""
              } bg-orange-600 p-4 text-white font-semibold cursor-pointer `}
              key={tabItem.label}
            >
              <span
                className={`${
                  index === currentTabIndex ? "text-black font-bold" : ""
                }`}
              >
                {tabItem.label}
              </span>
            </div>
          );
        })}
      </div>
      <div className=" bg-slate-500 p-6 h-[calc(100vh-92px)] my-3 ">
        <div className="max-w-[700px] mx-auto text-lg border-2 rounded-lg p-2 text-white">
          {tabs[currentTabIndex] && tabs[currentTabIndex].content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
