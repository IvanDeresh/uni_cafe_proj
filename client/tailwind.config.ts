import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fromRight: {
          "0%": { transform: "translateX(120%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fromLeft: {
          "0%": { transform: "translateX(-120%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fromDown: {
          "0%": { transform: "translateY(250%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fromTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fromRight: "fromRight 0.7s ease-in-out forwards",
        fromLeft: "fromLeft 0.7s ease-in-out forwards",
        fromDown: "fromDown 0.7s ease-in-out forwards",
        fromTop: "fromTop 0.7s ease-in-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
