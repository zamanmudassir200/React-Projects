import React, { useState } from "react";
import ModalForm from "./ModalForm";

const Modal = ({ isVisible, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formModal, setFormModal] = useState(false);
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  const handleFormInputs = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && email.trim() !== "" && password.trim() !== "") {
      setFormModal(true);
      setNameText(name);
      setEmailText(email);
      setPasswordText(password);
    } else {
      alert("please fill all the fields first");
    }
  };
  const handleOnClose = () => {
    onClose();
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } absolute top-0 py-10 px-4 bg-red-500  sm:min-h-[calc(100vh-70px)] w-full bg-opacity-55`}
    >
      <div className="relative flex flex-col h-[600px] border-2 border-black max-w-[900px] items-center gap-8 bg-white rounded-md text-xl justify-center mx-auto">
        <div
          onClick={handleOnClose}
          className="absolute top-0 right-0 m-4 bg-red-400 p-3 font-bold text-white cursor-pointer"
        >
          X
        </div>

        <h1 className="text-3xl font-bold">Sign up</h1>
        <form className="mx-4 flex flex-col gap-6 items-center justify-center">
          <input
            onChange={(e) => setName(e.target.value)}
            className="bg-red-500 placeholder:text-gray-200 font-bold text-white p-3 w-[100%] rounded-md text-xl focus:outline-none"
            type="text"
            value={name}
            placeholder="Enter your name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="bg-red-500  placeholder:text-gray-200 font-bold text-white p-3 w-[100%] rounded-md text-xl focus:outline-none"
            type="email"
            value={email}
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="bg-red-500  placeholder:text-gray-200 font-bold text-white p-3 w-[100%] rounded-md text-xl focus:outline-none"
            type="password"
            value={password}
            placeholder="Enter your password"
          />
          <button
            onClick={handleFormInputs}
            className="bg-green-600 p-3 text-white rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
      <ModalForm
        formModal={formModal}
        onFormModalClose={() => setFormModal(false)}
        nameText={nameText}
        emailText={emailText}
        passwordText={passwordText}
      />
    </div>
  );
};

export default Modal;
