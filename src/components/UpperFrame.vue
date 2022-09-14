<template>
  <div id="container" style="-webkit-app-region: drag"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "UpperFrame",
});
</script>

<style scoped>
#container {
  width: 100%;
  height: 20px;
  background-color: white;
}
</style>
