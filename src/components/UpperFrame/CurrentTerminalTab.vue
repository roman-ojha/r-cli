<template>
  <div
    class="h-full w-60 bg-282828-900 rounded-tr-3xl flex justify-between items-center"
  >
    <div class="flex justify-start items-center font-inter text-xs">
      <img :src="appIcon" class="w-4 m-2" />
      <h1 class="text-white">Terminal 1</h1>
    </div>
    <div class="w-3 h-3 bg-red-500 mr-3 rounded-full"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import appIcon from "../../assets/images/appicon.png";
export default defineComponent({
  name: "CurrentTerminalTab",
  data() {
    return {
      appIcon,
    };
  },
});
</script>

<style scoped></style>
