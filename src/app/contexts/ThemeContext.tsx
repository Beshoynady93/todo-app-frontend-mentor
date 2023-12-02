"use client";

import React, { useState, createContext, useContext } from "react";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type Theme = "dark" | "light";

type ThemeContext = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<Theme>("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("useThemeContext must be used a ThemeContextProvider");
  return context;
};
