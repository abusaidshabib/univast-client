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
          100: "#e5e6ff",
          200: "#cbcdff",
          300: "#b1b5ff",
          400: "#979cff",
          500: "#7d83ff",
          600: "#6469cc",
          700: "#4b4f99",
          800: "#323466",
          900: "#191a33"
        },
        secondary: {
          100: "#fff2d9",
          200: "#ffe4b3",
          300: "#ffd78e",
          400: "#ffc968",
          500: "#ffbc42",
          600: "#cc9635",
          700: "#997128",
          800: "#664b1a",
          900: "#33260d"
        },
        accent: {
          100: "#dafaf2",
          200: "#b5f5e4",
          300: "#91efd7",
          400: "#6ceac9",
          500: "#47e5bc",
          600: "#39b796",
          700: "#2b8971",
          800: "#1c5c4b",
          900: "#0e2e26"
        },
        neural: {
          100: "#fae0df",
          200: "#f5c0bf",
          300: "#efa19e",
          400: "#ea817e",
          500: "#e5625e",
          600: "#b74e4b",
          700: "#893b38",
          800: "#5c2726",
          900: "#2e1413"
        },
        background: {
          100: "#cecfcf",
          200: "#9c9f9f",
          300: "#6b6f6f",
          400: "#393f3f",
          500: "#080f0f",
          600: "#060c0c",
          700: "#050909",
          800: "#030606",
          900: "#020303"
        },
        "p-white": "#FAF9F6",
        "info": "#3ABFF8",
        "success": "#36D399",
        "warning": "#FBBD23",
        "error": "#F87272",
      },
      fontFamily: {
        sans: ['Noto Sans', "sans-serif"],
        serif: ['Noto Serif', "serif"],
        primary: ['Noto Serif JP', 'serif']
      }
    },
  },
  plugins: [],
}