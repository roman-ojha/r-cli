<template>
  <div
    id="container"
    style="-webkit-app-region: drag"
    class="w-full h-upperFrame bg-black flex justify-between items-center border-solid border-black border-t-8 border-l-8"
  >
    <CurrentTerminalTab />
    <div
      class="flex justify-between items-center"
      style="-webkit-app-region: no-drag"
    >
      <button
        class="text-white text-sm font-bold mr-10vw cursor-pointer hover:text-gray-300 duration-100"
        @click="toggleDocs"
      >
        Docs
      </button>
      <WindowsControlButton />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrentTerminalTab from "./CurrentTerminalTab.vue";
import WindowsControlButton from "./WindowsControlButton.vue";
import { useStore } from "../../store";
import { DocsActionType } from "../../store/modules/docs/types";

const store = useStore();

export default defineComponent({
  name: "UpperFrame",
  components: {
    CurrentTerminalTab,
    WindowsControlButton,
  },
  computed: {
    isDocsVisible() {
      return store.getters["isDocsVisible"];
    },
  },
  methods: {
    toggleDocs() {
      return store.dispatch(DocsActionType.TOGGLE_DOCS, undefined);
    },
  },
});
</script>

<style scoped></style>
