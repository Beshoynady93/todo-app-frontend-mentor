import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-bg": "var(--main-bg)",
        "todos-input-bg": "var(--todos-input-bg)",
        "text-fade": "var(--text-fade)",
        "text-main": "var(--text-main)",
        "blue-active-filter": "var(--primary-bright-blue)",
      },
      backgroundImage: {
        "header-desktop-dark": "url(/images/bg-desktop-dark.jpg)",
        "header-desktop-light": "url(/images/bg-desktop-light.jpg)",
        "header-mobile-dark": "url(/images/bg-mobile-dark.jpg)",
        "header-mobile-light": "url(/images/bg-mobile-light.jpg)",
        "bg-gradient":
          "linear-gradient(hsl(192, 100%, 67%) , hsl(280, 87%, 65%))",
      },
      screens: {
        desktop: "375px",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
export default config;
