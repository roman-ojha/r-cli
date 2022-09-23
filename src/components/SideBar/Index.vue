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
    <!-- <router-link
      v-for="tab in tabInfo"
      :key="tab.id"
      :to="`/${tab.id}`"
      @click="changeTab(tab.id)"
    >
      <TabButton :id="tab.id" :activeTabId="activeTabId" />
    </router-link> -->
    <Icon
      icon="carbon:add-filled"
      :color="plusIconColor"
      class="w-6 h-6 mt-2 cursor-pointer"
      @click="createNewTab()"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabButton from "./TabButton.vue";
import { Icon } from "@iconify/vue";
import { useStore } from "../../store";
import { TabsMutationType } from "../../store/modules/tabs/types";

const store = useStore();

export default defineComponent({
  name: "SideBar",
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
      // console.log("TabInfo", store.getters["getTabInfo"]);
      return store.getters["getTabInfo"];
    },
  },
  data() {
    return {
      plusIconColor: "#809DE5",
    };
  },
  methods: {
    changeTab(tabId: number) {
      // console.log("changeTab: ", tabId);
      store.commit(TabsMutationType.CHANGE_TAB, tabId);
    },
    createNewTab() {
      store.commit(TabsMutationType.OPEN_NEW_TAB);
    },
  },
  components: {
    Icon,
    TabButton,
  },
});
</script>

<style scoped></style>
