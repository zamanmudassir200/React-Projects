import React, { useState } from "react";

const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [bgHEXColor, setBgHEXColor] = useState("#000000");
  const [bgRGBColor, setBgRGBColor] = useState("rgb(0,0,0)");

  const randomHexColorGenerator = () => {
    let color = "0123456789ABCDEF";
    let splittedColor = color.split("");
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor +=
        splittedColor[Math.floor(Math.random() * splittedColor.length)];
    }
    setBgHEXColor(hexColor);
  };

  const randomRGBColorGenerator = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let rgbColor = `rgb(${r}, ${g}, ${b})`;
    console.log(rgbColor);
    setBgRGBColor(rgbColor);
  };
  return (
    <div
      style={{
        background: typeOfColor === "hex" ? bgHEXColor : bgRGBColor,
        width: "100vw",
        height: "calc(100vh - 70px)",
      }}
    >
      <div
        className={`py-3 px-4  w-[100vw]  flex-wrap gap-4 flex items-center justify-center`}
      >
        <button
          onClick={() => setTypeOfColor("rgb")}
          className="text-white ml-1 active:scale-[1.05] transition-scale font-semibold rounded-lg bg-blue-600 p-3 "
        >
          Create RGB Color
        </button>
        <button
          onClick={() => setTypeOfColor("hex")}
          className="text-white ml-1 active:scale-[1.05] transition-scale font-semibold rounded-lg bg-blue-600 p-3 "
        >
          Create Hex Color
        </button>
        <button
          onClick={
            typeOfColor === "hex"
              ? randomHexColorGenerator
              : randomRGBColorGenerator
          }
          className="text-white ml-1  active:scale-[1.05] transition-scale font-semibold rounded-lg bg-blue-600 p-3 "
        >
          Generate Random Color
        </button>
      </div>
      <div className="text-white py-10 px-3 text-4xl text-center font-bold">
        <h1>
          {typeOfColor === "hex"
            ? `Hex Color: ${bgHEXColor} `
            : `RGB Color: ${bgRGBColor}`}
        </h1>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
