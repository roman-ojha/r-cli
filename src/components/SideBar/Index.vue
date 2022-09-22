<template>
  <div
    id="container"
    class="w-side-bar bg-black h-side-bar flex flex-col justify-start items-center py-2"
  >
    <Tab :active="true" />
    <Tab :active="false" />
    <Tab :active="false" />
    <Tab :active="false" />
    <Tab :active="false" />
    <Tab :active="false" />
    Tab />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tab from "./Tab.vue";

export default defineComponent({
  name: "SideBar",
  components: {
    Tab,
  },
});
</script>

<style scoped></style>
