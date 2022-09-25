const upperFrameTBorder = 8;
const upperFrameHeight = 35 + upperFrameTBorder;
const sideBarWidth = 50;
const draggableDivForCliAndDocsWidth = 5;
const defaultCliWidthFactorAfterDocsVisible = 50;
const defaultDocsWidthFactorAfterDocsVisible = 40;

export default {
  height: {
    upperFrame: `${upperFrameHeight}px`,
    sideBar: `calc(100vh - ${upperFrameHeight}px)`,
    cliPlayground: `calc(100vh - ${upperFrameHeight}px)`,
  },
  width: {
    sideBar: `${sideBarWidth}px`,
    cliPlayground: `calc(100vw - ${sideBarWidth}px)`,
    draggableDivForCliAndDocs: `${draggableDivForCliAndDocsWidth}px`,
    afterDocsVisibleOn: {
      cliPlayground: `calc(${defaultCliWidthFactorAfterDocsVisible}vw - ${sideBarWidth}px)`,
      docs: `${defaultCliWidthFactorAfterDocsVisible}vw`,
    },
  },
};

export {
  upperFrameHeight,
  upperFrameTBorder,
  sideBarWidth,
  draggableDivForCliAndDocsWidth,
  defaultCliWidthFactorAfterDocsVisible,
  defaultDocsWidthFactorAfterDocsVisible,
};
