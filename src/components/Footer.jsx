import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme, selectDarkMode } from "../Redux/managers/darkModeManager";

const Footer = () => {
  const isDarkMode = useSelector(selectDarkMode);  // Correctly accessing the dark mode state
  const dispatch = useDispatch();

  return (
    <div className="fixed bottom-0 p-10 flex justify-between w-full">
      <div className="flex items-center gap-x-5 p-2 border rounded-lg">
        <p
          className={`cursor-pointer ${
            isDarkMode ? "text-[#fff5d9] opacity-100" : "text-[#fff5d9] opacity-50"
          }`}
          onClick={() => dispatch(changeTheme(true))}  // Dispatching action to enable dark mode
        >
          Dark
        </p>
        <p
          className={`cursor-pointer ${
            isDarkMode ? "text-[#fff5d9] opacity-50" : "text-[#fff5d9] opacity-100"
          }`}
          onClick={() => dispatch(changeTheme(false))}  // Dispatching action to disable dark mode
        >
          Light
        </p>
      </div>
      <div className="flex items-center gap-x-5 text-[#fff5d9]">
        <p>Marketplace</p>
        <p>Create your site</p>
      </div>
    </div>
  );
};

export default Footer;
