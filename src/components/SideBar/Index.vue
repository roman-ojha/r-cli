<template>
  <div
    id="container"
    class="w-side-bar bg-black h-side-bar flex flex-col justify-start items-center py-2"
  >
    <Tab
      v-for="i in numberOfTab"
      :id="i"
      :selectedTab="selectedTab"
      :key="i"
      @click="changeTab(i)"
    />
    <Icon
      icon="carbon:add-filled"
      :color="plusIconColor"
      class="w-6 h-6 mt-2 cursor-pointer"
      @click="openNewTab"
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
      selectedTab: 1,
      numberOfTab: 5,
    };
  },
  methods: {
    changeTab(tabNo: number) {
      this.selectedTab = tabNo;
    },
    openNewTab() {
      if (this.numberOfTab <= 10) {
        this.numberOfTab++;
      }
    },
  },
  components: {
    Tab,
    Icon,
  },
});
</script>

<style scoped></style>
