"use client";

import React from "react";
import SwitchThemeBtn from "./SwitchThemeBtn";
import { useThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const { theme } = useThemeContext();

  const BG =
    theme === "light" && window.innerWidth < 375
      ? "bg-header-mobile-light"
      : theme === "dark" && window.innerWidth < 375
        ? "bg-header-mobile-dark"
        : theme === "light" && window.innerWidth > 375
          ? "bg-header-desktop-light"
          : "bg-header-desktop-dark";

  return (
    <header className={`${BG} min-h-[10rem] px-4 py-8`}>
      <div className="mx-auto flex max-w-lg items-center justify-between">
        <h1 className="text-2xl font-extrabold tracking-[0.5rem] text-white">
          TODO
        </h1>
        <SwitchThemeBtn />
      </div>
    </header>
  );
};

export default Header;
