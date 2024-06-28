import "./App.css";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <>
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"15"}
      />
    </>
  );
}

export default App;
