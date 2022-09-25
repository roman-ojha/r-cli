const upperFrameTBorder = 8;
const upperFrameHeight = 35 + upperFrameTBorder;
const sideBarWidth = 50;

export default {
  height: {
    upperFrame: `${upperFrameHeight}px`,
    "side-bar": `calc(100vh - ${upperFrameHeight}px)`,
    "cli-playground": `calc(100vh - ${upperFrameHeight}px)`,
  },
  width: {
    "side-bar": `${sideBarWidth}px`,
    "cli-playground": `calc(100vw - ${sideBarWidth}px)`,
  },
};

export { upperFrameHeight, upperFrameTBorder, sideBarWidth };
