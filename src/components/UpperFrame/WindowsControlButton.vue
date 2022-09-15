<template>
  <div
    class="flex justify-between items-center gap-3 mr-3 bg-282828-900 py-2 px-2 rounded-xl"
  >
    <button
      class="w-3.5 h-3.5 bg-minimize-button rounded-full cursor-pointer hover:bg-minimize-button-hover duration-100"
      v-on:click="minimizeWindow"
    ></button>
    <button
      class="w-3.5 h-3.5 bg-max-min-win-button rounded-full cursor-pointer hover:bg-max-min-win-button-hover duration-100"
      v-on:click="toggleFullScreen"
    ></button>
    <button
      class="w-3.5 h-3.5 bg-close-button rounded-full cursor-pointer hover:bg-close-button-hover duration-100"
      v-on:click="closeWindows"
    ></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "WindowsControlButton",
  methods: {
    minimizeWindow() {
      window.electronAPI.minimizeWindow();
    },
    toggleFullScreen() {
      window.electronAPI.toggleFullScreen();
    },
    closeWindows() {
      window.electronAPI.closeWindows();
    },
  },
});
</script>

<style scoped></style>
