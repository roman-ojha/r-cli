/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "20px": "20px",
      },
      width: {
        "20px": "20px",
      },
      spacing: {
        "20px": "20px",
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
