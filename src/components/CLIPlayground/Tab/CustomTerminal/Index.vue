<template>
  <div>
    <div class="mt-4 flex justify-start items-start">
      <Info />
      <InputForm />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Info from "./Info.vue";
import InputForm from "./InputForm.vue";

export default defineComponent({
  name: "CustomTerminal",
  components: {
    Info,
    InputForm,
  },
});
</script>

<style scoped></style>
