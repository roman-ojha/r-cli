<template>
  <div
    :class="[
      'p-2 m-1',
      id == activeTabId ? 'bg-gray-black-700' : '',
      'rounded-tr-2xl',
      'rounded-tl-md',
      id == activeTabId ? 'shadow-tab' : '',
      'cursor-pointer',
      'duration-150',
      id == activeTabId ? '' : 'hover:bg-gray-black-200',
    ]"
  >
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
  props: {
    id: {
      type: Number,
      required: true,
    },
    activeTabId: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped></style>
