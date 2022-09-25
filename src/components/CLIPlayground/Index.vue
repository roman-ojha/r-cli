<template>
  <div
    id="cli-playground-container"
    class="relative w-cli-playground h-cli-playground"
  >
    <div
      id="playground-background"
      class="w-full h-full before:content-[''] before:w-full before:h-full before:absolute before:bg-playgroundImage before:bg-no-repeat before:bg-center before:bg-cover before:saturate-10 before:contrast-140 before:brightness-50"
    ></div>
    <keep-alive>
      <TabVue
        v-for="tab in tabInfo"
        :key="tab.id"
        v-show="activeTabId === tab.id"
        :tabInfo="tab"
      />
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
    activeTabId() {
      return store.getters["activeTabId"];
    },
    numberOfTab() {
      return store.getters["numberOfTab"];
    },
    tabInfo() {
      return store.getters["getTabInfo"];
    },
  },
});
</script>

<style scoped></style>
