"use client";

import Header from "./components/Header";
import Todos from "./components/Todos";
import { useThemeContext } from "./contexts/ThemeContext";

export default function Home() {
  const { theme } = useThemeContext();
  return (
    <div
      className={`${theme === "light" ? "light" : "dark"} bg-main-bg h-screen`}
    >
      <Header />
      <main className="mx-auto max-w-lg">
        <Todos />
      </main>
    </div>
  );
}
