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
      },
      animation: {
        "ben-thanh-market-text-runner": "bt-text-runner 10s infinite linear",
        "ben-thanh-market-background-changing":
          "bt-background-changing 20s infinite linear",
      },
    },
    letterSpacing: {
      widest: ".25em",
    },
    screens: {
      "sm-screen": {
        min: "360px",
        max: "639px",
      },
      "md-screen": {
        min: "640px",
        max: "1023px",
      },
      "lg-screen": {
        min: "1024px",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: ["winter"],
  },
};
export default config;
