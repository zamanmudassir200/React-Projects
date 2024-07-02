import React from "react";

const ModalForm = ({
  formModal,
  onFormModalClose,
  nameText,
  passwordText,
  emailText,
}) => {
  return (
    <div
      className={`${
        formModal ? "block absolute" : "hidden"
      }  top-0 left-0 py-10 px-4  bg-red-500 h-[calc(100vh-70px)] w-[100vw] bg-opacity-25`}
    >
      <div className="relative flex flex-col h-[600px] border-2 border-black max-w-[900px] items-center gap-8 bg-white rounded-md text-xl justify-center mx-auto">
        <h1 className="text-3xl font-bold">Your Details</h1>
        <ul>
          <p>
            <b>Name:</b> {nameText}
          </p>
          <p>
            <b>Email: </b>
            {emailText}
          </p>
          <p>
            <b>Password:</b> {passwordText}
          </p>
        </ul>

        <button
          onClick={onFormModalClose}
          className="bg-green-600 p-3 text-white rounded-lg"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default ModalForm;
