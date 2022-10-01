<template>
  <div
    id="terminal-list-component"
    class="absolute w-full h-full bg-transparent top-0 left-0 flex justify-center items-center"
    v-if="isVisible === 'visible'"
    @click="closeTerminalList"
  >
    <div
      class="w-72 h-max bg-gray-700 rounded-md flex flex-col items-center gap-4 pb-3"
    >
      <div
        class="w-full flex justify-center items-center bg-close-button rounded-md p-2 shadow-lg"
      >
        <h1 class="text-white font-medium text-lg">Terminal List</h1>
      </div>
      <div
        id="terminal-list-container"
        class="w-full gap-3 flex flex-col items-center"
      >
        <div
          class="bg-gray-400 w-11/12 flex justify-start items-center p-2 rounded-md cursor-pointer duration-100 hover:bg-slate-500 active:bg-slate-400"
          v-for="terminal in getList"
          :key="terminal.id"
          @click="createNewTerminal(terminal.program)"
        >
          <Icon icon="bi:terminal" color="white" width="20" />
          <h1 class="text-white text-lg ml-4">{{ terminal.name }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import { useStore } from "../../store";
import {
  TerminalListMutationType,
  TerminalProgram,
} from "../../store/modules/terminalList/types";
import { TabsMutationType } from "../../store/modules/tabs/types";

const store = useStore();

export default defineComponent({
  name: "TerminalLists",
  components: {
    Icon,
  },
  methods: {
    closeTerminalList(e: MouseEvent) {
      const terminalListElm = e.target as HTMLDivElement;
      if (terminalListElm.id === "terminal-list-component") {
        store.commit(
          TerminalListMutationType.CHANGE_TERMINAL_VISIBILITY,
          "hidden"
        );
      }
    },
    createNewTerminal(terminal: TerminalProgram) {
      store.commit(TabsMutationType.OPEN_NEW_TAB, {
        lastTerminal: false,
        terminal,
      });
    },
  },
  computed: {
    isVisible() {
      return store.getters["isTerminalListVisible"];
    },
    getList() {
      return store.getters["getTerminalList"];
    },
  },
});
</script>

<style scoped></style>
