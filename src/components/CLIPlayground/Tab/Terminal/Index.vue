<template>
  <div
    id="terminal-container"
    class="border-2 border-red-400 border-solid h-full w-full"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Terminal } from "xterm";
export default defineComponent({
  name: "Terminal",
  mounted() {
    const terminal = new Terminal();
    const terminalElm = document.getElementById("terminal-container");
    terminal.open(terminalElm!);
  },
});
</script>

<style scoped></style>
