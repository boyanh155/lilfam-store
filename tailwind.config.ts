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
        "dark-red": "#C83E4D",
        "dark-main": "#231720",
        "light-main": "#ffffff",
        "light-beige": "#EBE3D8",
      },
      textColor: {
        "admin-menu-text": "rgba(0, 0, 0, 0.87)",
        "admin-menu-icon": "#8E8E93",
      },
      fontSize: {
        s: ["13px", "18px"],
      },
      keyframes: {
        "bt-text-runner": {
          // '0%': {},
          "100%": { right: "100%" },
        },
        "bt-background-changing": {
          "0%": { "mix-blend-mode": "normal" },
          "50%": { "mix-blend-mode": "luminosity" },
          "100%": { "mix-blend-mode": "difference" },
        },
        "bt-text-jumper": {
          "0%,30%": { transform: "translateY(0)", animationDelay: "3s" },
          // "30%": { transform: "translateY(0)" },

          // "40%": { transform: "translateY(-34px)" },
          // "60%": { transform: "translateY(-34px)" },
          "70%,100%": { transform: "translateY(-34px)", animationDelay: "4s" },
        },
      },
      animation: {
        "ben-thanh-market-text-runner": "bt-text-runner 12s infinite linear",
        "ben-thanh-market-background-changing":
          "bt-background-changing 20s infinite linear",
        "ben-thanh-market-text-jumper":
          "bt-text-jumper 2s infinite alternate linear",
      },
    },
  
    screens: {
      sm: "360px",
      md: "640px",
      lg: "1024px",
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"],
  },
};
export default config;
