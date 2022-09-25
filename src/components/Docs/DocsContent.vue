<template>
  <div
    id="drag-cli-docs"
    class="h-full w-draggable-div-for-cli-and-docs bg-black cursor-w-resize duration-200 hover:bg-primary"
  ></div>
  <div id="docs" class="h-full w-full bg-gray-500">
    <h1>Docs</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../../store";
import styleConstant, { sideBarWidth } from "../../constant/style";

const store = useStore();

export default defineComponent({
  name: "DocsContent",
  computed: {
    isDocsVisible(): boolean {
      return store.getters["isDocsVisible"];
    },
  },
  methods: {
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
    windowsGotResized() {
      // set cli & docs width into default value
      this.defaultSize();
    },
    defaultSize() {
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
    },
  },
  mounted() {
    this.defaultSize();
    const cliPlaygroundElm = document.getElementById(
      "cli-playground-container"
    );
    const docsElm = document.getElementById("docs-container");

    // resize cli and docs
    const draggableDiv = document.getElementById("drag-cli-docs");
    draggableDiv?.addEventListener("mousedown", (e) => {
      cliPlaygroundElm?.addEventListener("mousemove", this.mouseMoveLeft);
      docsElm?.addEventListener("mousemove", this.mouseMoveRight);
      window.addEventListener("mouseup", (e) => {
        cliPlaygroundElm?.removeEventListener("mousemove", this.mouseMoveLeft);
        docsElm?.removeEventListener("mousemove", this.mouseMoveRight);
      });
    });

    window.addEventListener("resize", this.windowsGotResized);
  },
  unmounted() {
    const draggableDiv = document.getElementById("drag-cli-docs");
    draggableDiv?.removeEventListener("mousedown", (e) => {});
    window?.removeEventListener("mouseup", (e) => {});
    window.removeEventListener("resize", this.windowsGotResized);
  },
});
</script>

<style scoped></style>
