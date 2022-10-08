<template>
  <div id="cli-playground-tab" class="w-full h-full absolute top-0 left-0">
    <CustomTerminal />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomTerminal from "./CustomTerminal/Index.vue";

export default defineComponent({
  name: "TabVue",
  props: {
    tabInfo: {
      type: Object,
      required: true,
    },
  },
  components: {
    CustomTerminal,
  },
  computed: {},
});
</script>

<style scoped></style>
