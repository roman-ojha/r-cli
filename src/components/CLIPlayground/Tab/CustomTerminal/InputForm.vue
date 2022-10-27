<template>
  <div class="w-full pr-2 pt-1.5">
    <textarea
      id="custom-terminal-input-form"
      class="bg-transparent text-white outline-none resize-none h-auto overflow-hidden w-full text-lg"
      @input="autoGrow"
      @keypress="keyPressed"
      autofocus
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "InputForm",
  methods: {
    autoGrow(element) {
      element.target.style.height = element.target.scrollHeight + "px";
    },
    keyPressed(elm) {
      window.addEventListener("keypress", (e) => {
        console.log(elm.target.value);
        const textAreaElm = document.getElementById(
          "custom-terminal-input-form"
        ) as HTMLTextAreaElement;
        if (e.keyCode === 13) {
          // textAreaElm.value = textAreaElm.value.split("\n")[0];
          return false;
        } else {
          return true;
        }
      });
    },
  },
  mounted() {
    addEventListener("resize", (event) => {
      const textAreaElm = document.getElementById("custom-terminal-input-form");
      textAreaElm.style.height = textAreaElm.scrollHeight + "px";
    });
  },
});
</script>

<style scoped></style>
