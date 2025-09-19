import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

function Button() {
  const { setTheme, theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={() => setTheme("light")}
        className={`px-4 py-2 rounded-2xl shadow-md transition-all duration-300 
          ${theme === "light" 
            ? "bg-blue-500 text-white font-semibold" 
            : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"}`}
      >
        🌞 Light Theme
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`px-4 py-2 rounded-2xl shadow-md transition-all duration-300 
          ${theme === "dark" 
            ? "bg-blue-500 text-white font-semibold" 
            : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"}`}
      >
        🌙 Dark Theme
      </button>
    </div>
  );
}

export default Button;
