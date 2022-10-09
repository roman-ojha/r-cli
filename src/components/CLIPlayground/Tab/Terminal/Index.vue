<template>
  <div
    id="terminal-container"
    class="border-2 border-red-400 border-solid h-full w-full"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Terminal } from "xterm";
import CustomTerminal from "../CustomTerminal/Index.vue";
export default defineComponent({
  name: "Terminal",
  mounted() {
    const terminal = new Terminal();
    const terminalElm = document.getElementById("terminal-container");
    terminal.open(terminalElm!);
    terminal.write("<h1></h1>");
    // terminal.onData((e) => {
    //   // terminal.write(e);
    //   window.electronAPI.sendTerminalData(e);
    // });
    // window.electronAPI.terminalIncoming((event: any, data: any) => {
    //   terminal.write(data);
    // });
  },
  components: { CustomTerminal },
});
</script>

<style scoped></style>
