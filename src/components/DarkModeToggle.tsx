import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <article
      onClick={() => setDarkMode((prev) => !prev)}
      className="
      hover:bg-selected dark:hover:bg-dark-selected rounded-xl
        w-full h-full flex 
        transition-all duration-200 ease-in-out 
        hover:scale-110"
    >
      <span className="flex-1 flex items-center justify-center w-full h-full cursor-pointer">
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          {darkMode ? <Sun /> : <Moon />}
        </div>
      </span>
    </article>
  );
};

export default DarkModeToggle;
