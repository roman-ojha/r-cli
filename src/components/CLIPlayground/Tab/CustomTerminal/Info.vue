<template>
  <div class="border-solid border-2 border-white w-40 h-10">
    <div
      class="flex justify-center items-center border-solid border-2 border-pink-600"
    >
      <div class="bg-blue-500">
        <h2>Roman</h2>
      </div>
      <div class="flex flex-col">
        <div
          class="border-l-8 border-r-8 border-b-8 border-solid border-l-blue-500 border-r-transparent border-b-transparent"
        ></div>
        <!-- <div class="bg-blue-500 h-5 w-5"></div> -->
      </div>
    </div>
    <!-- <div>
      <div></div>
      <div></div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Info",
});
</script>

<style scoped></style>
