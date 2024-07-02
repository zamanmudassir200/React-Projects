import { useState } from "react";
import "./App.css";
import CustomModal from "./components/CustomModal";
import Navbar from "./components/Navbar";

function App() {
  const handleModal = () => {
    setIsVisible(true);
  };
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Navbar />
      <CustomModal
        handleModal={handleModal}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </>
  );
}

export default App;
