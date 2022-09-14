<template>
  <div id="container"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SideBar",
});
</script>

<style scoped>
#container {
  width: 20px;
  height: calc(100vh - 20px);
  background-color: white;
}
</style>
