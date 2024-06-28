import React, { useState } from "react";
import { data } from "../accordion";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleIds, setMultipleIds] = useState([]);
  const handleSingleSelection = (id) => {
    data.filter((item) => id === item.id);
    setSelected(id === selected ? null : id);
  };

  const handleMultiSelection = (id) => {
    const copyMultipleIds = [...multipleIds];
    const findids = copyMultipleIds.indexOf(id);
    if (findids === -1) {
      copyMultipleIds.push(id);
    } else {
      copyMultipleIds.splice(findids, 1);
    }
    setMultipleIds(copyMultipleIds);
  };
  return (
    <>
      <div className="flex py-8 items-center px-4 justify-center bg-purple-400 drop-shadow-lg  min-h-[calc(100vh-68px)]">
        <div className="w-[600px] mx-auto">
          <div className="my-4 text-center">
            <button
              onClick={() => setEnableMultiSelection(!enableMultiSelection)}
              className="bg-purple-900 p-2 text-white rounded-md"
            >
              {enableMultiSelection
                ? " Enable Single Selection"
                : "Enable Multi Selection"}
            </button>
          </div>
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-yellow-400 mb-4 p-4 flex shadow-xl flex-col mx-auto items-center justify-around"
              >
                <div className="border-b-2 border-black w-full px-3 py-5 flex items-center justify-between">
                  <span className="font-bold">{item.question}</span>
                  <span
                    className="text-2xl cursor-pointer"
                    onClick={
                      enableMultiSelection
                        ? () => handleMultiSelection(item.id)
                        : () => handleSingleSelection(item.id)
                    }
                  >
                    +
                  </span>
                </div>

                {enableMultiSelection
                  ? multipleIds.indexOf(item.id) !== -1 && (
                      <div className={`py-4 `}>{item.answer}</div>
                    )
                  : selected === item.id && (
                      <div className={`py-4 `}>{item.answer}</div>
                    )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Accordion;
