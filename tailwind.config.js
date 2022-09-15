/** @type {import('tailwindcss').Config} */

const upperFrameHeight = "35px";
const sideBarWidth = "30px";
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        upperFrame: upperFrameHeight,
      },
      width: {
        sideBar: sideBarWidth,
      },
      spacing: {
        upperFrame: "35px",
        sideBar: "30px",
      },
      backgroundImage: {
        playgroundImage: "url('./assets/images/background_image.png')",
      },
      saturate: {
        10: "0.1",
      },
      contrast: {
        140: "1.4",
      },
      backgroundColor: {
        "282828-900": "#3f3f3fde",
        "close-button": "#FF5252",
        "max-min-win-button": "#2CEC56",
        "minimize-button": "#E6E950",
        "close-button-hover": "#ff9191",
        "max-min-win-button-hover": "#afffc0",
        "minimize-button-hover": "#feffb1",
      },
      margin: {
        "10vw": "5vw",
      },
    },
    fontFamily: {
      inter: "Inter",
    },
  },
  plugins: [],
};
