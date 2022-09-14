<template>
  <div>
    <UpperFrame />
    <SideBar />
  </div>
</template>

<script lang="ts">
import SideBar from "./components/SideBar.vue";
import UpperFrame from "./components/UpperFrame.vue";

export default {
  name: "App",
  components: {
    UpperFrame,
    SideBar,
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  height: 100vh;
  background-color: black;
  // overflow: hidden;
}
</style>
