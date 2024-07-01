import "./App.css";
import ScrollIndicator from "./components/ScrollIndicator";
import NavBar from "./components/NavBar";
import { useState } from "react";
function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScrollPercentage = () => {
    // console.log(
    //   document.body.scrollTop,
    //   "Document element scroll top : ",
    //   document.documentElement.scrollTop,
    //   "documentElement height: ",
    //   document.documentElement.scrollHeight,
    //   "documentELEMENT CLIENThEIGHT: ",
    //   document.documentElement.clientHeight
    // );
    const scrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((scrolled / height) * 100);
    console.log(scrollPercentage);
  };
  return (
    <>
      <NavBar scrollPercentage={scrollPercentage} />
      <ScrollIndicator
        handleScrollPercentage={handleScrollPercentage}
        url="https://dummyjson.com/products"
      />
    </>
  );
}

export default App;
