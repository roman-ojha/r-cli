<template>
  <div>
    <UpperFrame />
    <SideBar />
    <CLIPlayground />
  </div>
</template>

<script lang="ts">
import SideBar from "./components/SideBar/Index.vue";
import UpperFrame from "./components/UpperFrame/Index.vue";
import CLIPlayground from "./components/CLIPlayground/Index.vue";

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
