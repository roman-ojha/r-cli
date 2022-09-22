/** @type {import('tailwindcss').Config} */

const upperFrameTBorder = 8;
const upperFrameHeight = 35 + upperFrameTBorder;
const sideBarWidth = 50;
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        upperFrame: `${upperFrameHeight}px`,
        "side-bar": `calc(100vh - ${upperFrameHeight}px)`,
        "cli-playground": `calc(100vh - ${upperFrameHeight}px)`,
      },
      width: {
        "side-bar": `${sideBarWidth}px`,
        "cli-playground": `calc(100% - ${sideBarWidth}px)`,
      },
      spacing: {
        upperFrame: upperFrameHeight,
        sideBar: sideBarWidth,
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
        "primary-700": "#3f3f3fde",
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
      color: {},
      boxShadow: {
        tab: "1px 3px 0px #535353ff",
      },
    },
    fontFamily: {
      inter: "Inter",
    },
  },
  plugins: [],
};
