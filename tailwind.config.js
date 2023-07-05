/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/FirstHeader/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/Main/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/SecondHeader/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors :{
        bgTopcolor : "#0b0e0b",
        pinkColor :"#ed2590",
        goldColor: "#ffd700",
        whiteColor: "#fff"
      },
      fontFamily :{
        Montserrat: ["Montserrat", "sans-serif"],

      },
    },
  },
  plugins: [],
}

