import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/Theme/useTheme";

const DarkModeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <article
      onClick={toggleTheme}
      className="
      hover:bg-selected dark:hover:bg-dark-selected rounded-xl
        w-full h-full flex 
        transition-all duration-200 ease-in-out 
        hover:scale-110"
    >
      <span className="flex-1 flex items-center justify-center w-full h-full cursor-pointer">
        <div className="flex flex-col items-center justify-center w-full h-full p-2">
          {isDark ? <Sun /> : <Moon />}
        </div>
      </span>
    </article>
  );
};

export default DarkModeToggle;
