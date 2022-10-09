<template>
  <div class="">
    <textarea
      id="custom-terminal-input-form"
      class="bg-transparent text-white outline-none resize-none h-auto border-2 border-solid border-red-500"
      @input="autoGrow"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "InputForm",
  methods: {
    autoGrow(element) {
      console.log(element.style);
      // element.style.height = "5px";
      // element.style.height = element.scrollHeight + "px";
    },
  },
  mounted() {
    document.getElementById("");
  },
});
</script>

<style scoped></style>
