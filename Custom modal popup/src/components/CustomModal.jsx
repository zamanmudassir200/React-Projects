import React from "react";
import Modal from "./Modal";

const CustomModal = ({ handleModal, isVisible, onClose }) => {
  return (
    <>
      <div className="relative">
        <div className="flex items-center justify-center h-screen">
          <button
            onClick={handleModal}
            className="bg-red-400 p-3 rounded-2xl hover:bg-red-800 hover:text-white font-bold transition-all text-xl font"
          >
            Sign up
          </button>
        </div>
        <Modal isVisible={isVisible} onClose={onClose} />
      </div>
    </>
  );
};

export default CustomModal;
