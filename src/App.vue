<template>
  <div>
    <!-- upper part -->
    <UpperFrame />
    <!-- lower part -->
    <div class="flex w-full">
      <SideBar />
      <CLIPlayground />
      <Docs />
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from "./components/SideBar/Index.vue";
import UpperFrame from "./components/UpperFrame/Index.vue";
import CLIPlayground from "./components/CLIPlayground/Index.vue";
import { useStore } from "./store";
import { TabsMutationType } from "./store/modules/tabs/types";
import { TerminalListMutationType } from "./store/modules/terminalList/types";
import { DocsActionType } from "./store/modules/docs/types";
import { defineComponent } from "@vue/runtime-core";
import Docs from "./components/Docs/Index.vue";

const store = useStore();

export default defineComponent({
  name: "App",
  components: {
    UpperFrame,
    SideBar,
    CLIPlayground,
    Docs,
  },
  methods: {
    handleKeyPressEvent(event: KeyboardEvent) {
      if (event.keyCode === 14) {
        // create new Tab Tab
        // ctrl + n | ctrl + shift + n
        store.commit(TabsMutationType.OPEN_NEW_TAB, {
          lastTerminal: true,
          terminal: null,
        });
      } else if (event.keyCode === 23) {
        // Close current Tab
        // ctrl + shift + w
        store.commit(TabsMutationType.CLOSE_CURRENT_TAB);
      } else if (event.keyCode === 4) {
        // ctrl + d | ctrl + shift + d
        store.dispatch(DocsActionType.TOGGLE_DOCS, undefined);
      } else if (event.keyCode === 20) {
        // toggle terminal list
        // ctrl + t | ctrl + shift + t
        store.commit(
          TerminalListMutationType.TOGGLE_TERMINAL_VISIBILITY,
          undefined
        );
      }
    },
  },
  created() {
    window.addEventListener("keypress", this.handleKeyPressEvent);
  },
  unmounted() {
    window.removeEventListener("keypress", this.handleKeyPressEvent);
  },
});
</script>

<style src="./style.css" />
