<template>
  <div id="cli-playground-tab" class="w-full h-full absolute top-0 left-0">
    <CustomTerminal />
    <!-- <Terminal /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CustomTerminal from "./CustomTerminal/Index.vue";
import Terminal from "./Terminal/Index.vue";

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
    Terminal,
  },
  computed: {},
});
</script>

<style scoped></style>
