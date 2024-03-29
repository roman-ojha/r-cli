import { GetterTree } from "vuex";
import { RootState } from "../../types";
import { TabsState, Getters } from "./types";

const tabsGetters: GetterTree<TabsState, RootState> & Getters = {
  activeTabId: (state: TabsState) => state.activeTabId,
  numberOfTab: (state: TabsState) => state.tabs.length,
  getCurrentTabTitle: (state: TabsState) => {
    return state.tabs[state.activeTabIndex].name;
  },
  getCurrentTabInfo: (state: TabsState) => state.tabs[state.activeTabIndex],
  getTabInfo: (state: TabsState) => state.tabs,
};

export default tabsGetters;
