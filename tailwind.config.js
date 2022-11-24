const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}", 
    "./ui/**/*.{ts,tsx}",
    "./lib/**/*.{js,ts}",
    "./content/posts/**/*.mdx",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: {
          100: "#51C5D1",
          200: "#20A2B0",
          300: "#087E8B",
        },
        orange: {
          100: "#FFB2B5",
          200: "#FF8588",
          300: "#FF5A5F",
          400: "#D0494D",
        },
        yellow: {
          100: "#FFF0BD",
          200: "#FFDD6C",
          300: "#FFD23F",
        },
        black: "#262626",
        white: "#FDFFFF",
        gray: {
          100: "#909090",
          200: "#6B6B6B",
        },
        "transparent-black": "rgba(38, 38, 38, 0.6)",
        "transparent-gray": "rgba(55, 55, 55, 0.79)",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      boxShadow: ({ theme }) => ({
        // inspired by https://www.joshwcomeau.com/shadow-palette/
        "surface-glass": `
          inset 0.25px 1px 0 0 ${theme("colors.rose.200 / 3%")},
          0px 0.3px 0.3px rgba(3, 2, 2, 0.02),
          0px 2.2px 2.5px -0.4px rgba(3, 2, 2, 0.02),
          0px 4.3px 4.8px -0.8px rgba(3, 2, 2, 0.02),
          0px 7.5px 8.4px -1.2px rgba(3, 2, 2, 0.02),
          0px 12.8px 14.4px -1.7px rgba(3, 2, 2, 0.02),
          0px 21px 23.6px -2.1px rgba(3, 2, 2, 0.02),
          0px 33.2px 37.4px -2.5px rgba(3, 2, 2, 0.02)`,
        "surface-elevation-low": `
          inset 0.25px 1px 1px 0 ${theme("colors.rose.200 / 1.5%")}, 
          0.3px 0.5px 0.7px rgba(3, 2, 2, 0.2),
          0.4px 0.8px 1px -1.2px rgba(3, 2, 2, 0.2),
          1px 2px 2.5px -2.5px rgba(3, 2, 2, 0.2);`,
        "surface-elevation-medium": `
          inset 0.25px 1px 1px 0 ${theme("colors.rose.200 / 3%")},
          0.3px 0.5px 0.7px rgba(3, 2, 2, 0.1),
          0.8px 1.6px 2px -0.8px rgba(3, 2, 2, 0.1),
          2.1px 4.1px 5.2px -1.7px rgba(3, 2, 2, 0.1),
          5px 10px 12.6px -2.5px rgba(3, 2, 2, 0.1)`,
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
