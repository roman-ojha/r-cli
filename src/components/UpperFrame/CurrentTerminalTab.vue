<template>
  <div
    class="h-full w-60 bg-gray-black-700 rounded-tr-3xl rounded-tl-xl flex justify-between items-center"
    style="-webkit-app-region: no-drag"
  >
    <div class="flex justify-start items-center font-inter text-xs">
      <img :src="appIcon" class="w-4 m-2" />
      <h1 class="text-white font-inter">{{ tabTitle }}</h1>
    </div>
    <button
      class="w-3 h-3 bg-close-button mr-3 rounded-full cursor-pointer hover:bg-close-button-hover duration-100"
    ></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import appIcon from "../../assets/images/appicon.png";
import { useStore } from "../../store";
// import { TabsMutationType } from "../../store/modules/tabs/types";

const store = useStore();

export default defineComponent({
  name: "CurrentTerminalTab",
  data() {
    return {
      appIcon,
    };
  },
  methods: {
    // closeCurrentTab() {
    //   store.commit(TabsMutationType.CLOSE_CURRENT_TAB);
    // },
  },
  computed: {
    tabTitle() {
      return store.getters["getCurrentTabTitle"];
    },
  },
});
</script>

<style scoped></style>
