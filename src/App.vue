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

const store = useStore();

export default {
  name: "App",
  components: {
    UpperFrame,
    SideBar,
    CLIPlayground,
  },
  created() {
    console.log("mounted");
    window.addEventListener("keypress", (event) => {
      console.log("added");
      if (event.keyCode === 14) {
        // ctrl + n
        store.commit(TabsMutationType.OPEN_NEW_TAB);
      }
    });
  },
  unmounted() {
    console.log("unmounted");
    window.removeEventListener("keypress", (event) => {
      console.log("removed");
    });
  },
};
</script>

<style src="./style.css" />
