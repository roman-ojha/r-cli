<template>
  <div class="flex justify-between items-center gap-3 mr-3">
    <div
      class="w-3.5 h-3.5 bg-minimize-button rounded-full cursor-pointer hover:bg-minimize-button-hover duration-100"
    ></div>
    <div
      class="w-3.5 h-3.5 bg-max-min-win-button rounded-full cursor-pointer hover:bg-max-min-win-button-hover duration-100"
    ></div>
    <div
      class="w-3.5 h-3.5 bg-close-button rounded-full cursor-pointer hover:bg-close-button-hover duration-100"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "WindowsControlButton",
});
</script>

<style scoped></style>
