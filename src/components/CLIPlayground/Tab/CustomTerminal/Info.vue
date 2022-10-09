<template>
  <div class="h-10 pl-1 mr-1 flex justify-center items-center w-max">
    <div class="flex justify-center items-center relative left-1">
      <div
        class="bg-blue-400 h-7 rounded-l-full pl-6 pr-4 flex justify-center items-center"
      >
        <h2 class="font-semibold">Roman</h2>
      </div>
      <div class="flex flex-col">
        <div
          class="border-l-7 border-r-7 border-b-7 border-t-7 border-solid border-l-blue-400 border-r-transparent border-b-transparent border-t-blue-400"
        ></div>
        <div
          class="border-l-7 border-r-7 border-b-7 border-t-7 border-solid border-l-blue-400 border-r-transparent border-b-blue-400 border-t-transparent"
        ></div>
      </div>
    </div>
    <div class="h-8 bg-green flex justify-center items-center">
      <div
        class="border-l-0 border-r-14 border-b-14 border-t-14 border-solid border-r-green-400 border-b-transparent border-t-transparent"
      ></div>
      <div
        class="bg-green-400 h-7 flex justify-center items-center pl-2 pr-4 rounded-r-2xl"
      >
        <Icon icon="ant-design:home-filled" width="20px" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
export default defineComponent({
  name: "Info",
  components: {
    Icon,
  },
});
</script>

<style scoped></style>
