/** @type {import('tailwindcss').Config} */

const upperFrameTBorder = 8;
const upperFrameHeight = 35 + upperFrameTBorder;
const sideBarWidth = 50;
const draggableDivForCliAndDocsWidth = 5;
const defaultCliWidthFactorAfterDocsVisible = 50;
const defaultDocsWidthFactorAfterDocsVisible = 40;
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        upperFrame: `${upperFrameHeight}px`,
        "side-bar": `calc(100vh - ${upperFrameHeight}px)`,
        "cli-playground": `calc(100vh - ${upperFrameHeight}px)`,
        docs: `calc(100vh - ${upperFrameHeight}px)`,
      },
      width: {
        "side-bar": `${sideBarWidth}px`,
        "cli-playground": `calc(100vw - ${sideBarWidth}px)`,
        "after-docs-visible-cli-playground": `calc(${defaultCliWidthFactorAfterDocsVisible}vw - ${sideBarWidth}px)`,
        "after-docs-visible-docs": `${defaultDocsWidthFactorAfterDocsVisible}vw`,
        "draggable-div-for-cli-and-docs": `${draggableDivForCliAndDocsWidth}px`,
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
        "gray-black-700": "#3f3f3fde",
        "gray-black-200": "#3f3f3f8a",
        "gray-black-900": "#7272728a",
        "close-button": "#FF5252",
        "max-min-win-button": "#2CEC56",
        "minimize-button": "#E6E950",
        "close-button-hover": "#ff9191",
        "max-min-win-button-hover": "#afffc0",
        "minimize-button-hover": "#feffb1",
        primary: "#809DE5",
      },
      margin: {
        "10vw": "5vw",
      },
      colors: {
        primary: "#809DE5",
      },
      boxShadow: {
        tab: "1px 3px 0px #535353ff",
      },
    },
    fontFamily: {
      inter: "Inter",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      7: "7px",
      9: "9px",
      8: "8px",
      10: "10px",
      11: "11px",
      12: "12px",
      13: "13px",
      14: "14px",
      15: "15px",
      16: "16px",
      17: "17px",
      18: "18px",
    },
  },
  plugins: [],
};
