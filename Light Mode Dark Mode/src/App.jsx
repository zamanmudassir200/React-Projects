import { useEffect, useState } from "react";
import "./App.css";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  // const [isDark, setIsDark] = useState(true);

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };
  return (
    <>
      <div
        className={` ${
          theme === "dark" ? "bg-black" : "bg-white"
        } h-screen flex items-center justify-center`}
      >
        <div
          className={`${
            theme === "dark" ? "bg-white text-black " : "bg-black text-white"
          } flex items-center flex-col justify-center rounded-md gap-6 text-center h-[400px] w-[500px]`}
        >
          <p className={` font-bold`}>Hello World</p>
          <p className={` font-bold`}>
            This is the example of light mode and dark mode
          </p>

          <button
            onClick={handleToggleTheme}
            className={` ${
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            } p-2 rounded-md`}
          >
            Change Theme
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
