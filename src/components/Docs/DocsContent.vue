<template>
  <div
    id="drag-cli-docs"
    class="h-full w-draggable-div-for-cli-and-docs cursor-w-resize"
  ></div>
  <div id="docs" class="h-full w-full bg-gray-500">
    <h1>Docs</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../../store";
import styleConstant, {
  sideBarWidth,
  draggableDivForCliAndDocsWidth,
} from "../../constant/style";

const store = useStore();

export default defineComponent({
  name: "DocsContent",
  methods: {
    resizeCLIAndDocs(e: MouseEvent) {
      const windowsWidth = window.innerWidth;
      // console.log("windows width: ", window.innerWidth);
      const draggableDivXPosition = e.x;
      console.log("draggable div position: ", draggableDivXPosition);
      const cliPlaygroundElm = document.getElementById(
        "cli-playground-container"
      );
      const docsElm = document.getElementById("docs-container");
      const cliPlaygroundWidth = cliPlaygroundElm?.clientWidth || 0;
      console.log("cli playground width: ", cliPlaygroundWidth);
      const cliAndSideBarWidth = sideBarWidth + cliPlaygroundWidth;
      console.log("cli playground + side bar width:", cliAndSideBarWidth);
      const docsWidth = docsElm?.clientWidth || 0;
      // console.log("docs width: ", docsWidth);
      const centerOfDraggableDiv =
        cliAndSideBarWidth + Math.floor(draggableDivForCliAndDocsWidth / 2);
      console.log("center of Draggable Div: ", centerOfDraggableDiv);
      if (centerOfDraggableDiv > draggableDivXPosition) {
        const changeInWidth = centerOfDraggableDiv - draggableDivXPosition;
        const newWidthOfCliPlayground = cliPlaygroundWidth - changeInWidth;
        const newDocsWidth = docsWidth + changeInWidth;
        cliPlaygroundElm!.style.width = `${newWidthOfCliPlayground}px`;
        docsElm!.style.width = `${newDocsWidth}px`;
      } else if (draggableDivXPosition > centerOfDraggableDiv) {
        const changeInWidth = draggableDivXPosition - centerOfDraggableDiv;
        const newWidthOfCliPlayground = cliPlaygroundWidth + changeInWidth;
        const newDocsWidth = docsWidth - changeInWidth;
        cliPlaygroundElm!.style.width = `${newWidthOfCliPlayground}px`;
        docsElm!.style.width = `${newDocsWidth}px`;
      }
    },
    mouseMoveLeft(e: MouseEvent) {
      const mousePosition = e.x;
      const cliPlaygroundElm = document.getElementById(
        "cli-playground-container"
      );
      const docsElm = document.getElementById("docs-container");
      const cliPlaygroundWidth = cliPlaygroundElm?.clientWidth || 0;
      const cliAndSideBarWidth = sideBarWidth + cliPlaygroundWidth;
      const docsWidth = docsElm?.clientWidth || 0;
      if (cliPlaygroundWidth > 400) {
        const changeInWidth = cliAndSideBarWidth - mousePosition;
        const newWidthOfCliPlayground = cliPlaygroundWidth - changeInWidth;
        const newDocsWidth = docsWidth + changeInWidth;
        cliPlaygroundElm!.style.width = `${newWidthOfCliPlayground}px`;
        docsElm!.style.width = `${newDocsWidth}px`;
      }
    },
    mouseMoveRight(e: MouseEvent) {
      const mousePosition = e.x;
      const cliPlaygroundElm = document.getElementById(
        "cli-playground-container"
      );
      const docsElm = document.getElementById("docs-container");
      const cliPlaygroundWidth = cliPlaygroundElm?.clientWidth || 0;
      const cliAndSideBarWidth = sideBarWidth + cliPlaygroundWidth;
      const docsWidth = docsElm?.clientWidth || 0;
      if (docsWidth > 300) {
        const changeInWidth = mousePosition - cliAndSideBarWidth;
        const newWidthOfCliPlayground = cliPlaygroundWidth + changeInWidth;
        const newDocsWidth = docsWidth - changeInWidth;
        cliPlaygroundElm!.style.width = `${newWidthOfCliPlayground}px`;
        docsElm!.style.width = `${newDocsWidth}px`;
      }
    },
  },
  mounted() {
    const isDocsVisible = store.getters["isDocsVisible"];
    const cliPlaygroundElm = document.getElementById(
      "cli-playground-container"
    );
    const docsElm = document.getElementById("docs-container");
    if (cliPlaygroundElm && docsElm && isDocsVisible) {
      cliPlaygroundElm!.style.width =
        styleConstant.width.afterDocsVisibleOn.cliPlayground;
      docsElm!.style.width = styleConstant.width.afterDocsVisibleOn.docs;
    }

    // resize cli and docs
    const draggableDiv = document.getElementById("drag-cli-docs");
    draggableDiv?.addEventListener("mousedown", (e) => {
      // draggableDiv?.addEventListener("mousemove", this.resizeCLIAndDocs);
      cliPlaygroundElm?.addEventListener("mousemove", this.mouseMoveLeft);
      docsElm?.addEventListener("mousemove", this.mouseMoveRight);
      window.addEventListener("mouseup", (e) => {
        // draggableDiv?.removeEventListener("mousemove", this.resizeCLIAndDocs);
        cliPlaygroundElm?.removeEventListener("mousemove", this.mouseMoveLeft);
        docsElm?.removeEventListener("mousemove", this.mouseMoveRight);
      });
    });
  },
  unmounted() {
    const draggableDiv = document.getElementById("drag-cli-docs");
    // draggableDiv?.removeEventListener("mousemove", this.resizeCLIAndDocs);
    draggableDiv?.removeEventListener("mousedown", (e) => {});
    window?.removeEventListener("mouseup", (e) => {});
  },
});
</script>

<style scoped></style>
