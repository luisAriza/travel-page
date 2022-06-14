/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        sanFrancisco: "url('./src/assets/img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('./src/assets/img/sanFranciscoDesktop.jpg')",
        bail: "url('./src/assets/img/bail.jpg')",
        chicago: "url('./src/assets/img/chicago.jpg')",
        europe: "url('./src/assets/img/europe.jpg')",
        iceland: "url('./src/assets/img/iceland.jpg')",
        LA: "url('./src/assets/img/LA.jpg')",
        miami: "url('./src/assets/img/miami.jpg')",
        new_york: "url('./src/assets/img/new_york.jpg')",
        norway: "url('./src/assets/img/norway.jpg')",
        seattle: "url('./src/assets/img/seattle.jpg')",
        switzerland: "url('./src/assets/img/switzerland.jpg')",
        sydney: "url('./src/assets/img/sydney.jpg')",
        yosemite: "url('./src/assets/img/yosemite.jpg')",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
