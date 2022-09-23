<template>
  <div>
    <UpperFrame />
    <SideBar />
    <CLIPlayground />
  </div>
</template>

<script lang="ts">
import SideBar from "./components/SideBar/Index.vue";
import UpperFrame from "./components/UpperFrame/Index.vue";
import CLIPlayground from "./components/CLIPlayground/Index.vue";
import { useStore } from "./store";
import { TabsMutationType } from "./store/modules/tabs/types";
import { defineComponent } from "@vue/runtime-core";

const store = useStore();

export default defineComponent({
  name: "App",
  components: {
    UpperFrame,
    SideBar,
    CLIPlayground,
  },
  methods: {
    handleKeyPressEvent(event: KeyboardEvent) {
      console.log(event.keyCode);
      if (event.keyCode === 14) {
        // create new Tab Tab
        // ctrl + n
        store.commit(TabsMutationType.OPEN_NEW_TAB);
      } else if (event.keyCode === 23) {
        // Close current Tab
        // ctrl + shift + w
        store.commit(TabsMutationType.CLOSE_CURRENT_TAB);
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
