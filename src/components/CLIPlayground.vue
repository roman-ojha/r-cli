<template>
  <div
    id="container"
    class="w-[calc(100%-30px)] h-[calc(100vh-35px)] absolute top-upperFrame left-sideBar before:content-[''] before:top-0 before:left-0 before:w-full before:h-full before:absolute before:bg-playgroundImage before:bg-no-repeat before:bg-center before:bg-cover before:saturate-10 before:contrast-140 before:brightness-50"
  >
    <div id="container-inside"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CLIPlayground",
  data: function () {
    return {};
  },
});
</script>

<style scoped></style>
