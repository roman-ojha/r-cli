<template>
  <div
    id="cli-playground-tab"
    class="w-cli-playground h-cli-playground absolute top-upperFrame left-sideBar"
  >
    <h1 class="text-white">R-CLI {{ tabNo }}</h1>
    <input type="text" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TabVue",
  props: {
    tabNo: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped></style>
