const upperFrameTBorder = 8;
const upperFrameHeight = 35 + upperFrameTBorder;
const sideBarWidth = 50;

export default {
  height: {
    upperFrame: `${upperFrameHeight}px`,
    sideBar: `calc(100vh - ${upperFrameHeight}px)`,
    cliPlayground: `calc(100vh - ${upperFrameHeight}px)`,
  },
  width: {
    sideBar: `${sideBarWidth}px`,
    cliPlayground: `calc(100vw - ${sideBarWidth}px)`,
    afterDocsVisibleOn: {
      cliPlayground: `calc(60vw - ${sideBarWidth}px)`,
      docs: "40vw",
    },
  },
};

export { upperFrameHeight, upperFrameTBorder, sideBarWidth };
