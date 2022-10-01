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
    <img v-if="program === 'r-cli'" :src="appIcon" class="w-5" />
    <Icon
      v-if="program !== 'r-cli'"
      icon="bi:terminal"
      color="#FF5252"
      width="20"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import appIcon from "../../assets/images/appicon.png";
import { Icon } from "@iconify/vue";
import { TerminalProgram } from "../../store/modules/terminalList/types";

export default defineComponent({
  name: "TabVue",
  data() {
    return {
      appIcon,
    };
  },
  components: {
    Icon,
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
    program: {
      type: Object as () => TerminalProgram,
      required: true,
    },
  },
});
</script>

<style scoped></style>
