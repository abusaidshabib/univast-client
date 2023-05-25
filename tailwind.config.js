/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#d8ddf6",
          200: "#b2bbed",
          300: "#8b98e5",
          400: "#6576dc",
          500: "#3e54d3",
          600: "#3243a9",
          700: "#25327f",
          800: "#192254",
          900: "#0c112a"
        },
        secondary: {
          100: "#dce6f9",
          200: "#b9ccf3",
          300: "#95b3ee",
          400: "#7299e8",
          500: "#4f80e2",
          600: "#3f66b5",
          700: "#2f4d88",
          800: "#20335a",
          900: "#101a2d"
        },
        accent: {
          100: "#d0f5f4",
          200: "#a1ebea",
          300: "#73e1df",
          400: "#44d7d5",
          500: "#15cdca",
          600: "#11a4a2",
          700: "#0d7b79",
          800: "#085251",
          900: "#042928"
        },
        neural: {
          100: "#dcf9f0",
          200: "#b9f3e2",
          300: "#95ecd3",
          400: "#72e6c5",
          500: "#4fe0b6",
          600: "#3fb392",
          700: "#2f866d",
          800: "#205a49",
          900: "#102d24"
        },
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
      fontFamily: {
        title: ['Noto Serif', "serif"],
        sans: ['Noto Sans', "sans-serif"],
        serif: ['Noto Serif JP', "serif"]
      }
    },
  },
  plugins: [],
}