<template>
  <div
    id="container"
    class="w-side-bar bg-black h-side-bar flex flex-col justify-start items-center py-2"
  >
    <TabButton
      v-for="i in numberOfTabs"
      :id="i"
      :selectedTab="selectedTab"
      :key="i"
      @click="changeTab(i)"
    />
    <Icon
      icon="carbon:add-filled"
      :color="plusIconColor"
      class="w-6 h-6 mt-2 cursor-pointer"
      @click="
        createNewTab({ name: `R-CLI ${numberOfTabs + 1}`, location: 'cloud' })
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabButton from "./TabButton.vue";
import { Icon } from "@iconify/vue";
import { useStore } from "../../store";
import {
  TabsMutationType,
  Tab as TabType,
} from "../../store/modules/tabs/types";

const store = useStore();

export default defineComponent({
  name: "SideBar",
  computed: {
    selectedTab() {
      return store.getters["activeTab"];
    },
    numberOfTabs() {
      return store.getters["numberOfTab"];
    },
  },
  data() {
    return {
      plusIconColor: "#809DE5",
    };
  },
  methods: {
    changeTab(tabNo: number) {
      store.commit(TabsMutationType.CHANGE_TAB, tabNo);
    },
    createNewTab(newTabData: TabType) {
      store.commit(TabsMutationType.OPEN_NEW_TAB, newTabData);
    },
  },
  components: {
    Icon,
    TabButton,
  },
});
</script>

<style scoped></style>
