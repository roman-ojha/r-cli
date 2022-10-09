<template>
  <div class="h-10 pl-2 flex justify-center items-center w-max">
    <div class="flex justify-center items-center">
      <div
        class="bg-blue-500 h-8 rounded-l-full pl-4 pr-4 flex justify-center items-center"
      >
        <h2 class="font-semibold">Roman</h2>
      </div>
      <div class="flex flex-col">
        <div
          class="border-l-8 border-r-8 border-b-8 border-t-8 border-solid border-l-blue-500 border-r-transparent border-b-transparent border-t-blue-500"
        ></div>
        <div
          class="border-l-8 border-r-8 border-b-8 border-t-8 border-solid border-l-blue-500 border-r-transparent border-b-blue-500 border-t-transparent"
        ></div>
      </div>
    </div>
    <div class="h-8 bg-green">
      <div></div>
      <div>
        <Icon icon="ant-design:home-filled" color="white" />
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
