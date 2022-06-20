/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{pug,html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('../assets/img/sanFrancisco.webp')",
        sanFranciscoDesktop: "url('../assets/img/sanFranciscoDesktop.webp')",
        bali: "url('../assets/img/bali.webp')",
        chicago: "url('../assets/img/chicago.webp')",
        europe: "url('../assets/img/europe.webp')",
        iceland: "url('../assets/img/iceland.webp')",
        LA: "url('../assets/img/LA.webp')",
        miami: "url('../assets/img/miami.webp')",
        new_york: "url('../assets/img/new_york.webp')",
        norway: "url('../assets/img/norway.webp')",
        seattle: "url('../assets/img/seattle.webp')",
        switzerland: "url('../assets/img/switzerland.webp')",
        sydney: "url('../assets/img/sydney.webp')",
        yosemite: "url('../assets/img/yosemite.webp')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      }),
      textColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      gridTemplateRows: {
        layout: "repeat(3, minmax(0, auto))",
      },
      screens: {
        ".5xl": "1120px",
      },
    },
  },
  plugins: [],
};
