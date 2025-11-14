
import React from "react";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-yellow-400">{theme === "light" ? "☀️" : "🌙"}</span>
      <div
        onClick={toggleTheme}
        className={`w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer transition-all duration-300`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            theme === "dark" ? "translate-x-7" : ""
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
