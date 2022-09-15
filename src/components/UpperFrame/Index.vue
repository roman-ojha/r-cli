<template>
  <div
    id="container"
    style="-webkit-app-region: drag"
    class="w-full h-upperFrame bg-black"
  >
    <CurrentTerminalTab />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CurrentTerminalTab from "./CurrentTerminalTab.vue";
export default defineComponent({
  name: "UpperFrame",
  components: {
    CurrentTerminalTab,
  },
});
</script>

<style scoped></style>
