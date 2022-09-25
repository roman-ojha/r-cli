<template>
  <div
    id="cli-playground-tab"
    class="w-full h-full absolute top-0 left-0 flex justify-center items-center"
  >
    <h1 class="text-white text-9xl font-extrabold">
      {{ tabInfo.name }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
