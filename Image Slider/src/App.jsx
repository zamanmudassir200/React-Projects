import "./App.css";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <>
      <Header />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"15"}
      />
    </>
  );
}

export default App;
