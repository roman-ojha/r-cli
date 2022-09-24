<template>
  <div
    id="cli-playground-tab"
    class="w-cli-playground h-cli-playground absolute top-upperFrame left-sideBar flex justify-center items-center"
  >
    <h1 class="text-white text-9xl font-extrabold">
      {{ tabInfo.name }}
    </h1>
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
