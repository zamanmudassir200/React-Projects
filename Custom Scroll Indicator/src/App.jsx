import "./App.css";
import ScrollIndicator from "./components/ScrollIndicator";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ScrollIndicator url="https://dummyjson.com/products" />
    </>
  );
}

export default App;
