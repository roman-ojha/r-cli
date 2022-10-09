<template>
  <div>
    <div class="mt-4">
      <Info />
    </div>
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
