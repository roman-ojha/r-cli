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
    <Icon
      icon="carbon:add-filled"
      :color="plusIconColor"
      class="w-6 h-6 mt-2 cursor-pointer"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tab from "./Tab.vue";
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "SideBar",
  data() {
    return {
      plusIconColor: "#809DE5",
    };
  },
  components: {
    Tab,
    Icon,
  },
});
</script>

<style scoped></style>
