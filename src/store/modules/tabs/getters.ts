import { GetterTree } from "vuex";
import { RootState } from "../../types";
import { TabsState, Getters } from "./types";

const tabsGetters: GetterTree<TabsState, RootState> & Getters = {
  activeTab: (state: TabsState) => state.activeTab,
  numberOfTab: (state: TabsState) => state.numberOfTabs,
  getTabTitle: (state: TabsState) => state.tabs[state.activeTab - 1].name,
};

export default tabsGetters;
