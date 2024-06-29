import "./App.css";
import { sideMenu } from "./SideMenu.js";
import SidebarNavgation from "./components/SidebarNavgation";

function App() {
  return (
    <>
      <SidebarNavgation menus={sideMenu} />
    </>
  );
}

export default App;
