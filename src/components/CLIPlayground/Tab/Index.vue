<template>
  <div
    id="cli-playground-tab"
    class="w-cli-playground h-cli-playground absolute top-upperFrame left-sideBar"
  >
    <h1 class="text-white">{{ tabTitle }}</h1>
    <input type="text" />
    <!-- <audio controls :src="testAudio"></audio> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../../../store";
// import testAudio from "C:/Users/razzr/Downloads/Music/test.mp3";

const store = useStore();

export default defineComponent({
  name: "TabVue",
  data() {
    return {
      // testAudio,
    };
  },
  computed: {
    tabTitle() {
      return store.getters["getCurrentTabTitle"];
    },
  },
});
</script>

<style scoped></style>
