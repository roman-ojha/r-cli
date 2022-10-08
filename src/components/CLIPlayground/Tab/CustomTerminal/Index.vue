<template>
  <div class="border-solid border-2 border-red-500 w-full h-full">
    <Info />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Info from "./Info.vue";

export default defineComponent({
  name: "CustomTerminal",
  components: {
    Info,
  },
});
</script>

<style scoped></style>
