<template>
  <div
    id="docs-container"
    class="h-docs w-after-docs-visible-docs flex justify-center items-center"
  >
    <DocsContent v-if="isDocsVisible" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DocsContent from "./DocsContent.vue";
import { useStore } from "../../store";
import styleConstant from "../../constant/style";

const store = useStore();

export default defineComponent({
  name: "Index",
  components: { DocsContent },
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
});
</script>

<style scoped></style>
