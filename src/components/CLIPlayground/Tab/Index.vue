<template>
  <div
    id="cli-playground-tab"
    class="w-cli-playground h-cli-playground absolute top-upperFrame left-sideBar"
  >
    <h1 class="text-white">{{ tabInfo.name }}</h1>
    <input type="text" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "../../../store";
const store = useStore();

export default defineComponent({
  name: "TabVue",
  props: {
    tabInfo: {
      type: Object,
      required: true,
    },
  },
  computed: {},
});
</script>

<style scoped></style>
