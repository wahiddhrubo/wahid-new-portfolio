import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-dark": "#1b1b1b",
        "primary-light": "#F5F5F5",
        purple: "#B63E96",
        cyan: "#57E2D5",
        "blue-dark": "#0E0C16",
      },
      cursor: {
        "primary-dark": "url(/cursor-dark.png) auto",
        "primary-light": "url(/cursor-light.png) auto",
      },
    },
  },
  plugins: [],
};
export default config;
