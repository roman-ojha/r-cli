<template>
  <div class="p-2 m-1 bg-primary-700 rounded-tr-2xl rounded-tl-md shadow-tab">
    <img :src="appIcon" class="w-5" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import appIcon from "../../assets/images/appicon.png";

export default defineComponent({
  name: "TabVue",
  data() {
    return {
      appIcon,
    };
  },
});
</script>

<style scoped></style>
