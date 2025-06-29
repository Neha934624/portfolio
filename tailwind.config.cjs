/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        tertiary: "#112240",
        lightSlate: "#a8b2d1",
        lightestSlate: "#ccd6f6",
        slate: "#8892b0",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
