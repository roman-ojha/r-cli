<template>
  <div id="container">
    <div
      id="playground-background"
      class="w-cli-playground h-cli-playground absolute top-upperFrame left-sideBar before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:absolute before:bg-playgroundImage before:bg-no-repeat before:bg-center before:bg-cover before:saturate-10 before:contrast-140 before:brightness-50"
    ></div>
    <keep-alive>
      <!-- <TabVue v-for="i in numberOfTab" :key="i" v-show="activeTab === i" /> -->
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabVue from "./Tab/Index.vue";
import { useStore } from "../../store";

const store = useStore();

export default defineComponent({
  name: "CLIPlayground",
  components: {
    TabVue,
  },
  computed: {
    activeTab() {
      return store.getters["activeTab"];
    },
    numberOfTab() {
      return store.getters["numberOfTab"];
    },
  },
});
</script>

<style scoped></style>
