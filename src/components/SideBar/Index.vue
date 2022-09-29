<template>
  <div
    id="container"
    class="w-side-bar bg-black h-side-bar flex flex-col justify-start items-center py-2"
  >
    <TabButton
      v-for="tab in tabInfo"
      :id="tab.id"
      :activeTabId="activeTabId"
      :key="tab.id"
      @click="changeTab(tab.id)"
    />
    <Icon
      icon="carbon:add-filled"
      :color="plusIconColor"
      class="w-6 h-6 mt-2 cursor-pointer"
      @click="createNewTab()"
    />
    <Icon
      icon="carbon:list-boxes"
      :color="terminalListColor"
      class="w-4 h-4 mt-3 cursor-pointer"
      @click="openTerminalList()"
    />

    <!-- Terminal Lists Portal -->
    <teleport to="#terminal-list-portal">
      <TerminalLists />
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabButton from "./TabButton.vue";
import { Icon } from "@iconify/vue";
import { useStore } from "../../store";
import { TabsMutationType } from "../../store/modules/tabs/types";
import { TerminalListMutationType } from "../../store/modules/terminalList/types";
import TerminalLists from "../TerminalLists/Index.vue";

const store = useStore();

export default defineComponent({
  name: "SideBar",
  components: {
    Icon,
    TabButton,
    TerminalLists,
  },
  computed: {
    activeTabId() {
      return store.getters["activeTabId"];
    },
    numberOfTabs() {
      return store.getters["numberOfTab"];
    },
    currentTabInfo() {
      return store.getters["getCurrentTabInfo"];
    },
    tabInfo() {
      return store.getters["getTabInfo"];
    },
  },
  data() {
    return {
      plusIconColor: "#809DE5",
      terminalListColor: "#809DE5",
    };
  },
  methods: {
    changeTab(tabId: number) {
      store.commit(TabsMutationType.CHANGE_TAB, tabId);
    },
    createNewTab() {
      store.commit(TabsMutationType.OPEN_NEW_TAB);
    },
    openTerminalList() {
      store.commit(
        TerminalListMutationType.CHANGE_TERMINAL_VISIBILITY,
        "visible"
      );
    },
  },
});
</script>

<style scoped></style>
