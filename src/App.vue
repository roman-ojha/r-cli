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
    createNewTab(event: KeyboardEvent) {
      if (event.keyCode === 14) {
        // ctrl + n
        store.commit(TabsMutationType.OPEN_NEW_TAB);
      }
    },
  },
  created() {
    window.addEventListener("keypress", this.createNewTab);
  },
  unmounted() {
    window.removeEventListener("keypress", this.createNewTab);
  },
});
</script>

<style src="./style.css" />
