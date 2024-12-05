"use client";

import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      className="w-[44px] h-[24px] border border-2 border-green-400 
    rounded-xl flex justify-between items-center px-[2px] relative cursor-pointer"
      onClick={toggle}
    >
      <div className="text-[12px]">🌙</div>
      <div className="text-[12px]">🔆</div>
      <div
        className={`bg-green-400 w-[14px] h-[14px] absolute rounded-full `}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
