/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho: "'Rancho', cursive",
        raleway: "'Raleway', sans-serif"
      },
      colors: {
        primary: "#E3B577",
        secondary: "#331A15",
        tertiary: "#374151",
        quaternary: "#F4F3F0",
      },
    },
  },
  plugins: [require("daisyui")],
}
