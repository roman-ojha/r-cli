<template>
  <div id="container">
    <div id="container-inside"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CLIPlayground",
  data: function () {
    return {};
  },
});
</script>

<style scoped>
/* #container {
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  position: absolute;
  top: 20px;
  left: 20px;
  object-fit: cover;
  display: flex;
}
#container::before {
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("../assets/images/background_image.png");
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  filter: saturate(0.1) contrast(1.4) brightness(0.5);
} */
</style>
