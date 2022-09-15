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
    },
  },
  plugins: [],
};
