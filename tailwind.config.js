/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('../assets/img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('../assets/img/sanFranciscoDesktop.jpg')",
        bali: "url('../assets/img/bali.jpg')",
        chicago: "url('../assets/img/chicago.jpg')",
        europe: "url('../assets/img/europe.jpg')",
        iceland: "url('../assets/img/iceland.jpg')",
        LA: "url('../assets/img/LA.jpg')",
        miami: "url('../assets/img/miami.jpg')",
        new_york: "url('../assets/img/new_york.jpg')",
        norway: "url('../assets/img/norway.jpg')",
        seattle: "url('../assets/img/seattle.jpg')",
        switzerland: "url('../assets/img/switzerland.jpg')",
        sydney: "url('../assets/img/sydney.jpg')",
        yosemite: "url('../assets/img/yosemite.jpg')",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
