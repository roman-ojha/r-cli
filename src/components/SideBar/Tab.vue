<template>
  <div
    :class="[
      'p-2 m-1',
      active ? 'bg-gray-black-700' : '',
      'rounded-tr-2xl',
      'rounded-tl-md',
      active ? 'shadow-tab' : '',
      'cursor-pointer',
      'duration-150',
      active ? '' : 'hover:bg-gray-black-200',
    ]"
  >
    <img :src="appIcon" class="w-5" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import appIcon from "../../assets/images/appicon.png";

interface Props {
  active: boolean;
}

export default defineComponent({
  name: "TabVue",
  data() {
    return {
      appIcon,
    };
  },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped></style>
