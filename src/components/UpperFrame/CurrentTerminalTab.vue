<template>
  <div
    class="h-full w-60 bg-gray-black-700 rounded-tr-3xl rounded-tl-xl flex justify-between items-center"
    style="-webkit-app-region: no-drag"
  >
    <div class="flex justify-start items-center font-inter text-xs">
      <img :src="appIcon" class="w-4 m-2" />
      <h1 v-if="!rename" @click="enterToRename" class="text-white font-inter">
        {{ title }}
      </h1>
      <form v-if="rename" class="w-2/3" :onsubmit="renameTerminal">
        <input
          autofocus
          v-model="inputTitle"
          class="w-full bg-gray-black-900 focus:border-primary focus:border-solid focus:border-2 text-white focus:font-inter text-base"
        />
      </form>
    </div>
    <button
      class="w-3 h-3 bg-close-button mr-3 rounded-full cursor-pointer hover:bg-close-button-hover duration-100"
      @click="closeCurrentTab"
    ></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import appIcon from "../../assets/images/appicon.png";
import { useStore } from "../../store";
import { TabsMutationType } from "../../store/modules/tabs/types";

const store = useStore();

export default defineComponent({
  name: "CurrentTerminalTab",
  data() {
    return {
      appIcon,
      rename: false,
      inputTitle: "",
    };
  },
  methods: {
    closeCurrentTab() {
      store.commit(TabsMutationType.CLOSE_CURRENT_TAB);
    },
    enterToRename() {
      this.rename = true;
    },
    renameTerminal(e: SubmitEvent) {
      e.preventDefault();
      if (this.inputTitle.trim().length !== 0) {
        store.commit(TabsMutationType.RENAME_TAB_TITLE, this.inputTitle);
        this.inputTitle = "";
      }
      this.rename = false;
    },
  },
  computed: {
    title() {
      return store.getters["getCurrentTabTitle"];
    },
  },
});
</script>

<style scoped></style>
