<template>
  <div id="docs-container">
    <div id="drag-cli-docs" v-if="isDocsVisible"></div>
    <div
      id="docs"
      v-if="isDocsVisible"
      :class="['h-docs', 'bg-red-300', 'w-after-docs-visible-docs']"
    >
      <h1>Docs</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../../store";
import styleConstant from "../../constant/style";

const store = useStore();

export default defineComponent({
  name: "Index",
  computed: {
    isDocsVisible(): boolean {
      const value = store.getters["isDocsVisible"];
      const cliPlaygroundElm = document.getElementById(
        "cli-playground-container"
      );
      const docsElm = document.getElementById("docs-container");
      if (cliPlaygroundElm && docsElm && value) {
        cliPlaygroundElm!.style.width =
          styleConstant.width.afterDocsVisibleOn.cliPlayground;
        docsElm!.style.width = styleConstant.width.afterDocsVisibleOn.docs;
      } else if (cliPlaygroundElm && docsElm && !value) {
        cliPlaygroundElm!.style.width = styleConstant.width.cliPlayground;
        docsElm!.style.width = "0px";
      }
      return value;
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
  },
});
</script>

<style scoped></style>
