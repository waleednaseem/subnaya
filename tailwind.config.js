/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/FirstHeader/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/Main/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/NavigationBar/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/SearchPanel/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    //material tailind
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        tertiary: "var(--tertiary-color)",
        quaternary: "var(--quaternary-color)",
        quinary: "var(--quinary-color)",
        bgprimary: "var(--bg-color)",
        textColor: "var(--text-color)",
        pinkColor: "var(--pink-color)",
        grayColor: "var( --gray-color)",
        contentColor:"var(--contentColor)",
        IconColor:"var(--IconColor)"
      },
      fontFamily :{
        Montserrat: ["Montserrat", "sans-serif"],

      },
    },
  },
  plugins: [],
})

