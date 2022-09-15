<template>
  <div
    id="container"
    style="-webkit-app-region: drag"
    class="w-full h-5 bg-red-600"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "UpperFrame",
});
</script>

<style scoped>
/* #container {
  width: 100%;
  height: 20px;
  background-color: white;
} */
</style>
