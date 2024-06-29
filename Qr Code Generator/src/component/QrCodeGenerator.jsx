import React from "react";
import { useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");
  const handleGenerateQrCode = () => {
    setQrCode(input);
    setInput("");
  };
  return (
    <div className="flex max-w-[1000px] px-2 mx-auto  flex-col h-screen pt-10 items-center justify-start">
      <h1 className="text-white font-bold text-3xl py-4">Qrcode Generator</h1>
      <div className=" flex flex-col sm:flex-row sm:border-2 border-2 w-[90%] sm:min-w-[70%] overflow-hidden">
        <input
          className=" px-3 py-2 w-[100%]  sm:min-w-[80%] outline-none bg-blue-500 text-white font-semibold placeholder:text-gray-300 "
          type="text"
          onChange={(e) => setInput(e.target.value)}
          name="qr-code"
          value={input}
          placeholder="Enter something and generate QR code"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
          className="bg-white px-4 py-2 sm:min-w-[10%] sm:w-[20%] text-blue-600 font-bold "
        >
          Generate
        </button>
      </div>
      <div className="mt-7 flex items-center justify-center">
        <QRCode
          className="sm:w-[100%] w-[90%]"
          value={qrCode}
          bgColor="white"
        />
      </div>
    </div>
  );
};

export default QrCodeGenerator;
