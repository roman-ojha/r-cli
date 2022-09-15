<template>
  <div>
    <UpperFrame />
    <SideBar />
    <CLIPlayground />
  </div>
</template>

<script lang="ts">
import SideBar from "./components/SideBar.vue";
import UpperFrame from "./components/UpperFrame.vue";
import CLIPlayground from "./components/CLIPlayground.vue";

export default {
  name: "App",
  components: {
    UpperFrame,
    SideBar,
    CLIPlayground,
  },
};
</script>

<style src="./style.css" />
